const Card = ({ nama, gambar, berat }: { nama: string; gambar: string; berat: string }) => {
  return (
    <div className="card" data-testid="card-potong">
      <section className="card-product">
        <img className="potong-img" src={gambar} alt={nama} title={nama} />
      </section>
      <section className="card-product-info">
        <p>{nama}</p>
        <p>{berat}</p>
      </section>
    </div>
  );
};

export default Card;
