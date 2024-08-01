import { useState } from "react";
import { Cron } from "react-js-cron";
import "react-js-cron/dist/styles.css";

export default function ReactJsCron() {
  const [value, setValue] = useState("30 5 * * 1,6");

  return (
    <div className="flex flex-col">
      <div>{value}</div>
      <Cron value={value} setValue={setValue} />
    </div>
  );
}
