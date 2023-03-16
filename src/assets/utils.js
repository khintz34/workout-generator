export const capAll = (string) => {
  return string
    .split("_")
    .map((s) => s.charAt(0).toUpperCase() + s.substring(1))
    .join("_")
    .replace(/_/g, " ");
};
