import type { ReactNode } from "react";

export type IfProps = {
  when?: boolean;
  children?: ReactNode;
  render?: ReactNode;
  fallback?: ReactNode;
};

// 适用于if-else的条件判断
export default function If(props: IfProps): any {
  const { when, children = null, render = null, fallback = null } = props;
  if (when) {
    return render || children;
  } else {
    return fallback;
  }
}
