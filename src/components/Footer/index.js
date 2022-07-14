import React, { Suspense } from "react";
import useNearScreen from "../../hooks/useNearScreen";

const Footer = React.lazy(() => import("./Footer"));

export default function lazyFooter() {
  const { isNearScreen, ref } = useNearScreen({ distance: '0px' });

  return (
    <Suspense fallback={null}>
      <div ref={ref}>{isNearScreen && <Footer />}</div>
    </Suspense>
  );
}
