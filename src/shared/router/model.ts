import { attach, createStore } from "effector";
import { createBrowserHistory, To } from "history";

export const history = createBrowserHistory();

const $history = createStore(history);

export const navigateFx = attach({
  source: $history,
  effect: (history, params: To) => {
    history.push(params);
  },
});
