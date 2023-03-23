import "@/styles/globals.css";
import { Box, Button, ThemeProvider, createTheme } from "@mui/material";
import type { AppProps } from "next/app";
import Link from "next/link";
import { useRouter } from "next/router";

export default function App({ Component, pageProps }: AppProps) {
  const router = useRouter();
  return (
    <ThemeProvider
      theme={createTheme({
        palette: {
          primary: {
            main: "#f6821f",
          },
          secondary: {
            main: "#ffffff",
          },
        },
      })}
    >
      <Box
        width="100%"
        display="flex"
        flexDirection="column"
        alignItems="flex-start"
      >
        {router.asPath !== "/" && (
          <Button size="large" LinkComponent={Link} href="/">
            Back
          </Button>
        )}
        <Component {...pageProps} />
      </Box>
    </ThemeProvider>
  );
}
