import {Aurelia} from "aurelia-framework";
import environment from './environment';


export function configure(aurelia: Aurelia) {
  aurelia.use
    .standardConfiguration()
    .feature('resources');

  if (environment.debug) {
    aurelia.use.developmentLogging();
  }

  if (environment.testing) {
    aurelia.use.plugin('aurelia-testing');
  }
  aurelia.use.plugin('aurelia-materialize-bridge', b => b.useAll());
  //aurelia.use.plugin('aurelia-configuration');

  aurelia.start().then(() => aurelia.setRoot());
}
