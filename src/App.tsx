import { useState } from "react";
import "./App.css";
import { Button } from "./components/button";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="space-x-6">
      <h1 className="text-sugar-grape leading-[22px]">Hello Work</h1>
      <Button onClick={() => setCount((count) => count + 1)}>
        count is {count}
      </Button>
      <Button
        variant="destructive"
        onClick={() => setCount((count) => count + 1)}
      >
        count is {count}
      </Button>
      <Button variant="ghost" onClick={() => setCount((count) => count + 1)}>
        count is {count}
      </Button>
      <Button variant="link" onClick={() => setCount((count) => count + 1)}>
        count is {count}
      </Button>
      <Button variant="outline" onClick={() => setCount((count) => count + 1)}>
        count is {count}
      </Button>
      <Button
        variant="secondary"
        onClick={() => setCount((count) => count + 1)}
      >
        count is {count}
      </Button>
    </div>
  );
}

export default App;
