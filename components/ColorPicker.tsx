/** @jsx h */
import { h } from "preact";
import { IS_BROWSER } from "$fresh/runtime.ts";
import { tw } from "@twind";

type ColorPickerProps = {
  value: string;
};

export function ColorPicker(props: ColorPickerProps) {
  <input
    type="color"
    value={props.value}
  />;
}
