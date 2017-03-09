import * as $ from "jquery";
import * as React from "react";
import * as ReactDOM from "react-dom";

import NewsComponent from "./components/news/newsComponent";

$("div[id^='news_']").each( (index, elem) => {

  const portletInstanceId: number = elem.attributes["data-portlet-instance-id"].nodeValue;

  ReactDOM.render(
    <NewsComponent portletInstanceId={portletInstanceId}/>,
    elem,
  );

});