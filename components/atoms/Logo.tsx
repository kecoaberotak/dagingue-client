"use client";

import Image from "next/image";
import { useHomeContext } from "@/contexts/HomeContext";

export default function Logo(props: { classname: string }) {
  const { classname } = props;
  const { logo_image = "" } = useHomeContext();

  return (
    <div className={classname}>
      <Image src={logo_image} alt="Logo" title="Logo Dagingue" width={283} height={233} />
    </div>
  );
}
