import Title from "../atoms/Title";
import ListBumbu from "../molecules/ListBumbu";
import InfoBumbu from "../molecules/InfoBumbu";

export default function Bumbu() {
  return (
    <section className="product-bumbu">
      <Title classname="title-section bumbu" title="Produk" subTitle="Varian Bumbu" />
      <div className="gallery">
        <InfoBumbu />
        <ListBumbu />
      </div>
    </section>
  );
}
