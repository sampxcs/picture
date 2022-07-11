import { useState, useEffect, useRef } from "react";

export default function useNearScreen({ distance = "200px" } = {}) {
  const [isNearScreen, setNearScreen] = useState();
  const ref = useRef();

  useEffect(() => {
    let observer;

    const onChange = (entries, observer) => {
      const el = entries[0];
      if (el.isIntersecting) {
        console.log("INTERSECTIOOOON!!");
        setNearScreen(true);
        observer.disconnect();
      }
    };

    Promise.resolve(
      typeof IntersectionObserver !== "undefined"
        ? IntersectionObserver
        : import("intersection-observer")
    ).then(() => {
      observer = new IntersectionObserver(onChange, {
        rootMargin: distance,
      });

      observer.observe(ref.current);
    });

    return () => observer && observer.disconnect();
  });

  return { isNearScreen, ref };
}