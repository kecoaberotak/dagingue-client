"use client";

import React, { createContext, useState, useContext, ReactNode } from "react";

type SelectedBumbuType = {
  nama: string;
  gambar: string;
  deskripsi: string;
};

const SelectedBumbuContext = createContext<{ selectedBumbu: SelectedBumbuType | null; setSelectedBumbu: React.Dispatch<React.SetStateAction<SelectedBumbuType | null>> } | undefined>(undefined);

export const SelectedBumbuProvider = ({ children }: { children: ReactNode }) => {
  const [selectedBumbu, setSelectedBumbu] = useState<SelectedBumbuType | null>(null);

  return <SelectedBumbuContext.Provider value={{ selectedBumbu, setSelectedBumbu }}>{children}</SelectedBumbuContext.Provider>;
};

export const useBumbuSelected = () => {
  const context = useContext(SelectedBumbuContext);
  if (!context) {
    throw new Error("useBumbuSelected must be used within BumbuSelectedProvider");
  }
  return context;
};
