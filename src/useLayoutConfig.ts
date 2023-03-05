import { useRouter } from "next/router";
import { useMemo } from "react";
import { LayoutConfig } from "./types";

export const useLayoutConfig = (layoutConfig: LayoutConfig) => {
  const router = useRouter();

  const getMatchedPath = (path: string) => {
    const regExpedPath = new RegExp(`^${path.replace(/\*/g, "(.+)")}$`);
    return router.pathname.match(regExpedPath);
  };

  const layout = useMemo(() => {
    const matchedPath = Object.keys(layoutConfig).find(getMatchedPath);
    return matchedPath ? layoutConfig[matchedPath] : null;
  }, [router.pathname, layoutConfig]);

  return layout;
};
