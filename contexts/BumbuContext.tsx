"use client";

import React, { createContext, useContext, ReactNode } from "react";

export type BumbuContextType = {
  id: string;
  nama: string;
  gambar: string;
  deskripsi: string;
  harga: number;
};

const BumbuContext = createContext<BumbuContextType[] | undefined>(undefined);

export const BumbuProvider = ({ children, value }: { children: ReactNode; value: BumbuContextType[] }) => {
  return <BumbuContext.Provider value={value}>{children}</BumbuContext.Provider>;
};

export const useBumbuContext = () => {
  const context = useContext(BumbuContext);
  if (!context) {
    throw new Error("useBumbuContext must be used within BumbuProvider");
  }
  return context;
};
