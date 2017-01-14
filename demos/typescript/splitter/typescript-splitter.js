/// <reference path="../../../jqwidgets-ts/jqwidgets.d.ts" />
//defining instances
var jqxTreeInstance;
var feedContentExpanderInstance;
var feedListExpanderInstance;
var feedItemContentInstance;
var feedListContainerInstance;
function createSplitter(mainSplitterSelector, contentSplitterSelector, feedExpanderSelector, jqxTreeSelector, feedContentExpanderSelector, feedItemContentSelector, feedListExpanderSelector, feedListContainerSelector) {
    //defining options
    var splitterOptions = {
        width: 850,
        height: 600,
        panels: [{ size: 200, min: 100 }, { min: 200, size: 400 }]
    };
    //creating an instance
    var splitterinstance = jqwidgets.createInstance(mainSplitterSelector, 'jqxSplitter', splitterOptions);
    //defining options
    splitterOptions.width = '100%';
    splitterOptions.height = '100%';
    splitterOptions.orientation = 'horizontal';
    splitterOptions.panels = [{ size: 400, min: 100, collapsible: false }, { size: 400, min: 100, collapsible: true }];
    //creating an instance
    var contentSplitterInstance = jqwidgets.createInstance(contentSplitterSelector, 'jqxSplitter', splitterOptions);
    //defining options
    var feedExpanderOptions = {
        toggleMode: 'none',
        showArrow: false,
        width: "100%",
        height: "100%",
        initContent: function () {
            //defining options
            var treeOptions = {
                height: '100%',
                width: '100%'
            };
            //creating an instance
            var treeInstance = jqwidgets.createInstance(jqxTreeSelector, 'jqxTree', treeOptions);
            jqxTreeInstance = treeInstance;
        }
    };
    //creating an instance
    var feedExpanderInstance = jqwidgets.createInstance(feedExpanderSelector, 'jqxExpander', feedExpanderOptions);
    // defining options
    var feedContentExpanderOptions = {
        toggleMode: 'none',
        showArrow: false,
        width: "100%",
        height: "100%",
        initContent: function () {
            //defining options 
            var panelOptions = {
                width: '100%',
                height: '100%'
            };
            //creating an instance
            var panelInstance = jqwidgets.createInstance(feedItemContentSelector, 'jqxPanel', panelOptions);
            feedItemContentInstance = panelInstance;
        }
    };
    //creating an instance
    var feedContentExpander = jqwidgets.createInstance(feedContentExpanderSelector, 'jqxExpander', feedContentExpanderOptions);
    feedContentExpanderInstance = feedContentExpander;
    //defining options
    var feedListExpanderOptions = {
        toggleMode: 'none',
        showArrow: false,
        width: "100%",
        height: "100%",
        initContent: function () {
            //defining options
            var listBoxOption = {
                source: ['1'],
                width: '100%',
                height: '100%'
            };
            //creating an instance
            var listBoxInstance = jqwidgets.createInstance(feedListContainerSelector, 'jqxListBox', listBoxOption);
            feedListContainerInstance = listBoxInstance;
        }
    };
    //creating an instance
    var feedListExpander = jqwidgets.createInstance(feedListExpanderSelector, 'jqxExpander', feedListExpanderOptions);
    feedListExpanderInstance = feedListExpander;
    // adding eventHandlers
    jqxTreeInstance.addEventHandler('select', function (event) {
        var item = jqxTreeInstance.getItem(event.args.element);
        getFeed(config.feeds[item.label]);
    });
    feedListContainerInstance.addEventHandler('select', function (event) {
        loadContent(event.args.index);
    });
    var getFeed = function (feed) {
        if (!feed)
            return;
        config.currentFeed = feed;
        feed = config.dataDir + '/' + feed + '.' + config.format;
        loadFeed(feed);
    };
    var loadFeed = function (feed, callback) {
        var request = new XMLHttpRequest();
        request.onreadystatechange = function () {
            if (request.readyState == 4 && request.status == 200) {
                var data = JSON.parse(request.response);
                var channel = data.rss.channel;
                config.currentFeedContent = channel.item;
                displayFeedList(config.currentFeedContent);
                displayFeedHeader(channel.title);
                selectFirst();
            }
        };
        request.open('GET', feed, true);
        request.send();
    };
    var selectFirst = function () {
        feedListContainerInstance.selectIndex(0);
        loadContent(0);
    };
    var displayFeedHeader = function (header) {
        feedListExpanderInstance.setHeaderContent(header);
    };
    var displayFeedList = function (items) {
        var headers = getHeaders(items);
        config.feedListContainer.host["jqxListBox"]({ source: headers });
    };
    var getHeaders = function (items) {
        var headers = [], header;
        for (var i = 0; i < items.length; i += 1) {
            header = items[i].title;
            headers.push(header);
        }
        return headers;
    };
    var loadContent = function (index) {
        var item = config.currentFeedContent[index];
        if (item != null) {
            config.feedItemContent.clearcontent();
            var element = document.createElement('div');
            element.style.padding = '1px';
            var element2 = document.createElement('span');
            var node = document.createTextNode(item.description);
            element2.appendChild(node);
            element.appendChild(element2);
            config.feedItemContent.prepend(element);
            addContentHeaderData(item);
            config.selectedIndex = index;
        }
    };
    var addContentHeaderData = function (item) {
        var link = document.createElement('a');
        link.style.whiteSpace = 'nowrap';
        link.style.marginLeft = '15px';
        link.target = '_blank';
        var text = document.createTextNode('Source');
        link.appendChild(text);
        var date = document.createElement('div');
        date.style.whiteSpace = 'nowrap';
        date.style.marginLeft = '30px';
        date.appendChild(document.createTextNode(item.pubDate));
        var container = document.createElement('table');
        container.style.height = '100%';
        var element1 = document.createElement('tr');
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
    var dataDir = 'data';
    var config = {
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
//# sourceMappingURL=typescript-splitter.js.map