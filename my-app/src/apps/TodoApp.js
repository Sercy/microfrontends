import { appMount } from "todoapp/TodoApp";
import React, { useRef, useEffect } from "react";

export default function TodoApp() {
  const ref = useRef(null);

  useEffect(() => {
    try {
      appMount(ref.current);
    } catch (e) {
      console.error("TodoApp", e);
    }
  }, []);

  return <div ref={ref} />;
}
