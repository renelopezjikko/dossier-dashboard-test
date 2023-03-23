// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */

/** @jsxRuntime classic */
/** @jsx createPlasmicElementProxy */
/** @jsxFrag React.Fragment */

// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: 2kD2XthGtXKCG8U42Tcha7
// Component: -aplkpCpKqjT

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
import DashboardPanelGroup from "../../DashboardPanelGroup"; // plasmic-import: aUt5hf66GP/component

import "@plasmicapp/react-web/lib/plasmic.css";

import projectcss from "./plasmic_resumen_gerencial.module.css"; // plasmic-import: 2kD2XthGtXKCG8U42Tcha7/projectcss
import sty from "./PlasmicHomepage.module.css"; // plasmic-import: -aplkpCpKqjT/css

import TooltipTip100Icon from "./icons/PlasmicIcon__TooltipTip100"; // plasmic-import: UKPUMOhTY/icon
import KeyboardArrow1003Icon from "./icons/PlasmicIcon__KeyboardArrow1003"; // plasmic-import: iLE7iNdkM/icon
import keyboardArrow100US315BzmoH from "./images/keyboardArrow100.svg"; // plasmic-import: uS315bzmoH/picture

export type PlasmicHomepage__VariantMembers = {};
export type PlasmicHomepage__VariantsArgs = {};
type VariantPropType = keyof PlasmicHomepage__VariantsArgs;
export const PlasmicHomepage__VariantProps = new Array<VariantPropType>();

export type PlasmicHomepage__ArgsType = {};
type ArgPropType = keyof PlasmicHomepage__ArgsType;
export const PlasmicHomepage__ArgProps = new Array<ArgPropType>();

export type PlasmicHomepage__OverridesType = {
  root?: p.Flex<"div">;
  freeBox?: p.Flex<"div">;
  typedropdownSildernoHovernoActivenoEmptyyesZlotnoDisabledno?: p.Flex<"div">;
  inputFieldContent109?: p.Flex<"div">;
  inputTextWithZlot102?: p.Flex<"div">;
  iconButton2012?: p.Flex<"div">;
  tooltip300?: p.Flex<"div">;
  spacer102?: p.Flex<"div">;
  frame?: p.Flex<"div">;
  frame2?: p.Flex<"div">;
  tooltipText?: p.Flex<"div">;
  iconWrapper103?: p.Flex<"div">;
  img?: p.Flex<typeof p.PlasmicImg>;
  inputText103?: p.Flex<"div">;
  label?: p.Flex<"div">;
  inputValue100?: p.Flex<"div">;
  keyboardCursor100?: p.Flex<"div">;
  frame3?: p.Flex<"div">;
  frame4?: p.Flex<"div">;
  text?: p.Flex<"div">;
  iconButton20122?: p.Flex<"div">;
  tooltip3002?: p.Flex<"div">;
  spacer1022?: p.Flex<"div">;
  frame5?: p.Flex<"div">;
  frame6?: p.Flex<"div">;
  tooltipText2?: p.Flex<"div">;
  spacer1023?: p.Flex<"div">;
  frame7?: p.Flex<"div">;
  frame8?: p.Flex<"div">;
  iconnoneHeight48HasLinesfalseTypeprimaryStatedefaultHovernoTooltipAlignmentnaTooltipPositionna?: p.Flex<"div">;
  buttonLabel?: p.Flex<"div">;
  dashboardPanelGroup?: p.Flex<typeof DashboardPanelGroup>;
};

export interface DefaultHomepageProps {
  className?: string;
}

const __wrapUserFunction =
  globalThis.__PlasmicWrapUserFunction ?? ((loc, fn) => fn());
const __wrapUserPromise =
  globalThis.__PlasmicWrapUserPromise ??
  (async (loc, promise) => {
    return await promise;
  });

