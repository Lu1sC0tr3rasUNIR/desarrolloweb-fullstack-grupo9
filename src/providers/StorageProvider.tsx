import { StorageContext } from "@/context/StorageContext";
import { ICheckbox } from "@/interfaces/components/ICheckbox";
import { IBooks } from "@/interfaces/lib/myBackendInterface";
import { myBackend, myCategorys } from "@/lib/myBackend";
import { useEffect, useMemo, useState } from "react";

export default function StorageProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  // StorageProvider logic here
  const [books, setBooks] = useState<Map<string, IBooks>>(new Map());
  const [category, setCategory] = useState<Map<string, ICheckbox>>(new Map());


  const addBook = (book: IBooks) => {
    setBooks((prevBooks) => new Map(prevBooks).set(book.isbn, book));
  };

  const removeBook = (isbn: string) => {
    setBooks((prevBooks) => {
      const newBooks = new Map(prevBooks);
      newBooks.delete(isbn);
      return newBooks;
    });
  };

  const getBook = (isbn: string): IBooks | undefined => {
    return books.get(isbn);
  };

  useEffect(() => {
    const storedBooks = myBackend();
    const categoryBooks = myCategorys();
    const booksMap: Map<string, IBooks> = new Map();
    const categoryMap: Map<string, ICheckbox> = new Map();

    if (storedBooks) {
      storedBooks.forEach((book) => {
        booksMap.set(book.isbn, book);
      });
      setBooks(booksMap);
    }
    if (categoryBooks) {
      categoryBooks.forEach((data) => {
        categoryMap.set(data, { checked: false, label: data });
      });
      setCategory(categoryMap);
    }
  }, []);

  const value = useMemo(
    () => ({
      books,
      category,
      addBook,
      removeBook,
      getBook,
    }),
    [books, category]
  );

  return (
    <StorageContext.Provider value={value}>{children}</StorageContext.Provider>
  );
}
