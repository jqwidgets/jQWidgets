<!-- axios used for HTTP queries -> https://github.com/axios/axios -->

<template>
    <JqxSplitter :width="850" :height="600"
                 :panels="[{ size: 200, min: 100 },{ min: 200, size: 400 }]">
        <div>
            <JqxExpander style="border: none;" ref="feedExpander"
                         :width="'100%'" :height="'100%'"
                         :toggleMode="'none'" :showArrow="false">
                <div class="jqx-hideborder">
                    Feeds
                </div>
                <div class="jqx-hideborder jqx-hidescrollbars">
                    <JqxTree ref="myTree" @select="onTreeSelect($event)"
                             :width="'100%'" :height="'100%'">
                        <ul>
                            <li item-expanded="true" id="t1">
                                <img src="../../../images/contactsIcon.png" /><span item-title="true">News and Blogs</span>
                                <ul>
                                    <li>
                                        <img src="../../../images/favorites.png" /><span item-title="true">Favorites</span>
                                        <ul>
                                            <li>
                                                <img src="../../../images/folder.png" /><span item-title="true">ScienceDaily</span>
                                            </li>
                                        </ul>
                                    </li>
                                    <li>
                                        <img src="../../../images/folder.png" /><span item-title="true">Geek.com</span>
                                    </li>
                                    <li>
                                        <img src="../../../images/folder.png" /><span item-title="true">CNN.com</span>
                                    </li>
                                </ul>
                            </li>
                        </ul>
                    </JqxTree>
                </div>
            </JqxExpander>
        </div>
        <div>
            <JqxSplitter ref="horizontalSplitter"
                         :width="'100%'" :height="'100%'" :orientation="'horizontal'"
                         :panels="[{ size: 400, min: 100, collapsible: false },{ min: 100, collapsible: true }]">
                <div class="feed-item-list-container" id="feedUpperPanel">
                    <JqxExpander class="jqx-hideborder" ref="feedListExpander"
                                 :width="'100%'" :height="'100%'"
                                 :toggleMode="'none'" :showArrow="false">
                        <div class="jqx-hideborder" id="feedHeader"></div>
                        <div class="jqx-hideborder jqx-hidescrollbars">
                            <JqxListBox ref="myListBox" class="jqx-hideborder"
                                        @select="onListBoxSelect($event)"
                                        :width="'100%'" :height="'100%'" :source="['1']">
                            </JqxListBox>
                        </div>
                    </JqxExpander>
                </div>
                <div id="feedContentArea">
                    <JqxExpander class="jqx-hideborder" ref="feedContentExpander"
                                 :width="'100%'" :height="'100%'"
                                 :toggleMode="'none'" :showArrow="false">
                        <div class="jqx-hideborder" id="feedItemHeader"></div>
                        <div class="jqx-hideborder jqx-hidescrollbars">
                            <JqxPanel ref="myPanel" class="jqx-hideborder"
                                      :width="'100%'" :height="'100%'">
                                Select a news item to see it"s content
                            </JqxPanel>
                        </div>
                    </JqxExpander>
                </div>
            </JqxSplitter>
        </div>
    </JqxSplitter>
</template>

<script>
    import JqxSplitter from 'jqwidgets-scripts/jqwidgets-vue/vue_jqxsplitter.vue';
    import JqxExpander from 'jqwidgets-scripts/jqwidgets-vue/vue_jqxexpander.vue';
    import JqxTree from 'jqwidgets-scripts/jqwidgets-vue/vue_jqxtree.vue';
    import JqxListBox from 'jqwidgets-scripts/jqwidgets-vue/vue_jqxlistbox.vue';
    import JqxPanel from 'jqwidgets-scripts/jqwidgets-vue/vue_jqxpanel.vue';

    export default {
        components: {
            JqxSplitter,
            JqxExpander,
            JqxTree,
            JqxListBox,
            JqxPanel
        },
        data: function () {
            return {
                config: {
                    feeds: { 'CNN.com': 'cnn', 'Geek.com': 'geek', 'ScienceDaily': 'sciencedaily' },
                    format: 'txt',
                    dataDir: '../sampledata',
                    feedTree: document.querySelectorAll('angularTree')[0],
                    feedItemHeader: document.querySelector('#feedItemHeader'),
                    feedUpperPanel: document.querySelector('#feedUpperPanel'),
                    feedHeader: document.querySelector('#feedHeader'),
                    feedContentArea: document.querySelector('#feedContentArea'),
                    selectedIndex: -1,
                    currentFeed: '',
                    currentFeedContent: {}
                }
            }
        },
        mounted: function () {
            this.getFeed('sciencedaily');
        },
        methods: {
            onTreeSelect: function (event) {
                const item = this.$refs.myTree.getItem(event.args.element);
                this.getFeed(this.config['feeds'][item.label]);
            },
            onListBoxSelect: function (event) {
                this.loadContent(event.args.index);
            },
            selectFirst: function () {
                this.$refs.myListBox.selectIndex(0);
                this.loadContent(0);
            },
            getFeed: function (feed) {
                this.config['currentFeed'] = feed;
                if (feed !== undefined) {
                    feed = this.config['dataDir'] + '/' + feed + '.' + this.config['format'];
                    this.loadFeed(feed);
                }
            },
            loadFeed: function (feed, callback) {
                axios.get(feed)
                    .then(response => {
                        const data = response.data.rss.channel;

                        this.config['currentFeedContent'] = data.item;
                        this.displayFeedList(this.config['currentFeedContent']);
                        this.displayFeedHeader(data.title);
                        this.selectFirst();
                    })
                    .catch(err => {
                        console.log(err)
                    })
            },
            displayFeedHeader: function (header) {
                this.$refs.feedListExpander.setHeaderContent(header);
            },
            displayFeedList: function (items) {
                const headers = this.getHeaders(items);
                this.$refs.myListBox.source = headers;
            },
            getHeaders: function (items) {
                let headers = [], header;
                for (let i = 0; i < items.length; i += 1) {
                    header = items[i].title;
                    headers.push(header);
                }
                return headers
            },
            loadContent: function (index) {
                const item = this.config['currentFeedContent'][index];
                if (item != null) {
                    this.$refs.myPanel.clearcontent();
                    this.$refs.myPanel.prepend('<div style="padding: 1px;"><span>' + item.description + '</span></div>');
                    this.addContentHeaderData(item);
                    this.config['selectedIndex'] = index;
                }
            },
            addContentHeaderData: function (item) {
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
                container.appendChild(document.createElement('td'));
                container.appendChild(document.createElement('td'));

                link.href = item.link;

                document.querySelector('#feedItemHeader').innerHTML = null;
                document.querySelector('#feedItemHeader').appendChild(container);
                container.querySelectorAll('td')[0].appendChild(link);
                container.querySelector('td:last-child').appendChild(date);

                this.$refs.feedContentExpander.setHeaderContent(container.outerHTML);
            }
        }
    }
</script>

<style>
    .jqx-expander-content {
        height: 100% !important;
    }
</style>