import { STORAGE } from "../constants/urls";

export const ImageUrl = (item, index) => {
  const imageUrl = `${STORAGE}${item?.[`image${index}`] || ""}`;
  return imageUrl;
};
