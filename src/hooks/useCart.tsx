import { useCallback } from "react";
import { IBooks } from "@/interfaces/lib/myBackendInterface";
import { IUseCart } from "@/interfaces/hooks/IUseCart";
import useLocalStorage from "./useLocalStorage";

export default function useCart(): IUseCart {
  const { cart, updateCart, totalValue } = useLocalStorage();

  //Funcion para agregar un libro al carrito
  const addBook = useCallback(
    (book: IBooks, quantity: number) => {
      const prevCart = new Map(cart);
      // Eliminar el libro si ya existe para actualizar la cantidad
      prevCart.delete(book.id.toString());
      const value = (book.price ?? 0) * quantity;
      // Agregar el libro con la nueva cantidad
      prevCart.set(book.id.toString(), { book, quantity, value });
      updateCart(prevCart);
    },
    [cart, updateCart, totalValue]
  );

  //Funcion para eliminar un libro del carrito
  const removeBook = useCallback(
    (bookId: number) => {
      const prevCart = new Map(cart);
      prevCart.delete(bookId.toString());
      updateCart(prevCart);
    },
    [cart, updateCart, totalValue]
  );

  //Funcion para actualizar la cantidad de un libro en el carrito
  const updateBookQuantity = useCallback(
    (bookId: number, quantity: number) => {
      const prevCart = new Map(cart);
      const item = prevCart.get(bookId.toString());
      if (item) {
        item.quantity = quantity;
        item.value = (item.book.price ?? 0) * quantity;
        prevCart.set(bookId.toString(), item);
        updateCart(prevCart);
      }
    },
    [cart, updateCart, totalValue]
  );

  //Funcion para limpiar el carrito
  const clearCart = useCallback(() => {
    updateCart(new Map());
  }, [updateCart, totalValue, cart]);


  //Funcion para obtener el total de libros en el carrito
  const getTotalBooks = useCallback((): number => {
    let total = 0;
    cart.forEach((item) => {
      total += item.quantity;
    });
    return total;
  }, [cart, totalValue, updateCart]);
  
  return {
    cartBooks: cart,
    totalValue,
    addBook,
    removeBook,
    updateBookQuantity,
    clearCart,
    getTotalBooks,
  };
}