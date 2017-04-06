var myLibrary=webpackJsonpmyLibrary([1],{108:function(e,t){},13:function(e,t,n){e.exports=n(31)},205:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=n(12),o=n(4),a=n(14),i=n(13),s=n(87);r("div[id^='newsReact_']").each(function(e,t){var n=t.attributes["data-portlet-instance-id"].nodeValue;!function(e){a.render(o.createElement(i.AppContainer,null,o.createElement(e,{portletInstanceId:n})),t)}(s.default)})},29:function(e,t,n){"use strict";e.exports=n(30)},30:function(e,t,n){"use strict";function r(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function o(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function a(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}var i=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),s=n(4),u=s.Component,c=function(e){function t(){return r(this,t),o(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return a(t,e),i(t,[{key:"render",value:function(){return this.props.component?s.createElement(this.props.component,this.props.props):s.Children.only(this.props.children)}}]),t}(u);e.exports=c},31:function(e,t,n){"use strict";var r=n(29);e.exports=function(e){throw this&&this.callback?new Error('React Hot Loader: The Webpack loader is now exported separately. If you use Babel, we recommend that you remove "react-hot-loader" from the "loaders" section of your Webpack configuration altogether, and instead add "react-hot-loader/babel" to the "plugins" section of your .babelrc file. If you prefer not to use Babel, replace "react-hot-loader" or "react-hot" with "react-hot-loader/webpack" in the "loaders" section of your Webpack configuration.'):e&&e.types&&e.types.IfStatement?new Error('React Hot Loader: The Babel plugin is exported separately. Replace "react-hot-loader" with "react-hot-loader/babel" in the "plugins" section of your .babelrc file. While we recommend the above, if you prefer not to use Babel, you may remove "react-hot-loader" from the "plugins" section of your .babelrc file altogether, and instead add "react-hot-loader/webpack" to the "loaders" section of your Webpack configuration.'):new Error('React Hot Loader does not have a default export. If you use the import statement, make sure to include the curly braces: import { AppContainer } from "react-hot-loader". If you use CommonJS, make sure to read the named export: require("react-hot-loader").AppContainer.')},e.exports.AppContainer=r},87:function(e,t,n){"use strict";var r=this&&this.__extends||function(){var e=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var n in t)t.hasOwnProperty(n)&&(e[n]=t[n])};return function(t,n){function r(){this.constructor=t}e(t,n),t.prototype=null===n?Object.create(n):(r.prototype=n.prototype,new r)}}();Object.defineProperty(t,"__esModule",{value:!0});var o=n(4),a=n(96),i=n(98);n(108);var s=function(e){function t(t){var n=e.call(this,t)||this;n.state={};var r=new Array;return r.push(new a.default("Title One","This is the text for item #1.")),r.push(new a.default("Title Two","This is the text for item #2.")),r.push(new a.default("Title Three","This is the text for item #3.")),r.push(new a.default("Title Four","This is the text for item #4.")),n.state={},n.state.newsItems=r,n.state.newItemTitle="Title",n.state.newItemText="Text",n.setNewItemState=n.setNewItemState.bind(n),n.addNewItem=n.addNewItem.bind(n),n.deleteItem=n.deleteItem.bind(n),n}return r(t,e),t.prototype.setNewItemState=function(e){var t=e.currentTarget.name,n=e.currentTarget.value;return this.state[t]=n,this.setState({newsItems:this.state.newsItems,newItemTitle:this.state.newItemTitle,newItemText:this.state.newItemText})},t.prototype.addNewItem=function(e){e.preventDefault();var t=new a.default(this.state.newItemTitle,this.state.newItemText);return this.state.newsItems.push(t),this.setState({newsItems:this.state.newsItems,newItemTitle:this.state.newItemTitle,newItemText:this.state.newItemText})},t.prototype.deleteItem=function(e,t){return e.preventDefault(),this.state.newsItems.pop(),this.setState({newsItems:this.state.newsItems,newItemTitle:this.state.newItemTitle,newItemText:this.state.newItemText})},t.prototype.render=function(){return o.createElement(i.default,{portletInstanceId:this.props.portletInstanceId,newsItems:this.state.newsItems,newItemTitle:this.state.newItemTitle,newItemText:this.state.newItemText,onChange:this.setNewItemState,onAddItem:this.addNewItem,onDeleteItem:this.deleteItem})},t}(o.Component);t.default=s},96:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=function(){function e(e,t){this.title=e,this.text=t}return e}();t.default=r},97:function(e,t,n){"use strict";var r=this&&this.__extends||function(){var e=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var n in t)t.hasOwnProperty(n)&&(e[n]=t[n])};return function(t,n){function r(){this.constructor=t}e(t,n),t.prototype=null===n?Object.create(n):(r.prototype=n.prototype,new r)}}();Object.defineProperty(t,"__esModule",{value:!0});var o=n(4),a=function(e){function t(t){return e.call(this,t)||this}return r(t,e),t.prototype.render=function(){var e=this;return o.createElement("div",null,this.props.newsItem.title,": ",this.props.newsItem.text," ",o.createElement("button",{onClick:function(t){return e.props.onDeleteItem(t,e)}},"X"))},t}(o.Component);t.default=a},98:function(e,t,n){"use strict";var r=this&&this.__extends||function(){var e=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var n in t)t.hasOwnProperty(n)&&(e[n]=t[n])};return function(t,n){function r(){this.constructor=t}e(t,n),t.prototype=null===n?Object.create(n):(r.prototype=n.prototype,new r)}}();Object.defineProperty(t,"__esModule",{value:!0});var o=n(4),a=n(97),i=function(e){function t(t){return e.call(this,t)||this}return r(t,e),t.prototype.render=function(){var e=this;return o.createElement("div",{className:"newsReact"},o.createElement("h1",null,"News from React (Portlet Instance id: ",this.props.portletInstanceId,")"),o.createElement("div",null,o.createElement("label",{htmlFor:"newItemTitle"},"Title:")," ",o.createElement("input",{type:"text",name:"newItemTitle",value:this.props.newItemTitle,onChange:function(t){return e.props.onChange(t)}})," ",o.createElement("label",{htmlFor:"newItemText"},"Text:")," ",o.createElement("input",{type:"text",name:"newItemText",value:this.props.newItemText,onChange:function(t){return e.props.onChange(t)}}),"  ",o.createElement("button",{name:"btnAddNews",onClick:function(t){return e.props.onAddItem(t)}},"Add News")),o.createElement("div",null,this.props.newsItems.map(function(t,n){return o.createElement(a.default,{newsItem:t,key:n,onDeleteItem:e.props.onDeleteItem})})))},t}(o.Component);t.default=i}},[205]);
//# sourceMappingURL=news.js.map