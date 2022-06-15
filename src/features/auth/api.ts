import { RegisterPayload, RegisterResponse } from "./types";
export namespace AuthApi {
  export async function register(payload: RegisterPayload):Promise<RegisterResponse> {
    try {
      const result = await fetch(
        "https://studapi.teachmeskills.by/auth/users/",
        {
          method: "POST",
          body: JSON.stringify(payload),
          headers: { "content-type": "application/json" },
        }
      );
      if (!result.ok) {
			const errorText = await result.text()
        throw new Error(errorText);
      }
      return result.json();
    } catch (e) {
      console.error(e);
      throw e;
    }
  }
}
