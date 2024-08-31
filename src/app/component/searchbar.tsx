"use client";

import * as React from "react";
import Paper from "@mui/material/Paper";
import InputBase from "@mui/material/InputBase";
import IconButton from "@mui/material/IconButton";
import SearchIcon from "@mui/icons-material/Search";

export default function CustomizedInputBase() {
  return (
    <Paper
      component="form"
      sx={{
        m: "10px",
        p: "2px 4px",
        display: "flex",
        alignItems: "center",
        width: 400,
        textAlign: "center",
      }}
    >
      <IconButton type="button" sx={{ p: "10px" }} aria-label="search">
        <SearchIcon />
      </IconButton>
      <InputBase
        sx={{ ml: 1, flex: 1, textAlign: "center" }}
        placeholder="รู้สึกไม่ดี? พิมพ์ถามได้เลย!"
        inputProps={{ "aria-label": "search google maps" }}
      />
    </Paper>
  );
}
