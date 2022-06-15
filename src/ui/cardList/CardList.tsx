import { Link } from "react-router-dom";
import { AppPages } from "../../types";
import { Card } from "../card/Card";
import styles from "./CardList.module.css";

type CardListProps = {
  data: Array<{
    id: string | number;
    image?: string;
    text: string;
    date: string;
    lesson_num?: number;
    titleCard: string;
    author?: number;
  }>;
  onPreviewClick?: (id: string | number) => void;

  LikeDislike?: React.ComponentType<{ id: string | number }>;
};

export const CardList: React.FC<CardListProps> = ({
  data,
  onPreviewClick,
  LikeDislike,
}) => {
  return (
    <ul className={styles.list}>
      {data.map((card) => {
        return (
          <Link to={`${AppPages.POSTS}/${card.id}`}>
            <li className={styles.listItem} key={card.id}>
              <Card
                id={card.id}
                image={card.image}
                text={card.text}
                date={card.date}
                titleCard={card.titleCard}
                onPreviewClick={onPreviewClick}
                LikeDislike={LikeDislike}
              ></Card>
            </li>
          </Link>
        );
      })}
    </ul>
  );
};
