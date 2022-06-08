import { Button } from "../button/Button";
import styles from "./Card.module.css";
type CardProps = {
  className?: string;
  id: string | number;
  image?: string;
  text: string;
  date: string;
  lesson_num?: number;
  titleCard: string;
  author?: number;
  onPreviewClick?: (id: string | number) => void;
  LikeDislike?: React.ComponentType<{ id: string | number }>;
};

export const Card: React.FC<CardProps> = ({
  id,
  image = "https://macnoob.ru/wp-content/uploads/2020/04/jaguar.jpg",
  text,
  date,
  titleCard,
  className = "",
  onPreviewClick,
  LikeDislike,
}) => {
  return (
    <article className={`${styles.article} ${className}`} id={`${id}`}>
      <div className={styles.img}>
        <img src={image} alt="" />
      </div>
      <h3 className={styles.titleCard}>{titleCard}</h3>
      <p className={styles.text}>{text}</p>
      <div className={styles.flexBlock}>
        <p className={styles.date}>{date}</p>
        {/*<LikeDislike
          onLikeClick={() => null}
          onDislikeClick={() => null}
          currentState={null}
          count={-39}
  ></LikeDislike>*/}
        {LikeDislike ? <LikeDislike id={id} /> : null}
      </div>
      <Button
        className={styles.previewButton}
        onClick={(event) => {
          onPreviewClick?.(id);
          event.preventDefault();
        }}
      >
        Предпросмотр
      </Button>
    </article>
  );
};
