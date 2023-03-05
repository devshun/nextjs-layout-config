import { ReactElement, ReactNode } from "react";

export type LayoutConfig = {
  [key: string]: (children: ReactElement) => ReactNode;
};
