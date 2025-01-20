import "./App.css";
import Button from "@mui/material/Button";
import AIMagicMenu from "./components/AIMagicMenu";
import TextField from "@mui/material/TextField";
import { useState } from "react";
import { Box } from "@mui/material";
import LLMProvider from "./components/LLMProvider";
import APIKeyProvider from "./components/APIKeyProvider";
import Grid from "@mui/material/Grid2";
import Paper from "@mui/material/Paper";
import { styled } from "@mui/material/styles";
import MyImageList from "./components/MyImageList";

function App() {
  return (
    <>
      <Box>
        <AIMagicMenu />
        <MyImageList />
        <Grid container rowSpacing={2} columnSpacing={1}>
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
      </Box>
    </>
  );
}

export default App;
