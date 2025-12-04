"use client";

import { ICard } from "@/interfaces/components/ICards";

export default function Card({ title, description, isbn }: ICard) {
  return (
    <div className="card">
      <div className="card_header">
        <h2>{title}</h2>
        <div className="isbn">ISBN: {isbn}</div>
      </div>
      <div className="card_body">
        <p>{description}</p>
      </div>
    </div>
  );
}
