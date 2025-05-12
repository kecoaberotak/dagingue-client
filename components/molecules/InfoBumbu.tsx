"use client";

import Image from "next/image";
import { useBumbuContext } from "@/contexts/BumbuContext";

const InfoBumbu = () => {
  const data = useBumbuContext();

  return (
    <section className="info-bumbu">
      <div className="selected-bumbu-image">
        <Image src={data[0].gambar} alt={data[0].nama} title={data[0].nama} width={1080} height={1080} className="default" />
      </div>
      <div className="selected-bumbu-desc">
        <h2>{data[0].nama}</h2>
        <div className="w-[300px] h-[120px] sm:w-[376px] sm:h-[130px]" dangerouslySetInnerHTML={{ __html: data[0].deskripsi }} />
      </div>
    </section>
  );
};

export default InfoBumbu;
