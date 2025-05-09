import { useState, useEffect } from 'react';

function LoadingScreen() {
  const [progress, setProgress] = useState(0);
  const [fadeOut, setFadeOut] = useState(false);
  
  useEffect(() => {
    const interval = setInterval(() => {
      setProgress(prevProgress => {
        const increment = prevProgress < 70 ? 
          Math.random() * 15 + 5 : 
          Math.random() * 3 + 1;
          
        const nextProgress = Math.min(prevProgress + increment, 100);
        
        if (nextProgress === 100) {
          setTimeout(() => {
            setFadeOut(true);
          }, 600);
          clearInterval(interval);
        }
        
        return nextProgress;
      });
    }, 150);
    
    return () => clearInterval(interval);
  }, []);
  
  if (fadeOut) {
    return null;
  }
  
  return (
    <div 
      className={`fixed inset-0 z-[100] flex flex-col items-center justify-center bg-bg-secondary transition-opacity duration-1000 ${
        progress === 100 ? 'opacity-0 pointer-events-none' : 'opacity-100'
      }`}
    >
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-[15%] right-[10%] w-[30vw] h-[30vw] bg-accent/5 rounded-full blur-3xl animate-pulse-slow"></div>
        <div className="absolute bottom-[20%] left-[5%] w-[25vw] h-[25vw] bg-accent/3 rounded-full blur-3xl animate-pulse-slow" style={{ animationDelay: "2s" }}></div>
      </div>
      
      <div className="relative flex flex-col items-center">
        <div className="mb-8 flex items-center">
          <div className={`w-20 h-20 rounded-full bg-accent/10 flex items-center justify-center mr-5 transition-transform duration-1000 ${
            progress > 95 ? 'scale-110' : ''
          }`}>
            <span className="text-accent text-5xl transform">⚖️</span>
          </div>
          <div className="border-l-2 border-accent/30 pl-5">
            <div className="text-text-primary text-lg tracking-wider uppercase font-medium">Advokatska kancelarija</div>
            <div className="text-accent text-3xl font-bold tracking-wide">Samac i saradnici</div>
          </div>
        </div>
        
        <div className="w-80 mb-10">
          <div className="relative h-0.5 w-full bg-bg-light/30 overflow-hidden rounded-full">
            <div 
              className="absolute top-0 left-0 h-full bg-accent transition-all duration-300 ease-out rounded-full"
              style={{ width: `${progress}%` }}
            ></div>
          </div>
          <div className="mt-3 flex justify-between items-center text-xs text-text-secondary">
            <span>Učitavanje</span>
            <span>{Math.round(progress)}%</span>
          </div>
        </div>
        
        <div className="h-6 text-center text-text-secondary opacity-75">
          {progress < 30 && (
            <p className="text-sm animate-fade-in">Pripremamo resurse...</p>
          )}
          {progress >= 30 && progress < 60 && (
            <p className="text-sm animate-fade-in">Učitavanje sadržaja...</p>
          )}
          {progress >= 60 && progress < 85 && (
            <p className="text-sm animate-fade-in">Skoro gotovo...</p>
          )}
          {progress >= 85 && (
            <p className="text-sm animate-fade-in">Završne pripreme...</p>
          )}
        </div>
      </div>
    </div>
  );
}

export default LoadingScreen;