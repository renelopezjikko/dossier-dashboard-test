// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type KeyboardArrow1003IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function KeyboardArrow1003Icon(props: KeyboardArrow1003IconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 16 16"}
      height={"1em"}
      width={"1em"}
      className={classNames("plasmic-default__svg", className)}
      style={style}
      {...restProps}
    >
      {title && <title>{title}</title>}

      <path
        d={"M4.94 5.727L8 8.78l3.06-3.053.94.94-4 4-4-4 .94-.94z"}
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default KeyboardArrow1003Icon;
/* prettier-ignore-end */
