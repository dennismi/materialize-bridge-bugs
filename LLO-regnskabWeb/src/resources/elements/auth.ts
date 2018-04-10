import { EventAggregator } from "aurelia-event-aggregator";
import { inject } from "aurelia-dependency-injection";

@inject(EventAggregator)
export class Auth {
private _isAuth: boolean;
  isAuthenticated(): boolean {
    return this._isAuth;
  }

  constructor(public authNotifier: any) {}
  valueChanged(newValue, oldValue) {}

  public login(): void {
    this._isAuth=true;
        this.authNotifier.publish("authChange", true);
  }
  public logout(): void {
    this._isAuth=false;
    this.authNotifier.publish("authChange", false);
  }
}
