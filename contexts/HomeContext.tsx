"use client";

import React, { createContext, useContext, ReactNode } from "react";

// Menggunakan tipe HeroProps langsung untuk context
export type HomeContextType = {
  hero_image: string;
  logo_image: string;
  social_shopee: string;
  social_instagram: string;
  social_whatsapp: string;
  about_us: string;
  img_1: string;
  img_2: string;
  banner_footer: string;
  banner_product: string;
};

// Tipe context adalah Partial<HomeContextType> agar data bisa optional
const HomeContext = createContext<Partial<HomeContextType> | undefined>(undefined);

export const HomeProvider = ({ children, value }: { children: ReactNode; value: Partial<HomeContextType> }) => {
  return <HomeContext.Provider value={value}>{children}</HomeContext.Provider>;
};

export const useHomeContext = () => {
  const context = useContext(HomeContext);
  if (!context) {
    throw new Error("useHomeContext must be used within HomeProvider");
  }
  return context;
};
