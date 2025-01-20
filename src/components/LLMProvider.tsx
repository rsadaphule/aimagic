import { Box, MenuItem, TextField } from "@mui/material";
import { useState } from "react";

export default function LLMProvider() {
  const [llmProvider, setLLMProvider] = useState<string>("");

  const handleProviderChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setLLMProvider(event.target.value as string);
    console.log("Selected LLM Provider is ", llmProvider);
  };

  return (
    <>
      <Box>
        <TextField
          label="select LLM Provider"
          select
          value={llmProvider}
          onChange={handleProviderChange}
          fullWidth
          size="small"
        >
          <MenuItem value="openai">OpenAI</MenuItem>
          <MenuItem value="anthropic">Anthropic</MenuItem>
          <MenuItem value="gemini">Gemini</MenuItem>
          <MenuItem value="llama3.1">LLama3.1</MenuItem>
        </TextField>
      </Box>
    </>
  );
}
