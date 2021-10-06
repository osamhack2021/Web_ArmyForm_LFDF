import * as H from "history";

const move = (history: H.History<H.LocationState>, target: string) => {
  if (target === "back") {
    history.goBack();
  } else {
    history.push(target);
  }
};

export default move;
