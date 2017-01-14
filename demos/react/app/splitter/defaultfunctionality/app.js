import React from 'react';
import ReactDOM from 'react-dom';

import JqxTree from '../../../jqwidgets-react/react_jqxtree.js';
import JqxSplitter from '../../../jqwidgets-react/react_jqxsplitter.js';
import JqxExpander from '../../../jqwidgets-react/react_jqxexpander.js';
import JqxListBox from '../../../jqwidgets-react/react_jqxlistbox.js';
import JqxPanel from '../../../jqwidgets-react/react_jqxpanel.js';

class App extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        config:
        {
            feeds: { 'CNN.com': 'cnn', 'Geek.com': 'geek', 'ScienceDaily': 'sciencedaily' },
            currentFeedContent: {}
        }
      };
    }
    componentDidMount () {
      this.refs.mainSplitter.expand();
      let firstItem = this.refs.myTree.getItems()[0].element;
      this.refs.myTree.expandItem(firstItem);
      this.refs.myTree.on('select', (event) => {
        let item = this.refs.myTree.getItem(event.args.element);
        if(this.state.config['feeds'][item.label] !== undefined) {
          this.getFeed(this.state.config['feeds'][item.label]);
        }
      });
      this.refs.myListBox.on('select', (event) => {
          this.loadContent(event.args.index);
      });
      this.getFeed('sciencedaily');
    }
    getFeed (feed) {
      feed = 'data/' + feed + '.txt';
      this.loadFeed(feed);
    };
    loadFeed (feed, callback) {
        $.jqx.data.ajax({
            'dataType': 'json',
            'url': feed,
            success: (data) => {
                let channel = data.rss.channel;
                this.setState({ config:
                  {
                      feeds: { 'CNN.com': 'cnn', 'Geek.com': 'geek', 'ScienceDaily': 'sciencedaily' },
                      currentFeedContent: channel.item
                  }
                });
                this.displayFeedList(this.state.config.currentFeedContent);
                this.displayFeedHeader(channel.title);
                this.selectFirst();
            },
            error: (msg) => {
            }
        });
    };
    displayFeedList (items) {
        let headers = this.getHeaders(items);
        this.refs.myListBox.source(headers);
    };
    displayFeedHeader (header) {
        this.refs.feedListExpander.setHeaderContent(header);
    };
    selectFirst () {
        this.refs.myListBox.selectIndex(0);
        this.loadContent(0);
    };
    loadContent (index) {
        let item = this.state.config.currentFeedContent[index];
        if (item != null) {
          this.refs.myPanel.clearcontent();
          this.refs.myPanel.prepend('<div style="padding: 1px;"><span>' + item.description + '</span></div>');
          this.addContentHeaderData(item);
        }
    };
    getHeaders (items) {
        let headers = [], header;
        for (let i = 0; i < items.length; i += 1) {
            header = items[i].title;
            headers.push(header);
        }
        return headers;
    };
    addContentHeaderData (item) {
      let link = document.createElement('a');
      link.style.whiteSpace = 'nowrap';
      link.style.marginLeft = '15px';
      link.target = '_blank';
      let text = document.createTextNode('Source');
      link.appendChild(text);
      let date = document.createElement('div');
      date.style.whiteSpace = 'nowrap';
      date.style.marginLeft = '30px';
      date.appendChild(document.createTextNode(item.pubDate));
      let container = document.createElement('table');
      container.style.height = '100%';
      let element1 = document.createElement('tr');
      container.appendChild(element1);
      container.appendChild(document.createElement('td'));
      container.appendChild(document.createElement('td'));
      link.href = item.link;
      document.getElementById('feedItemHeader').innerHTML = null;
      document.getElementById('feedItemHeader').appendChild(container);
      container.getElementsByTagName('td')[0].appendChild(link);
      container.querySelector('td:last-child').appendChild(date);
      this.refs.feedListExpander.setHeaderContent(container.outerHTML);
    };
    render () {

        return (
            <JqxSplitter ref='mainSplitter'
              width={850} height={600}
              panels={[{ size: 200, min: 100 }, {min: 200, size: 400}]}
            >
                <JqxExpander style={{ border: 'none'}}
                  width={'100%'} height={'100%'} showArrow={false} toggleMode={'none'}
                >
                    <div className="jqx-hideborder">
                        Feeds
                    </div>
                    <div className="jqx-hideborder jqx-hidescrollbars">
                        <JqxTree ref='myTree' width={'100%'} height={'100%'}>
                            <ul>
                                <li id="t1">
                                    <img src='../../../images/contactsIcon.png' /><span>News and Blogs</span>
                                    <ul>
                                        <li>
                                            <img src='../../../images/favorites.png' /><span>Favorites</span>
                                            <ul>
                                                <li>
                                                    <img src='../../../images/folder.png' /><span>ScienceDaily</span>
                                                </li>
                                            </ul>
                                        </li>
                                        <li>
                                            <img src='../../../images/folder.png' /><span>Geek.com</span>
                                        </li>
                                        <li>
                                            <img src='../../../images/folder.png' /><span>CNN.com</span>
                                        </li>
                                    </ul>
                                </li>
                            </ul>
                        </JqxTree>
                    </div>
                </JqxExpander>
                <div>
                    <JqxSplitter
                      width={850} height={600} orientation={'horizontal'}
                      panels={[{ size: 400, min: 100, collapsible: false }, { min: 100, collapsible: true}]}
                    >
                        <div className="feed-item-list-container" id="feedUpperPanel">
                            <JqxExpander ref='feedListExpander' className="jqx-hideborder"
                                width={'100%'} height={'100%'} showArrow={false} toggleMode={'none'}
                            >
                                <div className="jqx-hideborder" id="feedHeader">
                                </div>
                                <div className="jqx-hideborder jqx-hidescrollbars">
                                    <JqxListBox ref='myListBox' width={'100%'} height={'100%'} source={['1']} className="jqx-hideborder">
                                    </JqxListBox>
                                </div>
                            </JqxExpander>
                        </div>
                        <div id="feedContentArea">
                            <JqxExpander className="jqx-hideborder"
                                width={'100%'} height={'100%'} showArrow={false} toggleMode={'none'}
                            >
                                <div className="jqx-hideborder" id="feedItemHeader">
                                </div>
                                <div className="jqx-hideborder jqx-hidescrollbars">
                                    <JqxPanel ref='myPanel' width={'100%'} height={'100%'} className="jqx-hideborder">
                                        Select a news item to see it's content
                                    </JqxPanel>
                                </div>
                            </JqxExpander>
                        </div>
                    </JqxSplitter>
                </div>
            </JqxSplitter>
        )
    }
}

//Render our App Component to the desirable element
ReactDOM.render(<App />, document.getElementById('app'));
