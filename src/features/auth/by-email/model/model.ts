import { userModel } from "@entities/user";
import { attach, createEvent, Effect, sample } from "effector";

export const submitted = createEvent<userModel.LoginFormTypes>();

const loginFx: Effect<userModel.LoginFormTypes, userModel.User, Error> = attach(
  {
    effect: userModel.loginFx,
  }
);

export const $isLoading = loginFx.pending;

sample({
  clock: submitted,
  target: loginFx,
});
