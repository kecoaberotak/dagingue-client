type HeroProps = {
  hero_img: string;
  logo_img: string;
};

import Image from "next/image";

export default function HeroSection({ hero_img, logo_img }: HeroProps) {
  return (
    <section className="w-full h-[379px] bg-no-repeat bg-cover bg-center mb-[50px] grid justify-center" style={{ backgroundImage: `url(${hero_img})` }}>
      <div className="relative z-10 text-center">
        <Image src={logo_img} alt="Logo" className="w-32 h-32 mx-auto mb-4" width={700} height={700} />
        <h1 className="text-3xl md:text-5xl font-bold text-white">Selamat Datang</h1>
        <p className="text-white mt-2">Daging & Bumbu Siap Masak Terbaik</p>
      </div>
      <div className="absolute inset-0 bg-black/40 z-[1]" />
    </section>
  );
}
