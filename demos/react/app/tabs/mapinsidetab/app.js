import React from 'react';
import ReactDOM from 'react-dom';

import JqxTabs from '../../../jqwidgets-react/react_jqxtabs.js';

class App extends React.Component {
    render() {
        let initialize = () => {
            let mapCanvas = document.getElementById('map-canvas');
            let mapOptions = {
                center: new google.maps.LatLng(29.979234, 31.134202),
                zoom: 17,
                mapTypeId: google.maps.MapTypeId.ROADMAP
            }
            let map = new google.maps.Map(mapCanvas, mapOptions)
        };
        let initTabContent = (tab) => {
            if (tab === 0) {
                google.maps.event.addDomListener(window, 'load', initialize);
            }
        }; 
        return (
            <div>

            <p style={{ fontFamily: 'Verdana' }}>
                Great Pyramid of Giza</p>
            <JqxTabs ref='myTabs'
                width={600} height={400}
                initTabContent={initTabContent}
            >
                <ul style={{ marginLeft: 20 }}>
                    <li>Map</li>
                    <li>Information</li>
                </ul>
                <div>
                        <div id="map-canvas" style={{ width: '100%', height: '100%' }}>
                    </div>
                </div>
                <div>
                    The Great Pyramid of Giza (also known as the Pyramid of Khufu or the Pyramid of
                    Cheops) is the oldest and largest of the three pyramids in the Giza Necropolis bordering
                    what is now El Giza, Egypt. It is the oldest of the Seven Wonders of the Ancient
                    World, and the only one to remain largely intact.
                </div>
            </JqxTabs>

        </div>
        )
    }
}

ReactDOM.render(<App />, document.getElementById('app'));
