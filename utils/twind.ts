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
    },
  },
  preflight: {
    "@import": [
      `url('https://fonts.googleapis.com/css2?family=Quicksand:wght@300;400;500;600;700&family=Source+Code+Pro:ital,wght@0,200;0,300;0,400;1,200;1,300;1,400&display=swap')`,
    ],
  },
};
if (IS_BROWSER) setup(config);
