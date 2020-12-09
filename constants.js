export const ResolveVanityURLEndpoint = `http://api.steampowered.com/ISteamUser/ResolveVanityURL/v0001/?key=${process.env.NEXT_PUBLIC_API_KEY}`;
export const GetPlayerSummariesEndpoint = ` http://api.steampowered.com/ISteamUser/GetPlayerSummaries/v0002/?key=${process.env.NEXT_PUBLIC_API_KEY}`;
export const GetOwnedGamesEndpoint = ` http://api.steampowered.com/IPlayerService/GetOwnedGames/v0001/?key=${process.env.NEXT_PUBLIC_API_KEY}&format=json`;
