import { ReactElement, ReactNode } from "react";

export type LayoutConfig = Array<{
  path: string;
  layout: (page: ReactElement) => ReactNode;
  children?: LayoutConfig;
}>;
