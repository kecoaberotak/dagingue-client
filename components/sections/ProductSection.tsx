"use client";

// import { PotongProvider } from "@/contexts/PotongContext";
// import { getPotongData } from "@/services/product.service";
import { useHomeContext } from "@/contexts/HomeContext";

export default function ProductSection() {
  const { banner_product } = useHomeContext();
  return (
    <section className="product" id="product" style={{ backgroundImage: `url(${banner_product})` }}>
      <div className="product-potong">
        <section className="title-section potong">
          <h3>Produk</h3>
          <p>Jenis Potongan</p>
        </section>
      </div>
    </section>
  );
}
