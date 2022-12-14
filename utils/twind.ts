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
    },
  },
  preflight: {
    "@import": [
      `url('https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,300;0,400;0,500;0,600;0,700;0,800;1,300;1,400;1,500;1,600;1,700;1,800&family=Source+Code+Pro:ital,wght@0,200;0,300;0,400;1,200;1,300;1,400&display=swap')`,
    ],
    ":global": {
      "*": {
        padding: 0,
        margin: 0,
        boxSizing: "border-box",
      },
      "body": {
        width: "100%",
        height: "100vh",
        "background-color": "white",
      },

      "#logo path:nth-child(1)": {
        strokeDasharray: "952.628662109375px",
        strokeDashoffset: "952.628662109375px",
        animation: "line-anim 0.6s ease forwards 0.05s",
      },
      "#logo path:nth-child(2)": {
        strokeDasharray: "862.2592163085938px",
        strokeDashoffset: "862.2592163085938px",
        animation: "line-anim 0.6s ease forwards 0.1s",
      },
      "#logo path:nth-child(3)": {
        strokeDasharray: "1008.71826171875px",
        strokeDashoffset: "1008.71826171875px",
        animation: "line-anim 0.6s ease forwards 0.13s",
      },
      "#logo path:nth-child(4)": {
        strokeDasharray: "669.2959594726562px",
        strokeDashoffset: "669.2959594726562px",
        animation: "line-anim 0.6s ease forwards 0.15s",
      },
      "#logo path:nth-child(5)": {
        strokeDasharray: "952.629150390625px",
        strokeDashoffset: "952.629150390625px",
        animation: "line-anim 0.6s ease forwards 0.18s",
      },
      "#logo path:nth-child(6)": {
        strokeDasharray: "813.01953125px",
        strokeDashoffset: "813.01953125px",
        animation: "line-anim 0.6s ease forwards 0.21s",
      },
      "#logo path:nth-child(7)": {
        strokeDasharray: "573.1198120117188px",
        strokeDashoffset: "573.1198120117188px",
        animation: "line-anim 0.6s ease forwards 0.23s",
      },
      "#logo path:nth-child(8)": {
        strokeDasharray: "813.0161743164062px",
        strokeDashoffset: "813.0161743164062px",
        animation: "line-anim 0.6s ease forwards 0.28s",
      },

      // styling chart props documentation
      "table": {
        marginLeft: "auto",
        marginRight: "auto",
        marginTop: "50px",
        marginBottom: "50px",
        borderWidth: "10px",
        borderStyle: "solid",
        borderRadius: "30px",
      },

      "td": {
        textAlign: "center",
        padding: "10px",
        fontSize: "0.8em",
      },

      "th": {
        padding: "15px",
        fontWeight: "normal",
        color: "#2EE59D",
        background: "#42476d",
        borderBottom: "2px solid #4c5f7a",
      },
      "code": {
        background: "#f6f7f8",
        padding: "2px",
        border: "1px solid grey",
        borderRadius: "5px",
      },

      "#deno-logo": {
        animation: "1s ease appear",
      },

      ".code-container": {
        overflow: "hidden",
        animation: "1.2s ease appear",
      },

      "#bt-started": {
        animation: "1.4s ease appear",
      },

      ".code-container .text": {
        position: "relative",
      },

      ".text.sec-text::before": {
        content: "''",
        position: "absolute",
        top: 0,
        left: 0,
        height: "100%",
        width: "100%",
        backgroundColor: "#42476d",
        borderLeft: "2px solid #2EE59D",
        animation: "animate 3s steps(9) infinite",
      },

      ".js-keycode": {
        color: "#f29696",
      },

      ".js-stringcode": {
        color: "#9d65c9",
      },

      "@keyframes animate": {
        "40%, 60%": {
          left: "100%",
        },
        "100%": {
          left: "0%",
        },
      },

      "@keyframes line-anim": {
        "to": {
          strokeDashoffset: "0",
        },
      },

      "#chart-typing": {
        position: "absolute",
        "&::before, &::after": {
          content: "''",
          position: "absolute",
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
        },
        "&::before": {
          background: "teal",
        },
      },

      "@keyframes appear": {
        "0%": {
          opacity: 0,
        },
        "88%": {
          opacity: 0,
        },
        "100%": {
          opacity: 1,
        },
      },
    },
  },
};
if (IS_BROWSER) setup(config);
