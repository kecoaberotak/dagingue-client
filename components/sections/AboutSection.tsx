export default function AboutSection({ about }: { about: string }) {
  return (
    <section className="p-8 bg-white text-center">
      <h2 className="text-xl font-semibold mb-4">Tentang Kami</h2>
      <p>{about}</p>
    </section>
  );
}