function PlasmicHomepage__RenderFunc(props: {
  variants: PlasmicHomepage__VariantsArgs;
  args: PlasmicHomepage__ArgsType;
  overrides: PlasmicHomepage__OverridesType;
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
    <React.Fragment>
      {}

      <div className={projectcss.plasmic_page_wrapper}>
        <p.Stack
          as={"div"}
          data-plasmic-name={"root"}
          data-plasmic-override={overrides.root}
          data-plasmic-root={true}
          data-plasmic-for-node={forNode}
          hasGap={true}
          className={classNames(
            projectcss.all,
            projectcss.root_reset,
            projectcss.plasmic_default_styles,
            projectcss.plasmic_mixins,
            projectcss.plasmic_tokens,
            sty.root
          )}
        >
          {true ? (
            <p.Stack
              as={"div"}
              data-plasmic-name={"freeBox"}
              data-plasmic-override={overrides.freeBox}
              hasGap={true}
              className={classNames(projectcss.all, sty.freeBox)}
            >
              <div
                data-plasmic-name={
                  "typedropdownSildernoHovernoActivenoEmptyyesZlotnoDisabledno"
                }
                data-plasmic-override={
                  overrides.typedropdownSildernoHovernoActivenoEmptyyesZlotnoDisabledno
                }
                className={classNames(
                  projectcss.all,
                  sty.typedropdownSildernoHovernoActivenoEmptyyesZlotnoDisabledno
                )}
              >
                <p.Stack
                  as={"div"}
                  data-plasmic-name={"inputFieldContent109"}
                  data-plasmic-override={overrides.inputFieldContent109}
                  hasGap={true}
                  className={classNames(
                    projectcss.all,
                    sty.inputFieldContent109
                  )}
                >
                  <p.Stack
                    as={"div"}
                    data-plasmic-name={"inputTextWithZlot102"}
                    data-plasmic-override={overrides.inputTextWithZlot102}
                    hasGap={true}
                    className={classNames(
                      projectcss.all,
                      sty.inputTextWithZlot102
                    )}
                  >
                    {false ? (
                      <div
                        data-plasmic-name={"iconButton2012"}
                        data-plasmic-override={overrides.iconButton2012}
                        className={classNames(
                          projectcss.all,
                          sty.iconButton2012
                        )}
                      >
                        {false ? (
                          <div
                            data-plasmic-name={"tooltip300"}
                            data-plasmic-override={overrides.tooltip300}
                            className={classNames(
                              projectcss.all,
                              sty.tooltip300
                            )}
                          >
                            <div
                              data-plasmic-name={"spacer102"}
                              data-plasmic-override={overrides.spacer102}
                              className={classNames(
                                projectcss.all,
                                sty.spacer102
                              )}
                            >
                              <div
                                data-plasmic-name={"frame"}
                                data-plasmic-override={overrides.frame}
                                className={classNames(
                                  projectcss.all,
                                  sty.frame
                                )}
                              />

                              <div
                                data-plasmic-name={"frame2"}
                                data-plasmic-override={overrides.frame2}
                                className={classNames(
                                  projectcss.all,
                                  sty.frame2
                                )}
                              />
                            </div>
                            <div
                              data-plasmic-name={"tooltipText"}
                              data-plasmic-override={overrides.tooltipText}
                              className={classNames(
                                projectcss.all,
                                projectcss.__wab_text,
                                sty.tooltipText
                              )}
                            >
                              {"Anterior"}
                            </div>
                            <TooltipTip100Icon
                              className={classNames(
                                projectcss.all,
                                sty.svg__zQb35
                              )}
                              role={"img"}
                            />
                          </div>
                        ) : null}
                        <div
                          data-plasmic-name={"iconWrapper103"}
                          data-plasmic-override={overrides.iconWrapper103}
                          className={classNames(
                            projectcss.all,
                            sty.iconWrapper103
                          )}
                        >
                          <p.PlasmicImg
                            data-plasmic-name={"img"}
                            data-plasmic-override={overrides.img}
                            alt={""}
                            className={classNames(sty.img)}
                            displayHeight={"16px" as const}
                            displayMaxHeight={"none" as const}
                            displayMaxWidth={"100%" as const}
                            displayMinHeight={"0" as const}
                            displayMinWidth={"0" as const}
                            displayWidth={"16px" as const}
                            loading={"lazy" as const}
                            src={{
                              src: keyboardArrow100US315BzmoH,
                              fullWidth: 16,
                              fullHeight: 16,
                              aspectRatio: 1
                            }}
                          />
                        </div>
                      </div>
                    ) : null}
                    <p.Stack
                      as={"div"}
                      data-plasmic-name={"inputText103"}
                      data-plasmic-override={overrides.inputText103}
                      hasGap={true}
                      className={classNames(projectcss.all, sty.inputText103)}
                    >
                      <div
                        data-plasmic-name={"label"}
                        data-plasmic-override={overrides.label}
                        className={classNames(
                          projectcss.all,
                          projectcss.__wab_text,
                          sty.label
                        )}
                      >
                        {"Generación del expediente"}
                      </div>
                      <p.Stack
                        as={"div"}
                        data-plasmic-name={"inputValue100"}
                        data-plasmic-override={overrides.inputValue100}
                        hasGap={true}
                        className={classNames(
                          projectcss.all,
                          sty.inputValue100
                        )}
                      >
                        {false ? (
                          <div
                            data-plasmic-name={"keyboardCursor100"}
                            data-plasmic-override={overrides.keyboardCursor100}
                            className={classNames(
                              projectcss.all,
                              sty.keyboardCursor100
                            )}
                          >
                            <p.Stack
                              as={"div"}
                              data-plasmic-name={"frame3"}
                              data-plasmic-override={overrides.frame3}
                              hasGap={true}
                              className={classNames(projectcss.all, sty.frame3)}
                            >
                              <div
                                data-plasmic-name={"frame4"}
                                data-plasmic-override={overrides.frame4}
                                className={classNames(
                                  projectcss.all,
                                  sty.frame4
                                )}
                              />
                            </p.Stack>
                          </div>
                        ) : null}
                        <div
                          data-plasmic-name={"text"}
                          data-plasmic-override={overrides.text}
                          className={classNames(
                            projectcss.all,
                            projectcss.__wab_text,
                            sty.text
                          )}
                        >
                          {"Desde el inicio a hoy"}
                        </div>
                      </p.Stack>
                    </p.Stack>
                  </p.Stack>
                  <div
                    data-plasmic-name={"iconButton20122"}
                    data-plasmic-override={overrides.iconButton20122}
                    className={classNames(projectcss.all, sty.iconButton20122)}
                  >
                    {false ? (
                      <div
                        data-plasmic-name={"tooltip3002"}
                        data-plasmic-override={overrides.tooltip3002}
                        className={classNames(projectcss.all, sty.tooltip3002)}
                      >
                        <div
                          data-plasmic-name={"spacer1022"}
                          data-plasmic-override={overrides.spacer1022}
                          className={classNames(projectcss.all, sty.spacer1022)}
                        >
                          <div
                            data-plasmic-name={"frame5"}
                            data-plasmic-override={overrides.frame5}
                            className={classNames(projectcss.all, sty.frame5)}
                          />

                          <div
                            data-plasmic-name={"frame6"}
                            data-plasmic-override={overrides.frame6}
                            className={classNames(projectcss.all, sty.frame6)}
                          />
                        </div>
                        <div
                          data-plasmic-name={"tooltipText2"}
                          data-plasmic-override={overrides.tooltipText2}
                          className={classNames(
                            projectcss.all,
                            projectcss.__wab_text,
                            sty.tooltipText2
                          )}
                        >
                          {"Desplegar opciones"}
                        </div>
                        <TooltipTip100Icon
                          className={classNames(projectcss.all, sty.svg__zKzQt)}
                          role={"img"}
                        />
                      </div>
                    ) : null}
                    <KeyboardArrow1003Icon
                      className={classNames(projectcss.all, sty.svg__i9Jq)}
                      role={"img"}
                    />
                  </div>
                </p.Stack>
                <div
                  data-plasmic-name={"spacer1023"}
                  data-plasmic-override={overrides.spacer1023}
                  className={classNames(projectcss.all, sty.spacer1023)}
                >
                  <div
                    data-plasmic-name={"frame7"}
                    data-plasmic-override={overrides.frame7}
                    className={classNames(projectcss.all, sty.frame7)}
                  />

                  <div
                    data-plasmic-name={"frame8"}
                    data-plasmic-override={overrides.frame8}
                    className={classNames(projectcss.all, sty.frame8)}
                  />
                </div>
              </div>
              <p.Stack
                as={"div"}
                data-plasmic-name={
                  "iconnoneHeight48HasLinesfalseTypeprimaryStatedefaultHovernoTooltipAlignmentnaTooltipPositionna"
                }
                data-plasmic-override={
                  overrides.iconnoneHeight48HasLinesfalseTypeprimaryStatedefaultHovernoTooltipAlignmentnaTooltipPositionna
                }
                hasGap={true}
                className={classNames(
                  projectcss.all,
                  sty.iconnoneHeight48HasLinesfalseTypeprimaryStatedefaultHovernoTooltipAlignmentnaTooltipPositionna
                )}
              >
                <div
                  data-plasmic-name={"buttonLabel"}
                  data-plasmic-override={overrides.buttonLabel}
                  className={classNames(
                    projectcss.all,
                    projectcss.__wab_text,
                    sty.buttonLabel
                  )}
                >
                  {"Generar reporte"}
                </div>
              </p.Stack>
            </p.Stack>
          ) : null}
          <DashboardPanelGroup
            data-plasmic-name={"dashboardPanelGroup"}
            data-plasmic-override={overrides.dashboardPanelGroup}
            className={classNames("__wab_instance", sty.dashboardPanelGroup)}
          />
        </p.Stack>
      </div>
    </React.Fragment>
  ) as React.ReactElement | null;
}

