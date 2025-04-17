type HeroProps = {
  hero_img: string;
  logo_img: string;
};

export default function HeroSection({ hero_img, logo_img }: HeroProps) {
  return (
    <section className="relative w-full h-screen flex items-center justify-center overflow-hidden">
      <img src={hero_img} alt="Hero Image" className="absolute inset-0 w-full h-full object-cover z-0" />
      <div className="relative z-10 text-center">
        <img src={logo_img} alt="Logo" className="w-32 h-32 mx-auto mb-4" />
        <h1 className="text-3xl md:text-5xl font-bold text-white">Selamat Datang</h1>
        <p className="text-white mt-2">Daging & Bumbu Siap Masak Terbaik</p>
      </div>
      <div className="absolute inset-0 bg-black/40 z-[1]" />
    </section>
  );
}
