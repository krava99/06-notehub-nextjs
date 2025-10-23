"use client";

import { useQuery } from "@tanstack/react-query";
import { fetchNoteById } from "@/lib/api";
import css from "./NoteDetailsClient.module.css";

interface NoteDetailsClientProps {
  id: string;
}

const NoteDetailsClient = ({ id }: NoteDetailsClientProps) => {
  const { data, isLoading, isError } = useQuery({
    queryKey: ["note", id],
    queryFn: () => fetchNoteById(id),
  });

  if (isLoading) return <p>Завантаження...</p>;
  if (isError || !data) return <p>Помилка при завантаженні нотатки</p>;

  const { title, content, createdAt } = data;
  const date = new Date(createdAt).toLocaleString();

  return (
    <div className={css.container}>
      <div className={css.item}>
        <div className={css.header}>
          <h2>{title}</h2>
        </div>
        <p className={css.content}>{content}</p>
        <p className={css.date}>{date}</p>
      </div>
    </div>
  );
};

export default NoteDetailsClient;
