import { useState } from "react";
import { useMutation, useQueryClient } from "react-query";
import { useNavigate } from "react-router-dom";

export const useMutationHook = (ApiFunction, cacheName, navigateUrl) => {
  const navgite = useNavigate();
  const [loading, setLoading] = useState(false);
  const queryClient = useQueryClient();

  const mutateAsync = useMutation(ApiFunction, {
    onSuccess: (data) => {
      setLoading(false);
      navgite(navigateUrl);
      queryClient.invalidateQueries(cacheName);
    },
    onError: (error) => {
      console.error("Error:", error);
      setLoading(false);
    },
    onMutate: () => {
      setLoading(true);
    },
  });

  return {
    mutateAsync,
    loading,
  };
};
