import { useState, useEffect } from 'react';

function Hero() {
  const [isVisible, setIsVisible] = useState(false);
  const [activeIndex, setActiveIndex] = useState(0);
  const headlines = [
    "Stručnost.",
    "Posvećenost.",
    "Rezultati."
  ];
  
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 100);
    
    return () => clearTimeout(timer);
  }, []);
  
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((current) => (current + 1) % headlines.length);
    }, 3000);
    
    return () => clearInterval(interval);
  }, []);

  const clientLogos = [
    { name: "Duos Asinos Consulting", logo: "/images/clients/client1.png", alt: "Duos Asinos Consulting" },
    { name: "Generali Srbija", logo: "/images/clients/client2.jpg", alt: "Generali osiguranje" },
    { name: "Milenijum osiguranje", logo: "/images/clients/client3.png", alt: "Milenijum osiguranje" },
    { name: "Globos osiguranje", logo: "/images/clients/client4.jpg", alt: "Globos osiguranje" }
  ];

  return (
    <section className="relative h-screen flex items-center overflow-hidden">
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-bg-secondary/80 backdrop-blur-sm"></div>
        <div className="absolute inset-0 bg-gradient-to-b from-bg-primary via-transparent to-bg-primary opacity-90"></div>
        
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 border border-accent/5 rounded-full transform translate-x-1/2 translate-y-1/2"></div>
        <div className="absolute top-1/3 right-1/3 w-32 h-32 bg-accent/5 rounded-full blur-3xl animate-float"></div>
      </div>
      
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className={`transform transition-all duration-1000 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
            <div className="flex items-center space-x-3 mb-6">
              <div className="h-px w-12 bg-accent"></div>
              <span className="text-accent font-medium tracking-wider">Advokatska kancelarija</span>
              <div className="h-px w-12 bg-accent"></div>
            </div>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight text-text-primary mb-8">
              {headlines.map((headline, index) => (
                <span key={index} className={`block transition-all duration-700 ${
                  index === activeIndex 
                    ? 'opacity-100 translate-x-0' 
                    : 'absolute opacity-0 -translate-x-4'
                } ${index === headlines.length - 1 ? 'text-accent' : ''}`}>
                  {headline}
                </span>
              ))}
            </h1>
            
            <p className="text-text-secondary text-lg md:text-xl mb-8 max-w-lg leading-relaxed">
              Naša kancelarija pruža visokokvalitetne pravne usluge prilagođene vašim potrebama, 
              uz profesionalnost i posvećenost svakom slučaju.
            </p>
            
            <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
              <a 
                href="/kontakt" 
                className="group px-8 py-3 bg-accent hover:bg-accent-hover text-bg-secondary font-medium rounded-md text-center transition-all duration-300 shadow-lg hover:shadow-accent/20 relative overflow-hidden"
              >
                <span className="relative z-10">Zakažite konsultaciju</span>
                <span className="absolute inset-0 w-full h-full bg-accent-dark scale-x-0 origin-left group-hover:scale-x-100 transition-transform duration-500"></span>
              </a>
              <a 
                href="/oblasti-prava" 
                className="px-8 py-3 border border-border hover:border-accent text-text-primary hover:text-accent font-medium rounded-md text-center transition-all duration-300 relative group"
              >
                <span>Oblasti prava</span>
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-accent transition-all duration-300 ease-out group-hover:w-full"></span>
              </a>
            </div>
            
            <div className="mt-12 md:hidden">
              <p className="text-text-secondary text-sm mb-4 flex items-center">
                <svg className="w-4 h-4 mr-2 text-accent" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                Klijenti nam veruju:
              </p>
              <div className="flex space-x-4 items-center opacity-80">
                {clientLogos.slice(0, 3).map((client, index) => (
                  <div key={index} className="w-12 h-12 bg-bg-light/30 rounded-full overflow-hidden flex items-center justify-center">
                    <img 
                      src={client.logo} 
                      alt={client.alt} 
                      className="w-full h-full object-contain p-1.5"
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>
          
          <div className={`hidden md:block transform transition-all duration-1000 delay-300 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
            <div className="relative">
              <div className="absolute -top-16 -right-16 w-64 h-64 bg-accent/5 rounded-full blur-3xl"></div>
              <div className="absolute -bottom-8 -left-8 w-40 h-40 bg-accent/10 rounded-full blur-xl animate-pulse-slow"></div>
              
              <div className="bg-bg-light/30 backdrop-blur-md p-8 rounded-lg border border-border/30 shadow-xl relative z-10 hover:border-accent/40 transition-all duration-500">
                <div className="flex items-center mb-6">
                  <div className="relative">
                    <span className="text-3xl text-accent mr-3">⚖️</span>
                  </div>
                  <h3 className="text-xl font-bold text-text-primary">Samac i saradnici</h3>
                </div>
                
                <div className="grid grid-cols-2 gap-6">
                  <StatCard number="10+" text="Godina iskustva" isVisible={isVisible} delay="100" />
                  <StatCard number="500+" text="Zadovoljnih klijenata" isVisible={isVisible} delay="200" />
                  <StatCard number="95%" text="Uspešnih slučajeva" isVisible={isVisible} delay="300" />
                  <StatCard number="24/7" text="Dostupnost" isVisible={isVisible} delay="400" />
                </div>
                
                <div className="mt-8 pt-6 border-t border-border/30">
                  <p className="text-text-secondary text-sm mb-4 flex items-center">
                    <svg className="w-4 h-4 mr-2 text-accent" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    Klijenti nam veruju:
                  </p>
                  <div className="flex space-x-4 items-center animate-fade-in">
                    {clientLogos.map((client, index) => (
                      <div 
                        key={index}
                        className="relative group w-12 h-12 bg-bg-light/20 rounded-full flex items-center justify-center overflow-hidden transition-transform hover:scale-110 duration-300"
                        style={{ transitionDelay: `${index * 100}ms` }}
                      >
                        <img 
                          src={client.logo} 
                          alt={client.alt} 
                          className="absolute inset-0 w-full h-full object-contain p-1.5 opacity-80 group-hover:opacity-100 transition-opacity duration-300"
                        />
                        
                        <div className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap bg-bg-secondary/90 text-text-primary text-xs py-1 px-2 rounded pointer-events-none">
                          {client.name}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center">
        <span className="text-text-secondary text-sm mb-2 hover:text-accent transition-colors duration-300">Saznajte više</span>
        <div className="w-8 h-12 border-2 border-accent/40 rounded-full flex items-start justify-center p-1">
          <div className="w-1.5 h-3 bg-accent rounded-full animate-scroll-hint"></div>
        </div>
      </div>
    </section>
  );
}

function StatCard({ number, text, isVisible, delay }) {
  return (
    <div className={`text-center p-3 rounded-md bg-bg-primary/30 transform transition-all hover:scale-105 hover:bg-bg-primary/50 duration-300 ${
      isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
    }`} style={{ transitionDelay: `${delay}ms` }}>
      <div className="text-accent text-2xl font-bold mb-1">{number}</div>
      <div className="text-text-secondary text-sm">{text}</div>
    </div>
  );
}

export default Hero;