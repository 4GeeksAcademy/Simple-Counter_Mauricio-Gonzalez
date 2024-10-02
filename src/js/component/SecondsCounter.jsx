import React from "react";
import PropTypes from "prop-types";

const SecondsCounter = (props) => {
  return (
    <div className="d-flex justify-content-center">
      <div className="clock-icon">
        <i className="fas fa-clock"></i>
      </div>
      <div className="digit">{Math.floor(props.seconds / 10000) % 10}</div>
      <div className="digit">{Math.floor(props.seconds / 1000) % 10}</div>
      <div className="digit">{Math.floor(props.seconds / 100) % 10}</div>
      <div className="digit">{Math.floor(props.seconds / 10) % 10}</div>
      <div className="digit">{props.seconds % 10}</div>
    </div>
  );
};

SecondsCounter.propTypes = {
  seconds: PropTypes.number.isRequired,
};

export default SecondsCounter;