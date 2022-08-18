/** @jsx h */
/** @jsxFrag Fragment */
import { Fragment, h } from "preact";
import { tw } from "@twind";

type DocProps = {
  name: string | string[];
  type: string;
  defaultValue: string | string[];
  required: string;
  description: string;
};

export default function PropsTable(props: { info: DocProps[] }) {
  const dataRow = [];
  // console.log('props in propstable: ', props);

  // looping through the array of properties
  for (let prop of props.info) {
    const nameData = [];
    const defaultValue = [];
    if (Array.isArray(prop.name)) {
      for (let name of prop.name) {
        nameData.push(
          <>
            <code>
              {name}
            </code>
            <br />
          </>,
        );
      }
    } else {
      nameData.push(
        <Fragment>
          <code>
            {prop.name}
          </code>
          <br/>
        </Fragment>,
      );
    }

    if (Array.isArray(prop.defaultValue)) {
      for (let value of prop.defaultValue) {
        defaultValue.push(
          <Fragment>
            <code>
              {value}
            </code>
            <br />
          </Fragment>,
        );
      }
    } else {
      defaultValue.push(
        <Fragment>
          <code>
            {prop.defaultValue}
          </code>
          <br />
        </Fragment>,
      );
    }

    dataRow.push(
      <tr>
        <td>
          {nameData}
        </td>
        <td>
          <code>
            {prop.type}
          </code>
        </td>
        <td>
          <code>
            {prop.defaultValue}
          </code>
        </td>
        <td>
          {prop.required}
        </td>
        <td>
          {prop.description}
        </td>
      </tr>,
    );
  }

  return (
    <table class={tw`table-fixed w-[90%]`}>
      <thead>
        <tr>
          <th class={tw`w-[25%]`}>NAME</th>
          <th class={tw`w-[20%]`}>TYPE</th>
          <th class={tw`w-[20%]`}>DEFAULT VALUE</th>
          <th class={tw`w-[15%]`}>REQUIRED</th>
          <th class={tw`w-[20%]`}>DESCRIPTION</th>
        </tr>
      </thead>
      <tbody>
        {dataRow}
      </tbody>
    </table>
  );
}
