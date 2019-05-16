import * as React from 'react';
 


import './App.css';

import JqxExpander from 'jqwidgets-scripts/jqwidgets-react-tsx/jqxexpander';
import JqxListBox from 'jqwidgets-scripts/jqwidgets-react-tsx/jqxlistbox';
import JqxPanel from 'jqwidgets-scripts/jqwidgets-react-tsx/jqxpanel';
import JqxSplitter, { ISplitterProps } from 'jqwidgets-scripts/jqwidgets-react-tsx/jqxsplitter';
import JqxTree from 'jqwidgets-scripts/jqwidgets-react-tsx/jqxtree';

class App extends React.PureComponent<{}, ISplitterProps> {
    private myTree = React.createRef<JqxTree>();
    private feedExpander = React.createRef<JqxExpander>();
    private horizontalSplitter = React.createRef<JqxSplitter>();
    private feedListExpander = React.createRef<JqxExpander>();
    private myListBox = React.createRef<JqxListBox>();
    private feedContentExpander = React.createRef<JqxExpander>();
    private myPanel = React.createRef<JqxPanel>();
    private feedItemHeader = React.createRef<HTMLDivElement>();

    private config: any = {
        currentFeedContent: {},
        dataDir: './../sampledata',
        feeds: { 'CNN.com': 'cnn', 'Geek.com': 'geek', 'ScienceDaily': 'sciencedaily' },
        format: 'txt'
    };

    constructor(props: {}) {
        super(props);
        this.onTreeSelect = this.onTreeSelect.bind(this);
        this.onListBoxSelect = this.onListBoxSelect.bind(this);
    }

    public componentDidMount() {
        this.getFeed('sciencedaily');
    }

    public render() {
        return (
            <JqxSplitter theme={'material-purple'}
                width={850} height={600} panels={[{ size: 200, min: 100 }, { min: 200, size: 400 }]} >
                <div>
                    <JqxExpander theme={'material-purple'} ref={this.feedExpander} style={{ border: "none" }}
                        width={"100%"}
                        height={"100%"}
                        toggleMode={"none"}
                        showArrow={false}
                    >
                        <div className={"jqx-hideborder"}>
                            Feeds
                        </div>
                        <div className={"jqx-hideborder jqx-hidescrollbars"}>
                            <JqxTree theme={'material-purple'} ref={this.myTree}
                                onSelect={this.onTreeSelect}
                                width={"100%"} height={"100%"}>
                                <ul>
                                    <li item-expanded={"true"} id={"t1"}>
                                        <img src={"https://www.jqwidgets.com/react/images/contactsIcon.png"} /><span item-title={"true"}>News and Blogs</span>
                                        <ul>
                                            <li>
                                                <img src={"https://www.jqwidgets.com/react/images/favorites.png"} /><span item-title={"true"}>Favorites</span>
                                                <ul>
                                                    <li>
                                                        <img src={"https://www.jqwidgets.com/react/images/folder.png"} /><span item-title={"true"}>ScienceDaily</span>
                                                    </li>
                                                </ul>
                                            </li>
                                            <li>
                                                <img src={"https://www.jqwidgets.com/react/images/folder.png"} /><span item-title={"true"}>Geek.com</span>
                                            </li>
                                            <li>
                                                <img src={"https://www.jqwidgets.com/react/images/folder.png"} /><span item-title={"true"}>CNN.com</span>
                                            </li>
                                        </ul>
                                    </li>
                                </ul>
                            </JqxTree>
                        </div>
                    </JqxExpander>
                </div>
                <div>
                    <JqxSplitter theme={'material-purple'} className={"jqx-hideborder"} ref={this.horizontalSplitter}
                        width={"100%"}
                        height={"100%"}
                        orientation={"horizontal"}
                        panels={[{ size: 400, min: 100, collapsible: false }, { min: 100, collapsible: true }]}
                    >
                        <div className={"feed-item-list-container"} id={"feedUpperPanel"}>
                            <JqxExpander theme={'material-purple'} className={"jqx-hideborder"} ref={this.feedListExpander}
                                width={"100%"}
                                height={"100%"}
                                toggleMode={"none"}
                                showArrow={false}
                            >
                                <div className={"jqx-hideborder"} id={"feedHeader"} />
                                <div className={"jqx-hideborder jqx-hidescrollbars"}>
                                    <JqxListBox theme={'material-purple'} ref={this.myListBox}
                                        onSelect={this.onListBoxSelect}
                                        width={"100%"}
                                        height={"100%"}
                                        source={['1']}
                                    />
                                </div>
                            </JqxExpander>
                        </div>
                        <div id={"feedContentArea"}>
                            <JqxExpander theme={'material-purple'} className={"jqx-hideborder"} ref={this.feedContentExpander}
                                width={"100%"}
                                height={"100%"}
                                toggleMode={"none"}
                                showArrow={false}
                            >
                                <div ref={this.feedItemHeader} className={"jqx-hideborder"} />
                                <div className={"jqx-hideborder jqx-hidescrollbars"}>
                                    <JqxPanel theme={'material-purple'} ref={this.myPanel}
                                        width={"100%"}
                                        height={"100%"}
                                    >
                                        Select a news item to see it's content
                                    </JqxPanel>
                                </div>
                            </JqxExpander>
                        </div>
                    </JqxSplitter>
                </div>
            </JqxSplitter>
        );
    }

