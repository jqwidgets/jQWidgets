import * as React from 'react';
 

import * as ReactDOM from 'react-dom';

import './App.css';

import JqxSplitter from 'jqwidgets-scripts/jqwidgets-react-tsx/jqxsplitter';
import JqxTabs, { ITabsProps } from 'jqwidgets-scripts/jqwidgets-react-tsx/jqxtabs';

class App extends React.PureComponent<{}, ITabsProps> {
    private splitter = React.createRef<JqxSplitter>();
    private splitterContainer = React.createRef<HTMLDivElement>();
    private splitter2Container = React.createRef<HTMLDivElement>();

    constructor(props: {}) {
        super(props);

        this.state = {
            initTabContent: (tab: number) => {
                if (tab === 0) {
                    const splitter = <JqxSplitter theme={'material-purple'} ref={this.splitter}
                        height={"100%"}
                        width={"100%"}
                        panels={[{ size: "50%" }]}
                    >
                        <div>
                            Content 1.1
                        </div>
                        <div>
                            Content 1.2
                        </div>
                    </JqxSplitter>;

                    ReactDOM.render(
                        splitter,
                        this.splitterContainer.current!
                    );
                }
                else {
                    const splitter2 = <JqxSplitter theme={'material-purple'} ref={this.splitter}
                        height={"100%"}
                        width={"100%"}
                        panels={[{ size: "50%" }]}
                        orientation={"horizontal"}
                    >
                        <div>
                            Content 2.1
                        </div>
                        <div>
                            Content 2.2
                        </div>
                    </JqxSplitter>;

                    ReactDOM.render(
                        splitter2,
                        this.splitter2Container.current!
                    );
                }
            }
        }
    }

    public render() {
        return (
            <JqxTabs theme={'material-purple'} className={"jqx-hideborder jqx-hidescrollbars"}
                width={850} height={850}
                initTabContent={this.state.initTabContent}
            >
                <ul>
                    <li style={{ marginLeft: 30 }}>Tab 1</li>
                    <li>Tab 2</li>
                </ul>
                <div className={"jqx-hidescrollbars jqx-hideborder"} ref={this.splitterContainer} />
                <div className={"jqx-hidescrollbars jqx-hideborder"} ref={this.splitter2Container} />
            </JqxTabs>
        );
    }
}

export default App;
