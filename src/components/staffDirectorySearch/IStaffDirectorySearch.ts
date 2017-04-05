import sdSearch from "./SD_Search";
import sdSearchResults from "./SD_SearchResults";
import sdSearchSettings from "./SD_SearchSettings";

export interface ISearchProps extends React.Props<sdSearch> {
  portletInstanceId: number;
}

export interface ISearchSettingsProps extends React.Props<sdSearchSettings> {
  portletInstanceId: number;
}

export interface ISearchResultsProps extends React.Props<sdSearchResults> {
  portletInstanceId: number;
}
