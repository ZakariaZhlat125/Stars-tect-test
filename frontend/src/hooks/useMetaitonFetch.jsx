import { useNavigate } from "react-router-dom";

export const useMetaitonFetch = (fetchFunction,url ) => {
  const navgite = useNavigate();

  const { data, isLoading, isError, error } = fetchFunction(url);
  if (isError) {
    console.log(error);
  }

  return {
    data,
    isLoading,
  };
};
