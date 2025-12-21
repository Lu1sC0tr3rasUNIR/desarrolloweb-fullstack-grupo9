import { IStorageContext } from "@/interfaces/context/IStorageContext";
import { IBooks } from "@/interfaces/lib/myBackendInterface";
import { createContext } from "react";

export const StorageContext = createContext<IStorageContext>({
  getBook: () => {},
  addBook: () => {},
  removeBook: () => {},
  books: new Map<string, IBooks>(),
} as IStorageContext);
