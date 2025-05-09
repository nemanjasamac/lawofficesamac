import { useState, useEffect, useRef } from 'react';

function ClientReferences() {
  const [isVisible, setIsVisible] = useState(false);
  const [activeTab, setActiveTab] = useState('svi');
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

  const clients = [
    {
      name: "Generali Srbija",
      industry: "Osiguranje",
      description: "Pravna pomoć u vezi sa osiguranjem i regulativama u oblasti finansijskih usluga.",
      logo: "/images/clients/client2.jpg",
      categories: ["korporativno", "porezi"] 
    },
    {
      name: "Duos Asinos Consulting",
      industry: "IT",
      description: "Pravna podrška u vezi sa zaštitom podataka i korporativnim regulativama.",
      logo: "/images/clients/client1.png", 
      categories: ["korporativno", "privredno"],
    },
    {
      name: "Milenijum Osiguranje",
      industry: "Osiguranje",
      description: "Pravna pomoć u vezi sa osiguranjem i regulativama u oblasti finansijskih usluga.",
      logo: "/images/clients/client3.png",
      categories: ["korporativno"]
    },
    {
      name: "Globos Osiguranje",
      industry: "Osiguranje",
      description: "Pravna pomoć u vezi sa osiguranjem i regulativama u oblasti finansijskih usluga.",
      logo: "/images/clients/client4.jpg",
      categories: ["korporativno", "porezi"]
    },
    {
      name: "Siping d.o.o.",
      industry: "Građevina",
      description: "Pravna pomoć u vezi sa građevinskim ugovorima i regulativama.",
      logo: "/images/clients/siping.png",
      categories: ["gradjevina", "privredno"]
    },
    {
      name: "Tipografik Plus",
      industry: "Grafička industrija",
      description: "Pravna pomoć u vezi sa autorskim pravima i zaštitom intelektualne svojine.",
      logo: "/images/clients/tipografik.png",
      categories: ["privredno"]
    },
    {
      name: "Gelex d.o.o.",
      industry: "Građevina",
      description: "Pravna pomoć u vezi sa građevinskim ugovorima i regulativama.",
      logo: "/images/clients/gelex.png",
      categories: ["gradjevina"]
    },
    {
      name: "Devart d.o.o.",
      industry: "IT",
      description: "Pravna pomoć u vezi sa zaštitom podataka i korporativnim regulativama.",
      logo: "/images/clients/devart.jpg",
      categories: ["korporativno", "privredno"]
    }
  ];
  
  const categories = [
    { id: 'svi', name: 'Svi klijenti' },
    { id: 'korporativno', name: 'Korporativno pravo' },
    { id: 'privredno', name: 'Privredno pravo' },
    { id: 'gradjevina', name: 'Građevinsko pravo' },
    { id: 'porezi', name: 'Porezi i finansije' }
  ];
  
  const filteredClients = activeTab === 'svi' 
    ? clients 
    : clients.filter(client => client.categories.includes(activeTab));

  return (
    <section ref={sectionRef} className="py-24 relative overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-0 w-full h-1/3 bg-gradient-to-b from-bg-secondary/30 to-transparent"></div>
        <div className="absolute top-1/4 right-0 w-1/3 h-64 bg-accent/5 rounded-l-full blur-3xl"></div>
      </div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <div className={`inline-flex items-center space-x-3 mb-4 transition-all duration-700 ${isVisible ? 'opacity-100' : 'opacity-0'}`}>
            <div className="h-px w-6 bg-accent"></div>
            <span className="text-accent text-sm uppercase tracking-wider font-medium">Reference</span>
            <div className="h-px w-6 bg-accent"></div>
          </div>
          <h2 className={`text-3xl md:text-4xl lg:text-5xl font-bold mb-6 transition-all duration-700 delay-100 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
          }`}>
            <span className="text-text-primary">Naši zadovoljni</span>
            <span className="text-accent"> klijenti</span>
          </h2>
          <p className={`text-text-secondary text-lg max-w-3xl mx-auto transition-all duration-700 delay-200 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
          }`}>
            Poverenje koje su nam ukazale različite kompanije najbolje govori o našoj stručnosti i 
            profesionalnom pristupu. Pogledajte neke od naših impresivnih referenci.
          </p>
          
          <div className={`mt-4 text-text-secondary/70 text-sm max-w-2xl mx-auto italic transition-all duration-700 delay-300 ${
            isVisible ? 'opacity-100' : 'opacity-0'
          }`}>
            <span className="inline-flex items-center">
              Prikazan je samo izbor naših klijenata. Zbog poverljivosti i obima saradnje, nije moguće prikazati kompletan spisak.
            </span>
          </div>
        </div>
        
        <div className={`flex flex-wrap justify-center mb-12 transition-all duration-700 delay-300 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
        }`}>
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => setActiveTab(category.id)}
              className={`px-5 py-2 m-1 rounded-full text-sm transition-all duration-200 ${
                activeTab === category.id
                  ? 'bg-accent text-bg-secondary font-medium shadow-md'
                  : 'bg-bg-light/10 text-text-secondary hover:bg-bg-light/20'
              }`}
            >
              {category.name}
            </button>
          ))}
        </div>
        
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredClients.map((client, index) => (
            <div 
              key={index}
              className={`group bg-bg-light/5 hover:bg-bg-light/10 rounded-lg overflow-hidden transition-all duration-500 shadow-md hover:shadow-lg border border-border/10 hover:border-accent/20 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              }`} 
              style={{ transitionDelay: `${400 + index * 100}ms` }}
            >
              <div className="p-6 flex items-center space-x-4 border-b border-border/10 group-hover:border-accent/10 transition-colors duration-300">
                <div className="w-12 h-12 rounded-full bg-bg-light/20 flex items-center justify-center overflow-hidden">
                  <img src={client.logo} alt={`${client.name} logo`} className="w-10 h-10 object-contain" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-text-primary group-hover:text-accent transition-colors duration-300">{client.name}</h3>
                  <p className="text-text-secondary text-sm">{client.industry}</p>
                </div>
              </div>
              
              <div className="p-6">
                <p className="text-text-secondary leading-relaxed">{client.description}</p>
                
                <div className="mt-4 pt-4 border-t border-border/10">
                  <div className="flex flex-wrap gap-2 mb-3">
                    {client.categories.map((categoryId, idx) => (
                      <span key={idx} className="text-xs font-medium text-accent bg-accent/10 px-2 py-1 rounded-full">
                        {categories.find(cat => cat.id === categoryId)?.name}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        {filteredClients.length === 0 && (
          <div className="text-center py-12">
            <div className="text-5xl mb-4">🔍</div>
            <h3 className="text-xl text-text-primary font-medium mb-2">Nema rezultata za ovu kategoriju</h3>
            <p className="text-text-secondary">Trenutno nemamo prikazanih klijenata u ovoj oblasti prava.</p>
            <button 
              onClick={() => setActiveTab('svi')} 
              className="mt-4 px-4 py-2 text-accent border border-accent/30 rounded-md hover:bg-accent/10 transition-colors duration-300"
            >
              Prikaži sve klijente
            </button>
          </div>
        )}
        
        <div className={`mt-16 text-center transition-all duration-1000 delay-700 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        }`}>
          <p className="text-text-secondary mb-6">
            Saznajte kako možemo pomoći i vašoj kompaniji sa pravnim izazovima
          </p>
          
          <a 
            href="/kontakt" 
            className="inline-flex items-center px-8 py-3 bg-accent hover:bg-accent-hover text-bg-secondary font-medium rounded-md transition-all duration-300 shadow-lg hover:shadow-accent/20 group"
          >
            <span>Zatražite konsultaciju</span>
            <svg className="w-5 h-5 ml-2 transform group-hover:translate-x-1 transition-transform duration-200" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
            </svg>
          </a>
        </div>
        
        <div className={`mt-20 text-center text-text-secondary/50 text-xs transition-all duration-1000 delay-800 ${
          isVisible ? 'opacity-100' : 'opacity-0'
        }`}>
          Svi klijenti su prikazani uz njihovu saglasnost. Poštujemo poverljivost i diskreciju svih naših klijenata.
        </div>
      </div>
    </section>
  );
}

export default ClientReferences;