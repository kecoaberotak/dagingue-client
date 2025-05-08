"use client";

import { useHomeContext } from "@/contexts/HomeContext";
import Image from "next/image";

export default function AboutSection() {
  const { about_us = "", img_1 = "", img_2 = "" } = useHomeContext();

  return (
    <section id="about" className="about">
      <div className="image-about">
        <Image src={img_1} alt="Tentang Dagingue" title="Tentang Dagingue" className="foto-1" width={1080} height={1080} />
        <Image src={img_2} alt="Tentang Dagingue" title="Tentang Dagingue" className="foto-2" width={1080} height={1080} />
      </div>
      <article className="article-about">
        <h1>Tentang Dagingue Bogor</h1>
        <div dangerouslySetInnerHTML={{ __html: about_us }} data-testid="article-content"></div>
      </article>
    </section>
  );
}
