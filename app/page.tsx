import Navbar from "./components/Navbar";

export default function Home() {
  return (
    <>
      <Navbar />

      <main className="pt-28">
        <span className="block font-semibold text-base text-center">Catálogo</span>

        <h1 className="font-bold text-5xl my-4 text-center">Produtos</h1>

        <p className="text-lg text-center">Escolha entre nossa seleção cuidadosa de itens disponíveis em diferentes cores e tamanhos.</p>

        <section className="grid grid-cols-3 py-20 px-20 gap-12">
          <div className="w-fit">
            <div className="bg-cover bg-center w-100 h-122.5 mb-4" style={{ backgroundImage: "url('/images/shop-placeholder.jpg')" }} />

            <div>
              <div className="mb-2">
                <span className="block text-center text-lg font-semibold">Camiseta Básica</span>
                <span className="block text-center text-sm">Branca</span>
              </div>
              <span className="block text-center text-xl">R$ 79,90</span>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