const PlasmicDescendants = {
  root: [
    "root",
    "freeBox",
    "typedropdownSildernoHovernoActivenoEmptyyesZlotnoDisabledno",
    "inputFieldContent109",
    "inputTextWithZlot102",
    "iconButton2012",
    "tooltip300",
    "spacer102",
    "frame",
    "frame2",
    "tooltipText",
    "iconWrapper103",
    "img",
    "inputText103",
    "label",
    "inputValue100",
    "keyboardCursor100",
    "frame3",
    "frame4",
    "text",
    "iconButton20122",
    "tooltip3002",
    "spacer1022",
    "frame5",
    "frame6",
    "tooltipText2",
    "spacer1023",
    "frame7",
    "frame8",
    "iconnoneHeight48HasLinesfalseTypeprimaryStatedefaultHovernoTooltipAlignmentnaTooltipPositionna",
    "buttonLabel",
    "dashboardPanelGroup"
  ],
  freeBox: [
    "freeBox",
    "typedropdownSildernoHovernoActivenoEmptyyesZlotnoDisabledno",
    "inputFieldContent109",
    "inputTextWithZlot102",
    "iconButton2012",
    "tooltip300",
    "spacer102",
    "frame",
    "frame2",
    "tooltipText",
    "iconWrapper103",
    "img",
    "inputText103",
    "label",
    "inputValue100",
    "keyboardCursor100",
    "frame3",
    "frame4",
    "text",
    "iconButton20122",
    "tooltip3002",
    "spacer1022",
    "frame5",
    "frame6",
    "tooltipText2",
    "spacer1023",
    "frame7",
    "frame8",
    "iconnoneHeight48HasLinesfalseTypeprimaryStatedefaultHovernoTooltipAlignmentnaTooltipPositionna",
    "buttonLabel"
  ],
  typedropdownSildernoHovernoActivenoEmptyyesZlotnoDisabledno: [
    "typedropdownSildernoHovernoActivenoEmptyyesZlotnoDisabledno",
    "inputFieldContent109",
    "inputTextWithZlot102",
    "iconButton2012",
    "tooltip300",
    "spacer102",
    "frame",
    "frame2",
    "tooltipText",
    "iconWrapper103",
    "img",
    "inputText103",
    "label",
    "inputValue100",
    "keyboardCursor100",
    "frame3",
    "frame4",
    "text",
    "iconButton20122",
    "tooltip3002",
    "spacer1022",
    "frame5",
    "frame6",
    "tooltipText2",
    "spacer1023",
    "frame7",
    "frame8"
  ],
  inputFieldContent109: [
    "inputFieldContent109",
    "inputTextWithZlot102",
    "iconButton2012",
    "tooltip300",
    "spacer102",
    "frame",
    "frame2",
    "tooltipText",
    "iconWrapper103",
    "img",
    "inputText103",
    "label",
    "inputValue100",
    "keyboardCursor100",
    "frame3",
    "frame4",
    "text",
    "iconButton20122",
    "tooltip3002",
    "spacer1022",
    "frame5",
    "frame6",
    "tooltipText2"
  ],
  inputTextWithZlot102: [
    "inputTextWithZlot102",
    "iconButton2012",
    "tooltip300",
    "spacer102",
    "frame",
    "frame2",
    "tooltipText",
    "iconWrapper103",
    "img",
    "inputText103",
    "label",
    "inputValue100",
    "keyboardCursor100",
    "frame3",
    "frame4",
    "text"
  ],
  iconButton2012: [
    "iconButton2012",
    "tooltip300",
    "spacer102",
    "frame",
    "frame2",
    "tooltipText",
    "iconWrapper103",
    "img"
  ],
  tooltip300: ["tooltip300", "spacer102", "frame", "frame2", "tooltipText"],
  spacer102: ["spacer102", "frame", "frame2"],
  frame: ["frame"],
  frame2: ["frame2"],
  tooltipText: ["tooltipText"],
  iconWrapper103: ["iconWrapper103", "img"],
  img: ["img"],
  inputText103: [
    "inputText103",
    "label",
    "inputValue100",
    "keyboardCursor100",
    "frame3",
    "frame4",
    "text"
  ],
  label: ["label"],
  inputValue100: [
    "inputValue100",
    "keyboardCursor100",
    "frame3",
    "frame4",
    "text"
  ],
  keyboardCursor100: ["keyboardCursor100", "frame3", "frame4"],
  frame3: ["frame3", "frame4"],
  frame4: ["frame4"],
  text: ["text"],
  iconButton20122: [
    "iconButton20122",
    "tooltip3002",
    "spacer1022",
    "frame5",
    "frame6",
    "tooltipText2"
  ],
  tooltip3002: [
    "tooltip3002",
    "spacer1022",
    "frame5",
    "frame6",
    "tooltipText2"
  ],
  spacer1022: ["spacer1022", "frame5", "frame6"],
  frame5: ["frame5"],
  frame6: ["frame6"],
  tooltipText2: ["tooltipText2"],
  spacer1023: ["spacer1023", "frame7", "frame8"],
  frame7: ["frame7"],
  frame8: ["frame8"],
  iconnoneHeight48HasLinesfalseTypeprimaryStatedefaultHovernoTooltipAlignmentnaTooltipPositionna:
    [
      "iconnoneHeight48HasLinesfalseTypeprimaryStatedefaultHovernoTooltipAlignmentnaTooltipPositionna",
      "buttonLabel"
    ],
  buttonLabel: ["buttonLabel"],
  dashboardPanelGroup: ["dashboardPanelGroup"]
} as const;
type NodeNameType = keyof typeof PlasmicDescendants;
type DescendantsType<T extends NodeNameType> =
  (typeof PlasmicDescendants)[T][number];
