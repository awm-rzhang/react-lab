import data from "@/routes/recurrence/more.json";
import { useState } from "react";
import { Button } from "@/components/ui/button";

const Recurrence = () => {
  const [iframeSrc, setIframeSrc] = useState(data[0].demoUrl);

  return (
    <div className="flex w-full">
      <div className="p-8 max-w-sm">
        <ol className="list-decimal w-fit">
          {data.map((x) => (
            <li key={x.name}>
              <div className="flex-col">
                <div>
                  <span className="text-blue-500">{`${x.name} - `}</span>
                  <Button
                    variant="secondary"
                    onClick={() => setIframeSrc(x.demoUrl)}
                  >
                    Demo
                  </Button>
                </div>
                <ul>
                  {x.comments.map((c) => (
                    <li>{c}</li>
                  ))}
                </ul>
              </div>
            </li>
          ))}
        </ol>
      </div>

      <div className="flex-1 h-svh">
        <iframe
          className="w-full h-full border-2 border-cyan-950"
          src={iframeSrc}
        ></iframe>
      </div>
    </div>
  );
};

export default Recurrence;
