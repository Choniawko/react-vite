import { useMutation, useQuery } from "react-query";
import axios from "axios";
import { Item } from "./item";

const BASE_URL = "/api/items";

export const useItemQuery = (id: string) => {
  return useQuery<Item, Error>(["item", id], async () => {
    const { data } = await axios.get<Item>(`${BASE_URL}/${id}`);
    return data;
  });
};
export const useUpdateItemMutation = () => {
  return useMutation<Item, Error, Partial<Item>>((item) => {
    const { id, ...data } = item;
    return axios.put<Item>(`${BASE_URL}/${id}`, data).then((res) => res.data);
  });
};
