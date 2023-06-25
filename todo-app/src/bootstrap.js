import { createApp } from "vue";
import TodoApp from "./App.vue";

const appMount = (el) => {
  const app = createApp(TodoApp);
  app.mount(el);
};

if (process.env.NODE_ENV === "development") {
  const devRoot = document.querySelector("#_todoapp-dev-root");

  if (devRoot) {
    appMount(devRoot);
  }
}

export { appMount };
