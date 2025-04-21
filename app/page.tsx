export const metadata = {
  title: "Landing Page - Daging & Bumbu",
  description: "Daging dan Bumbu siap masak dengan kualitas terbaik. Tersedia produk segar, higienis, dan praktis.",
};

import HeroSection from "@/components/sections/HeroSection";
import { getContentData } from "@/services/home.service";
import { getValueByKey } from "@/utils/getValueByKey";

export default async function Home() {
  const data = await getContentData();

  if (!data) {
    throw new Error("Failed to load landing page data");
  }

  const heroImage = getValueByKey(data, "hero_image");
  const logoImage = getValueByKey(data, "logo_image");

  return (
    <main className="min-h-screen py-10 px-4">
      <HeroSection hero_img={heroImage} logo_img={logoImage} />
    </main>
  );
}
