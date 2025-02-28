export const updateUserNumberStats = (profile, dataKey, element) => {
  const htmlElement = document.querySelector(element);
  const { _count } = profile;
  const numberStats = _count?.[dataKey] ?? "NaN";

  if (typeof numberStats !== "number") {
    console.error("Number of posts is not a number");
  }
  htmlElement.textContent = numberStats;
};
