import { useState } from "react";
import "./App.css";
import { Button } from "./components/button";
import { ArrowRightIcon, ShoppingCartIcon } from "./components/icons";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="space-x-6">
      <Button
        variant="primary"
        className="w-[167px]"
        startIcon={<ShoppingCartIcon className="size-5" />}
        endIcon={<ArrowRightIcon className="size-5" />}
      >
        Sign In
      </Button>
      <Button
        variant="secondary"
        className=""
        onClick={() => setCount((count) => count + 1)}
      >
        count is {count}
      </Button>
      <Button
        variant="elevated"
        className=""
        disabled
        onClick={() => setCount((count) => count + 1)}
      >
        count is {count}
      </Button>
      <Button
        variant="primary"
        size="icon"
        startIcon={<ShoppingCartIcon className="size-5" />}
      />
      <Button
        variant="ghost"
        size="icon"
        startIcon={<ShoppingCartIcon className="size-5" />}
      />
      <Button
        variant="secondary"
        size="icon"
        startIcon={<ShoppingCartIcon className="size-5" />}
      />
      <Button
        variant="elevated"
        size="icon"
        startIcon={<ShoppingCartIcon className="size-5" />}
      />
      {/* <Button variant="ghost" onClick={() => setCount((count) => count + 1)}>
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
      </Button> */}
    </div>
  );
}

export default App;
