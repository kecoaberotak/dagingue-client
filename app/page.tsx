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
  const social_shopee = getValueByKey(data, "social_shopee");
  const social_instagram = getValueByKey(data, "social_instagram");
  const social_whatsapp = getValueByKey(data, "social_whatsapp");

  return (
    <main className="min-h-screen w-full">
      <HeroSection hero_img={heroImage} logo_img={logoImage} social_shopee={social_shopee} social_instagram={social_instagram} social_whatsapp={social_whatsapp} />
    </main>
  );
}
