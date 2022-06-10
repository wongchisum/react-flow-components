import * as React from "react";
import { Loop } from "../src";
const dataSource = [
  {
    name: "张三",
    age: 20,
  },
  {
    name: "李四",
    age: 25,
  },
];

type ItemType = {
  name: string;
  age: number;
};

const Item = (props: ItemType) => {
  const { name, age } = props;
  return (
    <>
      <p>姓名:{name}</p>
      <p>年龄:{age}</p>
    </>
  );
};

export function LoopExample() {
  return (
    <>
      <Loop<ItemType> data={dataSource} each={(item) => <Item {...item} />} />
    </>
  );
}

const emptyList: unknown[] = [];

export function LoopWithFallback() {
  return (
    <Loop
      data={emptyList}
      each={(item) => <p>{`${item}`}</p>}
      fallback={<p>It is empty.</p>}
    />
  );
}
