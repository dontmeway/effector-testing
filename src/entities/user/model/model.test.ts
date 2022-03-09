import { allSettled, fork } from "effector";
import { $user, loginFx } from "./model";

describe("user model", () => {
  test("valid credentials", async () => {
    const email = "bbakhadyrov@gmail.com";
    const password = "1235678B";
    const mock = jest.fn();

    const scope = fork({
      values: new Map().set($user, { email: "bbakhadyrov@gmail.com" }),
      handlers: new Map().set(loginFx, mock),
    });

    await allSettled(loginFx, { scope, params: { email, password } });

    expect(mock).toBeCalledTimes(1);
    expect(mock).toBeCalledWith({ email, password });
    expect(scope.getState($user)).toEqual({ email });
  });
});
