import { post, get } from "../utils/request";

export const createRoom = async (options) => {
  const result = await post("rooms", options)
  return result;
}

export const getListRoom = async () => {
  const result = await get("rooms");
  return result;
}