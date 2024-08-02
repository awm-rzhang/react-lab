import { Link } from "react-router-dom";

const packages = [
  {
    name: "react cron schedule",
    demoUrl: "https://fahimkk.github.io/react-recurring-job-demo/",
    comment:
      "- having some deployment issue \
      \n- hello",
  },
  {
    name: "react rrule generator",
    demoUrl: "https://fafruch.github.io/react-rrule-generator/",
    comment:
      "- need to convert to cron expression \
    \n- not being maintained \
    \n- depends on deprecated moment.js",
  },
];

const Recurrence = () => {
  return (
    <ol className="list-decimal">
      {packages.map((x) => (
        <li key={x.name}>
          <div className="flex-col">
            <div>
              <span className="text-blue-500">{`${x.name} - `}</span>
              <Link
                className="decoration-lime-800 decoration-solid underline"
                to={x.demoUrl}
                target="_blank"
                rel="noopener noreferrer"
              >
                demo
              </Link>
            </div>
            <pre>{x.comment}</pre>
          </div>
        </li>
      ))}
    </ol>
  );
};

export default Recurrence;
