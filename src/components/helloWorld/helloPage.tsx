import * as $ from "jquery";
import * as React from "react";
import * as ReactDOM from "react-dom";

import HelloWorldComponent from "./helloWorldComponent";

$("div[id^='helloWorld_']").each( (index, elem) => {

  const portletInstanceId: number = elem.attributes["data-portlet-instance-id"].nodeValue;

  ReactDOM.render(
    <HelloWorldComponent portletInstanceId={portletInstanceId}/>,
    elem,
  );

});
