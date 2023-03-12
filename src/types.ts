import { ReactElement, ReactNode } from "react";

export type LayoutConfig = {
  path: string;
  layout: (children: ReactElement) => ReactNode;
  children?: LayoutConfigArray;
};

export type LayoutConfigArray = Array<LayoutConfig>;
