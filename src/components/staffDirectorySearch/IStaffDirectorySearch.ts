import SD_Search from "./SD_Search";
import SD_SearchResults from "./SD_SearchResults"; // UNUSED
import SD_SearchSettings from "./SD_SearchSettings";
import SD_SocialMediaLinks from "./SD_SocialMediaLink";
import SD_StaffBasic from "./SD_StaffBasic";
import SD_StaffExtended from "./SD_StaffExtended";

// Component Prop and State Interfaces:

export interface ISearchProps extends React.Props<SD_Search> {
  portletInstanceId: number;
}

export interface ISearchState {
  staffMembersBasic: IStaffBasic[];
  staffMembersExtended: { [userID: number]: IStaffExtended };
}

export interface ISearchSettingsProps extends React.Props<SD_SearchSettings> {
  portletInstanceId: number;
}

export interface ISearchResultsProps extends React.Props<SD_SearchResults> {
  portletInstanceId: number;
  staffMembersBasic: IStaffBasic[];
  staffMembersExtended: { [userID: number]: IStaffExtended };
}

export interface IStaffBasicProps extends React.Props<SD_StaffBasic> {
  staffBasic: IStaffBasic;
  staffExtended: IStaffExtended;
}

export interface IStaffExtendedProps extends React.Props<SD_StaffExtended> {
  staffBasic: IStaffBasic;
  staffExtended: IStaffExtended;
}

export interface ISocialMediaLinkProps extends React.Props<SD_SocialMediaLinks> {
  name: string;
  website: string;
}

// Object Interfaces:

export interface IStaffBasic {
  userID: number;
  firstName: string;
  lastName: string;
  imageURL: string;
  jobTitle: string;
  groups: string[];
  website: string;
  email: string;
  phone: string;
  // blog: string;
  // socialMediaLinks: ISocialMediaLink[];
  staffExtended: IStaffExtended;
}

export interface IStaffExtended {
  userID: number;
  blog: string;
  socialMediaLinks: ISocialMediaLink[];
}

export interface ISocialMediaLink {
  name: string;
  website: string;
}
