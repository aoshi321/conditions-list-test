import { useEffect, useRef, useReducer } from "react";

function reducer(state, action) {
  switch (action.type) {
    case "setFallback":
      return { ...state, src: action.payload };
    case "clearOnError":
      return { src: action.payload, onError: null };
    default:
      throw new Error();
  }
}

const useFallbackImg = (img, fallback, initialImageTimeout = 3000) => {
  const timerRef = useRef();
  const [state, dispatch] = useReducer(reducer, {
    src: img,
    onError: e => {
      console.log("Missing img", img, e);
      dispatch({ type: "setFallback", payload: fallback });
      clearTimeout(timerRef.current);
    }
  });

  useEffect(() => {
    // If the onError event does not fire after specifed time
    // show the fallback image
    timerRef.current = setTimeout(() => {
      dispatch({ type: "clearOnError", payload: fallback });
    }, initialImageTimeout);
  }, []);

  const onLoad = e => {
    clearTimeout(timerRef.current);
  };

  return { ...state, onLoad };
};

export default useFallbackImg;
