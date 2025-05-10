"use client";

import { useHomeContext } from "@/contexts/HomeContext";
import { usePotongContext } from "@/contexts/PotongContext";
import Title from "../atoms/Title";
import Card from "../molecules/Card";

export default function ProductSection() {
  const { banner_product } = useHomeContext();
  const data = usePotongContext();

  let classname = "";
  if (data) {
    if (data.length > 2) {
      classname = "cards-product-3";
    } else if (data.length < 2) {
      classname = "cards-product-1";
    } else classname = "cards-product-2";
  }

  return (
    <section className="product-potong" id="product" style={{ backgroundImage: `url(${banner_product})` }}>
      <Title classname="title-section potong" title="Produk" subTitle="Jenis Potongan" />
      <section className={classname}>
        {data.map((potong) => {
          return <Card key={potong.id} nama={potong.nama} gambar={potong.gambar} berat={potong.berat} />;
        })}
      </section>
    </section>
  );
}
