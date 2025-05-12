"use client";

import { useHomeContext } from "@/contexts/HomeContext";
import Title from "../atoms/Title";
import Socmed from "../atoms/Socmed";
import Logo from "../atoms/Logo";

export default function FooterSection() {
  const { banner_product } = useHomeContext();

  return (
    <>
      <section className="footer-banner" style={{ backgroundImage: `url(${banner_product})` }}>
        <Title classname="banner-info" title="Kontak" subTitle="Hubungi Kami" />
      </section>
      <section className="footer-contact" style={{ backgroundImage: `url(${banner_product})` }}>
        <div className="contact-info">
          <section className="contact-info-main">
            <p>
              <a href="mailto:dennisfernandes0212@gmail.com">dagingue@gmail.com</a>
            </p>
            <p>085716059444</p>
            <p>
              Perumahan Bumi Menteng Asri
              <br />
              Blok BN 20. RT 02 RW 03
              <br />
              Bogor, Jawa Barat
            </p>
            <p>
              <a href="https://goo.gl/maps/ypBTX8cgGmkmHZGUA" target="_blank" rel="noreferrer">
                <u>Lihat pada peta</u>
              </a>
            </p>
          </section>
          <Socmed />
        </div>
        <Logo classname="contact-logo" />
      </section>
    </>
  );
}
