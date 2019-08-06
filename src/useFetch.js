import React from "react";

export const useFetch = url => {
  const [data, dataSet] = React.useState(null);
  const [loading, loadingSet] = React.useState(true);
  const isUnmounted = React.useRef(false);

  React.useEffect(() => {
    isUnmounted.current = false;
    return () => (isUnmounted.current = true);
  });

  React.useEffect(() => {
    loadingSet(true);
    fetch(url)
      .then(x => x.text())
      .then(y => {
        //setTimeout(() => { // for simulating slow resp after comp unmounted
        if (isUnmounted.current) return;
        dataSet(y);
        loadingSet(false);
        //}, 2000);
      });
  }, [url]);

  return [data, loading];
};
