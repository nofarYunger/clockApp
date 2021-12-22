import React from "react";

function MoreInfo({ time, isInfoOpen }) {
  if (!time) return <div>Loading...</div>;
  return (
    <section
      className={`info-container main-layout ${isInfoOpen ? " open" : ""}`}
    >
      <ul className="">
        <li>
          <p>Current timezone</p>
          <span>{time.timezone}</span>
        </li>
        <li>
          <p>Day of the year</p>
          <span>{time.day_of_year + 1}</span>
        </li>
        <li>
          <p>Day of the week</p>
          <span>{time.day_of_week + 1}</span>
        </li>
        <li>
          <p>Week number</p>
          <span>{time.week_number + 1}</span>
        </li>
      </ul>
    </section>
  );
}

export default MoreInfo;

// Current timezone
// Day of the year
// Day of the week
// Week number
