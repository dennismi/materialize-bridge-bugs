import { Aurelia } from "aurelia-framework";
import {
  NavigationInstruction,
  Next,
  Redirect,
  Router,
  RouterConfiguration
} from "aurelia-router";

export class App {
  public configureRouter(config: RouterConfiguration, router: Router): void {
    config.title = "LLO Financial";

    config.options.pushState = true;
    config.options.root = "/";
    config.options.hashChange = false;

    config.map([
      {
        auth: false,
        route: ["", "home"],
        name: "home",
        settings: { icon: "home" },
        moduleId: "pages/home/home",
        nav: true,
        title: "Home"
      },
      {
        auth: true,
        route: "account",
        name: "Konto",
        settings: {},
        moduleId: "pages/account/account",
        nav: true,
        title: "Konto"
      }
    ]);
  }
}
