/**
 * Create a custom hook that fetches data from the following URL:
 * https://api.coingecko.com/api/v3/simple/price?ids=bitcoin%2Cethereum%2Csolana&vs_currencies=usd&include_market_cap=false&include_24hr_vol=true&include_24hr_change=true
 * Response looks like this:
 *  {
      bitcoin: {
        usd: 71570,
        usd_24h_vol: 49440544488.59039,
        usd_24h_change: 2.4611434646956756,
      },
      ethereum: {
        usd: 4026.91,
        usd_24h_vol: 27346309400.76205,
        usd_24h_change: 1.9708458132132054,
      },
      solana: {
        usd: 148.39,
        usd_24h_vol: 5095097371.316193,
        usd_24h_change: 0.8289188226562607,
      },
    }
 * Turns it into an array like this:
 *  const array = [
 *      { name: 'bitcoin', last: 71570, volume: 49440544488.59039, change: 2.4611434646956756 },
 *      { name: 'ethereum', last: 4026.91, volume: 27346309400.76205, change: 1.9708458132132054 },
 *      { name: 'solana', last: 148.39, volume: 5095097371.316193, change: 0.8289188226562607 },
 *  ]
 * And returns the array.
 */

type Coin = {
  name: string;
  last: number;
  volume: number;
  change: number;
};

export const useCoins = (): Coin[] => {
  return [];
};
