import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import { useState } from "react";
export default function APIKeyProvider() {
  const [apiKey, setApiKey] = useState<string>("openai");

  const handleApiKey = (event: React.ChangeEvent<HTMLInputElement>): void => {
    setApiKey(event.target.value);
    console.log(apiKey);
  };

  return (
    <Box>
      <TextField
        id="api-key"
        label="api-key"
        variant="outlined"
        size="small"
        color="secondary"
        required
        onChange={handleApiKey}
        error={!apiKey}
        helperText={!apiKey ? "Required" : "Do not share API Key with anyone"}
        fullWidth
      />
    </Box>
  );
}
