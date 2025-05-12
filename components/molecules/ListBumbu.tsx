"use client";

import Image from "next/image";
import { useBumbuContext } from "@/contexts/BumbuContext";

const ListBumbu = () => {
  const data = useBumbuContext();

  return (
    <section className="gallery-items">
      {data.map((bumbu) => {
        return (
          <div className="gallery-item-image" key={bumbu.id}>
            <Image width={1080} height={1080} src={bumbu.gambar} alt={bumbu.nama} title={bumbu.nama} />
          </div>
        );
      })}
    </section>
  );
};

export default ListBumbu;
