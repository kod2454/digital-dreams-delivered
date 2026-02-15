import { Laptop, Heart, Users, Globe, ArrowRight, Sparkles, Monitor, Tablet } from "lucide-react";
import { Button } from "@/components/ui/button";
import heroImage from "@/assets/hero-children.jpg";

const Navbar = () => (
  <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-lg border-b border-border">
    <div className="container mx-auto flex items-center justify-between h-16 px-4">
      <div className="flex items-center gap-2">
        <div className="w-9 h-9 rounded-lg bg-accent flex items-center justify-center">
          <Laptop className="w-5 h-5 text-accent-foreground" />
        </div>
        <span className="font-display font-bold text-xl text-foreground">Global Spark Foundation</span>
      </div>
      <div className="hidden md:flex items-center gap-8">
        <a href="#mission" className="text-muted-foreground hover:text-foreground transition-colors text-sm font-medium">Mission</a>
        <a href="#impact" className="text-muted-foreground hover:text-foreground transition-colors text-sm font-medium">Impact</a>
        <a href="#how" className="text-muted-foreground hover:text-foreground transition-colors text-sm font-medium">How It Works</a>
      </div>
      <Button variant="hero" size="sm">
        Donate Now <Heart className="w-4 h-4" />
      </Button>
    </div>
  </nav>
);

const Hero = () => (
  <section className="relative min-h-[90vh] flex items-center overflow-hidden">
    <div className="absolute inset-0">
      <img src={heroImage} alt="Children receiving electronics" className="w-full h-full object-cover" />
      <div className="absolute inset-0" style={{ background: "var(--gradient-hero)", opacity: 0.85 }} />
    </div>
    <div className="container mx-auto px-4 relative z-10 py-32">
      <div className="max-w-2xl">
        <div className="inline-flex items-center gap-2 bg-accent/20 backdrop-blur-sm rounded-full px-4 py-1.5 mb-6 animate-fade-in">
          <Sparkles className="w-4 h-4 text-accent" />
          <span className="text-sm font-medium text-primary-foreground/90">Bridging the digital divide</span>
        </div>
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-display font-bold text-primary-foreground leading-tight mb-6 animate-fade-up">
          Every child deserves a window to the&nbsp;
          <span className="text-accent">digital world</span>
        </h1>
        <p className="text-lg md:text-xl text-primary-foreground/75 mb-10 max-w-xl animate-fade-up" style={{ animationDelay: "0.15s" }}>
          We collect, refurbish, and donate laptops, tablets, and tech to children who need them most — unlocking education and opportunity.
        </p>
        <div className="flex flex-wrap gap-4 animate-fade-up" style={{ animationDelay: "0.3s" }}>
          <Button variant="hero" size="lg">
            Donate Electronics <ArrowRight className="w-5 h-5" />
          </Button>
          <Button variant="heroOutline" size="lg">
            Learn More
          </Button>
        </div>
      </div>
    </div>
  </section>
);

const stats = [
  { value: "25,000+", label: "Devices donated", icon: Laptop },
  { value: "120+", label: "Communities served", icon: Globe },
  { value: "50,000+", label: "Children reached", icon: Users },
  { value: "98%", label: "Devices refurbished", icon: Sparkles },
];

