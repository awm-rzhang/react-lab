import { Recurrence } from "react-cron-schedule";

function ReactCronSchedule() {
  return (
    <Recurrence
      showCronExpression
      onChange={(value: unknown) => console.log(value)}
    />
  );
}

export default ReactCronSchedule;
