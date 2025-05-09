import { useState } from 'react';

function Footer() {
  const [emailValue, setEmailValue] = useState('');
  const [subscribed, setSubscribed] = useState(false);
  const [emailError, setEmailError] = useState(false);
  
  const handleSubscribe = (e) => {
    e.preventDefault();
    
    if (!emailValue || !/^\S+@\S+\.\S+$/.test(emailValue)) {
      setEmailError(true);
      return;
    }
    
    // In production, send ot api
    setSubscribed(true);
    setEmailError(false);
    
    setTimeout(() => {
      setEmailValue('');
      setSubscribed(false);
    }, 5000);
  };
  
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-bg-secondary relative overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-border/30 to-transparent"></div>
        <div className="absolute bottom-0 right-0 w-1/2 h-1/2 bg-accent/5 rounded-tl-full blur-3xl"></div>
        <div className="absolute top-1/3 left-1/4 w-16 h-16 bg-accent/10 rounded-full blur-xl"></div>
      </div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-10 pb-12 border-b border-border/20">
          <div className="lg:col-span-1">
            <div className="flex items-start">
              <div className="w-10 h-10 rounded-full bg-accent/10 flex items-center justify-center mr-3">
                <span className="text-accent text-2xl">⚖️</span>
              </div>
              <div>
                <div className="text-text-primary text-sm tracking-wider uppercase font-medium">Advokatska kancelarija</div>
                <div className="text-accent text-xl font-bold tracking-wide">Samac i saradnici</div>
              </div>
            </div>
            
            <p className="mt-6 text-text-secondary leading-relaxed">
              Posvećeni pružanju visokokvalitetnih pravnih usluga našim klijentima već više od 9 godina.
            </p>
            
            <div className="flex mt-6 space-x-4">
              <SocialButton href="https://linkedin.com" aria-label="LinkedIn">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                </svg>
              </SocialButton>
            </div>
          </div>
          
          <div className="">
            <h3 className="text-lg font-semibold text-text-primary mb-4 flex items-center">
              <span className="w-5 h-5 rounded-full bg-accent/20 flex items-center justify-center mr-2">
                <svg className="w-3 h-3 text-accent" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                </svg>
              </span>
              Brze veze
            </h3>
            <ul className="space-y-3">
              <FooterLink href="/">Početna</FooterLink>
              <FooterLink href="/o-nama">O nama</FooterLink>
              <FooterLink href="/oblasti-prava">Oblasti prava</FooterLink>
              <FooterLink href="/nas-tim">Naš tim</FooterLink>
              <FooterLink href="/vesti">Aktuelnosti</FooterLink>
              <FooterLink href="/kontakt">Kontakt</FooterLink>
            </ul>
          </div>
          
          <div className="">
            <h3 className="text-lg font-semibold text-text-primary mb-4 flex items-center">
              <span className="w-5 h-5 rounded-full bg-accent/20 flex items-center justify-center mr-2">
                <svg className="w-3 h-3 text-accent" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10.496 2.132a1 1 0 00-.992 0l-7 4A1 1 0 003 8v7a1 1 0 100 2h14a1 1 0 100-2V8a1 1 0 00.496-1.868l-7-4zM6 9a1 1 0 00-1 1v3a1 1 0 102 0v-3a1 1 0 00-1-1zm3 1a1 1 0 012 0v3a1 1 0 11-2 0v-3zm5-1a1 1 0 00-1 1v3a1 1 0 102 0v-3a1 1 0 00-1-1z" clipRule="evenodd" />
                </svg>
              </span>
              Pravne usluge
            </h3>
            <ul className="space-y-3">
              <FooterLink href="/oblasti-prava/korporativno-pravo">Korporativno pravo</FooterLink>
              <FooterLink href="/oblasti-prava/imovinsko-pravo">Imovinsko pravo</FooterLink>
              <FooterLink href="/oblasti-prava/porodicno-pravo">Porodično pravo</FooterLink>
              <FooterLink href="/oblasti-prava/radno-pravo">Radno pravo</FooterLink>
              <FooterLink href="/oblasti-prava/nasledno-pravo">Nasledno pravo</FooterLink>
              <FooterLink href="/oblasti-prava">Sve oblasti prava</FooterLink>
            </ul>
          </div>
          
          <div className="md:col-span-3 lg:col-span-1">
            <h3 className="text-lg font-semibold text-text-primary mb-4 flex items-center">
              <span className="w-5 h-5 rounded-full bg-accent/20 flex items-center justify-center mr-2">
                <svg className="w-3 h-3 text-accent" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                  <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                </svg>
              </span>
              Bilten novosti
            </h3>
            <p className="text-text-secondary text-sm mb-4">
              Prijavite se na naš bilten i dobijajte najnovije pravne novosti i savete direktno u Vaš sandučić.
            </p>
            
            <form onSubmit={handleSubscribe} className="mb-6">
              <div className="flex">
                <input 
                  type="email" 
                  value={emailValue}
                  onChange={(e) => {
                    setEmailValue(e.target.value);
                    setEmailError(false);
                  }}
                  className={`bg-bg-light/20 text-text-primary border ${emailError ? 'border-red-500' : 'border-border/30'} rounded-l-md px-4 py-2 w-full focus:outline-none focus:ring-1 focus:ring-accent`}
                  placeholder="Vaša email adresa"
                />
                <button 
                  type="submit" 
                  className="bg-accent hover:bg-accent-hover text-bg-secondary px-4 rounded-r-md transition-colors duration-300"
                >
                  {subscribed ? (
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                    </svg>
                  ) : (
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
                    </svg>
                  )}
                </button>
              </div>
              {emailError && (
                <p className="mt-1 text-xs text-red-500">Unesite ispravnu email adresu</p>
              )}
              {subscribed && (
                <p className="mt-1 text-xs text-accent">Uspešno ste se prijavili na bilten!</p>
              )}
            </form>
            
            <div className="space-y-4">
              <div className="flex items-start">
                <div className="flex-shrink-0 w-5 h-5 rounded-full bg-accent/20 flex items-center justify-center mt-1">
                  <svg className="w-3 h-3 text-accent" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                  </svg>
                </div>
                <div className="ml-3">
                  <p className="text-text-secondary text-sm">
                    Bulevar Mihajla Pupina 109/6<br />
                    11070, Beograd
                  </p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="flex-shrink-0 w-5 h-5 rounded-full bg-accent/20 flex items-center justify-center mt-1">
                  <svg className="w-3 h-3 text-accent" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                  </svg>
                </div>
                <div className="ml-3">
                  <p className="text-text-secondary text-sm">
                    <a href="tel:+381116128260" className="hover:text-accent transition-colors duration-300">+381 11 61 282 60</a>
                  </p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="flex-shrink-0 w-5 h-5 rounded-full bg-accent/20 flex items-center justify-center mt-1">
                  <svg className="w-3 h-3 text-accent" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                    <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                  </svg>
                </div>
                <div className="ml-3">
                  <p className="text-text-secondary text-sm">
                    <a href="mailto:info@lawofficesamac.rs" className="hover:text-accent transition-colors duration-300">info@lawofficesamac.rs</a>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        
         <div className="mt-8 pt-8 grid md:flex md:justify-between md:items-center gap-6 text-sm text-text-secondary/70">
          <div>
            <p>© {currentYear} Advokatska kancelarija Samac i saradnici. Sva prava zadržana.</p>
          </div>
          
          <div className="flex flex-wrap gap-6">
            <a href="/pravila-privatnosti" className="hover:text-accent transition-colors duration-200">Pravila privatnosti</a>
            <a href="/uslovi-koriscenja" className="hover:text-accent transition-colors duration-200">Uslovi korišćenja</a>
            <a href="/cookies" className="hover:text-accent transition-colors duration-200">Cookies</a>
          </div>
          
          <div className="text-xs opacity-50 md:text-right">
            <p>Design & Development by <a href="https://samac.dev" target="_blank" rel="noopener noreferrer" className="underline hover:text-accent">Samac.dev</a></p>
          </div>
        </div>
      </div>
    </footer>
  );
}

function SocialButton({ href, children, ...props }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="w-8 h-8 rounded-full bg-bg-light/20 flex items-center justify-center text-text-secondary hover:bg-accent/20 hover:text-accent transition-all duration-300"
      {...props}
    >
      {children}
    </a>
  );
}

function FooterLink({ href, children }) {
  return (
    <li>
      <a 
        href={href} 
        className="text-text-secondary hover:text-accent transition-colors duration-300 flex items-center"
      >
        <svg className="w-3 h-3 text-accent/60 mr-2" fill="currentColor" viewBox="0 0 20 20">
          <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
        </svg>
        {children}
      </a>
    </li>
  );
}

export default Footer;