/** @jsx h */
import { h } from "preact";
import { tw } from "@twind";

//creating nav bar to be at the top of every webpage

export default function NavBar() {
  return (
    <nav
      className={tw`flex items-center justify-center bg-[#42476d] shadow-xl`}
    >
      <main className={tw`flex w-full items-center max-w-5xl p-3`}>
        <img src="../d3no-data-logo.svg" width="300px" />
        <section class={tw`flex justify-end w-full gap-5`}>
          <section
            class={tw
              `flex gap-4 items-center shadow-lg bg-[#113c4a] pl-8 pr-8 pt-2 pb-2 rounded-xl`}
          >
            <a href="./" className={tw`flex justify-center items-center`}>
              <p
                className={tw
                  `text-[#8fc9ae] text-xs hover:scale-125 hover:text-[#cfee91] transition-all duration-200`}
              >
                HOME
              </p>
            </a>
            <a
              href="./docs"
              className={tw`flex justify-center items-center`}
            >
              <p
                className={tw
                  `text-[#8fc9ae] text-xs hover:scale-125 hover:text-[#cfee91] transition-all duration-200`}
              >
                DOCUMENTATION
              </p>
            </a>
            <a
              href="../samples"
              className={tw`flex justify-center items-center`}
            >
              <p
                className={tw
                  `text-[#8fc9ae] text-xs hover:scale-125 hover:text-[#cfee91] transition-all duration-200`}
              >
                SAMPLES
              </p>
            </a>
            <a
              href="../contributors"
              className={tw`flex justify-center items-center`}
            >
              <p
                className={tw
                  `text-[#8fc9ae] text-xs hover:scale-125 hover:text-[#cfee91] transition-all duration-200`}
              >
                CONTRIBUTORS
              </p>
            </a>
            {/* from figma */}
            <section
              className={tw
                `flex items-center pl-6 gap-2 border-l-[1px] border-[#2EE59D] justify-center`}
            >
              <a
                href="https://github.com/oslabs-beta/d3no-data"
                target="_blank"
              >
                <svg
                  width="18px"
                  zoomAndPan="magnify"
                  viewBox="0 0 375 374.999991"
                  preserveAspectRatio="xMidYMid meet"
                  className={tw
                    `hover:scale-150 hover:fill-[#9ae17b] transition-all duration-200`}
                >
                  <path
                    fill="#8fc9ae"
                    d="M 187.5 3.515625 C 83.90625 3.515625 0 87.421875 0 191.015625 C 0 273.984375 53.671875 344.0625 128.203125 368.90625 C 137.578125 370.546875 141.09375 364.921875 141.09375 360 C 141.09375 355.546875 140.859375 340.78125 140.859375 325.078125 C 93.75 333.75 81.5625 313.59375 77.8125 303.046875 C 75.703125 297.65625 66.5625 281.015625 58.59375 276.5625 C 52.03125 273.046875 42.65625 264.375 58.359375 264.140625 C 73.125 263.90625 83.671875 277.734375 87.1875 283.359375 C 104.0625 311.71875 131.015625 303.75 141.796875 298.828125 C 143.4375 286.640625 148.359375 278.4375 153.75 273.75 C 112.03125 269.0625 68.4375 252.890625 68.4375 181.171875 C 68.4375 160.78125 75.703125 143.90625 87.65625 130.78125 C 85.78125 126.09375 79.21875 106.875 89.53125 81.09375 C 89.53125 81.09375 105.234375 76.171875 141.09375 100.3125 C 156.09375 96.09375 172.03125 93.984375 187.96875 93.984375 C 203.90625 93.984375 219.84375 96.09375 234.84375 100.3125 C 270.703125 75.9375 286.40625 81.09375 286.40625 81.09375 C 296.71875 106.875 290.15625 126.09375 288.28125 130.78125 C 300.234375 143.90625 307.5 160.546875 307.5 181.171875 C 307.5 253.125 263.671875 269.0625 221.953125 273.75 C 228.75 279.609375 234.609375 290.859375 234.609375 308.4375 C 234.609375 333.515625 234.375 353.671875 234.375 360 C 234.375 364.921875 237.890625 370.78125 247.265625 368.90625 C 249.574219 368.125 251.867188 367.300781 254.144531 366.433594 C 256.417969 365.566406 258.675781 364.652344 260.917969 363.695312 C 263.160156 362.738281 265.378906 361.738281 267.582031 360.699219 C 269.785156 359.65625 271.964844 358.570312 274.125 357.441406 C 276.285156 356.3125 278.421875 355.144531 280.535156 353.933594 C 282.648438 352.722656 284.738281 351.472656 286.804688 350.179688 C 288.871094 348.886719 290.910156 347.554688 292.921875 346.183594 C 294.9375 344.8125 296.921875 343.402344 298.882812 341.953125 C 300.839844 340.503906 302.769531 339.019531 304.671875 337.496094 C 306.570312 335.972656 308.441406 334.410156 310.28125 332.816406 C 312.121094 331.21875 313.929688 329.585938 315.707031 327.917969 C 317.484375 326.253906 319.226562 324.550781 320.9375 322.816406 C 322.648438 321.082031 324.324219 319.316406 325.964844 317.515625 C 327.609375 315.714844 329.214844 313.886719 330.785156 312.023438 C 332.355469 310.160156 333.886719 308.269531 335.382812 306.347656 C 336.882812 304.425781 338.339844 302.476562 339.761719 300.496094 C 341.179688 298.515625 342.5625 296.511719 343.90625 294.480469 C 345.25 292.445312 346.550781 290.390625 347.8125 288.304688 C 349.074219 286.222656 350.296875 284.117188 351.476562 281.984375 C 352.660156 279.855469 353.796875 277.703125 354.894531 275.527344 C 355.992188 273.351562 357.046875 271.15625 358.054688 268.941406 C 359.066406 266.726562 360.035156 264.492188 360.960938 262.238281 C 361.882812 259.984375 362.765625 257.714844 363.601562 255.425781 C 364.4375 253.140625 365.226562 250.835938 365.972656 248.519531 C 366.71875 246.199219 367.421875 243.867188 368.074219 241.523438 C 368.730469 239.175781 369.339844 236.820312 369.90625 234.449219 C 370.46875 232.078125 370.984375 229.699219 371.457031 227.3125 C 371.925781 224.921875 372.351562 222.523438 372.730469 220.117188 C 373.105469 217.710938 373.4375 215.300781 373.722656 212.882812 C 374.003906 210.460938 374.242188 208.039062 374.429688 205.609375 C 374.621094 203.183594 374.761719 200.753906 374.859375 198.320312 C 374.953125 195.886719 375 193.449219 375 191.015625 C 375 87.421875 291.09375 3.515625 187.5 3.515625 Z M 187.5 3.515625 "
                    fill-opacity="1"
                    fill-rule="nonzero"
                  />
                </svg>
              </a>
              <a
                href="https://deno.land/x/d3nodata/charts.ts"
                target="_blank"
              >
                <svg
                  width="18px"
                  viewBox="0 0 5120 5120"
                  fill="#8fc9ae"
                  className={tw
                    `hover:scale-150 hover:fill-[#9ae17b] transition-all duration-200`}
                >
                  <path d="M2560 0a2560 2560 0 1 1 0 5120 2560 2560 0 0 1 0-5120z" />
                  <path
                    fill="#113c4a"
                    d="M2460 1449c-744 0-1324 469-1324 1052 0 550 533 901 1359 884l25-1 91-3-23 60 3 6a668 668 0 0 1 18 47l2 6 3 10 4 14 3 9 4 10 3 11 4 16 5 17 3 11 5 18 5 19 4 19 5 20 4 14 5 22 5 22 7 30 3 16 5 24 5 25 6 26 7 37 6 30 8 42 4 21 7 33 6 34 8 46 9 48 8 50 9 51 9 52 9 54 9 56 7 43 11 73 5 30 12 77 9 63 8 48 9 66 5 33c549-73 1037-339 1393-728l11-12-51-190-135-505-84-314-74-276-46-168-29-106-17-64-16-56-6-24-4-13-2-7-2-6c-78-251-229-473-435-634-242-189-549-288-907-288zm-654 2669c-65-18-133 20-152 85l-1 3-112 416a2287 2287 0 0 0 215 93l17 7 121-451 1-3c16-66-23-133-89-150zm697-305c-66-18-134 20-153 85l-1 3-170 630v3a125 125 0 0 0 241 65l1-3 170-630v-3l3-14 1-5-4-21-6-29-4-18a125 125 0 0 0-78-63zm-1185-649-8 19-1 4-170 630-1 3a125 125 0 0 0 241 66l1-3 154-572c-80-42-153-92-216-147zm-405-725c-66-17-134 21-153 85l-1 3-170 630v3a125 125 0 0 0 241 66l1-3 170-630v-3c16-66-23-133-88-151zm3811-143c-65-17-133 21-152 85l-1 3-170 630-1 3a125 125 0 0 0 242 66v-3l171-630v-4c16-65-23-132-89-150zM542 1455a2284 2284 0 0 0-267 838 124 124 0 0 0 62 38c65 17 133-21 152-85l1-3 170-630 1-3c16-66-23-133-89-151a127 127 0 0 0-30-4zm3752 4c-66-17-133 21-153 85v3l-170 630-1 3a125 125 0 0 0 241 66l1-3 170-630 1-3c16-66-24-133-89-151z"
                  />
                  <path d="M2620 1870a160 160 0 1 1 0 320 160 160 0 0 1 0-320z" />
                  <path
                    fill="#113c4a"
                    d="M1282 860c-65-17-133 21-152 85l-1 3-170 630-1 3a125 125 0 0 0 241 66l1-3 170-630 1-4c16-65-23-132-89-150zm2185 119c-66-17-134 21-153 85l-1 3-114 424a1399 1399 0 0 1 211 128l11 9 134-495v-3c16-66-23-133-88-151zM2355 269a2299 2299 0 0 0-238 34l-17 3-158 587-1 3a125 125 0 0 0 241 65l1-3 170-630 1-3a124 124 0 0 0 1-56zm1564 435-33 124-1 3a125 125 0 0 0 241 65l1-3 4-13a2312 2312 0 0 0-197-165l-15-11zm-989-414-60 223-1 3a125 125 0 0 0 241 65l1-3 63-235a2286 2286 0 0 0-226-50l-18-3z"
                  />
                </svg>
              </a>
              <a
                href="https://deno.land/x/d3nodata/charts.ts"
                target="_blank"
              >
                <svg
                  width="18px"
                  zoomAndPan="magnify"
                  viewBox="0 0 375 374.999991"
                  preserveAspectRatio="xMidYMid meet"
                  className={tw
                    `hover:scale-150 hover:fill-[#9ae17b] transition-all duration-200`}
                >
                  <defs>
                    <clipPath id="id1">
                      <path
                        d="M 14.105469 39.03125 L 360.605469 39.03125 L 360.605469 336.03125 L 14.105469 336.03125 Z M 14.105469 39.03125 "
                        clip-rule="nonzero"
                      />
                    </clipPath>
                  </defs>
                  <g clip-path="url(#id1)">
                    <path
                      fill="#8fc9ae"
                      d="M 129.667969 324.300781 C 129.667969 331.648438 125.738281 336.03125 120.167969 336.03125 C 118.207031 336.03125 116.015625 335.484375 113.699219 334.324219 L 23.878906 288.785156 C 18.601562 286.113281 14.285156 279.023438 14.285156 273.058594 L 14.285156 49.859375 C 14.285156 43.960938 17.410156 40.480469 21.882812 40.480469 C 23.460938 40.480469 25.234375 40.898438 27.066406 41.835938 L 30.222656 43.445312 C 30.222656 43.445312 30.253906 43.445312 30.253906 43.445312 L 129.246094 93.621094 C 129.410156 93.71875 129.539062 93.878906 129.667969 94.007812 Z M 233.390625 54.5625 L 239.445312 44.605469 C 241.601562 41.0625 245.558594 39.03125 249.585938 39.03125 C 250.519531 39.03125 251.484375 39.160156 252.417969 39.417969 C 253.125 39.578125 253.867188 39.835938 254.636719 40.222656 L 359.039062 93.140625 C 359.070312 93.140625 359.070312 93.171875 359.070312 93.171875 L 359.167969 93.203125 C 359.234375 93.234375 359.234375 93.332031 359.296875 93.363281 C 359.8125 93.785156 360.039062 94.492188 359.683594 95.074219 L 255.699219 266.390625 L 245.078125 283.855469 L 176.183594 148.792969 Z M 146.148438 233.777344 L 146.148438 126.171875 L 220.160156 271.320312 L 153.585938 237.578125 Z M 360.425781 324.300781 C 360.425781 331.195312 356.335938 335.128906 350.316406 335.128906 C 347.613281 335.128906 344.519531 334.355469 341.269531 332.710938 L 326.363281 325.136719 L 259.789062 291.398438 L 360.425781 125.625 Z M 360.425781 324.300781 "
                      fill-opacity="1"
                      fill-rule="nonzero"
                    />
                  </g>
                </svg>
              </a>
            </section>
          </section>
        </section>
      </main>
    </nav>
  );
}
