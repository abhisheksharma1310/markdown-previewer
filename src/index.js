import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

import App from "./App";
import WindowContext from "./context/windowContext";

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
  <StrictMode>
    <WindowContext>
      <App />
    </WindowContext>
  </StrictMode>
);
