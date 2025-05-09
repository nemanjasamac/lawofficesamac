import { useEffect } from 'react';

function About() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="pt-20">
      <div className="relative bg-bg-secondary py-20 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-r from-bg-secondary to-bg-secondary/70"></div>
          <div className="absolute inset-0 bg-[url('/images/about-hero.jpg')] bg-cover bg-center opacity-20"></div>
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-text-primary mb-4">
              O <span className="text-accent">nama</span>
            </h1>
            <p className="text-xl text-text-secondary max-w-3xl mx-auto">
              Advokatska kancelarija sa tradicijom pružanja izvanrednih pravnih usluga i pouzdanih saveta
            </p>
          </div>
        </div>
      </div>

      <div className="py-16 bg-bg-primary">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row gap-12 items-center">
            <div className="md:w-1/2">
              <h2 className="text-3xl font-bold mb-6">Naša <span className="text-accent">priča</span></h2>
              <p className="text-text-secondary mb-6">
                Advokatska kancelarija "Samac i saradnici" osnovana je 2016. godine sa ciljem da pruži klijentima ne samo pravnu ekspertizu, već i personalizovani pristup koji se temelji na razumevanju specifičnih potreba svakog klijenta.
              </p>
              <p className="text-text-secondary mb-6">
                Od našeg osnivanja, izgradili smo reputaciju pouzdanog pravnog partnera koji se bori za interese svojih klijenata s neumornom posvećenošću. Naša kancelarija je rasla organski, dodajući stručnjake iz različitih pravnih oblasti kako bismo mogli pružiti sveobuhvatne usluge.
              </p>
              <p className="text-text-secondary">
                Danas, sa timom od preko 10 pravnih stručnjaka, nastavljamo našu misiju pružanja pravne izvrsnosti u atmosferi koja neguje međusobno poverenje i poštovanje.
              </p>
            </div>
            <div className="md:w-1/2">
              <div className="relative">
                <div className="absolute -left-4 -top-4 w-24 h-24 bg-accent/20 rounded-lg"></div>
                <img 
                  src="/images/our-story.png" 
                  alt="Naša priča" 
                  className="relative z-10 rounded-lg shadow-xl w-full object-cover h-[400px]" 
                />
                <div className="absolute -right-4 -bottom-4 w-24 h-24 bg-accent/20 rounded-lg"></div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="py-16 bg-bg-secondary">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-6">Naše <span className="text-accent">vrednosti</span></h2>
            <p className="text-text-secondary max-w-3xl mx-auto">
              Naše vrednosti nisu samo reči — one su temelj našeg svakodnevnog rada i služe kao kompas koji usmerava svaku našu odluku i interakciju.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-bg-light/30 p-8 rounded-lg hover:bg-bg-light/50 transition-all duration-300 group">
              <div className="w-12 h-12 rounded-full bg-accent/20 flex items-center justify-center mb-6 group-hover:bg-accent/30 transition-all">
                <span className="text-accent text-2xl">⚖️</span>
              </div>
              <h3 className="text-xl font-bold mb-4 text-text-primary">Integritet</h3>
              <p className="text-text-secondary">
                Postupamo etički i transparentno u svim aspektima našeg rada, negujući poverenje i pouzdanost u odnosima sa klijentima.
              </p>
            </div>
            
            <div className="bg-bg-light/30 p-8 rounded-lg hover:bg-bg-light/50 transition-all duration-300 group">
              <div className="w-12 h-12 rounded-full bg-accent/20 flex items-center justify-center mb-6 group-hover:bg-accent/30 transition-all">
                <span className="text-accent text-2xl">🔍</span>
              </div>
              <h3 className="text-xl font-bold mb-4 text-text-primary">Stručnost</h3>
              <p className="text-text-secondary">
                Posvećeni smo kontinuiranom usavršavanju i primeni najsavremenijih pravnih znanja kako bismo pružili izvanredne rezultate.
              </p>
            </div>
            
            <div className="bg-bg-light/30 p-8 rounded-lg hover:bg-bg-light/50 transition-all duration-300 group">
              <div className="w-12 h-12 rounded-full bg-accent/20 flex items-center justify-center mb-6 group-hover:bg-accent/30 transition-all">
                <span className="text-accent text-2xl">🤝</span>
              </div>
              <h3 className="text-xl font-bold mb-4 text-text-primary">Saradnja</h3>
              <p className="text-text-secondary">
                Verujemo u snagu timskog rada i partnerskog odnosa sa klijentima, gde zajedno razvijamo najbolja rešenja.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="py-16 bg-bg-primary">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row-reverse gap-12 items-center">
            <div className="md:w-1/2">
              <h2 className="text-3xl font-bold mb-6">Naš <span className="text-accent">pristup</span></h2>
              <p className="text-text-secondary mb-6">
                Mi razumemo da svaki pravni izazov zahteva jedinstveni pristup. Naš rad karakteriše kombinacija tradicionalnih pravnih principa i inovativnih strategija.
              </p>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <div className="mr-3 mt-1">
                    <div className="w-5 h-5 rounded-full bg-accent/30 flex items-center justify-center">
                      <div className="w-2 h-2 rounded-full bg-accent"></div>
                    </div>
                  </div>
                  <p className="text-text-secondary">
                    <span className="font-medium text-text-primary">Personalizovana strategija</span> — Razvijamo prilagođena rešenja zasnovana na specifičnim ciljevima i okolnostima vašeg slučaja.
                  </p>
                </li>
                <li className="flex items-start">
                  <div className="mr-3 mt-1">
                    <div className="w-5 h-5 rounded-full bg-accent/30 flex items-center justify-center">
                      <div className="w-2 h-2 rounded-full bg-accent"></div>
                    </div>
                  </div>
                  <p className="text-text-secondary">
                    <span className="font-medium text-text-primary">Proaktivno savetovanje</span> — Ne čekamo probleme, već ih predviđamo i pripremamo strategije pre nego što nastanu.
                  </p>
                </li>
                <li className="flex items-start">
                  <div className="mr-3 mt-1">
                    <div className="w-5 h-5 rounded-full bg-accent/30 flex items-center justify-center">
                      <div className="w-2 h-2 rounded-full bg-accent"></div>
                    </div>
                  </div>
                  <p className="text-text-secondary">
                    <span className="font-medium text-text-primary">Jasna komunikacija</span> — Verujemo u transparentnu i redovnu komunikaciju koja demistifikuje pravni proces.
                  </p>
                </li>
              </ul>
            </div>
            <div className="md:w-1/2">
              <div className="grid grid-cols-2 gap-4">
                <div className="rounded-lg overflow-hidden">
                  <img 
                    src="/images/approach-2.png" 
                    alt="Naš pristup" 
                    className="w-full h-64 object-cover transition-transform duration-500 hover:scale-110" 
                  />
                </div>
                <div className="rounded-lg overflow-hidden mt-8">
                  <img 
                    src="/images/approach-1.png" 
                    alt="Naš pristup" 
                    className="w-full h-64 object-cover transition-transform duration-500 hover:scale-110" 
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-accent/10 py-16">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-6">Spremni da zajedno rešimo vaše pravne izazove?</h2>
          <p className="text-text-secondary mb-8 max-w-3xl mx-auto">
            Naš tim je tu da vas sasluša i pruži stručni savet. Prva konsultacija vam omogućava da upoznate naš tim i zajedno procenimo kako možemo najbolje da vam pomognemo.
          </p>
          <a 
            href="/kontakt" 
            className="inline-block px-8 py-3 bg-accent hover:bg-accent-hover text-bg-secondary font-medium rounded-md transition-all duration-300 shadow-lg hover:shadow-accent/20 text-lg"
          >
            Zakažite konsultacije
          </a>
        </div>
      </div>
    </div>
  );
}

export default About;