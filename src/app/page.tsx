"use client";

import Box from "@mui/joy/Box";
import styles from "./page.module.css";
import { useCoins } from "@/useCoins";

export default function Page() {
  return (
    <main className={styles.main}>
      <App />
    </main>
  );
}

/**
 * Components you can use:
 * Box: https://mui.com/joy-ui/react-box/
 * Typography (Text): https://mui.com/joy-ui/react-typography/
 * Table: https://mui.com/joy-ui/react-table/
 * IconButton: https://mui.com/joy-ui/react-button/
 */

function App() {
  const coins = useCoins();

  return <Box flexDirection="column" justifyContent="center" padding={8} />;
}
