import vuetify from "./vuetify";
import router from "@/router";
import Toast from "vue-toastification";
import "vue-toastification/dist/index.css";

const options = {
  position: "top-right",
  timeout: 3000,
};
export function registerPlugins(app) {
  app.use(vuetify).use(router).use(Toast, options);
}
