import { useState } from "react";
import Icons from "./icons";

interface CounterProps {
  count?: number;
}

export default function Counter({ count = 0 }: CounterProps) {
  const [value, setValue] = useState(count);

  const decrease = () => (value === 0 ? setValue(value) : setValue(value - 1));
  const increase = () => setValue(value + 1);

  return (
    <div className="counter">
      <button className="counter-btn counter-btn-left" onClick={decrease}>
        <span className="button-icon">
          <Icons name="minus" />
        </span>
      </button>
      <div className="counter-display">{value}</div>
      <button className="counter-btn counter-btn-right" onClick={increase}>
        <span className="button-icon">
          <Icons name="plus" />
        </span>
      </button>
    </div>
  );
}
