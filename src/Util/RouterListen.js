import React, { useEffect, Fragment } from "react";
import { withRouter } from "react-router-dom";

function RouterListen({ history, setHeaderKinds }) {
  useEffect(() => {
    const unlisten = history.listen(() => {
      window.scrollTo(0, 0);

      let hrefArray = document.location.hash.split("/");
      let href = hrefArray[hrefArray.length - 1];

      if (href === "main_2" || href === "tokens") setHeaderKinds(2);
      else if (href === "index") setHeaderKinds(0);
      else setHeaderKinds(1);
    });
    return () => {
      unlisten();
    };
  }, []);

  return <Fragment></Fragment>;
}

export default withRouter(RouterListen);
