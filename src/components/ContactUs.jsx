import { useState, useEffect, useRef } from 'react';

function ContactUs() {
  const [isVisible, setIsVisible] = useState(false);
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
    privacy: false
  });
  const [errors, setErrors] = useState({});
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
  
  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
    
    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: null }));
    }
  };
  
  const validateForm = () => {
    const newErrors = {};
    
    if (!formData.name.trim()) newErrors.name = 'Ime je obavezno';
    if (!formData.email.trim()) {
      newErrors.email = 'Email je obavezan';
    } else if (!/^\S+@\S+\.\S+$/.test(formData.email)) {
      newErrors.email = 'Email format nije validan';
    }
    if (!formData.message.trim()) newErrors.message = 'Poruka je obavezna';
    if (!formData.privacy) newErrors.privacy = 'Morate prihvatiti politiku privatnosti';
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };
  
  const handleSubmit = (e) => {
    e.preventDefault();
    
    if (validateForm()) {
      // Send data to API in prod
      setFormSubmitted(true);
      
      setTimeout(() => {
        setFormData({
          name: '',
          email: '',
          phone: '',
          subject: '',
          message: '',
          privacy: false
        });
        setFormSubmitted(false);
      }, 5000);
    }
  };

  return (
    <section id="kontakt" ref={sectionRef} className="py-24 relative overflow-hidden bg-bg-secondary/50">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-0 w-full h-full bg-bg-secondary/30 backdrop-blur-sm"></div>
        <div className="absolute bottom-0 left-0 w-1/3 h-1/3 bg-accent/5 rounded-tr-full blur-3xl"></div>
        <div className="absolute -top-20 -right-20 w-80 h-80 border border-accent/10 rounded-full"></div>
      </div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <div className={`inline-flex items-center space-x-3 mb-4 transition-all duration-700 ${isVisible ? 'opacity-100' : 'opacity-0'}`}>
            <div className="h-px w-6 bg-accent"></div>
            <span className="text-accent text-sm uppercase tracking-wider font-medium">Kontakt</span>
            <div className="h-px w-6 bg-accent"></div>
          </div>
          <h2 className={`text-3xl md:text-4xl lg:text-5xl font-bold mb-6 transition-all duration-700 delay-100 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
          }`}>
            <span className="text-text-primary">Pravna pomoć</span>
            <span className="text-accent"> na dohvat ruke</span>
          </h2>
          <p className={`text-text-secondary text-lg max-w-3xl mx-auto transition-all duration-700 delay-200 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
          }`}>
            Kontaktirajte nas za pravni savet, konsultaciju ili zakazivanje sastanka. 
            Naš tim advokata je spreman da vam pruži profesionalnu pravnu podršku.
          </p>
        </div>
        
        <div className="grid lg:grid-cols-5 gap-12">
          <div className={`lg:col-span-2 transition-all duration-1000 delay-300 ${
            isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-8'
          }`}>
            <div className="bg-bg-light/20 backdrop-blur-md rounded-lg p-8 border border-border/20 shadow-xl h-full">
              <h3 className="text-2xl font-bold text-text-primary mb-6 flex items-center">
                <span className="w-8 h-8 rounded-full bg-accent/20 flex items-center justify-center mr-3">
                  <svg className="w-4 h-4 text-accent" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                    <path fillRule="evenodd" d="M10 2a8 8 0 100 16 8 8 0 000-16zm0 14a6 6 0 100-12 6 6 0 000 12zm0-9a1 1 0 011 1v3a1 1 0 01-1 1H7a1 1 0 110-2h2V8a1 1 0 011-1z" clipRule="evenodd" />
                  </svg>
                </span>
                Informacije
              </h3>
              
              <div className="space-y-6">
                <ContactItem
                  icon={
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path>
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path>
                    </svg>
                  }
                  title="Adresa"
                  content={
                    <>
                      <p>Bulevar Mihajla Pupina 109/6</p>
                      <p>11070, Beograd</p>
                    </>
                  }
                />
                
                <ContactItem
                  icon={
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"></path>
                    </svg>
                  }
                  title="Telefon"
                  content={
                    <>
                      <a href="tel:+381116128260" className="hover:text-accent transition-colors duration-300">
                        +381 11 61 282 60
                      </a>
                      <p className="text-xs text-text-secondary mt-1">Pon-Pet: 09:00 - 17:00</p>
                    </>
                  }
                />
                
                <ContactItem
                  icon={
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path>
                    </svg>
                  }
                  title="Email"
                  content={
                    <a href="mailto:info@lawofficesamac.rs" className="hover:text-accent transition-colors duration-300">
                      info@lawofficesamac.rs
                    </a>
                  }
                />
              </div>
              
              <div className="mt-10 pt-8 border-t border-border/20">
                <h4 className="text-lg font-semibold text-text-primary mb-4">Radno vreme</h4>
                <div className="space-y-2">
                  <div className="flex justify-between">
                    <span className="text-text-secondary">Ponedeljak - Petak</span>
                    <span className="text-text-primary">09:00 - 17:00</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-text-secondary">Subota</span>
                    <span className="text-text-primary">Zatvoreno</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-text-secondary">Nedelja</span>
                    <span className="text-text-primary">Zatvoreno</span>
                  </div>
                </div>
              </div>
              
              <div className="mt-10 pt-8 border-t border-border/20">
                <h4 className="text-lg font-semibold text-text-primary mb-4">Povežimo se</h4>
                <div className="flex space-x-4">
                  <SocialLink href="https://linkedin.com" aria-label="LinkedIn">
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                    </svg>
                  </SocialLink>
                </div>
              </div>
            </div>
          </div>
          
          <div className={`lg:col-span-3 transition-all duration-1000 delay-500 ${
            isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-8'
          }`}>
            <div className="bg-bg-primary/80 backdrop-blur-md rounded-lg p-8 border border-border/20 shadow-xl relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-accent/5 rounded-bl-full"></div>
              
              {formSubmitted ? (
                <div className="text-center py-10">
                  <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-accent/20 mb-6">
                    <svg className="w-8 h-8 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                    </svg>
                  </div>
                  <h3 className="text-2xl font-bold text-text-primary mb-2">Hvala na poruci!</h3>
                  <p className="text-text-secondary">Vaša poruka je uspešno poslata. Očekujte naš odgovor u najkraćem mogućem roku.</p>
                </div>
              ) : (
                <>
                  <h3 className="text-2xl font-bold text-text-primary mb-6 flex items-center">
                    <span className="w-8 h-8 rounded-full bg-accent/20 flex items-center justify-center mr-3">
                      <svg className="w-4 h-4 text-accent" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                        <path fillRule="evenodd" d="M10 2a8 8 0 100 16 8 8 0 000-16zm1 10.414V5a1 1 0 10-2 0v7.414l-1.293-1.293a1 1 0 10-1.414 1.414l3 3a1 1 0 001.414 0l3-3a1 1 0 00-1.414-1.414L11 12.414z" clipRule="evenodd"></path>
                      </svg>
                    </span>
                    Pošaljite nam poruku
                  </h3>
                  
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid sm:grid-cols-2 gap-6">
                      <div>
                        <label htmlFor="name" className="block text-text-primary text-sm font-medium mb-2">
                          Ime i prezime <span className="text-accent">*</span>
                        </label>
                        <input
                          type="text"
                          id="name"
                          name="name"
                          value={formData.name}
                          onChange={handleChange}
                          className={`w-full px-4 py-3 bg-bg-light/10 border ${
                            errors.name ? 'border-red-500' : 'border-border/30'
                          } rounded-md focus:outline-none focus:ring-2 focus:ring-accent/40 focus:border-transparent transition-all duration-300`}
                          placeholder="Vaše ime i prezime"
                        />
                        {errors.name && <p className="mt-1 text-sm text-red-500">{errors.name}</p>}
                      </div>
                      
                      <div>
                        <label htmlFor="email" className="block text-text-primary text-sm font-medium mb-2">
                          Email adresa <span className="text-accent">*</span>
                        </label>
                        <input
                          type="email"
                          id="email"
                          name="email"
                          value={formData.email}
                          onChange={handleChange}
                          className={`w-full px-4 py-3 bg-bg-light/10 border ${
                            errors.email ? 'border-red-500' : 'border-border/30'
                          } rounded-md focus:outline-none focus:ring-2 focus:ring-accent/40 focus:border-transparent transition-all duration-300`}
                          placeholder="primer@email.com"
                        />
                        {errors.email && <p className="mt-1 text-sm text-red-500">{errors.email}</p>}
                      </div>
                    </div>
                    
                    <div className="grid sm:grid-cols-2 gap-6">
                      <div>
                        <label htmlFor="phone" className="block text-text-primary text-sm font-medium mb-2">
                          Broj telefona
                        </label>
                        <input
                          type="tel"
                          id="phone"
                          name="phone"
                          value={formData.phone}
                          onChange={handleChange}
                          className="w-full px-4 py-3 bg-bg-light/10 border border-border/30 rounded-md focus:outline-none focus:ring-2 focus:ring-accent/40 focus:border-transparent transition-all duration-300"
                          placeholder="+381 XX XXX XXXX"
                        />
                      </div>
                      
                      <div>
                        <label htmlFor="subject" className="block text-text-primary text-sm font-medium mb-2">
                          Predmet
                        </label>
                        <select
                          id="subject"
                          name="subject"
                          value={formData.subject}
                          onChange={handleChange}
                          className="w-full px-4 py-3 bg-bg-light/10 border border-border/30 rounded-md focus:outline-none focus:ring-2 focus:ring-accent/40 focus:border-transparent transition-all duration-300 text-text-primary"
                          style={{ backgroundColor: 'var(--color-bg-primary)' }}
                        >
                          <option value="" className="bg-bg-primary text-text-primary">Izaberite predmet</option>
                          <option value="Konsultacija" className="bg-bg-primary text-text-primary">Konsultacija</option>
                          <option value="Upit o uslugama" className="bg-bg-primary text-text-primary">Upit o uslugama</option>
                          <option value="Zakazivanje sastanka" className="bg-bg-primary text-text-primary">Zakazivanje sastanka</option>
                          <option value="Drugo" className="bg-bg-primary text-text-primary">Drugo</option>
                        </select>
                      </div>
                    </div>
                    
                    <div>
                      <label htmlFor="message" className="block text-text-primary text-sm font-medium mb-2">
                        Poruka <span className="text-accent">*</span>
                      </label>
                      <textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        rows="5"
                        className={`w-full px-4 py-3 bg-bg-light/10 border ${
                          errors.message ? 'border-red-500' : 'border-border/30'
                        } rounded-md focus:outline-none focus:ring-2 focus:ring-accent/40 focus:border-transparent transition-all duration-300 resize-none`}
                        placeholder="Opišite vaš pravni problem ili pitanje..."
                      ></textarea>
                      {errors.message && <p className="mt-1 text-sm text-red-500">{errors.message}</p>}
                    </div>
                    
                    <div className="flex items-start">
                      <div className="flex items-center h-5">
                        <input
                          id="privacy"
                          name="privacy"
                          type="checkbox"
                          checked={formData.privacy}
                          onChange={handleChange}
                          className="focus:ring-accent h-4 w-4 text-accent border-border/30 rounded"
                        />
                      </div>
                      <div className="ml-3 text-sm">
                        <label htmlFor="privacy" className={`font-medium ${errors.privacy ? 'text-red-500' : 'text-text-secondary'}`}>
                          Prihvatam politiku privatnosti i obradu ličnih podataka <span className="text-accent">*</span>
                        </label>
                        {errors.privacy && <p className="mt-1 text-sm text-red-500">{errors.privacy}</p>}
                      </div>
                    </div>
                    
                    <div>
                      <button
                        type="submit"
                        className="w-full px-6 py-3 bg-accent hover:bg-accent-hover text-bg-secondary font-medium rounded-md transition-all duration-300 shadow-lg hover:shadow-accent/20 relative overflow-hidden group"
                      >
                        <span className="relative z-10">Pošaljite poruku</span>
                        <span className="absolute inset-0 w-full h-full bg-accent-dark scale-x-0 origin-left group-hover:scale-x-100 transition-transform duration-500"></span>
                      </button>
                    </div>
                  </form>
                </>
              )}
            </div>
            
            <div className="mt-8 text-text-secondary/70 text-sm text-center">
              <p>Sve informacije koje podelite sa nama ostaju poverljive i zaštićene advokatskom tajnom.</p>
            </div>
          </div>
        </div>
        
        <div className={`mt-20 transition-all duration-1000 delay-700 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        }`}>
          <div className="rounded-lg overflow-hidden border border-border/20 shadow-xl h-96 relative">
            <iframe 
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2830.2556602311183!2d20.423479291190663!3d44.816356001847375!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x475a65d7e22584d3%3A0x71919168a5777362!2sAdvokatska%20kancelarija%20Samac%20i%20saradnici!5e0!3m2!1ssr!2srs!4v1746811573195!5m2!1ssr!2srs"
              width="100%" 
              height="100%" 
              style={{ border: 0 }} 
              allowFullScreen="" 
              loading="lazy" 
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
      </div>
    </section>
  );
}

function ContactItem({ icon, title, content }) {
  return (
    <div className="flex">
      <div className="flex-shrink-0 w-10 h-10 rounded-full bg-accent/20 flex items-center justify-center">
        <div className="text-accent">{icon}</div>
      </div>
      <div className="ml-4">
        <h4 className="text-lg font-medium text-text-primary">{title}</h4>
        <div className="mt-1 text-text-secondary">{content}</div>
      </div>
    </div>
  );
}

function SocialLink({ href, children, ...props }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="w-10 h-10 rounded-full bg-bg-light/30 flex items-center justify-center text-text-secondary hover:bg-accent/20 hover:text-accent transition-all duration-300"
      {...props}
    >
      {children}
    </a>
  );
}

export default ContactUs;