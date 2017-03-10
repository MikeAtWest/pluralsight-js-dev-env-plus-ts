import * as React from "react";
import News from "./news";
import NewsList from "./newsListComponent";

import "./newsComponent.css";

// interface IProps extends React.Props<NewsComponent> {
//   portletInstanceId: number;
// }

export default class NewsComponent extends React.Component<any, any> {
  constructor(props: any) {
    super(props);

    const newsItems = new Array<News>();

    newsItems.push(new News("Title One", "This is the text for item #1."));
    newsItems.push(new News("Title Two", "This is the text for item #2."));
    newsItems.push(new News("Title Three", "This is the text for item #3."));
    newsItems.push(new News("Title Four", "This is the text for item #4."));

    this.state = {};
    this.state.newsItems = newsItems;
  }

  public render() {
    return (
      <NewsList portletInstanceId={this.props.portletInstanceId} newsItems={this.state.newsItems} />
    );
  }
}
