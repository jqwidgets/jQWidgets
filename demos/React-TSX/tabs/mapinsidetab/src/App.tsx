import * as React from 'react';
 


import './App.css';

import JqxTabs, { ITabsProps } from 'jqwidgets-scripts/jqwidgets-react-tsx/jqxtabs';

class App extends React.PureComponent<{}, ITabsProps> {
    private myTabs = React.createRef<JqxTabs>();
    private map = React.createRef<HTMLDivElement>();

    constructor(props: {}) {
        super(props);        
        this.state = {
            initTabContent: (tab: any) => {
                if (tab === 0) {
                    this.initialize();
                }
            }
        }
    }

    public render() {
        return (
            <div>
                <p style={{ fontFamily: "Verdana" }}>
                    Great Pyramid of Giza
                </p>
                <JqxTabs theme={'material-purple'} ref={this.myTabs}
                    // @ts-ignore
                    width={'100%'}
                    height={400}
                    initTabContent={this.state.initTabContent}
                >
                    <ul style={{ marginLeft: 20 }}>
                        <li>Map</li>
                        <li>Information</li>
                    </ul>
                    <div>
                        <div id={"map-canvas"} ref={this.map} />
                    </div>
                    <div>
                        The Great Pyramid of Giza (also known as the Pyramid of Khufu or the Pyramid of
                        Cheops) is the oldest and largest of the three pyramids in the Giza Necropolis bordering
                        what is now El Giza, Egypt. It is the oldest of the Seven Wonders of the Ancient
                        World, and the only one to remain largely intact.
                    </div>
                </JqxTabs>
            </div>
        );
    }

    private initialize = () => {
        // @ts-ignore
        const directionsDisplay = new google.maps.DirectionsRenderer;
        // @ts-ignore
        const map = new google.maps.Map(this.map.current!, {
            center: { lat: 29.979234, lng: 31.134202 },
            // @ts-ignore
            mapTypeId: google.maps.MapTypeId.ROADMAP,
            zoom: 17
        });
        directionsDisplay.setMap(map);
    }
}

export default App;
