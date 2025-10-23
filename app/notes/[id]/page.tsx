import { fetchNoteById } from "@/lib/api";
import css from "./NoteDetailsClient.module.css";

type Props = {
  params: Promise<{ id: string }>;
};

const NoteDetailsClient = async ({ params }: Props) => {
  const { id } = await params;
  const { title, content, createdAt } = await fetchNoteById(id);
  const normaliseData = new Date(createdAt);
  console.log(normaliseData);
  return (
    <div className={css.container}>
      <div className={css.item}>
        <div className={css.header}>
          <h2>{title}</h2>
        </div>
        <p className={css.content}>{content}</p>
        <p className={css.date}>{normaliseData.toLocaleString()}</p>
      </div>
    </div>
  );
};

export default NoteDetailsClient;
