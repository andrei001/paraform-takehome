"use client";

import {
  Box,
  Button,
  Input,
  InputLabel,
  MenuItem,
  Select,
} from "@mui/material";
import { Dispatch, SetStateAction, useEffect, useState } from "react";

export const DynamicInput = ({
  title,
  id,
  subtypeOptions,
  options,
  setApplicantData,
  required,
}: {
  title: string;
  id: string;
  subtypeOptions: string[];
  options: { id: number; name: string }[];
  setApplicantData: Dispatch<SetStateAction<object>>;
  required: boolean;
}) => {
  const [textInput, setTextInput] = useState<string[]>([""]);
  const [selectedSubtypeOption, setSelectedSubtypeOption] = useState<
    string[] | undefined
  >(subtypeOptions.length !== 0 ? [subtypeOptions[0]] : undefined);

  useEffect(() => {
    if (textInput.length !== 0 && textInput[0].length !== 0) {
      if (id !== "educations" && id !== "employments") {
        setApplicantData((prev) => {
          return {
            ...prev,
            [id]: textInput.map((e: string, index: number) =>
              selectedSubtypeOption !== undefined
                ? {
                    value: e,
                    type: selectedSubtypeOption[index],
                  }
                : { value: e },
            ),
          };
        });
      } else if (id === "educations") {
        setApplicantData((prev) => {
          return {
            ...prev,
            [id]: textInput.map((e: string) => ({
              school_id: options.find((opt) => opt.name === e)?.id,
            })),
          };
        });
      } else if (id === "employments") {
        setApplicantData((prev) => {
          return {
            ...prev,
            [id]: textInput.map((e: string) => ({
              company_name: e,
              title: "employee",
              start_date: new Date().toISOString(),
            })),
          };
        });
      }
    }
  }, [textInput, selectedSubtypeOption]);
  return (
    <Box display="flex" flexDirection="column" marginTop="16px">
      <InputLabel>{title}</InputLabel>
      <Box>
        {textInput.map((e, index) => (
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              marginBottom: "8px",
            }}
            key={`div-${index}`}
          >
            {options.length === 0 ? (
              <Input
                type="text"
                fullWidth
                id={id}
                onChange={(e) =>
                  setTextInput([
                    ...textInput.slice(0, index),
                    e.target.value,
                    ...textInput.slice(index + 1),
                  ])
                }
                required={required}
              />
            ) : (
              <Select
                value={textInput[index]}
                onChange={(e) =>
                  setTextInput([
                    ...textInput.slice(0, index),
                    e.target.value + "",
                    ...textInput.slice(index + 1),
                  ])
                }
                label={title}
                variant="standard"
                fullWidth
              >
                {options.map(
                  (opt: { id: number; name: string }, index: number) => (
                    <MenuItem key={index} value={opt.name}>
                      {opt.name}
                    </MenuItem>
                  ),
                )}
              </Select>
            )}

            {subtypeOptions.length !== 0 &&
              selectedSubtypeOption !== undefined && (
                <Select
                  value={selectedSubtypeOption[index]}
                  onChange={(e) =>
                    setSelectedSubtypeOption([
                      ...selectedSubtypeOption.slice(0, index),
                      e.target.value,
                      ...selectedSubtypeOption.slice(index + 1),
                    ])
                  }
                  label={title}
                  variant="standard"
                >
                  {subtypeOptions.map((opt: string, index: number) => (
                    <MenuItem key={index} value={opt}>
                      {opt}
                    </MenuItem>
                  ))}
                </Select>
              )}
          </div>
        ))}
      </Box>
      <Button
        onClick={() => {
          setTextInput([...textInput, ""]);
          if (selectedSubtypeOption !== undefined)
            setSelectedSubtypeOption([
              ...selectedSubtypeOption,
              subtypeOptions[0],
            ]);
        }}
      >
        Add Another
      </Button>
    </Box>
  );
};
