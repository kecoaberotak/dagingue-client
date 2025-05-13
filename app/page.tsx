import HeroSection from "@/components/sections/HeroSection";
import AboutSection from "@/components/sections/AboutSection";
import ProductSection from "@/components/sections/ProductSection";
import FooterSection from "@/components/sections/FooterSection";
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
  const about_us = getValueByKey(data, "about_us");
  const img_1 = getValueByKey(data, "img_1");
  const img_2 = getValueByKey(data, "img_2");
  const banner_product = getValueByKey(data, "banner_product");
  const banner_footer = getValueByKey(data, "banner_footer");

  return (
    <main className="min-h-screen w-full">
      <HomeProvider value={{ hero_image, logo_image, social_instagram, social_shopee, social_whatsapp, about_us, img_1, img_2, banner_footer, banner_product }}>
        <HeroSection />
        <AboutSection />
        <ProductSection />
        <FooterSection />
      </HomeProvider>
    </main>
  );
}
