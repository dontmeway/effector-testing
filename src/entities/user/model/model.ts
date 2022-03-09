import { createEffect, createStore } from "effector";

export type LoginFormTypes = {
  email: string;
  password: string;
};

export type User = Omit<LoginFormTypes, "password">;

export const loginFx = createEffect<LoginFormTypes, User, Error>({
  sid: "loginFx",
  handler: async (params) => {
    return new Promise<User>((resolve) =>
      setTimeout(() => resolve({ email: params.email }), 2000)
    );
  },
});

export const $user = createStore<User>(
  {
    email: "",
  },
  { sid: "$user" }
);

$user.on(loginFx.doneData, (_, payload) => payload);

export const $isAuthorized = $user.map((user) => Boolean(user.email));

$user.watch(console.log);
