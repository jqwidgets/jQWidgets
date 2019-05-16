import * as React from 'react';
 


import JqxTagCloud, { ITagCloudProps, jqx } from 'jqwidgets-scripts/jqwidgets-react-tsx/jqxtagcloud';

class App extends React.PureComponent<{}, ITagCloudProps> {
    private myTagCloud = React.createRef<JqxTagCloud>();

    constructor(props: {}) {
        super(props);
        const data = [
            { countryName: "Australia", technologyRating: 35 },
            { countryName: "United States", technologyRating: 60 },
            { countryName: "Germany", technologyRating: 55 },
            { countryName: "Brasil", technologyRating: 20 },
            { countryName: "United Kingdom", technologyRating: 50 },
            { countryName: "Japan", technologyRating: 80 }
        ];
        const source =
        {
            datafields: [
                { name: 'countryName' },
                { name: 'technologyRating' }
            ],
            datatype: "array",
            localdata: data,
        };
        const dataAdapter = new jqx.dataAdapter(source, {});

        const getIndex = (liItem: any, ulItem: any): any => {
            const allLiItems = ulItem.getElementsByTagName("li");
            for (const index in allLiItems) {
                if (!!allLiItems[index]) {
                    if (!!allLiItems[index].children) {
                        if (allLiItems[index] === liItem) {
                            return index;
                        }
                    }                 
                } else {
                    return -1;
                }
            }
        };

        this.state = {
            source: dataAdapter,
            tagRenderer: (record: any, minValue: any, range: any) => {
                const el = document.createElement("span");
                el.innerText = record.countryName;
                const img = document.createElement('img');
                img.setAttribute("style", "width: auto; height: auto; vertical-align: middle;");
                img.src = "https://www.jqwidgets.com/react/images/close.png";

                img.addEventListener('click', (event: any): void => {
                    const liItem = event.path[3];
                    const ulItem = event.path[4];
                    const id = getIndex(liItem, ulItem);
                    const index = this.myTagCloud.current!.getRenderedTags()[id].index;
                    this.myTagCloud.current!.removeAt(index);

                    event.preventDefault();
                    event.stopPropagation();
                });

                el.appendChild(img);
                return el;
            }
        }
    }

    public render() {
        return (
            <JqxTagCloud ref={this.myTagCloud}
                // @ts-ignore
                width={"100%"}
                source={this.state.source}
                displayMember={"countryName"}
                valueMember={"technologyRating"}
                tagRenderer={this.state.tagRenderer}
            />
        );
    }
}

export default App;
