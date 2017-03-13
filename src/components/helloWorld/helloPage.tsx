import * as $ from "jquery";
import * as React from "react";
import * as ReactDOM from "react-dom";
import { AppContainer } from "react-hot-loader";

import HelloWorldComponent from "./helloWorldComponent";

$("div[id^='helloWorld_']").each((index, elem) => {

  const portletInstanceId: number = elem.attributes["data-portlet-instance-id"].nodeValue;

  // AppContainer is required for hot reloading in dev mode. AppContainer is ommitted in build.
  const render = (Component) => {
    ReactDOM.render(
      <AppContainer>
        <Component portletInstanceId={portletInstanceId} />
      </AppContainer>,
      elem,
    );
  };

  render(HelloWorldComponent);

});
