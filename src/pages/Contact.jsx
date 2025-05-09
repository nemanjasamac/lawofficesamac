import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    try {
      await new Promise(resolve => setTimeout(resolve, 1000));
      setSubmitStatus({ success: true, message: 'Vaša poruka je uspešno poslata. Kontaktiraćemo Vas uskoro.' });
      setFormData({ name: '', email: '', phone: '', message: '' });
    } catch (error) {
      setSubmitStatus({ success: false, message: 'Došlo je do greške. Molimo pokušajte ponovo.' });
    } finally {
      setIsSubmitting(false);
    }
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: { 
      y: 0, 
      opacity: 1,
      transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] }
    }
  };

  return (
    <div className="bg-bg-primary min-h-screen relative">
      <div className="absolute top-0 right-0 w-1/2 h-1/3 bg-gradient-to-bl from-accent/5 to-transparent rounded-bl-full opacity-30 pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-1/3 h-1/2 bg-gradient-to-tr from-accent/5 to-transparent rounded-tr-full opacity-30 pointer-events-none" />
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 pt-32 pb-20 relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h1 className="text-5xl md:text-6xl font-bold text-text-primary mb-4 tracking-tight">
            <span className="relative inline-block">
              Kontaktirajte
            </span><span className='text-accent'> nas</span>
          </h1>
          <p className="text-text-secondary max-w-2xl mx-auto text-lg mt-6 leading-relaxed">
            U potrazi ste za pravnim savetom? Naš tim stručnjaka je tu da odgovori na sva Vaša pitanja 
            i pruži Vam pravnu podršku koja Vam je potrebna.
          </p>
        </motion.div>

        <motion.div 
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="grid grid-cols-1 lg:grid-cols-5 gap-10"
        >
          <motion.div 
            variants={itemVariants}
            className="lg:col-span-2 bg-bg-secondary/50 backdrop-blur-sm rounded-xl shadow-lg p-8 border border-bg-light/10"
            style={{
              transform: `translateY(${scrollY * 0.05}px)`,
            }}
          >
            <div className="mb-10">
              <div className="flex items-center space-x-2 mb-2">
                <div className="w-6 h-0.5 bg-accent"></div>
                <h2 className="text-accent uppercase tracking-wider text-sm font-semibold">Kontakt informacije</h2>
              </div>
              <h3 className="text-2xl font-bold text-text-primary">Ovde smo za Vas</h3>
              <p className="text-text-secondary mt-4">
                Bilo da imate pitanje o našim uslugama ili želite da dogovorite konsultaciju, 
                naš tim je tu da Vam pomogne.
              </p>
            </div>
            
            <div className="space-y-8">
              <div className="transition-all duration-300 hover:translate-x-1">
                <div className="flex items-center space-x-4">
                  <div className="bg-bg-light/10 p-3 rounded-lg">
                    <svg className="w-6 h-6 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path>
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path>
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-text-primary font-medium">Posetite nas</h3>
                    <p className="text-text-secondary mt-1">Bulevar Mihajla Pupina 109/6</p>
                    <p className="text-text-secondary">11070, Beograd</p>
                  </div>
                </div>
              </div>
              
              <div className="transition-all duration-300 hover:translate-x-1">
                <div className="flex items-center space-x-4">
                  <div className="bg-bg-light/10 p-3 rounded-lg">
                    <svg className="w-6 h-6 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"></path>
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-text-primary font-medium">Pozovite nas</h3>
                    <a href="tel:0116128260"><p className="text-text-secondary mt-1">+381 11 61 282 60</p></a>
                  </div>
                </div>
              </div>
              
              <div className="transition-all duration-300 hover:translate-x-1">
                <div className="flex items-center space-x-4">
                  <div className="bg-bg-light/10 p-3 rounded-lg">
                    <svg className="w-6 h-6 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path>
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-text-primary font-medium">Pišite nam</h3>
                    <p className="text-text-secondary mt-1">info@lawofficesamac.rs</p>
                  </div>
                </div>
              </div>
              
              <div className="transition-all duration-300 hover:translate-x-1">
                <div className="flex items-center space-x-4">
                  <div className="bg-bg-light/10 p-3 rounded-lg">
                    <svg className="w-6 h-6 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-text-primary font-medium">Radno vreme</h3>
                    <p className="text-text-secondary mt-1">Ponedeljak - Petak: 09:00 - 17:00</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-12 pt-8 border-t border-bg-light/10">
              <div className="flex items-center space-x-2 mb-4">
                <div className="w-6 h-0.5 bg-accent"></div>
                <h2 className="text-accent uppercase tracking-wider text-sm font-semibold">Pratite nas</h2>
              </div>
              <div className="flex space-x-4">
                <a href="#" className="bg-bg-light/10 p-3 rounded-lg text-text-secondary hover:text-accent transition-colors duration-300">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"></path>
                  </svg>
                </a>
              </div>
            </div>
          </motion.div>
          
          <motion.div
            variants={itemVariants}
            className="lg:col-span-3 bg-bg-secondary/50 backdrop-blur-sm rounded-xl shadow-lg p-8 border border-bg-light/10 relative overflow-hidden"
            style={{
              transform: `translateY(${scrollY * 0.03}px)`,
            }}
          >
            <div className="absolute -top-20 -right-20 w-40 h-40 bg-accent/10 rounded-full pointer-events-none" />
            <div className="absolute -bottom-24 -left-24 w-48 h-48 bg-accent/5 rounded-full pointer-events-none" />

            <div className="mb-8">
              <div className="flex items-center space-x-2 mb-2">
                <div className="w-6 h-0.5 bg-accent"></div>
                <h2 className="text-accent uppercase tracking-wider text-sm font-semibold">Pošaljite nam poruku</h2>
              </div>
              <h3 className="text-2xl font-bold text-text-primary">Kako Vam možemo pomoći?</h3>
            </div>
            
            <form onSubmit={handleSubmit} className="space-y-6 relative z-10">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="relative">
                  <label htmlFor="name" className="block text-text-primary text-sm font-medium mb-2">Ime i prezime</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 rounded-lg bg-bg-light/10 border border-bg-light/20 focus:border-accent focus:ring-1 focus:ring-accent/50 text-text-primary outline-none transition-all duration-300"
                    placeholder="Vaše ime i prezime"
                  />
                </div>
                
                <div className="relative">
                  <label htmlFor="phone" className="block text-text-primary text-sm font-medium mb-2">Broj telefona</label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-lg bg-bg-light/10 border border-bg-light/20 focus:border-accent focus:ring-1 focus:ring-accent/50 text-text-primary outline-none transition-all duration-300"
                    placeholder="Vaš broj telefona"
                  />
                </div>
              </div>
              
              <div className="relative">
                <label htmlFor="email" className="block text-text-primary text-sm font-medium mb-2">Email adresa</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 rounded-lg bg-bg-light/10 border border-bg-light/20 focus:border-accent focus:ring-1 focus:ring-accent/50 text-text-primary outline-none transition-all duration-300"
                  placeholder="Vaša email adresa"
                />
              </div>
              
              <div className="relative">
                <label htmlFor="message" className="block text-text-primary text-sm font-medium mb-2">Poruka</label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows="6"
                  className="w-full px-4 py-3 rounded-lg bg-bg-light/10 border border-bg-light/20 focus:border-accent focus:ring-1 focus:ring-accent/50 text-text-primary outline-none transition-all duration-300 resize-none"
                  placeholder="Opišite Vaš pravni problem ili upit"
                ></textarea>
              </div>
              
              {submitStatus && (
                <motion.div 
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className={`p-4 rounded-lg ${submitStatus.success ? 'bg-green-800/20 text-green-200 border border-green-700/30' : 'bg-red-800/20 text-red-200 border border-red-700/30'}`}
                >
                  {submitStatus.message}
                </motion.div>
              )}
              
              <button
                type="submit"
                disabled={isSubmitting}
                className={`w-full py-3.5 px-6 bg-accent hover:bg-accent-hover text-bg-secondary font-medium rounded-lg transition-all duration-300 shadow-lg hover:shadow-accent/20 flex justify-center items-center group ${isSubmitting ? 'opacity-75 cursor-not-allowed' : ''}`}
              >
                {isSubmitting ? (
                  <>
                    <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-bg-secondary" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                    </svg>
                    Šaljem...
                  </>
                ) : (
                  <>
                    Pošaljite poruku
                    <svg className="ml-2 -mr-1 w-5 h-5 transform transition-transform duration-300 group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
                    </svg>
                  </>
                )}
              </button>
            </form>
          </motion.div>
        </motion.div>
        
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="mt-16"
        >
          <div className="flex flex-col md:flex-row justify-between items-center mb-8">
            <div>
              <div className="flex items-center space-x-2 mb-2">
                <div className="w-6 h-0.5 bg-accent"></div>
                <h2 className="text-accent uppercase tracking-wider text-sm font-semibold">Lokacija</h2>
              </div>
              <h3 className="text-2xl font-bold text-text-primary">Kako do nas</h3>
            </div>
            <a 
              href="https://maps.app.goo.gl/ytngDTWYgz2QjNiF9" 
              target="_blank" 
              rel="noopener noreferrer"
              className="mt-4 md:mt-0 px-6 py-3 flex items-center text-text-primary hover:text-accent transition-colors duration-300 bg-bg-secondary/50 backdrop-blur-sm rounded-lg border border-bg-light/10"
            >
              <span>Pogledajte na Google Maps</span>
              <svg className="ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"></path>
              </svg>
            </a>
          </div>
          <motion.div 
            className="rounded-xl overflow-hidden shadow-xl h-[450px] bg-bg-secondary/50 border border-bg-light/10"
            whileHover={{ scale: 1.005 }}
            transition={{ duration: 0.4 }}
          >
            <iframe 
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1415.1278882623162!2d20.42662807756421!3d44.81635363245776!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x475a65d7e22584d3%3A0x71919168a5777362!2sAdvokatska%20kancelarija%20Samac%20i%20saradnici!5e0!3m2!1ssr!2srs!4v1746830805302!5m2!1ssr!2srs"
              width="100%" 
              height="100%" 
              style={{ border: 0 }} 
              allowFullScreen="" 
              loading="lazy" 
              referrerPolicy="no-referrer-when-downgrade"
              title="Law Office Location"
            ></iframe>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
}

export default Contact;