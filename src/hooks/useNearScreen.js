import { useState, useEffect, useRef } from "react";

export default function useNearScreen({ distance = "200px", once = true } = {}) {
  const [isNearScreen, setNearScreen] = useState(false);
  const ref = useRef();

  useEffect(() => {
    let observer;
    const element = ref.current;

    const onChange = (entries, observer) => {
      const el = entries[0];
      if (el.isIntersecting) {
        setNearScreen(true);
        once && observer.disconnect();
      } else {
        !once && setNearScreen(false)
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
      if (element) observer.observe(element);
    });

    return () => observer && observer.disconnect();
  });

  return { isNearScreen, ref };
}