type NodeDefaultElementType = {
  root: "div";
  freeBox: "div";
  typedropdownSildernoHovernoActivenoEmptyyesZlotnoDisabledno: "div";
  inputFieldContent109: "div";
  inputTextWithZlot102: "div";
  iconButton2012: "div";
  tooltip300: "div";
  spacer102: "div";
  frame: "div";
  frame2: "div";
  tooltipText: "div";
  iconWrapper103: "div";
  img: typeof p.PlasmicImg;
  inputText103: "div";
  label: "div";
  inputValue100: "div";
  keyboardCursor100: "div";
  frame3: "div";
  frame4: "div";
  text: "div";
  iconButton20122: "div";
  tooltip3002: "div";
  spacer1022: "div";
  frame5: "div";
  frame6: "div";
  tooltipText2: "div";
  spacer1023: "div";
  frame7: "div";
  frame8: "div";
  iconnoneHeight48HasLinesfalseTypeprimaryStatedefaultHovernoTooltipAlignmentnaTooltipPositionna: "div";
  buttonLabel: "div";
  dashboardPanelGroup: typeof DashboardPanelGroup;
};

type ReservedPropsType = "variants" | "args" | "overrides";
type NodeOverridesType<T extends NodeNameType> = Pick<
  PlasmicHomepage__OverridesType,
  DescendantsType<T>
