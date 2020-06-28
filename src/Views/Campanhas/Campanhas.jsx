import React, { useState } from "react";
import { useEffect } from "react";

import { Paper, Avatar } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
  navIcon: {
    "&:hover": {
      cursor: "pointer",
      backgroundColor: "#944b44",
    },
  },
});

export default function Campanhas() {
  const classes = useStyles();

  return <div>
    <div>
      <h1 style={{ margin: "auto", marginTop: "20%" }}>Campanhas</h1>
    </div>
  </div>;
}
