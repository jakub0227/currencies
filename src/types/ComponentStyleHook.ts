import { SerializedStyles } from "@emotion/react";
import { PropsWithChildren } from "react";

export type ComponentStyleHook<T = {}> = (
  props?: PropsWithChildren<T>
) => Record<string, SerializedStyles>;
