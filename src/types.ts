import { ReactElement, ReactNode } from "react";

export type LayoutConfigItem = {
  path: string;
  layout: (children: ReactElement) => ReactNode;
  children?: LayoutConfig;
};

export type LayoutConfig = Array<LayoutConfig>;
