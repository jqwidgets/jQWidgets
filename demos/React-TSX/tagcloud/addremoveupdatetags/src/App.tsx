import * as React from 'react';
 


import { generatedata } from './generatedata';
import JqxButton from 'jqwidgets-scripts/jqwidgets-react-tsx/jqxbuttons';
import JqxTagCloud, { ITagCloudProps, jqx } from 'jqwidgets-scripts/jqwidgets-react-tsx/jqxtagcloud';

class App extends React.PureComponent<{}, ITagCloudProps> {
    private myTagCloud = React.createRef<JqxTagCloud>();

    constructor(props: {}) {
        super(props);

        this.addItemClick = this.addItemClick.bind(this);
        this.deleteItemClick = this.deleteItemClick.bind(this);
        this.updateItemClick = this.updateItemClick.bind(this);

        const data = generatedata(50);
        const source: any = {
            dataFields: [
                { name: 'productname' },
                { name: 'price' }
            ],
            dataType: 'array',
            localData: data
        };

        const dataAdapter: any = new jqx.dataAdapter(source);

        this.state = {
            source: dataAdapter
        }
    }

    public render() {
        return (
            <div>
                This demo demonstrates how to add a tag in first position or update/remove the tag in first position.
                <JqxTagCloud ref={this.myTagCloud}
					// @ts-ignore
                    width={"100%"}
                    source={this.state.source}
                    displayMember={"productname"}
                    valueMember={"price"}
                    fontSizeUnit={"px"}
                    minFontSize={12}
                    maxFontSize={20}
                    urlBase={"http://localhost/"}
                    minColor={"#00AA99"}
                    maxColor={"#FF0000"}
                />
                <br />
                <br />
                <JqxButton theme={'material-purple'} onClick={this.addItemClick}>Add Item</JqxButton>
                <JqxButton theme={'material-purple'} onClick={this.deleteItemClick}>Delete First Item</JqxButton>
                <JqxButton theme={'material-purple'} onClick={this.updateItemClick}>Update First Item</JqxButton>
                <br />
            </div>
        );
    }

    // Event handling
    private addItemClick(e: Event): void {
        const row = generatedata(1, false)[0];
        this.myTagCloud.current!.insertAt(0, row);
    }

    private deleteItemClick(e: Event): void {
        this.myTagCloud.current!.removeAt(0);
    }

    private updateItemClick(e: Event): void {
        const row = generatedata(1, false)[0];
        this.myTagCloud.current!.updateAt(0, row);
    }
}

export default App;
