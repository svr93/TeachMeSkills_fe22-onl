import { useEffect, useState } from "react";
import { ContentTemplate } from "../../components/content/ContentTemplate";
import { Header } from "../../features/header/Header";
import { CardList } from "../../ui/cardList/CardList";
import { UserButton } from "../../ui/userButton/UserButton";
import { UserIcon } from "../../ui/userIcon/UserIcon";
import data from "./data.json";
import { setSelectedPost } from "../../features/posts/selectedPostSlice";
import { useAppDispatch, useAppSelector } from "../../hooks";
import styles from "./ContentMyPosts.module.css";
import { Card } from "../../ui/card/Card";

export const ContentMyPosts: React.FC = () => {
  const [cardList, setCardList] = useState<typeof data | null>(null);
  const selectedPostId = useAppSelector((state) => state.selectedPost.id);
  const selectedPost =
    selectedPostId != null
      ? cardList?.find((item) => item.id === selectedPostId)
      : null;
  const dispatch = useAppDispatch();
  useEffect(() => {
    setTimeout(() => {
      setCardList(data);
    }, 1000);
  }, []);
  return (
    <div>
      {selectedPostId != null ? (
        <div className={styles.overlayContainer}>
          <div className={styles.overlay}>
            {selectedPost ? <Card {...selectedPost} text="" className={styles.overlayCard}></Card> : null}
          </div>
        </div>
      ) : null}
      <Header>
        <UserButton>{UserIcon}Username</UserButton>
      </Header>

      <ContentTemplate title="My Posts" button="+ Add">
        <CardList
          data={cardList ?? []}
          onPreviewClick={(id) => dispatch(setSelectedPost(id))}
        ></CardList>
      </ContentTemplate>
    </div>
  );
};
