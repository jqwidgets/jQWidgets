import * as React from 'react';
 


import './App.css';

import JqxTabs from 'jqwidgets-scripts/jqwidgets-react-tsx/jqxtabs';

const TabHeader = (props: any) => {
    return <div style={{ height: 40 }}>
        <img style={{ float: "left" }} width={32} height={32} src={props.imgSrc} alt="" className={"small-image"} />
        <div style={{ float: "left", marginLeft: 6, marginTop: 5, textAlign: "center", fontSize: 13 }}>
            {props.text}
        </div>
    </div>;
};

const TabContent = (props: any) => {
    return <div style={{ height: 400 }}>
        <img src={props.imgSrc} alt="" className={"big-image"} />
        <h3>{props.title}</h3>
        <p className={"important-text"}>{props.paragraph}</p>
        <div className={"more-text"}>{props.text}</div>
    </div>;
};

class App extends React.PureComponent<{}, {}> {
    private myTabs = React.createRef<JqxTabs>();

    private itemsContent = [
        {
            imgSrc: "https://www.jqwidgets.com/react/images/building_big.jpg",
            paragraph: `the Swiss Re Building (colloquially referred to as the Gherkin), is a skyscraper
        in London's main financial district, the City of London, completed in December 2003
        and opened at the end of May 2004. With 40 floors, the tower is 180 metres (591
        ft) tall, and stands on the former site of the Baltic Exchange building, which was
        severely damaged on 10 April 1992 by the explosion of a bomb placed by the Provisional
        IRA.`,
            text: `The building is on the former site of the Baltic Exchange building, the headquarters
        of a global marketplace for ship sales and shipping information. On 10 April 1992
        the Provisional IRA detonated a bomb close to the Exchange, severely damaging the
        historic Exchange building and neighbouring structures. The UK government's statutory
        adviser on the historic environment, English Heritage, and the City of London governing
        body, the City of London Corporation, were keen that any redevelopment must restore
        the building's old façade onto St Mary Axe. The Exchange Hall was a celebrated fixture
        of the ship trading company.`,
            title: "30 St Mary Axe"
        },
        {
            imgSrc: "https://www.jqwidgets.com/react/images/building2_big.jpg",
            paragraph: `is a 5-star luxury hotel located in Dubai, United Arab Emirates. At 321 m (1,053
        ft), it is the fourth tallest hotel in the world. Burj Al Arab stands on an artificial
        island 280 m (920 ft) out from Jumeirah beach, and is connected to the mainland
        by a private curving bridge. It is an iconic structure whose shape mimics the sail
        of a ship.`,
            text: `The beachfront area where Burj Al Arab and Jumeirah Beach Hotel are located was
        previously called Chicago Beach. The hotel is located on an island of reclaimed
        land 280 meters offshore of the beach of the former Chicago Beach Hotel. The locale's
        name had its origins in the Chicago Bridge & Iron Company which at one time welded
        giant floating oil storage tankers on the site. The old name persisted after the
        old Hotel was demolished in 1997. Dubai Chicago Beach Hotel remained as the Public
        Project Name for the construction phase of Burj Al Arab Hotel until Sheikh Mohammed
        bin Rashid Al Maktoum announced the new name.`,
            title: "Burj Al Arab"
        },
        {
            imgSrc: "https://www.jqwidgets.com/react/images/building3_big.jpg",
            paragraph: `(formerly named, and still commonly referred to as, the Sears Tower) is a 108-story,
        1,451-foot (442 m) skyscraper in Chicago, Illinois. At the time of its completion
        in 1973, it was the tallest building in the world, surpassing the World Trade Center
        towers in New York, and it held this rank for nearly 25 years. The Willis Tower
        is the tallest building in the United States and the fifth-tallest freestanding
        structure in the world, as well as the fifth-tallest building in the world to the
        roof.`,
            text: `Although Sears's naming rights expired in 2003, the building continued to be called
        the Sears Tower for several years. In March 2009, London-based insurance broker
        Willis Group Holdings agreed to lease a portion of the building, and obtained the
        building's naming rights. On July 16, 2009, the building was officially renamed
        the Willis Tower.`,
            title: "The Willis Tower"
        }
    ];

    private itemsHeader = [
        {
            imgSrc: "https://www.jqwidgets.com/react/images/building_small.jpg",
            text: <span>30 St Mary <br />Axe</span>
        },
        {
            imgSrc: "https://www.jqwidgets.com/react/images/building2_small.jpg",
            text: "Burj Al Arab"
        },
        {
            imgSrc: "https://www.jqwidgets.com/react/images/building3_small.jpg",
            text: <span>The Willis <br />Tower</span>
        }
    ];

    constructor(props: {}) {
        super(props);
    }

    public render() {
        return (
            <JqxTabs theme={'material-purple'} ref={this.myTabs}
                // @ts-ignore
                width={'100%'}
                animationType={"fade"}
                selectionTracker={true}
            >
                <ul style={{ marginLeft: 40 }}>
                    {this.itemsHeader.map((item, i) => {
                        return <div className={"content-container"} key={i}>
                            <TabHeader imgSrc={item.imgSrc} text={item.text!} />
                        </div>;
                    })}
                </ul>
                {this.itemsContent.map((item, i) => {
                    return <div className={"content-container"} key={i}>
                        <TabContent imgSrc={item.imgSrc} title={item.title} paragraph={item.paragraph} text={item.text} />
                    </div>;
                })}
            </JqxTabs>
        );
    }
}

export default App;
