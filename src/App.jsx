import { useState } from "react";
import Quotes from "./Components/Quotes";
import lifeQuotes from "./utilities";
import Icon from "@mdi/react";
import { mdiRestore } from "@mdi/js";

function App() {
  const [quoteIndex, setQuoteIndex] = useState(0);
  console.log(lifeQuotes.length)
  function handleNextClick() {
    if (quoteIndex < lifeQuotes.length - 1) {
      setQuoteIndex(quoteIndex + 1);
    }
  }
  function handlePrevClick() {
    if (quoteIndex > 0) {
      setQuoteIndex(quoteIndex - 1);
    }
  }
  function handleReset() {
    setQuoteIndex(0);
  }
  return (
    <>
      <h1>LIFE QUOTES APP</h1>
      <div className="content">
        <div className="body">
          <button disabled={quoteIndex === 0} onClick={handlePrevClick} className="slide-btns">
            Prev
          </button>
          <Quotes quote={quoteIndex} />
          <button
            disabled={quoteIndex === lifeQuotes.length - 1}
            onClick={handleNextClick}
            className="slide-btns"
          >
            Next
          </button>
        </div>
        <button className="reset" onClick={handleReset}>
          <Icon path={mdiRestore} title="Restore" size={1.6} color="black" />
        </button>
      </div>
    </>
  );
}
export default App;
