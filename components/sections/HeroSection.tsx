type HeroProps = {
  hero_img: string;
  logo_img: string;
  social_whatsapp: string;
  social_shopee: string;
  social_instagram: string;
};

import Logo from "../atoms/Logo";
import Socmed from "../atoms/Socmed";

export default function HeroSection({ hero_img, logo_img, social_instagram, social_shopee, social_whatsapp }: HeroProps) {
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
      <Socmed social_instagram={social_instagram} social_shopee={social_shopee} social_whatsapp={social_whatsapp} />
    </section>
  );
}
