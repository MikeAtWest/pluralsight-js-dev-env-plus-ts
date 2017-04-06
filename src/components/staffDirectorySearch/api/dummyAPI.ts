import { ISearchProps, ISearchState, IStaffBasic, IStaffExtended } from "../IStaffDirectorySearch";

import { SocialMediaLink } from "../classes/SocialMediaLink";
import { StaffBasic } from "../classes/StaffBasic";
import { StaffExtended } from "../classes/StaffExtended";

export function api_getSearchResults(): IStaffBasic[] {

  const staff: IStaffBasic[] = [];

  const staff1 = new StaffBasic("Albert", "Einstein");
  staff1.userID = 1;
  staff1.imageURL = "https://upload.wikimedia.org/wikipedia/commons/d/d3/Albert_Einstein_Head.jpg";
  staff1.jobTitle = "Physics Teacher";
  staff1.groups = ["Teacher"];
  staff1.website = "https://en.wikipedia.org/wiki/Albert_Einstein";
  staff1.email = "aeinstein@bernpatentoffice.gov";
  staff1.phone = "123-456-7890 extn. 2345";

  const staff2 = new StaffBasic("Ada", "Lovelace");
  staff2.userID = 2;
  staff2.imageURL = "https://www.biography.com/.image/c_fill,cs_srgb,dpr_1.0,g_face,h_300,q_80,w_300/MTE4MDAzNDEwODQwOTQ2MTkw/ada-lovelace-20825279-1-402.jpg";
  staff2.jobTitle = "Computer Science Teacher";
  staff2.groups = ["Teacher", "Other"];
  staff2.website = "https://en.wikipedia.org/wiki/Ada_Lovelace";
  staff2.email = "ada@ockhampark.net";
  staff2.phone = "234-567-8901";

  const staff3 = {
    email: "mcurie@uniofparis.edu",
    firstName: "Marie",
    groups: ["Adminstrator", "Teacher"],
    imageURL: "https://www.biography.com/.image/c_fill,cs_srgb,dpr_1.0,g_face,h_300,q_80,w_300/MTE5NTU2MzE2MTkzNzE5ODE5/marie-curie-9263538-1-402.jpg",
    jobTitle: "Chemistry Teacher",
    lastName: "Curie",
    phone: "345-678-9012 extn 123",
    socialMediaLinks: [],
    staffExtended: null,
    userID: 3,
    website: "https://en.wikipedia.org/wiki/Marie_Curie",
  };

  staff.push(staff1);
  staff.push(staff2);
  staff.push(staff3);

  return staff;

}

export function api_getSearchResultsExtended(): { [userID: number]: IStaffExtended } {

  const staffExtended1 = new StaffExtended(1);
  staffExtended1.blog = "http://alberteinsteinblog.org/";
  staffExtended1.socialMediaLinks.push(new SocialMediaLink("Facebook", "https://www.facebook.com/AlbertEinstein/"));
  staffExtended1.socialMediaLinks.push(new SocialMediaLink("Twitter", "https://twitter.com/einsteinquotes?lang=en"));
  staffExtended1.socialMediaLinks.push(new SocialMediaLink("YouTube", "https://www.youtube.com/watch?v=HZ_W3EAfp6I"));
  staffExtended1.socialMediaLinks.push(new SocialMediaLink("LinkedIn", "https://www.linkedin.com/company-beta/15037/?pathWildcard=15037"));
  staffExtended1.socialMediaLinks.push(new SocialMediaLink("Google+", "https://plus.google.com/communities/113385895179315329377"));
  staffExtended1.socialMediaLinks.push(new SocialMediaLink("Newsvine", "https://www.newsvine.com/"));
  staffExtended1.socialMediaLinks.push(new SocialMediaLink("Camyoo", "http://www.camyoo.com/sign-up.html"));
  staffExtended1.socialMediaLinks.push(new SocialMediaLink("Bebo", "https://bebo.com/"));
  staffExtended1.socialMediaLinks.push(new SocialMediaLink("Hubpages", "http://hubpages.com/"));

  const staffExtended2 = new StaffExtended(2);
  staffExtended2.blog = "http://blogs.bodleian.ox.ac.uk/adalovelace/";
  staffExtended2.socialMediaLinks.push(new SocialMediaLink("Facebook", "https://www.facebook.com/AdaLovelaceDay/"));

  const details: { [userID: number]: IStaffExtended } = {
    1: staffExtended1,
    2: staffExtended2,
  };

  return details;

}
