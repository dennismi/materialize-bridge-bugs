import { bindable } from "aurelia-framework";
import { Auth } from "./auth";
import { inject } from "aurelia-dependency-injection";

@inject(Auth)
export class Navbar {
  public authenticated: boolean;
  @bindable public router = null;
  /**
   *
   */
  constructor(private auth: Auth) {
    this.auth.authNotifier.subscribe("authChange", authState => {
      this.authenticated = authState.authenticated;
      console.log("Authenticated", authState);
    });
    this.authenticated=auth.isAuthenticated();
  }
  valueChanged(newValue, oldValue) {console.log(newValue, oldValue);}
}
