import { IS_BROWSER } from "$fresh/runtime.ts";
import { Configuration, setup } from "twind";
export * from "twind";
export const config: Configuration = {
  darkMode: "class",
  mode: "silent",
  theme: {
    extend: {
      fontFamily: {
        sans: ["Quicksand"],
        mono: ["Source Code Pro"],
      },
      colors: {
        sideNavTitle: "#4D908E",
      },
    },
  },
  preflight: {
    "@import": [
      `url('https://fonts.googleapis.com/css2?family=Quicksand:wght@300;400;500;600;700&family=Source+Code+Pro:ital,wght@0,200;0,300;0,400;1,200;1,300;1,400&display=swap')`,
    ],
    ":global": {
      "td": {
        textAlign: "start",
        border: "1px solid black",
        padding: "10px",
      },
      "th": {
        border: "1px solid black",
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
