import * as React from "react";
import NewsItem from "./newsItemComponent";

export default class NewsList extends React.Component<any, any> {
  constructor(props: any) {
    super(props);
  }

  public render() {
    return (
      <div className="newsReact">
        <h1>News from React (Portlet Instance id: {this.props.portletInstanceId})</h1>

        {this.props.newsItems.map((newsItem, i) => {
          return <NewsItem newsItem={newsItem} key={i} />;
        })}
      </div>
    );
  }
}
