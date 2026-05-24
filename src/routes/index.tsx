import { createFileRoute } from "@tanstack/react-router";
import { Phone, Clock, Star, MapPin, Leaf, Award, Truck, ShieldCheck, ArrowRight, MessageCircle } from "lucide-react";
import heroPalm from "@/assets/hero-palm.jpg";
import productPour from "@/assets/product-pour.jpg";
import headerLogo from "@/assets/photo_2026-05-18_17-21-58.jpg";

export const Route = createFileRoute("/")({
  component: Index,
});

function Index() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Header />
      <Hero />
      <Trust />
      <About />
      <Products />
      <Process />
      <Reviews />
      <Contact />
      <Footer />
      <WhatsAppButton />
    </div>
  );
}

function WhatsAppButton() {
  const phone = "2349159651347";
  const message = encodeURIComponent(
    "Hello Crown Palm Oil! I'm interested in your red palm oil and would like more information."
  );
  return (
    <a
      href={`https://wa.me/${phone}?text=${message}`}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat with us on WhatsApp"
      className="fixed bottom-6 right-6 z-50 inline-flex items-center gap-2 rounded-full bg-[#25D366] px-5 py-3.5 font-medium text-white shadow-elevated transition hover:scale-105 hover:bg-[#1ebe5d] animate-gentle-bounce"
    >
      <MessageCircle className="h-5 w-5 fill-white" />
      <span className="hidden sm:inline">Chat on WhatsApp</span>
    </a>
  );
}

function Header() {
  return (
    <header className="absolute top-0 left-0 right-0 z-50">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-6">
        <a href="#" className="flex items-center gap-2">
          <img
            src={headerLogo}
            alt="Crowns Palm Oil logo"
            className="h-9 w-9 rounded-full object-cover"
          />
          <span className="font-serif text-lg font-semibold tracking-tight">Crowns Palm Oil</span>
        </a>
        <nav className="hidden items-center gap-8 text-sm text-muted-foreground md:flex">
          <a href="#about" className="hover:text-foreground transition">About</a>
          <a href="#products" className="hover:text-foreground transition">Products</a>
          <a href="#process" className="hover:text-foreground transition">Process</a>
          <a href="#contact" className="hover:text-foreground transition">Contact</a>
        </nav>
        <a
          href="tel:09159651347"
          className="hidden items-center gap-2 rounded-full bg-gold-gradient px-5 py-2.5 text-sm font-medium text-primary-foreground shadow-glow transition hover:opacity-90 md:inline-flex"
        >
          <Phone className="h-4 w-4" /> 0915 965 1347
        </a>
      </div>
    </header>
  );
}

function Hero() {
  return (
    <section className="relative min-h-screen overflow-hidden bg-hero-gradient grain">
      <div className="responsive-image-container">
        <img
          src={heroPalm}
          alt="Fresh red palm oil fruits"
          width={1600}
          height={1200}
          className="responsive-image"
          style={{ maskImage: "linear-gradient(to right, transparent, black 40%)" }}
        />
      </div>
      <div className="relative mx-auto flex min-h-screen max-w-7xl flex-col justify-center px-6 pt-32 pb-20">
        <div className="max-w-2xl">
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-border bg-card/40 px-4 py-1.5 text-xs font-medium uppercase tracking-widest text-accent backdrop-blur animate-on-scroll">
            <span className="h-1.5 w-1.5 rounded-full bg-accent" /> Premium Food Manufacturer
          </div>
          <h1 className="font-serif text-5xl font-bold leading-[1.05] tracking-tight md:text-7xl lg:text-8xl animate-on-scroll">
            Liquid <span className="text-gold-gradient">Gold</span><br />
            from the <span className="italic">Crown</span>.
          </h1>
          <p className="mt-8 max-w-lg text-lg text-muted-foreground md:text-xl animate-on-scroll">
            Naturally-pressed, unrefined red palm oil — milled from ripe fruit at the source.
            Rich. Aromatic. Honest.
          </p>
          <div className="mt-10 flex flex-wrap items-center gap-4 animate-on-scroll">
            <a
              href="#products"
              className="group inline-flex items-center gap-2 rounded-full bg-gold-gradient px-7 py-3.5 font-medium text-primary-foreground shadow-glow transition hover:opacity-90"
            >
              Explore our oils
              <ArrowRight className="h-4 w-4 transition group-hover:translate-x-1" />
            </a>
            <a
              href="tel:09159651347"
              className="inline-flex items-center gap-2 rounded-full border border-border bg-card/30 px-7 py-3.5 font-medium text-foreground backdrop-blur transition hover:bg-card/60"
            >
              <Phone className="h-4 w-4" /> Order by phone
            </a>
          </div>
          <div className="mt-16 flex items-center gap-6 text-sm animate-on-scroll">
            <div className="flex items-center gap-1.5">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="h-4 w-4 fill-accent text-accent" />
              ))}
            </div>
            <div className="text-muted-foreground">
              <span className="font-semibold text-foreground">5.0</span> on Google Reviews
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Trust() {
  const items = [
    { icon: Leaf, label: "100% Natural" },
    { icon: Award, label: "5-Star Rated" },
    { icon: ShieldCheck, label: "Quality Certified" },
    { icon: Truck, label: "Bulk Supply" },
  ];
  return (
    <section className="border-y border-border bg-card/30 py-8 animate-on-scroll">
      <div className="mx-auto grid max-w-7xl grid-cols-2 gap-6 px-6 md:grid-cols-4">
        {items.map(({ icon: Icon, label }) => (
          <div key={label} className="flex items-center gap-3 text-muted-foreground">
            <Icon className="h-5 w-5 text-accent" />
            <span className="text-sm font-medium">{label}</span>
          </div>
        ))}
      </div>
    </section>
  );
}

