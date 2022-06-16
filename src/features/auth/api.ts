import { rejects } from "assert";
import { resolve } from "path";
import { ActivatePayload, RegisterPayload, RegisterResponse } from "./types";
export namespace AuthApi {
  export async function register(
    payload: RegisterPayload
  ): Promise<RegisterResponse> {
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
        const errorText = await result.text();
        throw new Error(errorText);
      }
      return result.json();
    } catch (e) {
      console.error(e);
      throw e;
    }
  }

  let activatePromise = Promise.resolve({ isActivated: false });

  export async function isActivated() {
    const result = await activatePromise;
    return result.isActivated;
  }

  export async function activate(payload: ActivatePayload) {
    let resolveCB: (args: { isActivated: boolean }) => void;
    let rejectCB: (args: any) => void;
    const promise = new Promise<{ isActivated: boolean }>((resolve, reject) => {
      resolveCB = resolve;
      rejectCB = reject;
    });
    activatePromise = activatePromise.then(() => promise);
    try {
      const result = await fetch(
        "https://studapi.teachmeskills.by/auth/users/activation/",
        {
          method: "POST",
          body: JSON.stringify(payload),
          headers: { "content-type": "application/json" },
        }
      );
      if (!result.ok) {
        const errorText = await result.text();
        throw new Error(errorText);
      }
      const data = await result.text();
      resolveCB!({ isActivated: true });
      return data;
    } catch (e) {
      rejectCB!(e);
      throw e;
    }
  }
}
