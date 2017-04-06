import * as React from "react";
import "./styles/common.css";
import "./styles/staffDirSearch.css";

import "../../../node_modules/font-awesome/scss/font-awesome.scss"; // Font-Awesome SASS CSS sheet.

import { ISocialMediaLink, IStaffExtendedProps } from "./IStaffDirectorySearch";

import SD_SocialMediaLink from "./SD_SocialMediaLink";

export default class SD_StaffExtended extends React.Component<IStaffExtendedProps, {}> {

  public render() {

    return (

      <div className="DIR-slideOut DIR-active">
        <div className="DIR-contactInfo">
          <ul>
            <li><a className="DIR-contactButton" href="#"><em className="fa fa-phone" aria-hidden="true"></em>{this.props.staffBasic.phone}</a></li>
            <li><a className="DIR-contactButton" href="#"><em className="fa fa-envelope" aria-hidden="true"></em>{this.props.staffBasic.email}</a></li>
            <li><a className="DIR-contactButton" href={this.props.staffBasic.website} target="_blank"><em className="fa fa-globe" aria-hidden="true"></em>My Website</a></li>
            <li><a className="DIR-contactButton" href={this.props.staffExtended.blog} target="_blank"><em className="fa fa-comments" aria-hidden="true"></em>My Blog</a></li>
          </ul>
        </div>
        <div className="DIR-media">
          {this.props.staffExtended.socialMediaLinks.length > 0 &&
            <ul>
              {this.props.staffExtended.socialMediaLinks.map((smLink, i) => {
                return <SD_SocialMediaLink name={smLink.name} website={smLink.website} />;
              })}
            </ul>
          }
        </div>
        <div className="DIR-secondaryInfo">
          <ul>
            <li><span>Room:</span> classNameroom #45</li>
            <li><span>Subjects Taught:</span> Computer Science</li>
            <li><span>Grades Taught:</span> Grade 10</li>
            <li><span>Office Hours:</span> 9am - 5pm Mon-Fri</li>
          </ul>
        </div>
        <div className="DIR-message">
          <div className="DIR-biography">
            <div className="DIR-mTitle">Biography</div>
            <div className="DIR-mContent">
              <p>Born in 1971, politician Olivia Tobin started out her political career as the mayor of Metros, California. Vestibulum commodo fermentum ex. Cras cursus massa ut posuere sagittis. Nam molestie suscipit diam, vitae pharetra purus ultrices ac. Vivamus convallis vel turpis feugiat lacinia. Nulla rutrum bibendum consequat. Proin eget fermentum mauris, et pretium risus. Suspendisse vehicula iaculis purus, et convallis ipsum tempor vitae. Vestibulum sodales ullamcorper leo, lobortis consectetur ipsum faucibus sed.</p>
            </div>
          </div>
          <div className="DIR-personalMessage">
            <div className="DIR-mTitle">Personal Message</div>
            <div className="DIR-mContent">
              <p>Born in 1971, politician Olivia Tobin started out her political career as the mayor of Metros, California. Vestibulum commodo fermentum ex. Cras cursus massa ut posuere sagittis. Nam molestie suscipit diam, vitae pharetra purus ultrices ac. Vivamus convallis vel turpis feugiat lacinia. Nulla rutrum bibendum consequat. Proin eget fermentum mauris, et pretium risus. Suspendisse vehicula iaculis purus, et convallis ipsum tempor vitae. Vestibulum sodales ullamcorper leo, lobortis consectetur ipsum faucibus sed.</p>
            </div>
          </div>
        </div>
      </div>

    );
  }
}
