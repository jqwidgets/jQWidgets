/// <reference path="../../../jqwidgets-ts/jqwidgets.d.ts" />

//defining instances
let jqxTreeInstance;
let feedContentExpanderInstance;
let feedListExpanderInstance;
let feedItemContentInstance;
let feedListContainerInstance;

function createSplitter(mainSplitterSelector, contentSplitterSelector, feedExpanderSelector, jqxTreeSelector, feedContentExpanderSelector, feedItemContentSelector, feedListExpanderSelector, feedListContainerSelector) {
    //defining options
    let splitterOptions: jqwidgets.SplitterOptions = {
        width: 850,
        height: 600,
        panels: [{ size: 200, min: 100 }, { min: 200, size: 400 }]
    };
    //creating an instance
    let splitterinstance: jqwidgets.jqxSplitter = jqwidgets.createInstance(mainSplitterSelector, 'jqxSplitter', splitterOptions);

    //defining options
    splitterOptions.width = '100%';
    splitterOptions.height = '100%';
    splitterOptions.orientation = 'horizontal';
    splitterOptions.panels = [{ size: 400, min: 100, collapsible: false }, { size: 400, min: 100, collapsible: true }];

    //creating an instance
    let contentSplitterInstance: jqwidgets.jqxSplitter = jqwidgets.createInstance(contentSplitterSelector, 'jqxSplitter', splitterOptions);
    //defining options
    let feedExpanderOptions: jqwidgets.ExpanderOptions = {
        toggleMode: 'none',
        showArrow: false,
        width: "100%",
        height: "100%",
        initContent: function () {
            //defining options
            let treeOptions: jqwidgets.TreeOptions = {
                height: '100%',
                width: '100%'
            };
            //creating an instance
            let treeInstance: jqwidgets.jqxTree = jqwidgets.createInstance(jqxTreeSelector, 'jqxTree', treeOptions);
            jqxTreeInstance = treeInstance;
        }
    };
    //creating an instance
    let feedExpanderInstance: jqwidgets.jqxExpander = jqwidgets.createInstance(feedExpanderSelector, 'jqxExpander', feedExpanderOptions);
    // defining options
    let feedContentExpanderOptions: jqwidgets.ExpanderOptions = {
        toggleMode: 'none',
        showArrow: false,
        width: "100%",
        height: "100%",
        initContent: function () {
            //defining options 
            let panelOptions: jqwidgets.PanelOptions = {
                width: '100%',
                height: '100%'
            };
            //creating an instance
            let panelInstance: jqwidgets.jqxPanel = jqwidgets.createInstance(feedItemContentSelector, 'jqxPanel', panelOptions);
            feedItemContentInstance = panelInstance;
        }
    };
    //creating an instance
    let feedContentExpander: jqwidgets.jqxExpander = jqwidgets.createInstance(feedContentExpanderSelector, 'jqxExpander', feedContentExpanderOptions);
    feedContentExpanderInstance = feedContentExpander;
    //defining options
    let feedListExpanderOptions: jqwidgets.ExpanderOptions = {
        toggleMode: 'none',
        showArrow: false,
        width: "100%",
        height: "100%",
        initContent: function () {
            //defining options
            let listBoxOption: jqwidgets.ListBoxOptions = {
                source: ['1'],
                width: '100%',
                height: '100%'
            };
            //creating an instance
            let listBoxInstance: jqwidgets.jqxListBox = jqwidgets.createInstance(feedListContainerSelector, 'jqxListBox', listBoxOption);
            feedListContainerInstance = listBoxInstance;
        }
    };
    //creating an instance
    let feedListExpander: jqwidgets.jqxExpander = jqwidgets.createInstance(feedListExpanderSelector, 'jqxExpander', feedListExpanderOptions);
    feedListExpanderInstance = feedListExpander;

    // adding eventHandlers
    jqxTreeInstance.addEventHandler('select', function (event) {
        let item = jqxTreeInstance.getItem(event.args.element);
        getFeed(config.feeds[item.label]);
    });
    feedListContainerInstance.addEventHandler('select', function (event) {
        loadContent(event.args.index);
    });

    let getFeed = function (feed) {
        if (!feed)
            return;

        config.currentFeed = feed; 
        feed = config.dataDir + '/' + feed + '.' + config.format;
        loadFeed(feed);
    };

    let loadFeed = function (feed, callback?: any) {
        let request = new XMLHttpRequest();
        request.onreadystatechange = function () {
            if (request.readyState == 4 && request.status == 200) {
                let data = JSON.parse(request.response);
                let channel = data.rss.channel;
                config.currentFeedContent = channel.item;
                displayFeedList(config.currentFeedContent);
                displayFeedHeader(channel.title);
                selectFirst();
            }
        };
            request.open('GET', feed, true);
            request.send();
    };

    let selectFirst = function () {
        feedListContainerInstance.selectIndex(0);
        loadContent(0);
    };
    let displayFeedHeader = function (header) {
        feedListExpanderInstance.setHeaderContent(header);
    };

    let displayFeedList = function (items) {
        let headers = getHeaders(items);
        config.feedListContainer.host["jqxListBox"]({ source: headers });
    };

    let getHeaders = function (items) {
        let headers = [], header;
        for (let i = 0; i < items.length; i += 1) {
            header = items[i].title;
            headers.push(header);
        }
        return headers;
    };

    let loadContent = function (index:number) {
        let item = config.currentFeedContent[index];
        if (item != null) {
            config.feedItemContent.clearcontent();
            let element = document.createElement('div');
            element.style.padding = '1px';
            let element2 = document.createElement('span');
            let node = document.createTextNode(item.description);
            element2.appendChild(node);
            element.appendChild(element2);
            config.feedItemContent.prepend(element);
            addContentHeaderData(item);
            config.selectedIndex = index;
        }
    };

    let addContentHeaderData = function (item:any) {
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
        config.feedItemHeader.innerHTML = null;
        config.feedItemHeader.appendChild(container);
        container.getElementsByTagName('td')[0].appendChild(link);
        container.querySelector('td:last-child').appendChild(date);
        feedContentExpanderInstance.setHeaderContent(container.outerHTML);
    };

    let dataDir = 'data';
    let config = {
        feeds: { 'CNN.com': 'cnn', 'Geek.com': 'geek', 'ScienceDaily': 'sciencedaily' },
        format: 'txt',
        dataDir: dataDir,
        feedTree: document.getElementById('jqxTree'),
        feedListContainer: feedListContainerInstance,
        feedItemContent: feedItemContentInstance,
        feedItemHeader: document.getElementById('feedItemHeader'),
        feedUpperPanel: document.getElementById('feedUpperPanel'),
        feedHeader: document.getElementById('feedHeader'),
        feedContentArea: document.getElementById('feedContentArea'),
        selectedIndex: -1,
        currentFeed: '',
        currentFeedContent: {}
    };
    getFeed('sciencedaily');
}