const Stats = () => (
  <section className="py-16 bg-card border-b border-border">
    <div className="container mx-auto px-4">
      <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
        {stats.map((stat, i) => (
          <div key={i} className="text-center animate-count-up" style={{ animationDelay: `${i * 0.1}s` }}>
            <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center mx-auto mb-3">
              <stat.icon className="w-6 h-6 text-accent" />
            </div>
            <p className="text-3xl md:text-4xl font-display font-bold text-foreground">{stat.value}</p>
            <p className="text-sm text-muted-foreground mt-1">{stat.label}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

const Mission = () => (
  <section id="mission" className="py-24" style={{ background: "var(--gradient-warm)" }}>
    <div className="container mx-auto px-4">
      <div className="max-w-3xl mx-auto text-center mb-16">
        <span className="text-accent font-semibold text-sm uppercase tracking-wider">Our Mission</span>
        <h2 className="text-3xl md:text-5xl font-display font-bold text-foreground mt-3 mb-6">
          Technology should be a right, not a privilege
        </h2>
        <p className="text-lg text-muted-foreground">
          Millions of children lack access to basic technology, creating a gap in education and opportunity. Global Spark Foundation is here to change that.
        </p>
      </div>
      <div className="grid md:grid-cols-3 gap-6">
        {[
          { icon: Monitor, title: "Collect & Refurbish", desc: "We partner with businesses and individuals to collect used electronics and give them new life." },
          { icon: Heart, title: "Donate with Care", desc: "Each device is loaded with educational software and delivered directly to children in need." },
          { icon: Tablet, title: "Empower Futures", desc: "With technology in hand, children gain digital literacy skills that open doors to their future." },
        ].map((item, i) => (
          <div key={i} className="bg-card rounded-2xl p-8 shadow-[var(--shadow-card)] hover:shadow-[var(--shadow-glow)] transition-shadow duration-500 group">
            <div className="w-14 h-14 rounded-xl bg-accent/10 group-hover:bg-accent/20 transition-colors flex items-center justify-center mb-5">
              <item.icon className="w-7 h-7 text-accent" />
            </div>
            <h3 className="text-xl font-display font-semibold text-foreground mb-3">{item.title}</h3>
            <p className="text-muted-foreground leading-relaxed">{item.desc}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

const steps = [
  { step: "01", title: "You Donate", desc: "Drop off or ship your old laptops, tablets, and devices." },
  { step: "02", title: "We Refurbish", desc: "Our volunteers wipe, repair, and install educational software." },
  { step: "03", title: "Kids Receive", desc: "Devices reach children in underserved schools and communities." },
];

const HowItWorks = () => (
  <section id="how" className="py-24 bg-card">
    <div className="container mx-auto px-4">
      <div className="text-center mb-16">
        <span className="text-accent font-semibold text-sm uppercase tracking-wider">How It Works</span>
        <h2 className="text-3xl md:text-5xl font-display font-bold text-foreground mt-3">
          Three simple steps
        </h2>
      </div>
      <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
        {steps.map((s, i) => (
          <div key={i} className="relative text-center">
            <span className="text-7xl font-display font-bold text-accent/15">{s.step}</span>
            <h3 className="text-xl font-display font-semibold text-foreground -mt-4 mb-3">{s.title}</h3>
            <p className="text-muted-foreground">{s.desc}</p>
            {i < 2 && (
              <ArrowRight className="hidden md:block absolute top-10 -right-6 w-6 h-6 text-accent/30" />
            )}
          </div>
        ))}
      </div>
    </div>
  </section>
);

const CTA = () => (
  <section className="py-24 relative overflow-hidden">
    <div className="absolute inset-0" style={{ background: "var(--gradient-hero)" }} />
    <div className="container mx-auto px-4 relative z-10 text-center">
      <h2 className="text-3xl md:text-5xl font-display font-bold text-primary-foreground mb-6">
        Ready to make a difference?
      </h2>
      <p className="text-lg text-primary-foreground/70 mb-10 max-w-xl mx-auto">
        Your old device could be a child's gateway to education. Join thousands of donors who are changing lives through technology.
      </p>
      <div className="flex flex-wrap justify-center gap-4">
        <Button variant="hero" size="lg">
          Donate Now <Heart className="w-5 h-5" />
        </Button>
        <Button variant="heroOutline" size="lg">
          Volunteer With Us
        </Button>
      </div>
    </div>
  </section>
);

const Footer = () => (
  <footer className="py-12 bg-primary text-primary-foreground/60">
    <div className="container mx-auto px-4">
      <div className="flex flex-col md:flex-row items-center justify-between gap-4">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 rounded-lg bg-accent flex items-center justify-center">
            <Laptop className="w-4 h-4 text-accent-foreground" />
          </div>
          <span className="font-display font-bold text-primary-foreground">Global Spark Foundation</span>
        </div>
        <p className="text-sm">© 2026 Global Spark Foundation. All rights reserved.</p>
      </div>
    </div>
  </footer>
);

const Index = () => (
  <div className="min-h-screen">
    <Navbar />
    <Hero />
    <Stats />
    <Mission />
    <HowItWorks />
    <CTA />
    <Footer />
  </div>
);

export default Index;
