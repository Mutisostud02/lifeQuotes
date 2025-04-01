import lifeQuotes from "../utilities";
export default function Quotes({ quote }) {
  return (
    <>
      <div className="quote-box">
        <p className="quote">
          <strong>{lifeQuotes[quote].text}</strong>
        </p>
        <p style={{fontSize:'1.5rem'}}>
          <i>"{lifeQuotes[quote].quotedBy}"</i>
        </p>
        <p style={{ marginTop: "1 rem" }}>{quote + 1}</p>
      </div>
    </>
  );
}
