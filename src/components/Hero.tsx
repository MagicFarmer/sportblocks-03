
const Hero = () => {
  return (
    <section className="relative px-6 py-20">
      <div className="max-w-7xl mx-auto text-center">
        <div className="mb-8">
          <h1 className="text-5xl md:text-7xl font-bold mb-6">
            <span className="bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 bg-clip-text text-transparent">
              Sport
            </span>
            <span className="text-white">Blocks</span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto">
            The ultimate marketplace for sports NFTs on StarkNet. 
            Collect legendary moments from your favorite athletes.
          </p>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          <div className="bg-white/5 backdrop-blur-lg rounded-2xl p-6 border border-white/10">
            <div className="text-3xl font-bold text-white mb-2">10K+</div>
            <div className="text-gray-400">NFTs Minted</div>
          </div>
          <div className="bg-white/5 backdrop-blur-lg rounded-2xl p-6 border border-white/10">
            <div className="text-3xl font-bold text-white mb-2">500+</div>
            <div className="text-gray-400">Athletes</div>
          </div>
          <div className="bg-white/5 backdrop-blur-lg rounded-2xl p-6 border border-white/10">
            <div className="text-3xl font-bold text-white mb-2">2.5M</div>
            <div className="text-gray-400">ETH Volume</div>
          </div>
        </div>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button className="px-8 py-4 bg-gradient-to-r from-blue-500 to-purple-600 text-white font-semibold rounded-xl hover:from-blue-600 hover:to-purple-700 transform hover:scale-105 transition-all duration-200 shadow-lg hover:shadow-xl">
            Explore Collection
          </button>
          <button className="px-8 py-4 border border-white/20 text-white font-semibold rounded-xl hover:bg-white/10 transform hover:scale-105 transition-all duration-200">
            Learn More
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
