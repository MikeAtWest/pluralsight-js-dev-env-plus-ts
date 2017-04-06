import * as React from "react";
import "./styles/common.css";
import "./styles/staffDirSearch.css";

import "../../../node_modules/font-awesome/scss/font-awesome.scss"; // Font-Awesome SASS CSS sheet.

import { IStaffBasicProps } from "./IStaffDirectorySearch";

import SD_StaffExtended from "./SD_StaffExtended";

export default class SD_StaffBasic extends React.Component<IStaffBasicProps, {}> {

  // Probably should nto be using JQuery for DOM manipulation here....
  public componentDidMount() {
    // $(document).ready(() => {
    //   $(".DIR-openSlideOut").click( (e) => {
    //     e.preventDefault();

    //     $(this).closest(".DIR-item").toggleClass("active");

    //     $(this).toggleClass("DIR-active");
    //     $(this).closest(".DIR-item").find(".DIR-slideOut").stop().slideToggle();

    //     const text = $(this).text();
    //     $(this).text(
    //       text === "More..." ? "Less..." : "More...");
    //   });

    //   // $(".DIR-sGroupSelect").change(function(){
    //   // 	//var Search_Str = $(this).val();
    //   //     var Search_Str = $('option:selected', this).attr('data-text');
    //   // 	//replace search str in span value
    //   // 	$(".DIR-sGFN").text(Search_Str);
    //   //   });
    // });
  }

  public render() {

    const backgroundImageStyle = { backgroundImage: "url(" + this.props.staffBasic.imageURL + ")" };

    const groupItems = this.props.staffBasic.groups.map((group, i) => {
      return <li>{group}</li>;
    });

    let staffExtendedDetails: any;
    if (this.props.staffExtended != null) {
      staffExtendedDetails = <SD_StaffExtended staffBasic={this.props.staffBasic} staffExtended={this.props.staffExtended} />;
    }

    return (

      <li className="DIR-item active">
        <div className="DIR-card">
          <div className="DIR-photo" aria-hidden="true">
            <span style={backgroundImageStyle}></span>
            <em>HB</em>
          </div>
          <div className="DIR-cardInfo">
            <ul>
              <li className="DIR-name">{this.props.staffBasic.lastName}, {this.props.staffBasic.firstName}</li>
              <li className="DIR-title">{this.props.staffBasic.jobTitle}</li>
              <li className="DIR-groups">
                <ul>{groupItems}</ul>
              </li>
              <li className="DIR-quickLinks">
                <div className="DIR-quickButtons">
                  <ul>
                    <li><a href={this.props.staffBasic.website} target="_blank"><em className="fa fa-globe" aria-hidden="true"></em><span className="offScreen">My Website</span></a></li>
                    <li><a href="#"><em className="fa fa-envelope DIR-infoOption" aria-hidden="true"></em><span>{this.props.staffBasic.email}</span></a></li>
                    <li><a href="#"><em className="fa fa-phone DIR-infoOption" aria-hidden="true"></em><span>{this.props.staffBasic.phone}</span></a></li>
                  </ul>
                </div>
                <div className="DIR-more">
                  <a className="DIR-openSlideOut" href="#">More...</a>
                </div>
              </li>
            </ul>
          </div>
        </div>

        {staffExtendedDetails}

      </li>

    );
  }
}
