import * as React from "react";
import "./styles/common.css";
import "./styles/staffDirSearch.css";

import { ISearchProps } from "./IStaffDirectorySearch";

import SD_SearchResults from "./SD_SearchResults";
import SD_SearchSettings from "./SD_SearchSettings";

export default class SD_Search extends React.Component<ISearchProps, {}> {

  public render() {

    return (

      <div className="PO-wrapper PO-staffDirectory">

        <SD_SearchSettings portletInstanceId={this.props.portletInstanceId} />
        <SD_SearchResults portletInstanceId={this.props.portletInstanceId} />

      </div>

    );
  }
}
