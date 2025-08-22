import Image from "next/image";

export default function HeroSection() {
  return (
    <section className="relative w-full pt-20">
      {/* Mobile Image - Natural sizing, no black bg */}
      <div className="relative w-full lg:hidden">
        <Image
          src="/images/hero-mobile.webp"
          alt="Hubtown Trade Centre Mobile Hero"
          width={1080} // use your actual image width
          height={1920} // use your actual image height
          className="w-full h-auto"
          priority
          sizes="(max-width: 1024px) 100vw, 0vw"
        />
      </div>

      {/* Desktop Image */}
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
    </section>
  );
}
