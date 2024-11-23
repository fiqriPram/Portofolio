const Hero = () => {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center bg-white dark:bg-slate-900">
      <div className="container mx-auto px-6 py-50 text-center">
        <h1 className="text-5xl md:text-6xl font-bold mb-6 text-gray-900 dark:text-white">
          Hi, I&apos;m <span className="text-blue-600 dark:text-blue-400">Fiqri Pramudya</span>
        </h1>
        <p className="text-xl md:text-2xl text-gray-700 dark:text-gray-300 mb-8">
          Frontend Developer 
        </p>
        <button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg shadow-lg hover:shadow-xl transition-all">
          View My Work
        </button>
      </div>
    </section>
  );
};

export default Hero;
