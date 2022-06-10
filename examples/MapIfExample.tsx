import * as React from "react";
import { MapIf } from "../src";

const mapRule = {
  red: <p>红灯</p>,
  green: <p>绿灯</p>,
  yellow: <p>黄灯</p>,
};

const transformRule: Record<LightState, LightState> = {
  red: "yellow",
  yellow: "green",
  green: "red",
};

type LightState = "red" | "yellow" | "green";

export function MapIfExample() {
  const [light, updateLight] = React.useState<LightState>("red");

  // 点击切换灯的颜色
  const handleSwitch = () => {
    const nextLight = transformRule[light];
    updateLight(nextLight);
  };

  return (
    <>
      <MapIf rule={mapRule} value={light} />
      <button onClick={handleSwitch}>Switch light</button>
    </>
  );
}
