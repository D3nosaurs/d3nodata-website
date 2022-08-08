/** @jsx h */
import { Fragment, h } from "preact";
import { tw } from "@twind";
import NavBar from "../islands/NavBar.tsx";

export default function Home() {
  
  return (
    <Fragment>
      <div
        className={tw`flex h-screen items-center bg-white flex-col w-full`}
      >
        <NavBar></NavBar>

        <div
          className={tw
            `w-full h-full flex flex-col items-center justify-start pt-20 gap-12`}
        >
          <h1
            className={tw
              `w-10/12 font-bold text-center font-sans tracking-widest text-3xl lg:text-5xl xl:text-6xl md:text-4xl  leading-normal text-green-500`}
          >
            OUT OF THE BOX DATA CHART COMPONENTS FOR DENO
          </h1>

          <div className={tw`w-full flex flex-col items-center gap-24`}>
            <div
              className={tw
                `shadow-md flex items-center justify-center rounded-lg `}
            >
              <p
                className={tw
                  `text-[10px] font-mono p-3 bg-white shadow-lg lg:text-sm rounded-lg`}
              >
                import * from "deno.land/x/chartcomps@v1.0.0"
              </p>
            </div>
            <a
              href="/greet/documentation"
              className={tw`flex flex-row justify-center`}
            >
              <button
                className={tw
                  `bg-green-400 absolute font-semibold transition-all p-3 rounded-lg text-white shadow-xl hover:bg-green-300 hover:shadow-none hover:animate-none duration-500`}
              >
                GET STARTED
              </button>
            </a>
          </div>
        </div>
        <svg
          className={tw`animate-pulse`}
          width="100"
          zoomAndPan="magnify"
          viewBox="0 0 375 374.999991"
          height="100"
          preserveAspectRatio="xMidYMid meet"
          version="1.0"
        >
          <defs>
            <clipPath id="id1">
              <path
                d="M 66.816406 28.441406 L 308.316406 28.441406 L 308.316406 346.441406 L 66.816406 346.441406 Z M 66.816406 28.441406 "
                clip-rule="nonzero"
              />
            </clipPath>
          </defs>
          <g clip-path="url(#id1)">
            <path
              fill="#BFE4A3"
              d="M 301.050781 208.386719 C 296.386719 203.726562 290.1875 201.148438 283.601562 201.148438 C 277.015625 201.148438 270.816406 203.726562 266.148438 208.386719 L 212.261719 262.226562 L 212.261719 53.113281 C 212.261719 39.519531 201.175781 28.441406 187.566406 28.441406 C 173.957031 28.441406 162.871094 39.519531 162.871094 53.113281 L 162.871094 262.226562 L 108.980469 208.386719 C 104.316406 203.726562 98.113281 201.148438 91.527344 201.148438 C 84.945312 201.148438 78.742188 203.726562 74.078125 208.386719 C 69.414062 213.046875 66.835938 219.242188 66.835938 225.820312 C 66.835938 232.402344 69.414062 238.597656 74.078125 243.257812 L 169.949219 339.039062 C 174.503906 343.757812 180.707031 346.386719 187.402344 346.441406 C 187.457031 346.441406 187.511719 346.441406 187.566406 346.441406 C 194.207031 346.441406 200.351562 343.921875 205.015625 339.207031 L 301.050781 243.257812 C 305.71875 238.597656 308.296875 232.402344 308.296875 225.820312 C 308.296875 219.242188 305.71875 213.046875 301.050781 208.386719 Z M 301.050781 208.386719 "
              fill-opacity="1"
              fill-rule="nonzero"
            />
          </g>
        </svg>
      </div>
      
    </Fragment>
  );
}
