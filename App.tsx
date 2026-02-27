import React, { useState, useEffect } from 'react';
import { CONTENT } from './constants';
import { DefensibilityScorer } from './components/DefensibilityScorer';
import { Button } from './components/Button';
import { Logo } from './components/Logo';
import { 
  Target, ChevronRight, Menu, X, CheckCircle, Shield, TrendingUp, Lock, Brain, ArrowDown, Sun, Moon, AlertTriangle
} from 'lucide-react';

// --- Types ---
type Theme = 'light' | 'dark';

// --- Components ---

const Navbar = ({ theme, toggleTheme }: { theme: Theme, toggleTheme: () => void }) => {
  const [isOpen, setIsOpen] = useState(false);
  const isDark = theme === 'dark';

  return (
    <nav className="fixed top-0 w-full z-50 bg-white/90 dark:bg-[#111111]/90 backdrop-blur-md border-b border-brand-border dark:border-brand-darkBorder transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
        <a href="#" className="block">
          <Logo theme={theme} />
        </a>
        
        <div className="hidden md:flex items-center gap-10">
          {['Strategy', 'Process', 'Value'].map((item) => (
            <a key={item} href={`#${item.toLowerCase()}`} className="text-xs font-bold text-brand-black dark:text-white hover:text-brand-red dark:hover:text-brand-red transition-colors uppercase tracking-widest">
              {item}
            </a>
          ))}
          <button 
            onClick={toggleTheme}
            className="p-2 text-brand-black dark:text-white hover:text-brand-red dark:hover:text-brand-red transition-colors"
            aria-label="Toggle theme"
          >
            {isDark ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
          </button>
          <Button variant="primary" className="py-3 px-6 text-xs">Client Portal</Button>
        </div>

        <div className="md:hidden flex items-center gap-4">
          <button 
            onClick={toggleTheme}
            className="p-2 text-brand-black dark:text-white"
          >
            {isDark ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
          </button>
          <button className="text-brand-black dark:text-white" onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>
      
       {isOpen && (
        <div className="md:hidden bg-white dark:bg-[#111111] border-b border-brand-border dark:border-brand-darkBorder p-6 flex flex-col gap-4 animate-in slide-in-from-top-5">
           {['Strategy', 'Process', 'Value'].map((item) => (
            <a key={item} href={`#${item.toLowerCase()}`} className="text-brand-black dark:text-white font-bold uppercase tracking-widest text-sm py-2 border-b border-brand-light dark:border-brand-darkBorder">
              {item}
            </a>
          ))}
        </div>
      )}
    </nav>
  );
};

const Hero = () => (
  <header className="relative min-h-screen flex items-center pt-20 bg-brand-light dark:bg-[#111111] grid-bg overflow-hidden transition-colors duration-300">
    <div className="max-w-7xl mx-auto px-6 w-full grid lg:grid-cols-12 gap-12 items-center">
      
      <div className="lg:col-span-8 relative z-10">
        <div className="mb-8 inline-block">
          <span className="text-brand-red font-bold tracking-[0.2em] uppercase text-xs border-b-2 border-brand-red pb-1">
            {CONTENT.hero.supporting}
          </span>
        </div>
        
        <h1 className="text-5xl md:text-8xl font-extrabold text-brand-black dark:text-white leading-[0.95] tracking-tight mb-8 transition-colors duration-300">
          TURN INNOVATION <br />
          INTO <span className="text-brand-red">UNFAIR</span> <br />
          <span className="text-brand-black dark:text-white transition-colors duration-300">ADVANTAGE.</span>
        </h1>
        
        <p className="text-xl md:text-2xl text-brand-gray font-normal mb-12 max-w-2xl leading-relaxed">
          {CONTENT.hero.subheadline}
        </p>
        
        <div className="flex flex-col sm:flex-row gap-6 items-start">
          <Button>{CONTENT.hero.cta}</Button>
          <button className="h-12 flex items-center gap-3 px-6 text-brand-black dark:text-white font-bold text-xs uppercase tracking-widest hover:text-brand-red dark:hover:text-brand-red transition-colors border border-brand-black dark:border-white hover:border-brand-red dark:hover:border-brand-red bg-white dark:bg-transparent">
            See Our Approach <ChevronRight className="w-4 h-4" />
          </button>
        </div>
      </div>

      {/* Abstract Architectural Graphic */}
      <div className="hidden lg:block lg:col-span-4 relative h-[600px] w-full border-l border-brand-border dark:border-brand-darkBorder transition-colors duration-300">
          <div className="absolute top-10 right-0 w-64 h-64 bg-brand-red opacity-10"></div>
          <div className="absolute top-20 right-10 w-64 h-64 border border-brand-black dark:border-white transition-colors duration-300"></div>
          <div className="absolute top-32 right-20 w-64 h-64 bg-white dark:bg-[#1A1A1A] shadow-2xl border border-brand-border dark:border-brand-darkBorder p-8 flex flex-col justify-end transition-colors duration-300">
             <Shield className="w-12 h-12 text-brand-red mb-4" />
             <p className="text-3xl font-bold text-brand-black dark:text-white">100%</p>
             <p className="text-xs uppercase tracking-widest text-brand-gray">Defensibility Focused</p>
          </div>
      </div>
    </div>
  </header>
);

const ProblemSection = () => (
  <section className="py-32 bg-white dark:bg-[#111111] transition-colors duration-300" id="strategy">
    <div className="max-w-7xl mx-auto px-6">
      <div className="grid md:grid-cols-2 gap-20">
        <div>
          <h2 className="text-4xl md:text-5xl font-extrabold text-brand-black dark:text-white mb-8 leading-tight transition-colors duration-300">
            {CONTENT.problem.title}
          </h2>
          <div className="h-2 w-24 bg-brand-red mb-8"></div>
          <p className="text-brand-gray text-lg leading-relaxed mb-10">
            {CONTENT.problem.description}
          </p>
          
          <div className="space-y-6">
             <div className="p-6 bg-brand-light dark:bg-[#1A1A1A] border-l-4 border-brand-gray transition-colors duration-300">
               <p className="text-xs text-brand-gray uppercase tracking-widest mb-2">The Old Way</p>
               <p className="text-xl font-medium text-brand-gray line-through decoration-brand-red">"I need to file a patent."</p>
             </div>
             <div className="p-6 bg-brand-black dark:bg-[#000000] border-l-4 border-brand-red text-white shadow-2xl transition-colors duration-300">
               <p className="text-xs text-brand-red uppercase tracking-widest mb-2">The Bharat IP Way</p>
               <p className="text-2xl font-bold">"I need to protect what I'm building."</p>
             </div>
          </div>
        </div>
        
        <div className="grid gap-6 content-center">
            {CONTENT.problem.points.map((point, i) => (
              <div key={i} className="flex items-start gap-6 group">
                <div className="text-4xl font-extrabold text-brand-light dark:text-[#333333] group-hover:text-brand-red transition-colors duration-300">
                  0{i + 1}
                </div>
                <div className="pt-2">
                  <p className="text-lg font-bold text-brand-black dark:text-white border-b border-brand-light dark:border-brand-darkBorder pb-4 w-full block transition-colors duration-300">
                    {point}
                  </p>
                </div>
              </div>
            ))}
        </div>
      </div>
    </div>
  </section>
);

const Differentiation = () => (
  <section className="py-32 bg-brand-light dark:bg-[#0A0A0A] border-y border-brand-border dark:border-brand-darkBorder transition-colors duration-300">
    <div className="max-w-7xl mx-auto px-6">
      <div className="mb-20 max-w-3xl">
        <h2 className="text-3xl md:text-5xl font-extrabold text-brand-black dark:text-white mb-6 transition-colors duration-300">{CONTENT.differentiation.title}</h2>
        <p className="text-xl text-brand-gray">{CONTENT.differentiation.description}</p>
      </div>
      
      <div className="grid md:grid-cols-3 gap-8">
        {CONTENT.differentiation.cards.map((card, i) => (
          <div key={i} className="bg-white dark:bg-[#161616] p-10 border border-brand-border dark:border-brand-darkBorder hover:border-brand-red dark:hover:border-brand-red transition-all duration-300 shadow-sm hover:shadow-xl group">
            <div className="mb-8 p-4 bg-brand-light dark:bg-[#000000] inline-block rounded-none group-hover:bg-brand-red group-hover:text-white transition-colors">
              {card.icon}
            </div>
            <h3 className="text-2xl font-bold text-brand-black dark:text-white mb-4 transition-colors duration-300">{card.title}</h3>
            <p className="text-brand-gray leading-relaxed">
              {card.desc}
            </p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

const Process = () => (
  <section className="py-32 bg-white dark:bg-[#111111] transition-colors duration-300" id="process">
    <div className="max-w-7xl mx-auto px-6">
      <div className="flex flex-col md:flex-row justify-between items-end mb-20 border-b-2 border-brand-black dark:border-white pb-8 transition-colors duration-300">
        <h2 className="text-4xl md:text-6xl font-extrabold text-brand-black dark:text-white uppercase leading-none transition-colors duration-300">
          The <br/> Architecture
        </h2>
        <p className="text-brand-gray font-medium max-w-sm mt-6 md:mt-0 text-right">
          A four-step protocol designed to transform technical novelty into commercial monopoly.
        </p>
      </div>
      
      <div className="grid md:grid-cols-4 gap-0">
        {CONTENT.journey.steps.map((step, i) => (
          <div key={i} className="border-r border-brand-border dark:border-brand-darkBorder last:border-r-0 pt-10 pr-10 min-h-[300px] group hover:bg-brand-light dark:hover:bg-[#1A1A1A] transition-colors p-6">
             <span className="text-xs font-bold text-brand-red uppercase tracking-widest mb-4 block">Phase {step.number}</span>
             <h3 className="text-2xl font-bold text-brand-black dark:text-white mb-6 transition-colors duration-300">{step.title}</h3>
             <p className="text-sm text-brand-gray leading-relaxed">
               {step.description}
             </p>
             <div className="mt-8 opacity-0 group-hover:opacity-100 transition-opacity">
               <ArrowDown className="w-6 h-6 text-brand-black dark:text-white" />
             </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

const BusinessValue = () => (
  <section className="py-32 bg-brand-black dark:bg-[#000000] text-white transition-colors duration-300" id="value">
    <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-24">
      <div>
         <h2 className="text-4xl md:text-5xl font-extrabold mb-12 tracking-tight">WHY DEFENCE MATTERS</h2>
         <p className="text-brand-gray text-lg mb-12 leading-relaxed max-w-md">
           We operate at the intersection of engineering and law, but we speak the language of business: Valuation, EBITDA, and Market Share.
         </p>
         <Button variant="secondary">Get Protected</Button>
      </div>
      
      <div className="grid grid-cols-1 gap-8">
        {CONTENT.businessValue.points.map((point, i) => (
          <div key={i} className="flex gap-6 border-b border-white/10 pb-8 last:border-0">
             <div className="mt-1">
               <CheckCircle className="w-6 h-6 text-brand-red fill-brand-red/20" />
             </div>
             <div>
               <h4 className="text-xl font-bold mb-2">{point.title}</h4>
               <p className="text-brand-gray text-sm">{point.desc}</p>
             </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

const RiskSection = () => (
  <section className="py-24 bg-brand-red text-white">
    <div className="max-w-4xl mx-auto px-6 text-center">
      <AlertTriangle className="w-12 h-12 mx-auto mb-6 text-white" />
      <h2 className="text-3xl md:text-5xl font-extrabold mb-6">{CONTENT.risk.title}</h2>
      <p className="text-xl md:text-2xl font-medium leading-relaxed opacity-90 mb-10">
        "{CONTENT.risk.description}"
      </p>
      <Button variant="secondary" className="bg-white text-brand-red hover:bg-brand-black hover:text-white border-transparent">
        Don't Expose Your Innovation
      </Button>
    </div>
  </section>
);

const AudienceSection = () => (
  <section className="py-32 bg-brand-light dark:bg-[#0A0A0A] transition-colors duration-300">
    <div className="max-w-7xl mx-auto px-6">
      <div className="text-center mb-16">
        <h2 className="text-3xl md:text-5xl font-extrabold text-brand-black dark:text-white mb-4">WHO WE PROTECT</h2>
        <p className="text-brand-gray">Built for the builders.</p>
      </div>
      <div className="grid md:grid-cols-4 gap-6">
        {CONTENT.audience.map((item, i) => (
          <div key={i} className="bg-white dark:bg-[#161616] p-8 border-t-4 border-brand-black dark:border-brand-gray hover:border-brand-red transition-all shadow-sm">
            <h3 className="text-xl font-bold text-brand-black dark:text-white mb-3">{item.label}</h3>
            <p className="text-sm text-brand-gray leading-relaxed">{item.description}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

const EducationSection = () => (
  <section className="py-32 bg-white dark:bg-[#111111] transition-colors duration-300">
    <div className="max-w-7xl mx-auto px-6">
      <div className="grid md:grid-cols-2 gap-16 items-center">
        <div>
          <h2 className="text-4xl font-extrabold text-brand-black dark:text-white mb-6 leading-tight">
            {CONTENT.education.title}
          </h2>
          <p className="text-lg text-brand-gray mb-8">
            {CONTENT.education.description}
          </p>
        </div>
        <div className="grid gap-6">
          {CONTENT.education.items.map((item, i) => (
             <div key={i} className="flex gap-4 p-6 bg-brand-light dark:bg-[#1A1A1A] border-l-2 border-brand-red transition-colors">
               <div className="font-bold text-brand-red whitespace-nowrap">{item.label}</div>
               <div className="text-brand-black dark:text-white font-medium text-sm">{item.text}</div>
             </div>
          ))}
        </div>
      </div>
    </div>
  </section>
);

const TrustSection = () => (
  <section className="py-24 bg-brand-black dark:bg-[#000000] border-t border-white/10 text-center transition-colors duration-300">
    <div className="max-w-4xl mx-auto px-6">
      <Shield className="w-16 h-16 text-brand-gray/20 mx-auto mb-8" />
      <h2 className="text-2xl md:text-4xl font-serif italic text-white mb-6 leading-relaxed">
        "{CONTENT.trust.title}"
      </h2>
      <p className="text-brand-gray uppercase tracking-widest text-xs font-bold">{CONTENT.trust.description}</p>
    </div>
  </section>
);

const Footer = ({ theme }: { theme: Theme }) => (
  <footer className="bg-white dark:bg-[#111111] pt-24 pb-12 border-t border-brand-border dark:border-brand-darkBorder transition-colors duration-300">
    <div className="max-w-7xl mx-auto px-6">
      <div className="grid md:grid-cols-4 gap-12 mb-20">
        <div className="col-span-1 md:col-span-2 pr-12">
          <Logo className="mb-8" theme={theme} />
          <h3 className="text-3xl font-extrabold text-brand-black dark:text-white mb-6 leading-tight transition-colors duration-300">
            We build the intellectual infrastructure for the next generation.
          </h3>
        </div>
        <div>
          <h4 className="font-bold text-brand-black dark:text-white uppercase tracking-widest text-xs mb-8">Practice Areas</h4>
          <ul className="space-y-4 text-sm font-medium text-brand-gray">
            <li className="hover:text-brand-red cursor-pointer transition-colors">Strategic Patenting</li>
            <li className="hover:text-brand-red cursor-pointer transition-colors">Freedom to Operate</li>
            <li className="hover:text-brand-red cursor-pointer transition-colors">IP Valuation</li>
            <li className="hover:text-brand-red cursor-pointer transition-colors">Defensibility Audit</li>
          </ul>
        </div>
        <div>
          <h4 className="font-bold text-brand-black dark:text-white uppercase tracking-widest text-xs mb-8">Connect</h4>
          <ul className="space-y-4 text-sm font-medium text-brand-gray">
            <li className="hover:text-brand-red cursor-pointer transition-colors">LinkedIn</li>
            <li className="hover:text-brand-red cursor-pointer transition-colors">Twitter</li>
            <li className="hover:text-brand-red cursor-pointer transition-colors">insights@bharatip.com</li>
          </ul>
        </div>
      </div>
      <div className="border-t border-brand-border dark:border-brand-darkBorder pt-8 flex flex-col md:flex-row justify-between items-center text-xs font-bold text-brand-gray/50 uppercase tracking-widest">
        <p>© 2024 Bharat IP Defence</p>
        <p>Architects of Innovation</p>
      </div>
    </div>
  </footer>
);

function App() {
  const [theme, setTheme] = useState<Theme>('light');

  const toggleTheme = () => {
    setTheme(prev => prev === 'light' ? 'dark' : 'light');
  };

  return (
    <div className={theme}>
      <div className="min-h-screen bg-white dark:bg-[#111111] text-brand-black dark:text-white selection:bg-brand-red selection:text-white font-sans transition-colors duration-300">
        <Navbar theme={theme} toggleTheme={toggleTheme} />
        <Hero />
        <ProblemSection />
        <Differentiation />
        <DefensibilityScorer />
        <Process />
        <AudienceSection />
        <BusinessValue />
        <RiskSection />
        <EducationSection />
        <TrustSection />
        
        <section className="py-40 bg-brand-light dark:bg-[#1A1A1A] text-center border-t border-brand-border dark:border-brand-darkBorder transition-colors duration-300">
          <div className="max-w-4xl mx-auto px-6">
            <h2 className="text-5xl md:text-7xl font-extrabold text-brand-black dark:text-white mb-10 tracking-tight leading-none transition-colors duration-300">
              READY TO <span className="text-brand-red">LOCK DOWN</span><br/>YOUR MARKET?
            </h2>
            <Button className="scale-125">{CONTENT.cta.button}</Button>
          </div>
        </section>

        <Footer theme={theme} />
      </div>
    </div>
  );
}

export default App;