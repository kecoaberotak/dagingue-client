import Image from "next/image";

export default function Logo({ logo_image }: { logo_image: string }) {
  return (
    <div className="w-full mt-[50px] grid justify-center">
      <Image src={logo_image} alt="Logo" title="Logo Dagingue" width={283} height={233} />
    </div>
  );
}
