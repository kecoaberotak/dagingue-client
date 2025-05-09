"use client";

import { useHomeContext } from "@/contexts/HomeContext";
import Title from "../atoms/Title";

export default function ProductSection() {
  const { banner_product } = useHomeContext();

  return (
    <section className="product" id="product" style={{ backgroundImage: `url(${banner_product})` }}>
      <Title classname="title-section potong" title="Produk" subTitle="Jenis Potongan" />
    </section>
  );
}
