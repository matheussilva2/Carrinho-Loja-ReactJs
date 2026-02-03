"use client";

import { useEffect, useState } from "react";
import Navbar from "./components/Navbar";
import { Product } from "./types/product";
import { productsApi } from "./services/axios";
import { formatCurrency } from "./utils/formatCurrency";

type ProductApiType = {
  id: number;
  title: string;
  price: number;
  description: string;
  category: string;
  image: string;
  rating: {
    rate: number;
    count: number;
  }
};

export default function Home() {
  const [products, setProducts] = useState<Product[]>([]);

  const loadProducts = () => {
    productsApi.get("/products")
      .then((response) => {
        const data: Product[] = [];

        response.data.map((item: ProductApiType) => {
          data.push({
            id: item.id,
            title: item.title,
            price: item.price,
            image: item.image
          });
        })

        setProducts(data);
      })
  }

  useEffect(() => {
    loadProducts();
  }, []);

  return (
    <>
      <Navbar />

      <main className="pt-28">
        <span className="block font-semibold text-base text-center">Catálogo</span>

        <h1 className="font-bold text-5xl my-4 text-center">Produtos</h1>

        <p className="text-lg text-center">Escolha entre nossa seleção cuidadosa de itens disponíveis em diferentes cores e tamanhos.</p>

        <section className="grid grid-cols-3 py-20 px-20 gap-12">
          {
            products.map((product) => (
              <div key={product.id} className="w-fit">
                <div
                  className="bg-cover bg-center w-100 h-122.5 mb-4"
                  style={{ backgroundImage: `url('${product.image}')` }}
                />

                <div>
                  <div className="mb-2">
                    <span className="block text-center text-lg font-semibold">{product.title}</span>
                    <span className="block text-center text-sm">Azul</span>
                  </div>
                  <span className="block text-center text-xl">{`${formatCurrency(product.price)}`}</span>
                </div>
              </div>
            ))
          }
        </section>
      </main>
    </>
  );
}
