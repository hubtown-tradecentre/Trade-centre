export default function HeroSection() {
  return (
    <section
      className="relative h-screen flex items-center justify-center lg:justify-start bg-cover bg-center bg-no-repeat"
      style={{
        backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)), url('/images/hero banner image.webp')`,
      }}
    >
      <div className="text-white px-4 max-w-4xl mx-auto md:mt-24 mt-0 lg:mt-0 lg:ml-12">
        <div className="animate-fade-in-up">
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-4 leading-tight">
            NEW ADDRESS
            <br />
            FOR SUCCESS
          </h1>

          <div className="flex items-center mb-6">
            <svg
              className="w-6 h-6 mr-2"
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <path
                fillRule="evenodd"
                d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z"
                clipRule="evenodd"
              />
            </svg>
            <span className="text-xl md:text-2xl">MEHSANA, GUJARAT</span>
          </div>

          <h2 className="text-2xl md:text-4xl lg:text-5xl font-bold text-yellow-400 mb-4">
            HUBTOWN TRADE CENTRE
          </h2>

          <p className="text-xl md:text-2xl font-medium">
            SHOPS | OFFICES | MARKET
          </p>
        </div>
      </div>
    </section>
  );
}
