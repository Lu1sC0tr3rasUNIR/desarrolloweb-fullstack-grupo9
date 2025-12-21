import { ICheckbox } from "../components/ICheckbox";
import { IBooks } from "../lib/myBackendInterface";

export interface IStorageContext {
  getBook: (key: string) => IBooks | undefined;
  addBook: (book: IBooks) => void;
  removeBook: (key: string) => void;
  books: Map<string, IBooks>;
  category: Map<string, ICheckbox>;

}
