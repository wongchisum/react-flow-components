import type { ReactNode } from "react"
type KeyType = string | number | symbol;
type HashView<T extends KeyType> = Record<T, ReactNode>

export type MapIfProps<T extends KeyType> = {
    rule: HashView<T>,
    value: T,
    fallback?: ReactNode
}

// 使用于if-else-elseif关系的渲染
export default function MapIf<T extends KeyType>(props: MapIfProps<T>): any {
    const { rule, value, fallback = null } = props;
    if (!(value in rule)) {
        return fallback;
    };

    return rule[value]
}