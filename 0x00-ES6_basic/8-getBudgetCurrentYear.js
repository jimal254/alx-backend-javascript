function getCurrentYear() {
  const date = new Date();
  return date.getFullYear();
}

export default function getBudgetForCurrentYear(income, gdp, capita) {
  const curYear = getCurrentYear();
  const budget = {};

  budget[`income-${curYear}`] = income;
  budget[`gdp-${curYear}`] = gdp;
  budget[`capita-${curYear}`] = capita;

  return budget;
}
