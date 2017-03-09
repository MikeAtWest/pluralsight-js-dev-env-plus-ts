import * as React from "react";
import "./newsComponent.css";

interface IProps extends React.Props<NewsComponent> {
  portletInstanceId: number;
}

export default class NewsComponent extends React.Component<IProps, {}> {
  public render() {
    return (
      <div className="newsReact">
        <h1>News (Portlet Instance id: {this.props.portletInstanceId})</h1>
      </div>
    );
  }
}
