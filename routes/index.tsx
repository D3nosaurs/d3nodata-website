/** @jsx h */
import { Fragment, h } from "preact";
import { tw } from "@twind";
import Counter from "../islands/Counter.tsx";

export default function Home() {
  const layout = {
    display: "flex",
  };

  return (
    <Fragment>
      <nav
        className={tw
          `relative flex flex-wrap items-center justify-between px-2 py-3 bg-pink-500 mb-3`}
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
            >
              <span className={tw`block relative w-6 h-px rounded-sm bg-white`}>
              </span>
              <span
                className={tw`block relative w-6 h-px rounded-sm bg-white mt-1`}
              >
              </span>
              <span
                className={tw`block relative w-6 h-px rounded-sm bg-white mt-1`}
              >
              </span>
            </button>
          </div>
          <div
            className="lg:flex flex-grow items-center"
            id="example-navbar-warning"
          >
            <ul className={tw`flex flex-col lg:flex-row list-none ml-auto`}>
              <li className={tw`nav-item`}>
                <a
                  className={tw
                    `px-3 py-2 flex items-center text-xs uppercase font-bold leading-snug text-white hover:opacity-75`}
                  href="#pablo"
                >
                  Discover
                </a>
              </li>
              <li className={tw`nav-item`}>
                <a
                  className={tw
                    `px-3 py-2 flex items-center text-xs uppercase font-bold leading-snug text-white hover:opacity-75`}
                  href="#pablo"
                >
                  Profile
                </a>
              </li>
              <li className={tw`nav-item`}>
                <a
                  className={tw
                    `px-3 py-2 flex items-center text-xs uppercase font-bold leading-snug text-white hover:opacity-75`}
                  href="#pablo"
                >
                  Setting
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </Fragment>
  );
}
