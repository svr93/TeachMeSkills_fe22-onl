import { useEffect, useState } from "react";
import { CardList } from "../../../ui/cardList/CardList";
import { PostsLikeDislike } from "../like-dislike/posts-like-dislike";
import data from "./data.json";

type PostsCardListProps = {
  onPreviewClick?: (id: string | number) => void;
  onCloseClick?: (id: string | number) => void;

};
export const PostsCardList: React.FC<PostsCardListProps> = ({
  onPreviewClick, onCloseClick,
}) => {
  const [cardList, setCardList] = useState<typeof data | null>(null);
  useEffect(() => {
    setTimeout(() => {
      setCardList(data);
    }, 1000);
  }, []);

  return (
    <CardList
      data={cardList ?? []}
      onPreviewClick={onPreviewClick}
		onCloseClick={onCloseClick}
      LikeDislike={PostsLikeDislike}
    ></CardList>
  );
};