function About() {
  return (
    <section id="about" className="relative py-32">
      <div className="mx-auto grid max-w-7xl gap-16 px-6 md:grid-cols-2 md:items-center">
        <div className="relative flex justify-center">
          <div className="relative max-w-md overflow-hidden rounded-2xl border border-border bg-card p-4 shadow-elevated w-full">
            <img
              src="/photo_2026-05-18_17-22-11.jpg"
              alt="Crowns Premium Red Palm Oil Bottle"
              width={800}
              height={1000}
              loading="lazy"
              className="max-h-[500px] w-full rounded-xl object-cover zoom-on-scroll"
            />
          </div>
        </div>
        <div>
          <span className="text-xs font-medium uppercase tracking-widest text-accent animate-on-scroll">About us</span>
          <h2 className="mt-4 font-serif text-4xl font-bold leading-tight md:text-5xl animate-on-scroll">
            From our groves to your kitchen — nothing in between.
          </h2>
          <p className="mt-6 text-lg text-muted-foreground animate-on-scroll">
            Crowns Palm Oil LTD has been crafting some of the finest red palm oil in the region.
            We work directly with smallholder farmers, mill our fruit within hours of harvest,
            and bottle without additives or chemical refining.
          </p>
          <div className="mt-10 grid grid-cols-3 gap-6 animate-on-scroll">
            <Stat value="100%" label="Pure & natural" />
            <Stat value="5.0★" label="Customer rating" />
            <Stat value="24h" label="Farm to bottle" />
          </div>
        </div>
      </div>
    </section>
  );
}

function Stat({ value, label }: { value: string; label: string }) {
  return (
    <div>
      <div className="font-serif text-3xl font-bold text-gold-gradient md:text-4xl">{value}</div>
      <div className="mt-1 text-xs uppercase tracking-wider text-muted-foreground">{label}</div>
    </div>
  );
}