>;
type NodeComponentProps<T extends NodeNameType> =
  // Explicitly specify variants, args, and overrides as objects
  {
    variants?: PlasmicHomepage__VariantsArgs;
    args?: PlasmicHomepage__ArgsType;
    overrides?: NodeOverridesType<T>;
  } & Omit<PlasmicHomepage__VariantsArgs, ReservedPropsType> & // Specify variants directly as props
    /* Specify args directly as props*/ Omit<
      PlasmicHomepage__ArgsType,
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
          internalArgPropNames: PlasmicHomepage__ArgProps,
          internalVariantPropNames: PlasmicHomepage__VariantProps
        }),
      [props, nodeName]
    );
    return PlasmicHomepage__RenderFunc({
      variants,
      args,
      overrides,
      forNode: nodeName
    });
  };
  if (nodeName === "root") {
    func.displayName = "PlasmicHomepage";
  } else {
    func.displayName = `PlasmicHomepage.${nodeName}`;
  }
  return func;
}

export const PlasmicHomepage = Object.assign(
  // Top-level PlasmicHomepage renders the root element
  makeNodeComponent("root"),
  {
    // Helper components rendering sub-elements
    freeBox: makeNodeComponent("freeBox"),
    typedropdownSildernoHovernoActivenoEmptyyesZlotnoDisabledno:
      makeNodeComponent(
        "typedropdownSildernoHovernoActivenoEmptyyesZlotnoDisabledno"
      ),
    inputFieldContent109: makeNodeComponent("inputFieldContent109"),
    inputTextWithZlot102: makeNodeComponent("inputTextWithZlot102"),
    iconButton2012: makeNodeComponent("iconButton2012"),
    tooltip300: makeNodeComponent("tooltip300"),
    spacer102: makeNodeComponent("spacer102"),
    frame: makeNodeComponent("frame"),
    frame2: makeNodeComponent("frame2"),
    tooltipText: makeNodeComponent("tooltipText"),
    iconWrapper103: makeNodeComponent("iconWrapper103"),
    img: makeNodeComponent("img"),
    inputText103: makeNodeComponent("inputText103"),
    label: makeNodeComponent("label"),
    inputValue100: makeNodeComponent("inputValue100"),
    keyboardCursor100: makeNodeComponent("keyboardCursor100"),
    frame3: makeNodeComponent("frame3"),
    frame4: makeNodeComponent("frame4"),
    text: makeNodeComponent("text"),
    iconButton20122: makeNodeComponent("iconButton20122"),
    tooltip3002: makeNodeComponent("tooltip3002"),
    spacer1022: makeNodeComponent("spacer1022"),
    frame5: makeNodeComponent("frame5"),
    frame6: makeNodeComponent("frame6"),
    tooltipText2: makeNodeComponent("tooltipText2"),
    spacer1023: makeNodeComponent("spacer1023"),
    frame7: makeNodeComponent("frame7"),
    frame8: makeNodeComponent("frame8"),
    iconnoneHeight48HasLinesfalseTypeprimaryStatedefaultHovernoTooltipAlignmentnaTooltipPositionna:
      makeNodeComponent(
        "iconnoneHeight48HasLinesfalseTypeprimaryStatedefaultHovernoTooltipAlignmentnaTooltipPositionna"
      ),
    buttonLabel: makeNodeComponent("buttonLabel"),
    dashboardPanelGroup: makeNodeComponent("dashboardPanelGroup"),

    // Metadata about props expected for PlasmicHomepage
    internalVariantProps: PlasmicHomepage__VariantProps,
    internalArgProps: PlasmicHomepage__ArgProps,

    // Page metadata
    pageMetadata: {
      title: "",
      description: "",
      ogImageSrc: "",
      canonical: ""
    }
  }
);

export default PlasmicHomepage;
/* prettier-ignore-end */
