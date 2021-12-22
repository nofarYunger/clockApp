import axios from "axios";

export const clockService = {
  getTime,
  getLocation,
  getQuotes
};

// var axios = Axios.create({
  // headers: { "Access-Control-Allow-Origin": "*" }
// });

async function getTime() {
  const {data} = await axios.get("http://worldtimeapi.org/api/ip");
  return data
}

async function getLocation() {
  const {data} = await axios.get(`http://ip-api.com/json`)
  return data
}
async function getQuotes() {
  const res = await axios.get(`https://api.quotable.io/random?famous-quotes`);
  return res.data
}
