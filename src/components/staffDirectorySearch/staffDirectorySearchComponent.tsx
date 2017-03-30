import * as React from "react";
import "./staffDirectorySearchComponent.css";

interface IProps extends React.Props<StaffDirectorySearchComponent> {
  portletInstanceId: number;
}

export default class StaffDirectorySearchComponent extends React.Component<IProps, {}> {
  public render() {
    return (
      <div className="staffDirectorySearchReact">
        <h1>Staff Directory Search using React (Portlet Instance id: {this.props.portletInstanceId})</h1>
      </div>
    );
  }
}
