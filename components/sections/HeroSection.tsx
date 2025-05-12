"use client";

import { useHomeContext } from "@/contexts/HomeContext";
import Logo from "../atoms/Logo";
import Socmed from "../atoms/Socmed";

export default function HeroSection() {
  const { hero_image = "" } = useHomeContext();

  return (
    <section className="hero" style={{ backgroundImage: `url(${hero_image})` }} id="home">
      <Logo classname="logo" />
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
      <Socmed />
    </section>
  );
}
