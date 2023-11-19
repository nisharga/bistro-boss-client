import { useQuery } from "@tanstack/react-query";

const useItems = (page = 1) => {
  // Queries
  const { refetch, data: items = [] } = useQuery(
    ["items", page], // Update the queryKey
    async () => {
      const response = await fetch(`https://bistro-boss-server-three-olive.vercel.app/api/v1/menu/getall?page=${page}&limit=2`);
      return response.json();
    }
  );
  return [items, refetch];
};

export default useItems;
