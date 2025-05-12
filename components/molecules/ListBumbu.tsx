"use client";

import Image from "next/image";
import { useBumbuContext } from "@/contexts/BumbuContext";
import { useBumbuSelected } from "@/contexts/SelectedBumbuContext";

const ListBumbu = () => {
  const data = useBumbuContext();
  const { setSelectedBumbu } = useBumbuSelected();

  const handleSelectedImage = (e: React.MouseEvent<HTMLImageElement>) => {
    const target = e.target as HTMLImageElement;

    setSelectedBumbu({
      nama: target.getAttribute("data-name") ?? "",
      gambar: target.getAttribute("data-image") ?? "",
      deskripsi: target.getAttribute("data-desc") ?? "",
    });

    const selectedImage = document.querySelectorAll(".cover");
    selectedImage.forEach((image) => {
      if (image.classList.contains("selected")) {
        image.classList.remove("selected");
      }
    });
    target.classList.add("selected");
  };

  return (
    <section className="list-bumbu" onClick={handleSelectedImage}>
      {data.map((bumbu) => {
        return (
          <div className="list-bumbu-image" key={bumbu.id}>
            <Image width={1080} height={1080} src={bumbu.gambar} alt={bumbu.nama} title={bumbu.nama} />
            <div data-name={bumbu.nama} data-desc={bumbu.deskripsi} data-image={bumbu.gambar} className="cover" />
          </div>
        );
      })}
    </section>
  );
};

export default ListBumbu;
