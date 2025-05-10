import Image from "next/image";

const Card = ({ nama, gambar, berat }: { nama: string; gambar: string; berat: string }) => {
  return (
    <div className="card" data-testid="card-potong">
      <section className="card-product">
        <Image className="potong-img" src={gambar} alt={nama} title={nama} width={1080} height={1080} />
      </section>
      <section className="card-product-info">
        <p>{nama}</p>
        <p>{berat}</p>
      </section>
    </div>
  );
};

export default Card;
