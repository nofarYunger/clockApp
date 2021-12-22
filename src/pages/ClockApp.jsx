import moment from "moment";
import React, { useEffect, useState } from "react";
import { ArrowUp } from "../assets/imgs/desktop/icon-arrow-up";
import Clock from "../cmps/Clock";
import MoreInfo from "../cmps/MoreInfo";
import { clockService } from "../services/clockService";

function ClockApp() {
  const [isNighttime, setisNighttime] = useState(null);
  const [time, setTime] = useState(null);
  const [quote, setQuote] = useState("");
  const [location, setLocation] = useState(null);
  const [isInfoOpen, setIsInfoOpen] = useState(false);

  useEffect(async () => {
    setLocation(await clockService.getLocation());
    setTime(await clockService.getTime());
    setQuote(await clockService.getQuotes());

    const timeOfDay = +moment().format("HH");
    if (timeOfDay >= 5 && timeOfDay <= 18) {
      setisNighttime(false);
    } else setisNighttime(true);
  }, []);

  const getGreeting = () => {
    const hour = +moment().format("HH");
    if (hour >= 5 && hour < 12) return "Good morning";
    else if (hour >= 12 && hour < 18) return "Good afternoon";
    else return "Good evening";
  };

  return (
    <main className={`background-img  ${isNighttime ? "nighttime" : ""}`}>
      <div className="main-layout main-content">
        {!isInfoOpen && <div className="quote">{quote.content}</div>}
        <div className={`clock-btn-wrapper  ${isInfoOpen ? " info-open" : ""}`}>
          <section className="grid-wrapper">
            <div className="blessing">
              {(
                <img
                  src={`../assets/imgs/desktop/icon-${
                    isNighttime ? "moon" : "sun"
                  }.svg`}
                />
              ) && getGreeting()}
            </div>
            <Clock abbr={time?.abbreviation} />
            <div className="location">
              <p>{`in ${location?.city} ,${location?.countryCode}`} </p>
            </div>
          </section>
          <div
            className={`info-btn ${isInfoOpen ? "info-open" : ""}`}
            onClick={() => setIsInfoOpen(!isInfoOpen)}
          >
            {isInfoOpen ? "Less" : "More"} <ArrowUp />
          </div>
        </div>
      </div>
      <MoreInfo time={time} isInfoOpen={isInfoOpen} />
    </main>
  );
}

export default ClockApp;
