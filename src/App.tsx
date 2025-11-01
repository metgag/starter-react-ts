import { Button, Card } from "antd";
import type React from "react";
import { useState } from "react";

const App: React.FC = () => {
  const [count, setCount] = useState(0);

  const increment = (num: number): void => {
    setCount(count + num);
  };

  return (
    <Card className="flex justify-center text-center h-screen bg-gray-100">
      <h2 className="font-semibold text-2xl underline">Hello World</h2>
      <Button
        className="bg-blue-700 shadow text-white border-none cursor-pointer hover:opacity-70"
        onClick={() => increment(1)}
      >
        click me
      </Button>
      {count != 0 && <div className="mt-4">click count: {count}</div>}
    </Card>
  );
};

export default App;
