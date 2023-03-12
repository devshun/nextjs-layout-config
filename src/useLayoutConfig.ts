import { useRouter } from "next/router";
import { ReactElement } from "react";
import { useCallback, useMemo } from "react";
import { LayoutConfig, LayoutConfigArray } from "./types";

export const useLayoutConfig = (layoutConfig: LayoutConfigArray) => {
  const router = useRouter();
  const [_, ...initialPaths] = router.pathname.split("/");

  const getLayout = useCallback(
    (
      layoutConfigArray: LayoutConfigArray,
      paths: Array<string>
    ): LayoutConfig["layout"] => {
      const [currentPath, ...restPaths] = paths;
      const config = layoutConfigArray.find((c) => c.path === currentPath);

      if (config === undefined) return (page: ReactElement) => page;

      const { children, layout } = config;

      if (children && children.length > 0)
        // @ts-ignore Recursive processing to obtain child layouts
        return layout(getLayout(children, restPaths));

      return layout;
    },
    []
  );

  const layout = useMemo(
    () => getLayout(layoutConfig, initialPaths),
    [layoutConfig, initialPaths, getLayout]
  );

  return layout;
};
