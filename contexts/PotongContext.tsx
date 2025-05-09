"use client";

import React, { createContext, useContext, ReactNode } from "react";

export type PotongContextType = {
  nama: string;
  gambar: string;
  berat: string;
};

const PotongContext = createContext<Partial<PotongContextType> | undefined>(undefined);

export const PotongProvider = ({ children, value }: { children: ReactNode; value: Partial<PotongContextType> }) => {
  return <PotongContext.Provider value={value}>{children}</PotongContext.Provider>;
};

export const usePotongContext = () => {
  const context = useContext(PotongContext);
  if (!context) {
    throw new Error("usePotongContext must be used within HomeProvider");
  }
  return context;
};
