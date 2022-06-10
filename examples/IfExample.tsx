import * as React from "react";
import { If } from "../src";

const truthly = 20 > 10;
const falthly = 10 > 20;

const Text = <p>Execute true.</p>;
const FallbackText = <p>Fallback text.</p>;

export function IfExampleWithChildren() {
  return (
    <>
      <If when={truthly}>{Text}</If>
      <If when={falthly} fallback={FallbackText}>
        {Text}
      </If>
    </>
  );
}

export function IfExampleWithRender() {
  return (
    <>
      <If when={truthly} render={Text} />
      <If when={falthly} render={Text} fallback={FallbackText} />
    </>
  );
}
