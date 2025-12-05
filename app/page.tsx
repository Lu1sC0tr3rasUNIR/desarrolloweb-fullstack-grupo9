"use client";

import Button from "@/components/button";
import Card from "@/components/card";
import { IBooks, myBackend } from "@/lib/myBackend";
import { useState } from "react";

export default function Home() {
  const [query, setQuery] = useState("");
  const books: IBooks[] = myBackend();

  // 🧠 Filtramos los libros que coincidan con el texto
  const filteredBooks = books.filter(
    (b) =>
      b.title.toLowerCase().includes(query.toLowerCase()) 
  );

  return (
    <div className="container">
      <div className="container_header">
        <h1 className="">Filtro de búsqueda</h1>
        <input
          type="text"
          placeholder="Buscar..."
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />
        <Button label="Buscar" variant="primary"></Button>
        <Button label="Buscar" variant="danger"></Button>
        <Button label="Buscar" variant="success"></Button>
        <Button label="Buscar" variant="alert"></Button>
      </div>
      <div className="container_info">
        <div className="container_filter">
          
        </div>
        <div className="container_books">
          {filteredBooks.length > 0 ? (
            filteredBooks.map((b, idx) => (
              <Card key={idx} title={b.title} description={b.description} isbn={b.isbn} />
            ))
          ) : (
            <p className="text-gray-500 col-span-full text-center">
              No se encontraron libros.
            </p>
          )}
        </div>
      </div>
    </div>
  );
}
