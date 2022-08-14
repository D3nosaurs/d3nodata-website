import { IS_BROWSER } from "$fresh/runtime.ts";
import { Configuration, setup } from "twind";
export * from "twind";
export const config: Configuration = {
  darkMode: "class",
  mode: "silent",
  theme: {
    extend: {
      fontFamily: {
        sans: ["Poppins"],
        mono: ["Source Code Pro"],
      },
      colors: {
        sideNavTitle: "#4D908E",
      },
    },
  },
  preflight: {
    "@import": [
      `url('https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,300;0,400;0,500;0,600;0,700;0,800;1,300;1,400;1,500;1,600;1,700;1,800&family=Source+Code+Pro:ital,wght@0,200;0,300;0,400;1,200;1,300;1,400&display=swap')`,
    ],
    ":global": {
      "*": {
        margin: "0",
        padding: "0",
      },
      "td": {
        textAlign: "start",
        border: "1px solid #BFE4A3",
        padding: "10px",
        borderRadius: "40px",
      },
      "th": {
        border: "1px solid #BFE4A3",
        padding: "15px",
        color: "grey",
        background: "#BFE4A3",
      },
      "code": {
        background: "#f6f7f8",
        padding: "2px",
        border: "1px solid grey",
        borderRadius: "5px",
      },
    },
  },
};
if (IS_BROWSER) setup(config);
