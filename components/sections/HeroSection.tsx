type HeroProps = {
  hero_img: string;
  logo_img: string;
};

import Logo from "../atoms/Logo";

export default function HeroSection({ hero_img, logo_img }: HeroProps) {
  console.log(logo_img);

  return (
    <section className="w-full h-[379px] bg-no-repeat bg-cover bg-center mb-[50px] grid justify-center" style={{ backgroundImage: `url(${hero_img})` }} id="home">
      <Logo logo_img={logo_img} />
      <ul className="navbar-hero">
        <li>
          <a href="#about">Tentang Kami</a>
        </li>
        <li>
          <a href="#product">Produk</a>
        </li>
        <li>
          <a href="#contact">Kontak</a>
        </li>
      </ul>
    </section>
  );
}
