export const formatDate = ({ date }:{date:Date}) => {
  return date.toLocaleDateString("en-UK", {
    year: "numeric",
    month: "short",
    day: "numeric",
  });
};
