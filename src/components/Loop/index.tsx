import { ReactNode } from "react";

export type LoopProps<T> = {
  data?: T[];
  each: (item: T) => unknown;
  fallback?: ReactNode;
};

// 用于循环渲染
export default function Loop<T extends unknown>(props: LoopProps<T>): any {
  const { data, each, fallback = null } = props;
  if (!Array.isArray(data) || data?.length === 0) return fallback;
  return data.map(function (this: unknown, item: T) {
    const context = this;
    return each.call(context, item);
  });
}