function Products() {
  const products = [
    { name: "Crown Reserve", desc: "Cold-pressed, unrefined red palm oil — our flagship.", size: "1L / 5L / 25L" },
    { name: "Kitchen Classic", desc: "Everyday cooking oil with rich color and aroma.", size: "500ml / 1L" },
    { name: "Bulk Industrial", desc: "Wholesale supply for restaurants and processors.", size: "200L drums" },
  ];
  return (
    <section id="products" className="relative bg-card/40 py-32 animate-on-scroll">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mb-16 flex flex-col items-start justify-between gap-6 md:flex-row md:items-end">
          <div>
            <span className="text-xs font-medium uppercase tracking-widest text-accent animate-on-scroll">Our products</span>
            <h2 className="mt-4 max-w-xl font-serif text-4xl font-bold leading-tight md:text-5xl animate-on-scroll">
              Three grades. One uncompromising standard.
            </h2>
          </div>
          <p className="max-w-sm text-muted-foreground animate-on-scroll">
            Whether you need a single bottle for the family table or industrial volume — we deliver.
          </p>
        </div>
        <div className="grid gap-6 md:grid-cols-3">
          <div className="group relative overflow-hidden rounded-2xl md:col-span-1 md:row-span-2">
            <img
              src={productPour}
              alt="Red palm oil being poured"
              width={1200}
              height={1400}
              loading="lazy"
              className="h-full w-full object-cover transition duration-700 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-fade-gradient" />
            <div className="absolute bottom-0 left-0 right-0 p-8">
              <div className="text-xs uppercase tracking-widest text-accent animate-on-scroll">Featured</div>
              <div className="mt-2 font-serif text-2xl font-bold animate-on-scroll">The Crown Pour</div>
            </div>
          </div>
          {products.map((p) => (
            <div
              key={p.name}
              className="group relative overflow-hidden rounded-2xl border border-border bg-card p-8 transition hover:border-accent/50 hover:shadow-glow md:col-span-2 md:row-span-1 md:p-10 animate-on-scroll"
            >
              <div className="flex items-start justify-between gap-6">
                <div>
                  <h3 className="font-serif text-2xl font-bold md:text-3xl animate-on-scroll">{p.name}</h3>
                  <p className="mt-3 text-muted-foreground animate-on-scroll">{p.desc}</p>
                  <div className="mt-4 text-sm text-accent animate-on-scroll">{p.size}</div>
                </div>
                <ArrowRight className="h-5 w-5 shrink-0 text-muted-foreground transition group-hover:translate-x-1 group-hover:text-accent" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Process() {
  const steps = [
    { n: "01", t: "Harvest", d: "Ripe fruit bunches picked by hand at peak color." },
    { n: "02", t: "Mill", d: "Steamed and pressed within 24 hours to lock in nutrients." },
    { n: "03", t: "Filter", d: "Naturally settled and filtered — never chemically refined." },
    { n: "04", t: "Bottle", d: "Sealed at source for unmatched freshness and flavor." },
  ];
  return (
    <section id="process" className="py-32 animate-on-scroll">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mb-16 max-w-2xl">
          <span className="text-xs font-medium uppercase tracking-widest text-accent animate-on-scroll">Our process</span>
          <h2 className="mt-4 font-serif text-4xl font-bold leading-tight md:text-5xl animate-on-scroll">
            Four steps. Zero shortcuts.
          </h2>
        </div>
        <div className="grid gap-px overflow-hidden rounded-2xl border border-border bg-border md:grid-cols-4">
          {steps.map((s) => (
            <div key={s.n} className="bg-background p-8 animate-on-scroll">
              <div className="font-serif text-5xl font-bold text-gold-gradient animate-on-scroll">{s.n}</div>
              <h3 className="mt-6 font-serif text-xl font-bold animate-on-scroll">{s.t}</h3>
              <p className="mt-2 text-sm text-muted-foreground animate-on-scroll">{s.d}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Reviews() {
  return (
    <section className="bg-card/40 py-32 animate-on-scroll">
      <div className="mx-auto max-w-3xl px-6 text-center">
        <div className="mb-6 inline-flex items-center gap-1.5 animate-on-scroll">
          {[...Array(5)].map((_, i) => (
            <Star key={i} className="h-6 w-6 fill-accent text-accent" />
          ))}
        </div>
        <blockquote className="font-serif text-3xl font-medium leading-tight md:text-4xl animate-on-scroll">
          "Truly the finest red palm oil — rich, fragrant, and unmistakably pure.
          Crown Palm Oil sets the standard."
        </blockquote>
        <div className="mt-8 text-sm uppercase tracking-widest text-muted-foreground animate-on-scroll">
          Verified Google Review · 5.0
        </div>
      </div>
    </section>
  );
}

function Contact() {
  return (
    <section id="contact" className="py-32 animate-on-scroll">
      <div className="mx-auto max-w-5xl px-6">
        <div className="overflow-hidden rounded-3xl border border-border bg-card p-10 shadow-elevated md:p-16">
          <div className="grid gap-12 md:grid-cols-2">
            <div>
              <span className="text-xs font-medium uppercase tracking-widest text-accent animate-on-scroll">Get in touch</span>
              <h2 className="mt-4 font-serif text-4xl font-bold leading-tight md:text-5xl animate-on-scroll">
                Place an order or request a quote.
              </h2>
              <p className="mt-6 text-muted-foreground animate-on-scroll">
                Whether you're a household, retailer, restaurant, or processor — we're ready
                to supply you with premium red palm oil at scale.
              </p>
            </div>
            <div className="space-y-6">
              <ContactRow icon={Phone} title="Call us" value="0915 965 1347" href="tel:09159651347" />
              <ContactRow icon={Clock} title="Hours" value="Open 24/7" />
              <ContactRow icon={MapPin} title="Visit" value="Crown Palm Oil LTD" />
              <a
                href="tel:09159651347"
                className="mt-4 inline-flex w-full items-center justify-center gap-2 rounded-full bg-gold-gradient px-7 py-4 font-medium text-primary-foreground shadow-glow transition hover:opacity-90 animate-on-scroll"
              >
                <Phone className="h-4 w-4" /> Call now
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function ContactRow({
  icon: Icon,
  title,
  value,
  href,
}: {
  icon: typeof Phone;
  title: string;
  value: string;
  href?: string;
}) {
  const content = (
    <div className="flex items-start gap-4">
      <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-border bg-background">
        <Icon className="h-4 w-4 text-accent" />
      </div>
      <div>
        <div className="text-xs uppercase tracking-widest text-muted-foreground">{title}</div>
        <div className="mt-1 font-medium">{value}</div>
      </div>
    </div>
  );
  return href ? <a href={href} className="block transition hover:opacity-80">{content}</a> : content;
}

function Footer() {
  return (
    <footer className="border-t border-border py-10 animate-on-scroll">
      <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 px-6 text-sm text-muted-foreground md:flex-row">
        <div className="flex items-center gap-2">
          <div className="flex h-7 w-7 items-center justify-center rounded-full bg-gold-gradient text-xs font-bold text-primary-foreground">C</div>
          <span>© {new Date().getFullYear()} Crown Palm Oil LTD</span>
        </div>
        <div>Food manufacturer · Naturally crafted</div>
      </div>
    </footer>
  );
}

