import { useState } from "react";

export default function Counter() {
  const [count, setCount] = useState(0);
  return (
    <>
      <div className="my-4 flex items-center gap-2">
        <input
          type="number"
          value={count}
          className="w-40 py-2 px-4 border  outline-none focus:ring-2 focus:ring-yellow-200 rounded read-only:bg-gray-100"
          readOnly
        />
        <button
          className="px-4 py-2 bg-amber-500 text-amber-50 rounded"
          onClick={() => setCount(count + 1)}
        >
          +
        </button>
        <button
          className="px-4 py-2 bg-yellow-500 text-yellow-50 rounded"
          onClick={() => setCount(count - 1)}
        >
          -
        </button>
      </div>
    </>
  );
}
