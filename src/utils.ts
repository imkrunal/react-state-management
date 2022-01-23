export const formatName = (name: string) => {
  return name
    .split("-")
    .map((w: string) => `${w.charAt(0).toUpperCase()}${w.slice(1)}`)
    .join(" ");
};
