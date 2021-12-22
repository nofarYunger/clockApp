import moment from "moment";
import React, { useEffect, useState } from "react";

function Clock({ abbr }) {
  const [time, setTime] = useState(moment().format("HH:mm"));

  useEffect(() => {
    const intervalId = setInterval(
      () => setTime(moment().format("HH:mm")),
      500
    );-
    console.log(abbr);
    return () => {
      clearInterval(intervalId);
    };
  }, []);

  return (
    <>
      <p className="clock">
        {time.toString()} <span className="abbr">{abbr}</span>
      </p>
    </>
  );
}

export default Clock;
