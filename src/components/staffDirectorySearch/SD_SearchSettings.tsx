import * as React from "react";
import "./styles/common.css";
import "./styles/staffDirSearch.css";

import { ISearchSettingsProps } from "./IStaffDirectorySearch";

export default class SD_SearchSettings extends React.Component<ISearchSettingsProps, {}> {
  public render() {

    return (
      <div className="PO-controlsTop">

        <div className="PO-search">
          <div className="DIR-sGroups">
            <div className="DIR-sGroup">
              <div className="DIR-sGroupFName">
                <span className="DIR-sGFN">All</span>
                <em className="fa fa-chevron-down" aria-hidden="true"></em>
              </div>
              <select className="DIR-sGroupSelect">
                <option data-text="All">All</option>
                <option data-text="Teachers">Teachers</option>
                <option data-text="East Nguyen At Ri...">East Nguyen At Risk Youth Centre</option>
                <option data-text="Chemistry">Chemistry</option>
                <option data-text="Administrators">Administrators</option>
              </select>
            </div>
          </div>
          <div className="nav-fill">
            <div className="DIR-sTextInput">
              <input type="text" placeholder="Name, Job Title..." />
            </div>
            <div className="DIR-sSubmit"> <span className="DIR-sSubmitText">Search</span>
              <input type="submit" className="DIR-sGhostSubmit" />
            </div>
          </div>
        </div>
      </div>
    );
  }
}
