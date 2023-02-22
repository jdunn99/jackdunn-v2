import type { HTMLAttributes } from "@builder.io/qwik"; 
import { component$, Slot } from "@builder.io/qwik";

interface FlexProps extends HTMLAttributes<HTMLDivElement> {
  justify?:
    | "flex-start"
    | "flex-end"
    | "center"
    | "space-between"
    | "space-around"
    | "initial"
    | "inherit";
  align?:
    | "stretch"
    | "center"
    | "flex-start"
    | "flex-end"
    | "baseline"
    | "initial"
    | "inherit";
  wrap?: "wrap" | "nowrap" | "wrap-reverse";
  direction?: "row" | "column" | "row-reverse" | "column-reverse";
  flex?: string;
  gap?: string;
}

export const Flex = component$(
  ({
    flex,
    align,
    gap,
    justify,
    wrap,
    direction,
    ...rest
  }: FlexProps) => {



    return (
      <div
        {...rest}
        style={{
          display: "flex",
          listStyleType: "none",
          wrap: wrap || "nowrap",
          justifyContent: justify || "flex-start",
          flexDirection: direction || "row",
          flex: flex || "0 1 auto",
          alignItems: align || "stretch",
          gap: gap || "0",
        }}
      >
        <Slot />
      </div>
    );
  }
);
