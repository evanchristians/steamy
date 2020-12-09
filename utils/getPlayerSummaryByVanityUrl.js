import Axios from "axios";
import { ResolveVanityURLEndpoint } from "../constants";
import { getPlayerSummaries } from "./getPlayerSummaries";

export const getPlayerSummaryByVanityUrl = async (vanityurl) => {
  const steamid = await Axios.get(
    `${ResolveVanityURLEndpoint}&vanityurl=${vanityurl}`
  ).then((res) => res.data.response.steamid);

  const data = await getPlayerSummaries(steamid);

  return data;
};
