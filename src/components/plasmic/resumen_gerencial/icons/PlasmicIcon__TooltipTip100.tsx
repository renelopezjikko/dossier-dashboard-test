// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type TooltipTip100IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function TooltipTip100Icon(props: TooltipTip100IconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 4 4"}
      height={"1em"}
      width={"1em"}
      className={classNames("plasmic-default__svg", className)}
      style={style}
      {...restProps}
    >
      {title && <title>{title}</title>}

      <path d={"M2 4L0 0h4L2 4z"} fill={"currentColor"}></path>
    </svg>
  );
}

export default TooltipTip100Icon;
/* prettier-ignore-end */
