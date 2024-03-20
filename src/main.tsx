import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import { ConfigProvider, Button, Space, Input, Divider } from "antd";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <ConfigProvider
    theme={{
      components: {
        Button: {
          colorPrimary: "#00b96b",
        },
      },
    }}
  >
    <App />
  </ConfigProvider>
);
