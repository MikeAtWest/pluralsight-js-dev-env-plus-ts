import * as React from "react";
import "./styles/common.css";
import "./styles/staffDirSearch.css";

import { ISearchProps, ISearchState, IStaffBasic, IStaffExtended } from "./IStaffDirectorySearch";

import SD_SearchResults from "./SD_SearchResults";
import SD_SearchSettings from "./SD_SearchSettings";

import { api_getSearchResults, api_getSearchResultsExtended } from "./api/dummyAPI";

export default class SD_Search extends React.Component<ISearchProps, ISearchState> {

  public constructor(props: ISearchProps) {
    super(props);

    const staffBasic: IStaffBasic[] = api_getSearchResults();
    const staffExtended: { [userID: number]: IStaffExtended } = api_getSearchResultsExtended();

    this.state = { staffMembersBasic: staffBasic, staffMembersExtended: staffExtended };

  }

  public render() {

    return (

      <div className="PO-wrapper PO-staffDirectory">
        <SD_SearchSettings portletInstanceId={this.props.portletInstanceId} />
        <SD_SearchResults portletInstanceId={this.props.portletInstanceId} staffMembersBasic={this.state.staffMembersBasic} staffMembersExtended={this.state.staffMembersExtended}/>
      </div>

    );
  }
}
