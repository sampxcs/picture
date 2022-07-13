import React, { Suspense } from "react";
import useNearScreen from "../../hooks/useNearScreen";
import Spinner from "../Spinner";

const Footer = React.lazy(() => import("./Footer"));

export default function lazyFooter() {
  const { isNearScreen, ref } = useNearScreen({ distance: '0px' });

  return (
    <Suspense fallback={<Spinner />}>
      <div ref={ref}>{isNearScreen ? <Footer /> : null}</div>
    </Suspense>
  );
}
