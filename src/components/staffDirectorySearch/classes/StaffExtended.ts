import { ISocialMediaLink, IStaffExtended } from "../IStaffDirectorySearch";

export class StaffExtended implements IStaffExtended {
  public userID = 0;
  public blog: string = "";
  public socialMediaLinks: ISocialMediaLink[] = [];

  constructor(userID: number) {
    this.userID = userID;
   }
}
