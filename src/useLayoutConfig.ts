// useClient

import { useRouter } from "next/router";
import { ReactElement } from "react";
import { useCallback, useMemo } from "react";
import { LayoutConfig } from "./types";

export const useLayoutConfig = (layoutConfig: LayoutConfig) => {
  const router = useRouter();

  const getLayout = useCallback(
    (
      layoutConfigArray: LayoutConfig,
      path: string
    ): LayoutConfig[number]["layout"] => {
      const config = layoutConfigArray.find((c) => path.startsWith(c.path));

      if (config === undefined) return (page) => page;

      const { children, layout } = config;

      const restPath = path.slice(config.path.length);

      if (children && children.length > 0)
        return (page) =>
          layout(getLayout(children, restPath)(page) as ReactElement);

      return layout;
    },
    []
  );

  return useMemo(
    () => getLayout(layoutConfig, router.pathname),
    [layoutConfig, router.pathname, getLayout]
  );
};