    // Event handling
    private onTreeSelect(event: any): void {
        const item = this.myTree.current!.getItem(event.args.element);
        for (const feed in this.config.feeds) {
            if (feed === item.label) {
                this.getFeed(this.config.feeds[feed]);
                break;
            }
        }
    }

    private onListBoxSelect(event: any): void {
        this.loadContent(event.args.index);
    }

    private selectFirst(): void {
        this.myListBox.current!.selectIndex(0);
        this.loadContent(0);
    }

    private getFeed(feed: any): void {
        this.config.currentFeed = feed;
        if (feed !== undefined) {
            feed = this.config.dataDir + '/' + feed + '.' + this.config.format;
            this.loadFeed(feed);
        }
    };

    private loadFeed(feed: any, callback?: any): void {
        fetch(feed)
            .then(response => response.json())
            .then(dataObject => {
                const channel = dataObject.rss.channel;
                this.config.currentFeedContent = channel.item;
                this.displayFeedList(this.config.currentFeedContent);
                this.displayFeedHeader(channel.title);
                this.selectFirst();
            })
            .catch(reason => {
                /* tslint:disable:no-console */
                console.error('Error:', reason);
            });
    };

    private displayFeedHeader(header: string): void {
        this.feedListExpander.current!.setHeaderContent(header);
    };

    private displayFeedList(items: any): void {
        const headers = this.getHeaders(items);
        this.myListBox.current!.setOptions({ source: headers });
    };

    private getHeaders(items: any): any {
        const headers = []
        let header;
        for (const item of items) {
            header = item.title;
            headers.push(header);
        }

        return headers
    };

    private loadContent(index: number): void {
        const item = this.config.currentFeedContent[index];
        if (item !== null) {
            this.myPanel.current!.clearcontent();
            this.myPanel.current!.prepend('<div style="padding: 1px;"><span>' + item.description + '</span></div>');
            this.addContentHeaderData(item);
            this.config.selectedIndex = index;
        }
    };

    private addContentHeaderData(item: any): void {
        const link = document.createElement('a');
        link.style.whiteSpace = 'nowrap';
        link.style.marginLeft = '15px';
        link.target = '_blank';
        const text = document.createTextNode('Source');
        link.appendChild(text);
        const date = document.createElement('div');
        date.style.whiteSpace = 'nowrap';
        date.style.marginLeft = '30px';
        date.appendChild(document.createTextNode(item.pubDate));

        const container = document.createElement('table');
        container.style.height = '100%';
        const element1 = document.createElement('tr');
        container.appendChild(element1);
        const firstTD = document.createElement('td');
        container.appendChild(firstTD);
        const secondTD = document.createElement('td');
        container.appendChild(secondTD);
        link.href = item.link;
        // Clear content
        this.feedItemHeader.current!.innerHTML = '';
        this.feedItemHeader.current!.appendChild(container);
        firstTD.appendChild(link);
        secondTD.appendChild(date);
    }
}

export default App;
