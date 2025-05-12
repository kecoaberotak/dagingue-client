import Potong from "../organism/Potong";
import Bumbu from "../organism/Bumbu";
import { getPotongData, getBumbuData } from "@/services/product.service";
import { PotongProvider } from "@/contexts/PotongContext";
import { BumbuProvider } from "@/contexts/BumbuContext";

export default async function ProductSection() {
  const dataPotong = await getPotongData();
  const dataBumbu = await getBumbuData();

  return (
    <section id="product" className="product">
      {/* @ts-expect-error: Data type mismatch is intentionally ignored */}
      <PotongProvider value={dataPotong}>
        <Potong />
      </PotongProvider>
      {/* @ts-expect-error: Data type mismatch is intentionally ignored */}
      <BumbuProvider value={dataBumbu}>
        <Bumbu />
      </BumbuProvider>
    </section>
  );
}
