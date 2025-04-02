import lifeQuotes from "../utilities";
import PropTypes from "prop-types";
function Quotes({ quote }) {
  return (
    <>
      <div className="quote-box">
        <p className="quote">
          <strong>{lifeQuotes[quote].text}</strong>
        </p>
        <p style={{ fontSize: "1.5rem" }}>
          <i>&quot;{lifeQuotes[quote].quotedBy}&quot;</i>
        </p>
        <p style={{ marginTop: "1 rem" }}>{quote}</p>
      </div>
    </>
  );
}
Quotes.propTypes = {
  quote: PropTypes.number.isRequired
}
export default Quotes