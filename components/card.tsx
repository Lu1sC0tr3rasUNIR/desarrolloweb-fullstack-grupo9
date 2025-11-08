"use client";

interface ICard {
  title: string;
  description: string;
  id?: number;
  author?: string;
  year?: number;
  genre?: string;
  pages?: number;
  publisher?: string;
  language?: string;
  isbn?: string;
}

export default function Card({ title, description, isbn }: ICard) {
  return (
    <div className="card">
      <h2 className="card_title">{title}</h2>
      <p className="card_description">{description}</p>
      <p className="card_isbn">{isbn}</p>
    </div>
  );
}
