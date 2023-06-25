import { appMount } from "todoapp/TodoApp";
import React, { useRef, useEffect } from "react";

export default function TodoApp() {
  const ref = useRef(null);

  useEffect(() => {
    appMount(ref.current);
  }, []);

  return <div ref={ref} />;
}
