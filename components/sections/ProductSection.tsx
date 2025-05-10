import Potong from "../organism/Potong";
import { getPotongData } from "@/services/product.service";
import { PotongProvider } from "@/contexts/PotongContext";

export default async function ProductSection() {
  const data = await getPotongData();
  return (
    <section id="product" className="product">
      {/* @ts-expect-error: Data type mismatch is intentionally ignored */}
      <PotongProvider value={data}>
        <Potong />
      </PotongProvider>
    </section>
  );
}
