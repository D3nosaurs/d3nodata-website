/** @jsx h */
import { h } from "preact";
import { useState } from "preact/hooks";
import { tw } from "@twind";

export default function NavBar() {
  const [openMenu, setOpenMenu] = useState(true);
  const numData = 30;
  const data: number[] = [];
  const label: string[] = [];

  return (
    <nav
      className={tw
        `flex flex-wrap pt-3 items-center justify-center bg-transparent w-full`}
    >
      <div
        className={tw
          `container px-4 mx-auto flex flex-wrap items-center justify-between`}
      >
        <div
          className={tw
            `w-full relative flex justify-between lg:w-auto  px-4 lg:static lg:block lg:justify-start`}
        >
          <img src={"./d3no-data-logo.svg"} className={tw`w-20`} />
          <button
            className={tw
              `cursor-pointer text-xl leading-none px-3 py-1 border border-solid border-transparent rounded bg-transparent block lg:hidden outline-none focus:outline-none`}
            type="button"
            onClick={() => {
              setOpenMenu(!openMenu);
            }}
          >
            <span
              className={tw`block relative w-6 h-px rounded-sm bg-green-300`}
            >
            </span>
            <span
              className={tw
                `block relative w-6 h-px rounded-sm bg-green-300 mt-1`}
            >
            </span>
            <span
              className={tw
                `block relative w-6 h-px rounded-sm bg-green-300 mt-1`}
            >
            </span>
          </button>
        </div>
        {openMenu &&
          (
            <div className={tw`lg:flex flex-grow items-center`}>
              <ul
                className={tw
                  `flex flex-col lg:flex-row md:justify-center md:items-center
                sm:justify-center sm:items-center list-none ml-auto`}
              >
                <li className={tw`nav-item`}>
                  <a
                    className={tw
                      `px-3 py-2 hover:cursor-pointer flex items-center text-xs uppercase font-bold leading-snug text-green-600 hover:opacity-75`}
                    href="/"
                  >
                    HOME
                  </a>
                </li>
                <li className={tw`nav-item`}>
                  <a
                    className={tw
                      `px-3 py-2 hover:cursor-pointer flex items-center text-xs uppercase font-bold leading-snug text-green-600 hover:opacity-75`}
                    href="/greet/documentation"
                  >
                    DOCUMENTATION
                  </a>
                </li>
                <li className={tw`nav-item`}>
                  <a
                    className={tw
                      `px-3 py-2 hover:cursor-pointer flex items-center text-xs uppercase font-bold leading-snug text-green-600 hover:opacity-75`}
                    href="/samples"
                  >
                    SAMPLES
                  </a>
                </li>
                <li className={tw`nav-item`}>
                  <a
                    className={tw
                      `px-3 py-2 hover:cursor-pointer flex items-center text-xs uppercase font-bold leading-snug text-green-600 hover:opacity-75`}
                    href="https://github.com/oslabs-beta/d3no-data"
                    target="_blank"
                  >
                    <img
                      src="github-logo.svg"
                      className={tw`w-7`}
                    />
                  </a>
                </li>
              </ul>
            </div>
          )}
      </div>
    </nav>
  );
}
