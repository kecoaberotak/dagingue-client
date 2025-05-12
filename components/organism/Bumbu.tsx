import Title from "../atoms/Title";
import ListBumbu from "../molecules/ListBumbu";
import InfoBumbu from "../molecules/InfoBumbu";
import { SelectedBumbuProvider } from "@/contexts/SelectedBumbuContext";

export default function Bumbu() {
  return (
    <section className="product-bumbu">
      <Title classname="title-section bumbu" title="Produk" subTitle="Varian Bumbu" />
      <div className="gallery">
        <SelectedBumbuProvider>
          <InfoBumbu />
          <ListBumbu />
        </SelectedBumbuProvider>
      </div>
    </section>
  );
}
