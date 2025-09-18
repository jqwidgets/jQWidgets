import * as React from 'react';
import { useEffect, useRef } from 'react';
import './App.css';
import JqxExpander from 'jqwidgets-scripts/jqwidgets-react-tsx/jqxexpander';
import JqxListBox from 'jqwidgets-scripts/jqwidgets-react-tsx/jqxlistbox';
import JqxPanel from 'jqwidgets-scripts/jqwidgets-react-tsx/jqxpanel';
import JqxSplitter, { ISplitterProps } from 'jqwidgets-scripts/jqwidgets-react-tsx/jqxsplitter';
import JqxTree from 'jqwidgets-scripts/jqwidgets-react-tsx/jqxtree';

const App = () => {
    const myTree = useRef<any>(null);
    const feedExpander = useRef<any>(null);
    const horizontalSplitter = useRef<any>(null);
    const feedListExpander = useRef<any>(null);
    const myListBox = useRef<any>(null);
    const feedContentExpander = useRef<any>(null);
    const myPanel = useRef<any>(null);
    const feedItemHeader = useRef<HTMLDivElement>(null);

    const config = useRef<any>({
        currentFeedContent: {},
        dataDir: './../sampledata',
        feeds: { 'CNN.com': 'cnn', 'Geek.com': 'geek', 'ScienceDaily': 'sciencedaily' },
        format: 'txt'
    });

    useEffect(() => {
        getFeed('sciencedaily');
        // eslint-disable-next-line
    }, []);

    const onTreeSelect = (event: any): void => {
        const item = myTree.current!.getItem(event.args.element);
        for (const feed in config.current.feeds) {
            if (feed === item.label) {
                getFeed(config.current.feeds[feed]);
                break;
            }
        }
    };

    const onListBoxSelect = (event: any): void => {
        loadContent(event.args.index);
    };

    const selectFirst = (): void => {
        myListBox.current!.selectIndex(0);
        loadContent(0);
    };

    const getFeed = (feed: any): void => {
        config.current.currentFeed = feed;
        if (feed !== undefined) {
            feed = config.current.dataDir + '/' + feed + '.' + config.current.format;
            loadFeed(feed);
        }
    };

    const loadFeed = (feed: any, callback?: any): void => {
        fetch(feed)
            .then(response => response.json())
            .then(dataObject => {
                const channel = dataObject.rss.channel;
                config.current.currentFeedContent = channel.item;
                displayFeedList(config.current.currentFeedContent);
                displayFeedHeader(channel.title);
                selectFirst();
            })
            .catch(reason => {
                console.error('Error:', reason);
            });
    };

    const displayFeedHeader = (header: string): void => {
        feedListExpander.current!.setHeaderContent(header);
    };

    const displayFeedList = (items: any): void => {
        const headers = getHeaders(items);
        myListBox.current!.setOptions({ source: headers });
    };

    const getHeaders = (items: any): any => {
        const headers = [];
        let header;
        for (const item of items) {
            header = item.title;
            headers.push(header);
        }
        return headers;
    };

    const loadContent = (index: number): void => {
        const item = config.current.currentFeedContent[index];
        if (item !== null) {
            myPanel.current!.clearcontent();
            myPanel.current!.prepend('<div style="padding: 1px;"><span>' + item.description + '</span></div>');
            addContentHeaderData(item);
            config.current.selectedIndex = index;
        }
    };

    const addContentHeaderData = (item: any): void => {
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
        if (feedItemHeader.current) {
            feedItemHeader.current.innerHTML = '';
            feedItemHeader.current.appendChild(container);
            firstTD.appendChild(link);
            secondTD.appendChild(date);
        }
    };

    return (
        <JqxSplitter theme={'material-purple'}
            width={850} height={600} panels={[{ size: 200, min: 100 }, { min: 200, size: 400 }]}>
            <div>
                <JqxExpander theme={'material-purple'} ref={feedExpander} style={{ border: "none" }}
                    width={"100%"}
                    height={"100%"}
                    toggleMode={"none"}
                    showArrow={false}>
                    <div className={"jqx-hideborder"}>
                        Feeds
                    </div>
                    <div className={"jqx-hideborder jqx-hidescrollbars"}>
                        <JqxTree theme={'material-purple'} ref={myTree}
                            onSelect={onTreeSelect}
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
                <JqxSplitter theme={'material-purple'} className={"jqx-hideborder"} ref={horizontalSplitter}
                    width={"100%"}
                    height={"100%"}
                    orientation={"horizontal"}
                    panels={[{ size: 400, min: 100, collapsible: false }, { min: 100, collapsible: true }]}>
                    <div className={"feed-item-list-container"} id={"feedUpperPanel"}>
                        <JqxExpander theme={'material-purple'} className={"jqx-hideborder"} ref={feedListExpander}
                            width={"100%"}
                            height={"100%"}
                            toggleMode={"none"}
                            showArrow={false}>
                            <div className={"jqx-hideborder"} id={"feedHeader"} />
                            <div className={"jqx-hideborder jqx-hidescrollbars"}>
                                <JqxListBox theme={'material-purple'} ref={myListBox}
                                    onSelect={onListBoxSelect}
                                    width={"100%"}
                                    height={"100%"}
                                    source={['1']}
                                />
                            </div>
                        </JqxExpander>
                    </div>
                    <div id={"feedContentArea"}>
                        <JqxExpander theme={'material-purple'} className={"jqx-hideborder"} ref={feedContentExpander}
                            width={"100%"}
                            height={"100%"}
                            toggleMode={"none"}
                            showArrow={false}>
                            <div ref={feedItemHeader} className={"jqx-hideborder"} />
                            <div className={"jqx-hideborder jqx-hidescrollbars"}>
                                <JqxPanel theme={'material-purple'} ref={myPanel}
                                    width={"100%"}
                                    height={"100%"} >
                                    Select a news item to see it's content
                                </JqxPanel>
                            </div>
                        </JqxExpander>
                    </div>
                </JqxSplitter>
            </div>
        </JqxSplitter>
    );
};

export default App;