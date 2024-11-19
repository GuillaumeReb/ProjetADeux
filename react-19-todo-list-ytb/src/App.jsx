import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import React from "react";

export default function App() {
  return (
    <div className="p-4 flex flex-col gap-4">
      <Lego color="blue">test</Lego>
      <Lego color="red" size="lg">
        <button
          onClick={() => {
            console.log("Click !");
          }}
        >
          Click me
        </button>
      </Lego>
      <Lego />
      <Lego color="blue" />
    </div>
  );
}

const COLORS = {
  red: "bg-red-500",
  blue: "bg-blue-500",
};

const SIZE = {
  sm: "w-32",
  lg: "w-44",
};

function Lego({ color = "red", size = "sm", children }) {
  return (
    <div
      className={`h-16 flex items-center justify-center ${COLORS[color]} ${SIZE[size]}`}
    >
      {children}
    </div>
  );
}
