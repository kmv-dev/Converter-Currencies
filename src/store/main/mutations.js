export default {
  setCurrency(state, data) {
    data["RUB"] = {
      ID: "R0183420",
      NumCode: "39332",
      CharCode: "RUB",
      Nominal: 1,
      Name: "Российский рубль",
      Value: 1,
    };
    state.currencies = data;
  },
};
