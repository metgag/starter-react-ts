import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

import { px2remTransformer, StyleProvider } from "@ant-design/cssinjs";
import { ConfigProvider } from "antd";
import "./index.css";
import "antd/dist/reset.css";

import App from "./App.tsx";

const px2rem = px2remTransformer({
  rootValue: 32, // 32px = 1rem; @default 16
});

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <StyleProvider layer transformers={[px2rem]}>
      <ConfigProvider>
        <App />
      </ConfigProvider>
    </StyleProvider>
  </StrictMode>
);
