import { GlobalConfig } from "./store";

export const config: GlobalConfig = {
  url: __DEV__ ? "ws://127.0.0.1:7777?id=1" : "ws://127.0.0.1:7777?id=1"
};
