import axios from "axios";
export default {
  getCurrency({ commit }) {
    axios.get("https://www.cbr-xml-daily.ru/daily_json.js").then((result) => {
      const currencies = result.data.Valute;
      commit("setCurrency", currencies);
    });
  },
};
