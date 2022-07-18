import { Header } from "../../features/header/Header";
import styles from "./LoginPage.module.css";
import { ContentTemplate } from "../../components/content/ContentTemplate";
import { UserButton } from "../../ui/userButton/UserButton";
import { UserIcon } from "../../ui/userIcon/UserIcon";
import { AddPostForm } from "../../features/posts/add-post";

export const AddPostPage: React.FC = () => {
  return (
    <div>
      <Header>
        <UserButton>{UserIcon}Username</UserButton>
      </Header>

      <ContentTemplate title="Add Post">
        <AddPostForm></AddPostForm>
      </ContentTemplate>
    </div>
  );
};
