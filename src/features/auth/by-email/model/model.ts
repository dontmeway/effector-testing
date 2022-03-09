import { attach, createEvent, Effect, sample } from "effector";

import { userModel } from "@entities/user";
import { navigateFx } from "@shared/router";

export const submitted = createEvent<userModel.LoginFormTypes>();

export const loginFx: Effect<userModel.LoginFormTypes, userModel.User, Error> =
  attach({
    effect: userModel.loginFx,
  });

export const $isLoading = loginFx.pending;

sample({
  clock: submitted,
  target: loginFx,
});

sample({
  clock: loginFx.doneData,
  target: navigateFx.prepend(() => "/store"),
});
