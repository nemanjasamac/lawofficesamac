import { useState, useEffect, useRef } from 'react';

function AboutUs() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);
  
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.1 }
    );
    
    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }
    
    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  return (
    <section id="o-nama" ref={sectionRef} className="py-24 relative overflow-hidden bg-bg-primary">
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-20 left-10 w-80 h-80 border border-accent/5 rounded-full transform -rotate-45"></div>
        <div className="absolute top-40 right-10 w-20 h-20 bg-accent/5 rounded-full blur-xl"></div>
      </div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <div className={`inline-flex items-center space-x-3 mb-4 transition-all duration-700 ${isVisible ? 'opacity-100' : 'opacity-0'}`}>
            <div className="h-px w-6 bg-accent"></div>
            <span className="text-accent text-sm uppercase tracking-wider font-medium">O nama</span>
            <div className="h-px w-6 bg-accent"></div>
          </div>
          <h2 className={`text-3xl md:text-4xl lg:text-5xl font-bold mb-6 transition-all duration-700 delay-100 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
          }`}>
            <span className="text-text-primary">Iskusni pravni</span>
            <span className="text-accent"> savetnici</span>
          </h2>
          <p className={`text-text-secondary text-lg max-w-3xl mx-auto transition-all duration-700 delay-200 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
          }`}>
            Sa višegodišnjim iskustvom, naša advokatska kancelarija pruža pravno zastupanje 
            najvišeg kvaliteta, personalizovani pristup i posvećenost svakom klijentu.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <div className={`relative transition-all duration-1000 delay-300 ${
            isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-8'
          }`}>
            <div className="relative z-10">
              <div className="relative rounded-lg overflow-hidden shadow-xl">
                <div className="absolute inset-0 bg-gradient-to-tr from-accent/20 to-transparent mix-blend-overlay"></div>
                <img 
                  src="/images/law-office.jpg" 
                  alt="Advokatska kancelarija Samac & saradnici" 
                  className="w-full h-full object-cover"
                />
              </div>
              
              <div className="absolute -bottom-6 -right-6 bg-bg-light/30 backdrop-blur-md p-5 rounded-lg border border-border/30 shadow-xl w-44">
                <div className="flex flex-col space-y-3">
                  <div className="flex items-center space-x-2">
                    <div className="w-8 h-8 rounded-full bg-accent/20 flex items-center justify-center">
                      <svg className="w-4 h-4 text-accent" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M13 6a3 3 0 11-6 0 3 3 0 016 0zM18 8a2 2 0 11-4 0 2 2 0 014 0zM14 15a4 4 0 00-8 0v3h8v-3zM6 8a2 2 0 11-4 0 2 2 0 014 0zM16 18v-3a5.972 5.972 0 00-.75-2.906A3.005 3.005 0 0119 15v3h-3zM4.75 12.094A5.973 5.973 0 004 15v3H1v-3a3 3 0 013.75-2.906z"></path>
                      </svg>
                    </div>
                    <div>
                      <div className="text-xs text-text-secondary">Advokata</div>
                      <div className="text-lg font-bold text-text-primary">3+</div>
                    </div>
                  </div>
                  <div className="flex items-center space-x-2">
                    <div className="w-8 h-8 rounded-full bg-accent/20 flex items-center justify-center">
                      <svg className="w-4 h-4 text-accent" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z" clipRule="evenodd"></path>
                      </svg>
                    </div>
                    <div>
                      <div className="text-xs text-text-secondary">Godina rada</div>
                      <div className="text-lg font-bold text-text-primary">10+</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="absolute -top-6 -left-6 w-full h-full border-2 border-accent/20 rounded-lg -z-10"></div>
            <div className="absolute -bottom-4 -right-4 w-32 h-32 bg-accent/5 rounded-full blur-2xl -z-10"></div>
          </div>
          
          <div className={`flex flex-col space-y-8 transition-all duration-1000 delay-500 ${
            isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-8'
          }`}>
            <h3 className="text-2xl font-bold text-text-primary">Naša priča</h3>
            <p className="text-text-secondary leading-relaxed">
              Advokatska kancelarija Samac osnovana je 2010. godine sa misijom pružanja pravnih usluga visokog kvaliteta. 
              Počeli smo kao mala kancelarija sa fokusom na privredno pravo, a danas smo prepoznati po stručnosti u više oblasti prava.
            </p>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <FeatureCard 
                icon={<svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"></path></svg>}
                title="Vrednosti"
                text="Integritet, stručnost i posvećenost su vrednosti na kojima temeljimo naš rad."
              />
              <FeatureCard 
                icon={<svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path></svg>}
                title="Pristup"
                text="Proaktivan pristup i efikasna komunikacija za najbolje rezultate."
              />
            </div>
            
            <blockquote className="relative border-l-4 border-accent pl-4 italic text-text-secondary">
              <svg className="absolute -top-2 -left-2 w-8 h-8 text-accent/20" fill="currentColor" viewBox="0 0 32 32">
                <path d="M9.352 4C4.456 7.456 1 13.12 1 19.36c0 5.088 3.072 8.064 6.624 8.064 3.36 0 5.856-2.688 5.856-5.856 0-3.168-2.208-5.472-5.088-5.472-.576 0-1.344.096-1.536.192.48-3.264 3.552-7.104 6.624-9.024L9.352 4zm16.512 0c-4.8 3.456-8.256 9.12-8.256 15.36 0 5.088 3.072 8.064 6.624 8.064 3.264 0 5.856-2.688 5.856-5.856 0-3.168-2.304-5.472-5.184-5.472-.576 0-1.248.096-1.44.192.48-3.264 3.456-7.104 6.528-9.024L25.864 4z" />
              </svg>
              <p className="text-lg">
                Naš cilj je da budemo više od pravnog zastupnika - mi smo vaš partner u pronalaženju najboljih rešenja za vaše pravne izazove.
              </p>
              <footer className="mt-2 text-sm font-semibold text-accent">
                — Nadja Samac, Osnivač
              </footer>
            </blockquote>
            
            <div className="pt-4">
              <a 
                href="/nas-tim" 
                className="group flex items-center text-accent font-medium transition-all duration-300"
              >
                <span>Upoznajte naš tim</span>
                <svg className="w-5 h-5 ml-2 transform group-hover:translate-x-1 transition-transform duration-200" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
                </svg>
              </a>
            </div>
          </div>
        </div>
        
        <div className={`mt-24 grid md:grid-cols-3 gap-8 transition-all duration-1000 delay-700 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        }`}>
          <ValueCard 
            number="01"
            title="Personalizovani pristup"
            description="Svaki klijent i pravni slučaj su jedinstveni. Mi prilagođavamo naše usluge vašim specifičnim potrebama."
          />
          <ValueCard 
            number="02"
            title="Transparentnost i poverenje"
            description="Otvoreno komuniciramo o svim aspektima vašeg slučaja, uključujući troškove i očekivane ishode."
          />
          <ValueCard 
            number="03"
            title="Kontinuirana dostupnost"
            description="Vaš advokat je uvek dostupan za konsultacije i pitanja tokom celog procesa."
          />
        </div>
      </div>
    </section>
  );
}

function FeatureCard({ icon, title, text }) {
  return (
    <div className="p-5 rounded-lg bg-bg-light/10 hover:bg-bg-light/20 transition-all duration-300 hover:shadow-lg hover:shadow-accent/5">
      <div className="text-accent mb-3">{icon}</div>
      <h4 className="text-lg font-semibold text-text-primary mb-2">{title}</h4>
      <p className="text-text-secondary text-sm">{text}</p>
    </div>
  );
}

function ValueCard({ number, title, description }) {
  return (
    <div className="p-6 rounded-lg border border-border/20 hover:border-accent/20 transition-all duration-300 relative group">
      <span className="absolute -top-5 -left-1 text-4xl font-bold text-accent/10 group-hover:text-accent/20 transition-colors duration-300">{number}</span>
      <h3 className="text-xl font-bold text-text-primary mb-3 group-hover:text-accent transition-colors duration-300">{title}</h3>
      <p className="text-text-secondary">{description}</p>
    </div>
  );
}

export default AboutUs;