import { useState } from "react";
import Quotes from "./Components/Quotes";
import lifeQuotes from "./utilities";
import Icon from "@mdi/react";
import { mdiRestore } from "@mdi/js";

function App() {
  const [quoteIndex, setQuoteIndex] = useState(0);
  const [val, setVal] = useState(0)
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
  function handleInputChange(e) {
    setVal(e.target.value)
  }
  function handleSubmit(e) {
    e.preventDefault()
    const newIndex = Number(val)
    if(newIndex >= 0 && newIndex < lifeQuotes.length) {
    setQuoteIndex(newIndex)
    }
    setVal("");    
  }
  return (
    <>
      <h1>LIFE QUOTES APP</h1>
      <div className="content">
        <form onSubmit={(e)=>handleSubmit(e)}>
        <label>View Quote at {" "}
          <input type="number" value={val} onChange={(e)=>handleInputChange(e)}/>
        </label>
        <button type="submit">OK</button>
        </form>
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
// https://api-sage-two-60.vercel.app/mocks/comments?delay=3000