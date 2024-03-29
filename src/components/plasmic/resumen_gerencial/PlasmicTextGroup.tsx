// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */

/** @jsxRuntime classic */
/** @jsx createPlasmicElementProxy */
/** @jsxFrag React.Fragment */

// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: 2kD2XthGtXKCG8U42Tcha7
// Component: WtPaT5ym56

import * as React from "react";

import * as p from "@plasmicapp/react-web";
import * as ph from "@plasmicapp/react-web/lib/host";

import {
  hasVariant,
  classNames,
  wrapWithClassName,
  createPlasmicElementProxy,
  makeFragment,
  MultiChoiceArg,
  SingleBooleanChoiceArg,
  SingleChoiceArg,
  pick,
  omit,
  useTrigger,
  StrictProps,
  deriveRenderOpts,
  ensureGlobalVariants
} from "@plasmicapp/react-web";

import "@plasmicapp/react-web/lib/plasmic.css";

import projectcss from "./plasmic_resumen_gerencial.module.css"; // plasmic-import: 2kD2XthGtXKCG8U42Tcha7/projectcss
import sty from "./PlasmicTextGroup.module.css"; // plasmic-import: WtPaT5ym56/css

export type PlasmicTextGroup__VariantMembers = {};
export type PlasmicTextGroup__VariantsArgs = {};
type VariantPropType = keyof PlasmicTextGroup__VariantsArgs;
export const PlasmicTextGroup__VariantProps = new Array<VariantPropType>();

export type PlasmicTextGroup__ArgsType = {
  title?: React.ReactNode;
  subtitle?: React.ReactNode;
};
type ArgPropType = keyof PlasmicTextGroup__ArgsType;
export const PlasmicTextGroup__ArgProps = new Array<ArgPropType>(
  "title",
  "subtitle"
);

export type PlasmicTextGroup__OverridesType = {
  textLayers?: p.Flex<"div">;
};

export interface DefaultTextGroupProps {
  title?: React.ReactNode;
  subtitle?: React.ReactNode;
  className?: string;
}

const __wrapUserFunction =
  globalThis.__PlasmicWrapUserFunction ?? ((loc, fn) => fn());
const __wrapUserPromise =
  globalThis.__PlasmicWrapUserPromise ??
  (async (loc, promise) => {
    return await promise;
  });

function PlasmicTextGroup__RenderFunc(props: {
  variants: PlasmicTextGroup__VariantsArgs;
  args: PlasmicTextGroup__ArgsType;
  overrides: PlasmicTextGroup__OverridesType;
  forNode?: string;
}) {
  const { variants, overrides, forNode } = props;

  const $ctx = ph.useDataEnv?.() || {};
  const args = React.useMemo(() => Object.assign({}, props.args), [props.args]);

  const $props = {
    ...args,
    ...variants
  };
  const refsRef = React.useRef({});
  const $refs = refsRef.current;

  const currentUser = p.useCurrentUser?.() || {};
  const [$queries, setDollarQueries] = React.useState({});

  return (
    <p.Stack
      as={"div"}
      data-plasmic-name={"textLayers"}
      data-plasmic-override={overrides.textLayers}
      data-plasmic-root={true}
      data-plasmic-for-node={forNode}
      hasGap={true}
      className={classNames(
        projectcss.all,
        projectcss.root_reset,
        projectcss.plasmic_default_styles,
        projectcss.plasmic_mixins,
        projectcss.plasmic_tokens,
        sty.textLayers
      )}
    >
      {p.renderPlasmicSlot({
        defaultContents: (
          <div
            className={classNames(
              projectcss.all,
              projectcss.__wab_text,
              sty.text___77TuE
            )}
          >
            {"Title"}
          </div>
        ),
        value: args.title,
        className: classNames(sty.slotTargetTitle)
      })}
      {p.renderPlasmicSlot({
        defaultContents: (
          <div
            className={classNames(
              projectcss.all,
              projectcss.__wab_text,
              sty.text__sMpyH
            )}
          >
            {"Subtitle"}
          </div>
        ),
        value: args.subtitle,
        className: classNames(sty.slotTargetSubtitle)
      })}
    </p.Stack>
  ) as React.ReactElement | null;
}

const PlasmicDescendants = {
  textLayers: ["textLayers"]
} as const;
type NodeNameType = keyof typeof PlasmicDescendants;
type DescendantsType<T extends NodeNameType> =
  (typeof PlasmicDescendants)[T][number];
type NodeDefaultElementType = {
  textLayers: "div";
};

type ReservedPropsType = "variants" | "args" | "overrides";
type NodeOverridesType<T extends NodeNameType> = Pick<
  PlasmicTextGroup__OverridesType,
  DescendantsType<T>
>;
type NodeComponentProps<T extends NodeNameType> =
  // Explicitly specify variants, args, and overrides as objects
  {
    variants?: PlasmicTextGroup__VariantsArgs;
    args?: PlasmicTextGroup__ArgsType;
    overrides?: NodeOverridesType<T>;
  } & Omit<PlasmicTextGroup__VariantsArgs, ReservedPropsType> & // Specify variants directly as props
    /* Specify args directly as props*/ Omit<
      PlasmicTextGroup__ArgsType,
      ReservedPropsType
    > &
    /* Specify overrides for each element directly as props*/ Omit<
      NodeOverridesType<T>,
      ReservedPropsType | VariantPropType | ArgPropType
    > &
    /* Specify props for the root element*/ Omit<
      Partial<React.ComponentProps<NodeDefaultElementType[T]>>,
      ReservedPropsType | VariantPropType | ArgPropType | DescendantsType<T>
    >;

function makeNodeComponent<NodeName extends NodeNameType>(nodeName: NodeName) {
  type PropsType = NodeComponentProps<NodeName> & { key?: React.Key };
  const func = function <T extends PropsType>(
    props: T & StrictProps<T, PropsType>
  ) {
    const { variants, args, overrides } = React.useMemo(
      () =>
        deriveRenderOpts(props, {
          name: nodeName,
          descendantNames: [...PlasmicDescendants[nodeName]],
          internalArgPropNames: PlasmicTextGroup__ArgProps,
          internalVariantPropNames: PlasmicTextGroup__VariantProps
        }),
      [props, nodeName]
    );
    return PlasmicTextGroup__RenderFunc({
      variants,
      args,
      overrides,
      forNode: nodeName
    });
  };
  if (nodeName === "textLayers") {
    func.displayName = "PlasmicTextGroup";
  } else {
    func.displayName = `PlasmicTextGroup.${nodeName}`;
  }
  return func;
}

export const PlasmicTextGroup = Object.assign(
  // Top-level PlasmicTextGroup renders the root element
  makeNodeComponent("textLayers"),
  {
    // Helper components rendering sub-elements

    // Metadata about props expected for PlasmicTextGroup
    internalVariantProps: PlasmicTextGroup__VariantProps,
    internalArgProps: PlasmicTextGroup__ArgProps
  }
);

export default PlasmicTextGroup;
/* prettier-ignore-end */
