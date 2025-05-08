export const metadata = {
  title: "Landing Page - Daging & Bumbu",
  description: "Daging dan Bumbu siap masak dengan kualitas terbaik. Tersedia produk segar, higienis, dan praktis.",
};

import HeroSection from "@/components/sections/HeroSection";
import { getContentData } from "@/services/home.service";
import { getValueByKey } from "@/utils/getValueByKey";
import { HomeProvider } from "@/contexts/HomeContext";

export default async function Home() {
  const data = await getContentData();

  if (!data) {
    throw new Error("Failed to load landing page data");
  }

  const hero_image = getValueByKey(data, "hero_image");
  const logo_image = getValueByKey(data, "logo_image");
  const social_shopee = getValueByKey(data, "social_shopee");
  const social_instagram = getValueByKey(data, "social_instagram");
  const social_whatsapp = getValueByKey(data, "social_whatsapp");

  return (
    <main className="min-h-screen w-full">
      <HomeProvider value={{ hero_image, logo_image, social_instagram, social_shopee, social_whatsapp }}>
        <HeroSection />
      </HomeProvider>
    </main>
  );
}
