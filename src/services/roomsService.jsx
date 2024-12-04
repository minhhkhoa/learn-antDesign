import { post } from "../utils/request";

export const createRoom = async (options) => {
  const result = await post("rooms", options)
  return result;
}