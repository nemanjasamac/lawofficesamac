import Navbar from './components/Navbar';

function App() {
  return (
    <div className="min-h-screen bg-bg-primary text-text-primary">
      <Navbar />
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 pt-24">
        <p className='text-accent font-bold text-2xl'>Dobrodošli u Advokatsku kancelariju Samac i saradnici</p>
      </main>
    </div>
  );
}

export default App;
