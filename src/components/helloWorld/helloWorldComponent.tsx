import * as React from "react";

interface IProps extends React.Props<HelloWorldComponent> {
  message: string;
}

export default class HelloWorldComponent extends React.Component<IProps, {}> {
  public render() {
    return (
      <div>
        <h2>{this.props.message}</h2>
      </div>
    );
  }
}
