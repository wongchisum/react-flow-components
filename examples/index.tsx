import * as React from "react";
import { createRoot } from "react-dom/client";
import { IfExampleWithChildren, IfExampleWithRender } from "./IfExample";
import { MapIfExample } from "./MapIfExample";
import { LoopExample, LoopWithFallback } from "./LoopExample";

const App = () => {
  return (
    <div>
      <h2>Example With Children</h2>
      <IfExampleWithChildren />
      <h2>If Example WithRender</h2>
      <IfExampleWithRender />
      <h2>Map If Example</h2>
      <MapIfExample />
      <h2>Loop Example</h2>
      <LoopExample />
      <h2>Loop With Fallback</h2>
      <LoopWithFallback />
    </div>
  );
};

createRoot(document.querySelector("#root")!).render(<App />);
