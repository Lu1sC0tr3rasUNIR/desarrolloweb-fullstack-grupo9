export interface IBooks {
  id: number;
  title: string;
  author: string;
  year: number;
  genre: string;
  pages: number;
  publisher: string;
  language: string;
  isbn: string;
  description: string;
  price?: number;
  stock?: number;
}