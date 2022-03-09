import { Suspense } from "react";
import {
  BrowserRouter,
  unstable_HistoryRouter as HistoryRouter,
} from "react-router-dom";

import { history } from "@shared/router";

export const withRouter = (component: () => React.ReactNode) => () => {
  return (
    <HistoryRouter history={history}>
      <Suspense fallback="Loading...">{component()}</Suspense>
    </HistoryRouter>
  );
};
