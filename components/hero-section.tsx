import Image from "next/image";

export default function HeroSection() {
  return (
    <section className="relative w-full pt-20">
      {/* Mobile Image - Full viewport height */}
      <div
        className="relative w-full lg:hidden"
        style={{ height: "calc(100vh - 80px)" }}
      >
        <Image
          src="/images/hero-mobile.webp"
          alt="Hubtown Trade Centre Mobile Hero"
          fill
          className="object-cover"
          priority
          sizes="(max-width: 1024px) 100vw, 0vw"
        />
      </div>

      {/* Desktop Image - Natural sizing */}
      <div className="relative w-full hidden lg:block">
        <Image
          src="/images/hero-desktop.webp"
          alt="Hubtown Trade Centre Desktop Hero"
          width={1920}
          height={1080}
          className="w-full h-auto"
          priority
          sizes="(min-width: 1024px) 100vw, 0vw"
        />
      </div>

      {/* Optional: Content overlay */}
      <div className="absolute inset-0 z-10 flex items-center justify-center">
        {/* Add any overlay content here if needed */}
      </div>
    </section>
  );
}
