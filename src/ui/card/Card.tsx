import { Button } from "../button/Button";
import { CloseIcon } from "../closeIcon/CloseIcon";
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
  closeIcon?: React.ReactNode;
  onPreviewClick?: (id: string | number) => void;
  onCloseClick?: (id: string | number) => void;
  LikeDislike?: React.ComponentType<{ id: string | number }>;
};

export const Card: React.FC<CardProps> = ({
  id,
  image = "https://macnoob.ru/wp-content/uploads/2020/04/jaguar.jpg",
  text,
  date,
  titleCard,
  className = "",
  closeIcon,
  onPreviewClick,
  onCloseClick,
  LikeDislike,
}) => {

  return (
    <article className={`${styles.article} ${className}`} id={`${id}`}>
      <div className={styles.img}>
        <img src={image} alt="" />
      </div>
      <CloseIcon
        currentState={"opened"}
        onClick={(event) => {
          onCloseClick?.(id);
          event.preventDefault();
        }}
      ></CloseIcon>
      <h3 className={styles.titleCard}>{titleCard}</h3>
      <p className={styles.text}>{text}</p>
      <div className={styles.flexBlock}>
        <p className={styles.date}>{date}</p>

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
