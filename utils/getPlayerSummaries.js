import Axios from "axios";
import { GetPlayerSummariesEndpoint } from "../constants";

export const getPlayerSummaries = async (steamid) => {
  const data = await Axios.get(
    `${GetPlayerSummariesEndpoint}&steamids=${steamid}`
  ).then((res) => res.data.response.players[0]);

  return data;
};
