"use client";

import Box from "@mui/joy/Box";
import styles from "./page.module.css";

export default function Page() {
  return (
    <main className={styles.main}>
      <App />
    </main>
  );
}

/**
 * Components:
 * Box: https://mui.com/joy-ui/react-box/
 * Typography (Text): https://mui.com/joy-ui/react-typography/
 * Table: https://mui.com/joy-ui/react-table/
 * IconButton: https://mui.com/joy-ui/react-button/
 */

/**
 * Coins URL: https://api.coingecko.com/api/v3/simple/price?ids=bitcoin%2Cethereum%2Csolana&vs_currencies=usd&include_market_cap=false&include_24hr_vol=true&include_24hr_change=true
 * Returns:
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
 */

function App() {
  return <Box flexDirection="column" justifyContent="center" padding={8} />;
}
