import { useState, useEffect } from 'react';

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  
  useEffect(() => {
    const handleScroll = () => {
      const offset = window.scrollY;
      if (offset > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      scrolled 
        ? 'bg-bg-primary/95 backdrop-blur-sm shadow-md' 
        : 'bg-bg-primary border-b border-border/30'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-20">
          <div className="flex items-center">
            <a href="/" className="flex-shrink-0 flex items-center group">
              <div className="w-10 h-10 rounded-full bg-accent/10 flex items-center justify-center mr-3 group-hover:bg-accent/20 transition-all duration-300">
                <span className="text-accent text-2xl">⚖️</span>
              </div>
              <div className="border-l-2 border-accent/30 pl-3">
                <div className="text-text-primary text-sm tracking-wider uppercase font-medium">Advokatska kancelarija</div>
                <div className="text-accent text-xl font-bold tracking-wide">Samac i saradnici</div>
              </div>
            </a>
          </div>
          
          <div className="hidden md:flex items-center space-x-1 lg:space-x-2">
            <NavLink href="/">Početna</NavLink>
            <NavLink href="/o-nama">O nama</NavLink>
            <NavLink href="/oblasti-prava">Oblasti prava</NavLink>
            <NavLink href="/nas-tim">Naš tim</NavLink>
            <NavLink href="/kontakt">Kontakt</NavLink>
            <a href="/kontakt" className="ml-4 px-5 py-2 bg-accent hover:bg-accent-hover text-bg-secondary font-medium rounded transition-all duration-300 shadow-lg hover:shadow-accent/20">
              Konsultacije
            </a>
          </div>
          
          <div className="flex items-center md:hidden">
            <button 
              className="text-text-primary hover:text-accent transition duration-150"
              onClick={() => setIsOpen(!isOpen)}
              aria-label="Toggle menu"
            >
              <svg className="h-6 w-6" stroke="currentColor" fill="none" viewBox="0 0 24 24">
                <path 
                  strokeLinecap="round" 
                  strokeLinejoin="round" 
                  strokeWidth="2" 
                  d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"} 
                />
              </svg>
            </button>
          </div>
        </div>
      </div>
      
      <div className={`md:hidden transform transition-all duration-300 ease-in-out ${
        isOpen 
          ? 'opacity-100 max-h-96' 
          : 'opacity-0 max-h-0 pointer-events-none'
      } overflow-hidden`}>
        <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 border-t border-bg-light">
          <MobileNavLink href="/">Početna</MobileNavLink>
          <MobileNavLink href="/o-nama">O nama</MobileNavLink>
          <MobileNavLink href="/oblasti-prava">Oblasti prava</MobileNavLink>
          <MobileNavLink href="/nas-tim">Naš tim</MobileNavLink>
          <MobileNavLink href="/kontakt">Kontakt</MobileNavLink>
          <div className="pt-4 pb-2">
            <a href="/kontakt" className="block w-full text-center px-4 py-2 bg-accent hover:bg-accent-hover text-bg-secondary font-medium rounded-md transition-all duration-300">
              Zakažite konsultacije
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
}

function NavLink({ href, children }) {
  return (
    <a 
      href={href} 
      className="relative px-3 py-5 text-text-primary hover:text-accent font-medium transition-all duration-300 ease-in-out group"
    >
      {children}
      <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-accent transition-all duration-300 ease-out group-hover:w-full"></span>
    </a>
  );
}

function MobileNavLink({ href, children }) {
  return (
    <a 
      href={href} 
      className="block px-3 py-2 rounded-md text-base font-medium text-text-primary 
                hover:text-accent hover:bg-bg-light/50 transition-all duration-150"
    >
      {children}
    </a>
  );
}

export default Navbar;