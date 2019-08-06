import React from "react";
import { useFetch } from "./useFetch";

function Memo() {
  const [count, countSet] = React.useState(0);

  const [data] = useFetch(
    "https://raw.githubusercontent.com/ajzbc/kanye.rest/master/quotes.json"
  );

  const computeLongestWord = React.useCallback(arr => {
    if (!arr) return [];
    let longetWord = "";
    console.log("computing longest word");
    JSON.parse(arr).forEach(sentence =>
      sentence.split(" ").forEach(word => {
        if (word.length > longetWord.length) longetWord = word;
      })
    );
    return longetWord;
  }, []);
  // use below only if computeLongetWord is defined outside this function
  //const longetWord = React.useMemo(() => computeLongestWord(data), [data]);
  const longetWord = React.useMemo(() => computeLongestWord(data), [
    data,
    computeLongestWord
  ]);

  return (
    <div>
      <h1>Memo</h1>
      <div>Count: {count}</div>
      <button onClick={() => countSet(c => c + 1)}>increment</button>
      <div>{longetWord}</div>
    </div>
  );
}

export default Memo;
