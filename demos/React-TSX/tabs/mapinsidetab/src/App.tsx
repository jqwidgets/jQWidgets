import * as React from 'react';
import { useRef, useCallback } from 'react';
import './App.css';
import JqxTabs from 'jqwidgets-scripts/jqwidgets-react-tsx/jqxtabs';

const App = () => {
    const myTabs = useRef<any>(null);
    const map = useRef<HTMLDivElement>(null);

    const initialize = useCallback(() => {
        // @ts-ignore
        const directionsDisplay = new google.maps.DirectionsRenderer;
        // @ts-ignore
        const mapObj = new google.maps.Map(map.current!, {
            center: { lat: 29.979234, lng: 31.134202 },
            // @ts-ignore
            mapTypeId: google.maps.MapTypeId.ROADMAP,
            zoom: 17
        });
        directionsDisplay.setMap(mapObj);
    }, []);

    const initTabContent = useCallback((tab: any) => {
        if (tab === 0) {
            initialize();
        }
    }, [initialize]);

    return (
        <div>
            <p style={{ fontFamily: "Verdana" }}>
                Great Pyramid of Giza
            </p>
            <JqxTabs
                theme={'material-purple'}
                ref={myTabs}
                width={'100%'}
                height={400}
                initTabContent={initTabContent}
            >
                <ul style={{ marginLeft: 20 }}>
                    <li>Map</li>
                    <li>Information</li>
                </ul>
                <div>
                    <div id={"map-canvas"} ref={map} />
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
};

export default App;