"use client";

import { useBumbuContext } from "@/contexts/BumbuContext";
import Title from "../atoms/Title";
import Image from "next/image";
import ListBumbu from "../molecules/ListBumbu";

export default function Bumbu() {
  const data = useBumbuContext();

  return (
    <section className="product-bumbu">
      <Title classname="title-section bumbu" title="Produk" subTitle="Varian Bumbu" />
      <div className="gallery">
        <section className="gallery-info">
          <div className="gallery-info-image">
            <Image src={data[0].gambar} alt={data[0].nama} title={data[0].nama} width={1080} height={1080} className="default" />
          </div>
          <div className="gallery-info-bumbu">
            <h2>{data[0].nama}</h2>
            <div className="w-[300px] h-[120px] sm:w-[376px] sm:h-[130px]" dangerouslySetInnerHTML={{ __html: data[0].deskripsi }} />
          </div>
        </section>
        <ListBumbu />
      </div>
    </section>
  );
}
