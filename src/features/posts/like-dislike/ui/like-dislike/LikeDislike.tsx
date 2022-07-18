import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styles from "./LikeDislike.module.css";
import { faThumbsUp as pressedLike } from "@fortawesome/free-solid-svg-icons";
import { faThumbsUp } from "@fortawesome/free-regular-svg-icons";

import { faThumbsDown as pressedDislike } from "@fortawesome/free-solid-svg-icons";
import { faThumbsDown } from "@fortawesome/free-regular-svg-icons";

type LikeDislikeProps = {
  onLikeClick: () => void;
  onDislikeClick: () => void;
  currentState: "like" | "dislike" | null;
  count: number;
};

export const LikeDislike: React.FC<LikeDislikeProps> = ({
  onLikeClick,
  onDislikeClick,
  currentState,
  count,
}) => {
  const Like = (
    <FontAwesomeIcon
      icon={faThumbsUp}
      onClick={(event) => {
        event.preventDefault();
        onLikeClick();
      }}
      role="button"
    />
  );
  const PressedLike = (
    <FontAwesomeIcon
      icon={pressedLike}
      onClick={(event) => {
        event.preventDefault();
        onLikeClick();
      }}
      role="button"
    />
  );

  const Dislike = (
    <FontAwesomeIcon
      icon={faThumbsDown}
      onClick={(event) => {
        event.preventDefault();
        onDislikeClick();
      }}
      role="button"
    />
  );
  const PressedDislike = (
    <FontAwesomeIcon
      icon={pressedDislike}
      onClick={(event) => {
        event.preventDefault();
        onDislikeClick();
      }}
      role="button"
    />
  );

  return (
    <div className={styles.wrapper}>
      <div>
        {currentState === "like" ? PressedLike : Like}
        <div className={styles.count}>{count > 0 ? count : null}</div>
      </div>
      <div>
        {currentState === "dislike" ? PressedDislike : Dislike}
        <div className={styles.count}>{count < 0 ? Math.abs(count) : null}</div>
      </div>
    </div>
  );
};
