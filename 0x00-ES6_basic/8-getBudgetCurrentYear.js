function getCurrentYear() {
  const date = new Date();
  return date.getFullYear();
}

export default function getBudgetForCurrentYear(income, gdp, capita) {
  const curYear = getCurrentYear();
  return {
    [`income-${curYear}`]: income,
    [`gdp-${curYear}`]: gdp,
    [`capita-${curYear}`]: capita,
  };
}
