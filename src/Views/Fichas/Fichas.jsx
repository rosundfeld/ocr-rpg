import React, { useState } from "react";
import { useEffect } from "react";

import GetInfo from "../../Components/GetInfo/getInfo";

export default function Fichas() {
  return (
    <div>
      <div style={{ margin: "auto", marginTop: "2%" }}>
        <h1>Fichas</h1>
        <GetInfo />
      </div>
    </div>
  );
}
