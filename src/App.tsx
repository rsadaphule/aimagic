//import "./App.css";
import AIMagicMenu from "./components/AIMagicMenu";
import { Box, Stack } from "@mui/material";
import { Sidebar } from "./components/Sidebar";
import { Feed } from "./components/Feed";
import { Rightbar } from "./components/Rightbar";
import { Add } from "./components/Add";
import { createTheme, ThemeProvider, PaletteMode } from "@mui/material/styles";
import { useState } from "react";

function App() {
  const [mode, setMode] = useState<PaletteMode>("light");

  const darkTheme = createTheme({
    palette: {
      mode,
    },
  });

  return (
    <ThemeProvider theme={darkTheme}>
      <Box bgcolor={"background.default"} color="text.primary">
        <AIMagicMenu />
        {/*<MyImageList /> */}
        <Stack
          direction="row"
          spacing={{ xs: 0, sm: 2, xl: 2 }}
          justifyContent="space-between"
        >
          <Sidebar setMode={setMode} mode={mode} />
          <Feed />
          <Rightbar />
        </Stack>
        <Add />
      </Box>
    </ThemeProvider>
  );
}

export default App;
