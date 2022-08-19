/**@jsx h */
/**@jsxFrag Fragment */
import { h, Fragment } from 'preact';
import { tw } from "@twind";

export default function DocsSideBar (): h.JSX.Element{
  return (
      <div>
        <ul class={tw` flex flex-col pt-6 pr-7 gap-5`}>
          <li>
            <a class={tw`w-full text-left pl-5 text-sideNavTitle  rounded-sm hover:bg-gray-200 hover:font-semibold duration-300`} 
              href='/docs/bar'> 
              BAR CHART
            </a>
          </li>
          <li>
            <a class={tw`w-full text-left pl-5 text-sideNavTitle  rounded-sm hover:bg-gray-200 hover:font-semibold duration-300`} 
              href='/docs/line'> 
              LINE CHART
            </a>
          </li>
          <li>
            <a class={tw`w-full text-left pl-5 text-sideNavTitle  rounded-sm hover:bg-gray-200 hover:font-semibold duration-300`} 
              href='/docs/scatter'>
              SCATTERPLOT CHART
            </a>
          </li>
          <li>
            <a class={tw`w-full text-left pl-5 text-sideNavTitle  rounded-sm hover:bg-gray-200 hover:font-semibold duration-300`}
              href='/docs/piedonut' >
              DONUT & PIE CHART
            </a>
          </li>
        </ul>
    </div>
  )
}