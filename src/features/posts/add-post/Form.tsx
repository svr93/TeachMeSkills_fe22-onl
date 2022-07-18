import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../../../hooks";
import { AppPages } from "../../../types";
import { Button } from "../../../ui/button/Button";
import { TextInput } from "../../../ui/inputs/TextInput";
import { actions } from "./addPostSlice";
import styles from "./Form.module.css";

type FormProps = {};

export const Form: React.FC<FormProps> = () => {
  const [title, setTitle] = useState("");
  const [url, setUrl] = useState("");
  const [publish, setPublish] = useState("");
  const [image, setImage] = useState<null | File>(null);
  const [desc, setDesc] = useState("");
  const [text, setText] = useState("");
  const dispatch = useAppDispatch();
  const id = useAppSelector((state) => state.addPost.post?.id);
  const [step, setStep] = useState<"initial" | "submitted">("initial");
  const navigate = useNavigate();
  useEffect(() => {
    if (step === "submitted" && id != null) {
      navigate(`${AppPages.POSTS}/${id}`);
    }
  }, [id, step, navigate]);
  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        dispatch(
          actions.addPost({
            text: text,
            lesson_num: 0,
            title: title,
            image: image,
          })
        );
        setStep("submitted");
      }}
    >
      <div className={styles.df}>
        <TextInput
          value={title}
          label={"Title"}
          onChange={(e) => setTitle(e.target.value)}
        ></TextInput>
        <TextInput
          value={url}
          label={"URL"}
          onChange={(e) => setUrl(e.target.value)}
        ></TextInput>
      </div>
      <div className={styles.df}>
        <TextInput
          value={publish}
          label={"Publish"}
          onChange={(e) => setPublish(e.target.value)}
        ></TextInput>
        <TextInput
          value={""}
          label={"Image"}
          onChange={(e) => setImage(e.target.files?.[0] ?? null)}
        ></TextInput>
      </div>
      <div>
        <textarea
          value={desc}
          title={"Description"}
          onChange={(e) => setDesc(e.target.value)}
        ></textarea>
        <textarea
          value={text}
          title={"Text"}
          onChange={(e) => setText(e.target.value)}
        ></textarea>
      </div>
      <div>
        <Button type="submit">Add post</Button>
        <Button>Cancel</Button>
      </div>
    </form>
  );
};
