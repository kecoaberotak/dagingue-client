"use client";

import { useState } from "react";
import { Button } from "./ui/button";
import clsx from "clsx";

const TestCard = () => {
  const [isActive, setIsActive] = useState(false);

  return (
    <div className="max-w-md mx-auto mt-10 p-6 border rounded-2xl shadow-md space-y-4">
      <h2 className="text-2xl font-semibold">Tes Komponen UI</h2>
      <p className={clsx("transition-all", isActive ? "text-green-600" : "text-gray-600")}>Status: {isActive ? "Aktif" : "Nonaktif"}</p>
      <Button onClick={() => setIsActive((prev) => !prev)} variant={isActive ? "destructive" : "default"}>
        {isActive ? "Nonaktifkan" : "Aktifkan"}
      </Button>
    </div>
  );
};

export default TestCard;
