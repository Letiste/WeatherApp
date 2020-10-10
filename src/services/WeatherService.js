import openweather from "./openweather";

const APIkey = "ed6bd70e2ab5c10c7c420a533a5a59cd";

function get(city) {
  return openweather.get(`weather?q=${city}&units=metric&appid=${APIkey}`);
}

export default {
  get,
};
