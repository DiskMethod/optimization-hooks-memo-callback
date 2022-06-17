import React, { useState, useCallback, useMemo } from "react";
import Button from "./components/UI/Button/Button";
import DemoList from "./components/Demo/DemoList";

import "./App.css";

function App() {
  const [listTitle, setListTitle] = useState("My List");

  const changeTitleHandler = useCallback(() => {
    setListTitle("New Title");
  }, []);

  return (
    <div className="app">
      <DemoList title={listTitle} items={useMemo(() => [4, 2, 5, 1, 3], [])} />
      <Button onClick={changeTitleHandler}>Change List Title</Button>
    </div>
  );
}

export default App;
