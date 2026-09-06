import React, { useMemo, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import Footer from '../components/Footer';
import './PetSite.css';

type Product = {
  id: string;
  name: string;
  category: string;
  price: number;
  description: string;
  image: string;
  badge?: string;
};

const products: Product[] = [
  { id: 'walk-kit', name: 'Everyday walk kit', category: 'Walk', price: 48, description: 'A soft, sturdy lead and waste-bag holder for better walks.', image: 'https://images.unsplash.com/photo-1558788353-f76d92427f16?auto=format&fit=crop&w=900&q=85', badge: 'Best seller' },
  { id: 'cloud-bed', name: 'Cloud nap bed', category: 'Home', price: 84, description: 'A deeply comfortable place to stretch out and switch off.', image: 'https://images.unsplash.com/photo-1541781774459-bb2af2f05b55?auto=format&fit=crop&w=900&q=85' },
  { id: 'treat-tin', name: 'Good mood treats', category: 'Treats', price: 18, description: 'Small-batch, oven-baked rewards made with real ingredients.', image: 'https://images.unsplash.com/photo-1582798358481-d199fb7347bb?auto=format&fit=crop&w=900&q=85', badge: 'New' },
  { id: 'raincoat', name: 'Good weather raincoat', category: 'Walk', price: 56, description: 'Lightweight coverage for damp park days and muddy detours.', image: 'https://images.unsplash.com/photo-1583337130417-3346a1be7dee?auto=format&fit=crop&w=900&q=85' },
  { id: 'toy-bundle', name: 'Three-play toy bundle', category: 'Play', price: 26, description: 'Three durable textures for tugging, chasing, and chewing.', image: 'https://images.unsplash.com/photo-1530281700549-e82e7bf110d6?auto=format&fit=crop&w=900&q=85' },
  { id: 'soft-collar', name: 'Soft everyday collar', category: 'Walk', price: 24, description: 'A comfortable, adjustable collar in a calm palette.', image: 'https://images.unsplash.com/photo-1583337130417-3346a1be7dee?auto=format&fit=crop&w=900&q=85', badge: 'New' },
  { id: 'cozy-blanket', name: 'Cozy sofa blanket', category: 'Home', price: 46, description: 'A washable layer for naps, car rides, and sofa cuddles.', image: 'https://images.unsplash.com/photo-1551717743-49959800b1f6?auto=format&fit=crop&w=900&q=85' },
  { id: 'snuffle-mat', name: 'Slow-feast snuffle mat', category: 'Play', price: 34, description: 'A playful way to turn treat time into enriching time.', image: 'https://images.unsplash.com/photo-1583511655857-d19b40a7a54e?auto=format&fit=crop&w=900&q=85' }
];

const navItems = [
  { label: 'Shop all', path: '/products-services' },
  { label: 'Our pack', path: '/contributors' },
  { label: 'Our story', path: '/about' },
  { label: 'Contact', path: '/contact' }
];

const PetSite: React.FC = () => {
  const { pathname, search } = useLocation();
  const navigate = useNavigate();
  const [menuOpen, setMenuOpen] = useState(false);
  const [cart, setCart] = useState<string[]>([]);
  const [announcementIndex, setAnnouncementIndex] = useState(0);
  const category = new URLSearchParams(search).get('category');
  const filteredProducts = category ? products.filter(product => product.category === category) : products;
  const cartProducts = cart.map(id => products.find(product => product.id === id)).filter(Boolean) as Product[];
  const cartTotal = cartProducts.reduce((total, product) => total + product.price, 0);
  const cartCount = cart.length;
  const announcements = ['Free shipping on orders over $75', 'New: good things for rainy days', 'Made thoughtfully for better humans'];

  React.useEffect(() => {
    const timer = window.setInterval(() => setAnnouncementIndex(index => (index + 1) % announcements.length), 3500);
    return () => window.clearInterval(timer);
  }, [announcements.length]);

  const addToCart = (product: Product) => setCart(current => [...current, product.id]);
  const removeFromCart = (index: number) => setCart(current => current.filter((_, itemIndex) => itemIndex !== index));
  const go = (path: string) => { navigate(path); setMenuOpen(false); };

  const page = useMemo(() => {
    if (pathname === '/') return 'home';
    if (pathname === '/products-services') return 'shop';
    if (pathname === '/about') return 'story';
    if (pathname === '/contributors') return 'pack';
    if (pathname === '/contact') return 'contact';
    if (pathname === '/cart') return 'cart';
    return 'home';
  }, [pathname]);

  return (
    <div className="pet-site">
      <div className="pet-announcement" aria-live="polite"><span>✦</span> {announcements[announcementIndex]} <span>✦</span></div>
      <header className="pet-nav">
        <button className="pet-menu" aria-label="Toggle menu" onClick={() => setMenuOpen(open => !open)}><span /><span /><span /></button>
        <button className="pet-logo" onClick={() => go('/')}>better <i>humans</i></button>
        <nav className={menuOpen ? 'pet-links is-open' : 'pet-links'}>
          {navItems.map(item => <button key={item.label} className="pet-nav-link" onClick={() => go(item.path)}>{item.label}</button>)}
        </nav>
        <button className="pet-bag" aria-label={`Shopping bag with ${cartCount} items`} onClick={() => go('/cart')}><span className="pet-bag-icon">□</span> Bag <b>{cartCount}</b></button>
      </header>

      {page === 'home' && <HomePage onShop={() => go('/products-services')} />}
      {page === 'shop' && <ShopPage products={filteredProducts} category={category} onAdd={addToCart} />}
      {page === 'story' && <StoryPage onShop={() => go('/products-services')} />}
      {page === 'pack' && <PackPage onContact={() => go('/contact')} />}
      {page === 'contact' && <ContactPage />}
      {page === 'cart' && <CartPage products={cartProducts} total={cartTotal} onRemove={removeFromCart} onShop={() => go('/products-services')} />}
      <nav className="pet-mobile-nav" aria-label="Mobile navigation">
        {navItems.map(item => <button key={item.label} className={pathname === item.path ? 'active' : ''} onClick={() => go(item.path)}><span>{item.label === 'Shop all' ? '▦' : item.label === 'Our pack' ? '♡' : item.label === 'Our story' ? '✦' : '↗'}</span>{item.label}</button>)}
      </nav>
      <Footer />
    </div>
  );
};

const HomePage = ({ onShop }: { onShop: () => void }) => (
  <>
    <section className="pet-hero"><div className="pet-hero__copy"><p className="pet-kicker">For pets. For people. For the good stuff.</p><h1>Better things<br /><i>for better humans.</i></h1><p className="pet-lede">Thoughtfully made essentials for the everyday life you share with your best friend.</p><button className="pet-button" onClick={onShop}>Shop the collection <span>↗</span></button></div><div className="pet-hero__image"><img src="https://images.unsplash.com/photo-1552053831-71594a27632d?auto=format&fit=crop&w=1400&q=90" alt="Golden retriever sitting in a sunny field" /><span className="pet-image-note">Made for the everyday adventure</span></div></section>
    <section className="pet-intro"><p className="pet-kicker">A better kind of pet shop</p><h2>Small moments.<br /><i>Big love.</i></h2><p>We believe the best products are the ones that quietly make life together better. Useful, beautiful, and made to be part of the routine.</p></section>
    <section className="pet-home-cta"><p className="pet-kicker">Ready for better everyday things?</p><h2>Find their next<br /><i>favourite thing.</i></h2><button className="pet-button" onClick={onShop}>Shop all products <span>↗</span></button></section>
    <Reviews />
    <Faq />
  </>
);

const Reviews = () => {
  const reviews = [
    { quote: 'The walk kit is beautiful, sturdy, and somehow makes our chaotic morning walks feel more put together.', name: 'Maya & Olive', detail: 'Verified Better Humans customer' },
    { quote: 'Everything feels considered. The bed looks lovely in our living room and our dog moved into it immediately.', name: 'Sam & Pippin', detail: 'Verified Better Humans customer' },
    { quote: 'Fast delivery, thoughtful packaging, and treats my very fussy spaniel actually loves. We will be back.', name: 'Jess & Miso', detail: 'Verified Better Humans customer' }
  ];
  const [activeReview, setActiveReview] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  React.useEffect(() => {
    if (isPaused) return undefined;
    const timer = window.setInterval(() => setActiveReview(index => (index + 1) % reviews.length), 5000);
    return () => window.clearInterval(timer);
  }, [isPaused, reviews.length]);

  const selectReview = (index: number) => setActiveReview(index);
  const review = reviews[activeReview];

  return <section className="pet-reviews" aria-labelledby="reviews-heading" onMouseEnter={() => setIsPaused(true)} onMouseLeave={() => setIsPaused(false)} onFocus={() => setIsPaused(true)} onBlur={() => setIsPaused(false)}>
    <div className="pet-reviews__intro"><p className="pet-kicker">Good words from good people</p><h2 id="reviews-heading">Loved by<br /><i>better humans.</i></h2><span className="pet-reviews__count">{String(activeReview + 1).padStart(2, '0')} / {String(reviews.length).padStart(2, '0')}</span></div>
    <div className="pet-reviews__content"><blockquote>“{review.quote}”</blockquote><p className="pet-reviews__name">{review.name}</p><p className="pet-reviews__detail">{review.detail}</p><div className="pet-reviews__controls"><button aria-label="Previous review" onClick={() => selectReview((activeReview - 1 + reviews.length) % reviews.length)}>←</button>{reviews.map((item, index) => <button key={item.name} aria-label={`Show review from ${item.name}`} className={index === activeReview ? 'active' : ''} onClick={() => selectReview(index)} />)}<button aria-label="Next review" onClick={() => selectReview((activeReview + 1) % reviews.length)}>→</button></div></div>
  </section>;
};

const Faq = () => {
  const [open, setOpen] = useState(0);
  const questions = [
    ['How quickly will my order arrive?', 'Most orders leave our studio within two business days and arrive in 3–5 business days.'],
    ['Can I return something if it is not right?', 'Absolutely. Send it back within 30 days, unused and in its original condition, and we will help make it right.'],
    ['How do you choose your products?', 'Every piece is reviewed for comfort, usefulness, durability, and how naturally it fits into a real home.']
  ];
  return <section className="pet-faq"><div><p className="pet-kicker">A little help</p><h2>Good questions<br /><i>deserve good answers.</i></h2></div><div className="pet-faq-list">{questions.map(([question, answer], index) => <div className={`pet-faq-item ${open === index ? 'open' : ''}`} key={question}><button onClick={() => setOpen(open === index ? -1 : index)}><span>{question}</span><b>{open === index ? '−' : '+'}</b></button>{open === index && <p>{answer}</p>}</div>)}</div></section>;
};

const ShopPage = ({ products: visibleProducts, category, onAdd }: { products: Product[]; category: string | null; onAdd: (product: Product) => void }) => <><PageHero eyebrow="The shop" title={category ? `${category} essentials` : 'Everything they need\nfor a good day.'} /><section className="pet-shop-list"><div className="pet-shop-toolbar"><p>{visibleProducts.length} products</p><div>{['All', 'Walk', 'Home', 'Play', 'Treats'].map(option => <a className={(!category && option === 'All') || category === option ? 'active' : ''} href={option === 'All' ? '/products-services' : `/products-services?category=${option}`} key={option}>{option}</a>)}</div></div><div className="pet-product-grid pet-product-grid--shop">{visibleProducts.map(product => <ProductCard key={product.id} product={product} onAdd={onAdd} />)}</div></section></>;

const ProductCard = ({ product, onAdd }: { product: Product; onAdd: (product: Product) => void }) => <article className="pet-product"><div className="pet-product__image"><img src={product.image} alt={product.name} />{product.badge && <span className="pet-product__badge">{product.badge}</span>}<button className="pet-add" onClick={() => onAdd(product)}>+ Add to bag</button></div><span className="pet-product__type">{product.category}</span><h3>{product.name}</h3><p>{product.description}</p><strong>${product.price}</strong></article>;

const StoryPage = ({ onShop }: { onShop: () => void }) => <><PageHero eyebrow="Our story" title="Better living starts\nwith better choices." /><section className="pet-long-copy"><p className="pet-kicker">Why Better Humans exists</p><h2>For the love<br /><i>of everyday life.</i></h2><div><p>Better Humans began with a simple question: why should pet products be either practical or beautiful? We set out to make things that do both.</p><p>Every piece in our collection earns its place through comfort, function, and a considered point of view. Because your home is their home, too.</p><button className="pet-button" onClick={onShop}>Meet the collection <span>↗</span></button></div></section><section className="pet-values"><div><b>01</b><h3>Thoughtful by design</h3><p>Every detail has a reason, from the easy-clean bowl to the lead that sits comfortably in your hand.</p></div><div><b>02</b><h3>Made to last</h3><p>We favour durable materials and timeless shapes over things that need replacing next season.</p></div><div><b>03</b><h3>Good all around</h3><p>Better for your pet, your home, and the small makers and materials behind every product.</p></div></section></>;

const PackPage = ({ onContact }: { onContact: () => void }) => <><PageHero eyebrow="The pack" title="A small team\nwith big feelings." /><section className="pet-pack"><div className="pet-pack__image"><img src="https://images.unsplash.com/photo-1548199973-03cce0bbc87b?auto=format&fit=crop&w=1200&q=85" alt="Two dogs enjoying time together" /></div><div><p className="pet-kicker">Human, animal, and product people</p><h2>We are here for<br /><i>the good days.</i></h2><p>We are a small, animal-obsessed team of makers, walkers, and lifelong pet people. We test everything at home, on the sofa, and on the park path before it earns a place in the shop.</p><button className="pet-button" onClick={onContact}>Say hello <span>↗</span></button></div></section></>;

const ContactPage = () => <><PageHero eyebrow="Come say hello" title="Questions are\nalways welcome." /><section className="pet-contact"><div><p className="pet-kicker">We would love to hear from you</p><h2>Let’s talk<br /><i>pets.</i></h2><p>Need help choosing something, tracking an order, or just want to share a good dog story? Send us a note.</p><a href="mailto:hello@betterhumans.pet" className="pet-text-link">hello@betterhumans.pet ↗</a></div><form onSubmit={event => event.preventDefault()}><label>Name<input type="text" placeholder="Your name" required /></label><label>Email<input type="email" placeholder="you@example.com" required /></label><label>Message<textarea rows={5} placeholder="How can we help?" required /></label><button className="pet-button" type="submit">Send message <span>↗</span></button></form></section></>;

const CartPage = ({ products: cartProducts, total, onRemove, onShop }: { products: Product[]; total: number; onRemove: (index: number) => void; onShop: () => void }) => <><PageHero eyebrow="Your bag" title={cartProducts.length ? 'Good things are\ncoming home.' : 'Your bag is\nwaiting patiently.'} /><section className="pet-cart">{cartProducts.length ? <><div className="pet-cart-items">{cartProducts.map((product, index) => <div className="pet-cart-item" key={`${product.id}-${index}`}><img src={product.image} alt={product.name} /><div><span>{product.category}</span><h3>{product.name}</h3><p>${product.price}</p></div><button onClick={() => onRemove(index)}>Remove</button></div>)}</div><aside><p>Subtotal <strong>${total}</strong></p><small>Shipping calculated at checkout.</small><button className="pet-button" onClick={() => alert('Checkout is coming soon.')}>Checkout <span>↗</span></button></aside></> : <div className="pet-empty"><p>Nothing here yet, but we know a few things they would love.</p><button className="pet-button" onClick={onShop}>Start shopping <span>↗</span></button></div>}</section></>;

const PageHero = ({ title, eyebrow }: { title: string; eyebrow: string }) => <section className="pet-page-hero"><p className="pet-kicker">{eyebrow}</p><h1>{title.split('\n').map((line, index) => <React.Fragment key={line}>{index > 0 && <br />}<i>{line}</i></React.Fragment>)}</h1></section>;

export default PetSite;
