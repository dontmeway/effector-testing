import { allSettled, fork } from "effector";

import { userModel } from "@entities/user";

import { submitted } from "./model";

describe("auth by email model", () => {
  test("login with valid user credentials", async () => {
    const email = "bbakhadyrov@gmail.com";
    const password = "12345678B";
    const mock = jest.fn();

    const scope = fork({
      handlers: new Map().set(userModel.loginFx, mock),
    });

    await allSettled(submitted, { scope, params: { email, password } });

    expect(mock).toBeCalledTimes(1);
    expect(mock).toBeCalledWith({ email, password });
  });
});
