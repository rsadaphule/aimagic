//import "./App.css";
import Button from "@mui/material/Button";
import AIMagicMenu from "./components/AIMagicMenu";
import TextField from "@mui/material/TextField";
import { Box, Stack } from "@mui/material";
import LLMProvider from "./components/LLMProvider";
import APIKeyProvider from "./components/APIKeyProvider";
import Grid from "@mui/material/Grid2";
import MyImageList from "./components/MyImageList";
import { Sidebar } from "./components/Sidebar";
import { Feed } from "./components/Feed";
import { Rightbar } from "./components/Rightbar";

function App() {
  return (
    <>
      <Box>
        <AIMagicMenu />
        {/*<MyImageList /> */}
        <Stack
          direction="row"
          spacing={{ xs: 0, sm: 2, xl: 2 }}
          justifyContent="space-between"
        >
          <Sidebar />
          <Feed />
          <Rightbar />
        </Stack>

        {/*
         <Grid container rowSpacing={2} columnSpacing={1} mt={10}>
          <Grid size={12}>
            <LLMProvider />
          </Grid>
          <Grid size={12}>
            <APIKeyProvider />
          </Grid>
          <Grid size={10}>
            <TextField
              id="image"
              label="image"
              variant="outlined"
              size="small"
              color="secondary"
              fullWidth
            />
          </Grid>
          <Grid size={2}>
            <Button
              variant="contained"
              color="primary"
              size="small"
              sx={{ height: "38px" }}
            >
              Browse
            </Button>
          </Grid>
        </Grid>
      */}
      </Box>
    </>
  );
}

export default App;
