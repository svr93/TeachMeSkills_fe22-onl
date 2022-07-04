import { baseUrl } from "../../../api/config";
import { CardProps } from "../../../types/posts";
import { AddPostPayload } from "./types";

export namespace AddPostApi {
  export async function addPost(payload: AddPostPayload,accessToken:string ): Promise<CardProps> {
    const body = new FormData();
    Object.entries(payload).forEach(([key, value]) => {
      if (value) {
        if (typeof value === "number") {
          value = String(value);
        }
        body.set(key, value);
      }
    });
    try {
      const result = await fetch(`${baseUrl}blog/posts/`,{
			method: "POST",
			body,
			headers:{authorization: `Bearer ${accessToken}`}
		});
      if (!result.ok) {
        const errorText = await result.text();
        throw new Error(errorText);
      }
      return result.json();
    } catch (e) {
      console.error(e);
      throw e;
    }
  }
}
