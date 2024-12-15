"use client";

import { Box, Input, InputLabel } from "@mui/material";
import { Dispatch, SetStateAction, useEffect, useState } from "react";

export const SimpleText = ({
  id,
  label,
  required,
  setApplicantData,
}: {
  id: string;
  label: string;
  required: boolean;
  setApplicantData: Dispatch<SetStateAction<object>>;
}) => {
  const [textInput, setTextInput] = useState<string>("");

  useEffect(() => {
    if (textInput !== "") {
      setApplicantData((prev) => {
        return { ...prev, [id]: textInput };
      });
    }
  }, [textInput]);
  return (
    <Box display="flex" flexDirection="column">
      <InputLabel htmlFor={id}>{label}</InputLabel>
      <Input
        required={required}
        type="text"
        id={id}
        onChange={(e) => setTextInput(e.target.value)}
      />
    </Box>
  );
};
