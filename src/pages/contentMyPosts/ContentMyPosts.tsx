import { useEffect, useState } from "react";
import { ContentTemplate } from "../../components/content/ContentTemplate";
import { Header } from "../../features/header/Header";
import { UserButton } from "../../ui/userButton/UserButton";
import { UserIcon } from "../../ui/userIcon/UserIcon";
import {
  setSelectedPost,
  closeSelectedPost,
} from "../../features/posts/selectedPostSlice";
import { useAppDispatch, useAppSelector } from "../../hooks";
import styles from "./ContentMyPosts.module.css";
import { Card } from "../../ui/card/Card";
import { PostsCardList } from "../../features/posts/card-list/CardList";
import data from "./data.json";
import { CloseIcon } from "../../ui/closeIcon/CloseIcon";

export const ContentMyPosts: React.FC = () => {
  const [cardList, setCardList] = useState<typeof data | null>(null);

  const selectedPostId = useAppSelector((state) => state.selectedPost.id);
  const selectedPost =
    selectedPostId != null
      ? cardList?.find((item) => item.id === selectedPostId)
      : null;
  const dispatch = useAppDispatch();

  const onCloseClick = () => dispatch(setSelectedPost(null));

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
            <CloseIcon onCloseClick={() => onCloseClick()}></CloseIcon>
            {selectedPost ? (
              <Card
                {...selectedPost}
                text=""
                className={styles.overlayCard}
              ></Card>
            ) : null}
          </div>
        </div>
      ) : null}
      <Header>
        <UserButton>{UserIcon}Username</UserButton>
      </Header>

      <ContentTemplate title="My Posts" button="+ Add">
        <PostsCardList
          onPreviewClick={(id) => dispatch(setSelectedPost(id))}
        ></PostsCardList>
      </ContentTemplate>
    </div>
  );
};
