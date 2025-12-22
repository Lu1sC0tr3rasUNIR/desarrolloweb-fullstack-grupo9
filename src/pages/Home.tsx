import Card from "@/components/card";
import Category from "@/components/category";
import useLocalStorage from "@/hooks/useLocalStorage";
import { useState } from "react";

export default function Home() {
  const [query, setQuery] = useState("");
  const { books } = useLocalStorage();

  // 🧠 Filtramos los libros que coincidan con el texto
  const filteredBooks = books.size
    ? Array.from(books.values()).filter((book) =>
        book.title.toLowerCase().includes(query.toLowerCase())
      )
    : [];

  return (
    <div className="container-home">
      <div className="container-home_category">
        <Category />
      </div>
      <div className="container-home_books">
        <div className="container-home_books_promotion">
          <p>PROMOCIONES</p>
        </div>
        <div className="container-home_books_view">
          {filteredBooks.length > 0 ? (
            filteredBooks.map((b, idx) => (
              <Card
                key={idx}
                title={b.title}
                description={b.description}
                isbn={b.isbn}
              />
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
