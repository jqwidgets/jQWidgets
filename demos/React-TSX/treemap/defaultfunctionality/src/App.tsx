import * as React from 'react';
 

import * as ReactDOM from 'react-dom';

import './App.css';

import JqxTooltip from 'jqwidgets-scripts/jqwidgets-react-tsx/jqxtooltip';
import JqxTreeMap, { ITreeMapProps } from 'jqwidgets-scripts/jqwidgets-react-tsx/jqxtreemap';

class App extends React.PureComponent<{}, ITreeMapProps> {
    constructor(props: {}) {
        super(props);

        this.state = {
            renderCallbacks: {
                '*': (elementObject: HTMLDivElement, value: any): void => {
                    const htmlElement: any = elementObject;
                    if (value.data === undefined) {
                        const element = htmlElement[0];
                        element.style.backgroundColor = '#fff';
                        element.style.border = '1px solid #555';
                    }
                    else {
                        const element = htmlElement[0];
                        const content = '<div><div style="font-weight: bold; max-width: 200px; font-family: verdana; font-size: 13px;">' + value.data.title + '</div><div style="width: 200px; font-family: verdana; font-size: 12px;">' + value.data.description + '</div></div>'
                        const tooltip = <JqxTooltip theme={'material-purple'}
                            content={content}
                            position={"mouse"} >
                            <div />
                        </JqxTooltip>;

                        ReactDOM.render(tooltip, element);
                    }
                }
            },
            source: [{ "color": "#B3FAFF", "label": "Drama", "value": null }, { "color": "#95FF7A", "label": "Crime", "value": null }, { "color": "#FFA3CE", "label": "Action", "value": null }, { "color": "#F1A3FF", "label": "Comedy", "value": null }, { "data": { "description": "Two imprisoned men bond over a number of years, finding solace and eventual redemption through acts of common decency.", "title": "The Shawshank Redemption (1994)" }, "label": "The Shawshank Redemption", "parent": "Drama", "value": 15.4 }, { "data": { "description": "As students at the Navy's elite fighter weapons school compete to be best in the class, one daring young flyer learns a few things from a civilian instructor that are not taught in the classroom.", "title": "Top Gun (1986)" }, "label": "Top Gun", "parent": "Drama", "value": 4 }, { "data": { "description": "A Naval veteran arrives home from war unsettled and uncertain of his future - until he is tantalized by The Cause and its charismatic leader.", "title": "The Master (2012)" }, "label": "The Master", "parent": "Drama", "value": 4.5 }, { "data": { "description": "A dramatization of the 1980 joint CIA-Canadian secret operation to extract six fugitive American diplomatic personnel out of revolutionary Iran.", "title": "Argo (2012)" }, "label": "Argo", "parent": "Drama", "value": 6.8 }, { "data": { "description": "An insomniac office worker looking for a way to change his life crosses paths with a devil-may-care soap maker and they form an underground fight club that evolves into something much, much more.", "title": "Fight Club (1999)" }, "label": "Fight Club", "parent": "Crime", "value": 8.8 }, { "data": { "description": "The aging patriarch of an organized crime dynasty transfers control of his clandestine empire to his reluctant son.", "title": "The Godfather (1972)" }, "label": "The Godfather", "parent": "Crime", "value": 11 }, { "data": { "description": "When Batman, Gordon and Harvey Dent launch an assault on the mob, they let the clown out of the box, the Joker, bent on turning Gotham on itself and bringing any heroes down to his level.", "title": "The Dark Knight (2008)" }, "label": "The Dark Knight", "parent": "Action", "value": 8.9 }, { "data": { "description": "The lives of two mob hit men, a boxer, a gangster's wife, and a pair of diner bandits intertwine in four tales of violence and redemption.", "title": "Pulp Fiction (1994)" }, "label": "Pulp Fiction", "parent": "Crime", "value": 6 }, { "data": { "description": "Forrest Gump, while not intelligent, has accidentally been present at many historic moments, but his true love, Jenny Curran, eludes him.", "title": "Forrest Gump (1994)" }, "label": "Forrest Gump", "parent": "Drama", "value": 8.7 }, { "data": { "description": "A computer hacker learns from mysterious rebels about the true nature of his reality and his role in the war against its controllers.", "title": "The Matrix (1999)" }, "label": "The Matrix", "parent": "Action", "value": 8.7 }, { "data": { "description": "Twelve men must decide the fate of one when one juror objects to the jury's decision.", "title": "12 Angry Men (TV 1997)" }, "label": "12 Angry Men", "parent": "Drama", "value": 7.9 }, { "data": { "description": "Luke Skywalker, a spirited farm boy, joins rebel forces to save Princess Leia from the evil Darth Vader, and the galaxy from the Empire's planet-destroying Death Star..", "title": "Star Wars: Episode IV - A New Hope (1977)" }, "label": "Star Wars", "parent": "Action", "value": 10.8 }, { "data": { "description": "A skilled extractor is offered a chance to regain his old life as payment for a task considered to be impossible.", "title": "Inception (2010)" }, "label": "Inception", "parent": "Action", "value": 9.8 }, { "data": { "description": "Unscrupulous boxing promoters, violent bookmakers, a Russian gangster, incompetent amateur robbers, and supposedly Jewish jewelers fight to track down a priceless stolen diamond.", "title": "Snatch (2000)" }, "label": "Snatch.", "parent": "Crime", "value": 4.3 }, { "data": { "description": "A cowboy doll is profoundly threatened and jealous when a new spaceman figure supplants him as top toy in a boy's room.", "title": "Toy Story(2005)" }, "label": "Toy Story", "parent": "Comedy", "value": 9.3 }, { "data": { "description": "Bond's loyalty to M is tested when her past comes back to haunt her. Whilst MI6 comes under attack, 007 must track down and destroy the threat, no matter how personal the cost.", "title": "Skyfall (2012)" }, "label": "Skyfall", "parent": "Crime", "value": 7 }, { "data": { "description": "A thief with a unique code of professional ethics is double-crossed by his crew and left for dead. Assuming a new disguise and forming an unlikely alliance with a woman on the inside, he looks to hijack the score of the crew's latest heist.", "title": "Parker (1994)" }, "label": "Parker", "parent": "Crime", "value": 5.6 }, { "data": { "description": "An extraterrestrial race forced to live in slum-like conditions on Earth suddenly finds a kindred spirit in a government agent who is exposed to their biotechnology.", "title": "District 9 (2009)" }, "label": "District 9", "parent": "Action", "value": 6 }, { "data": { "description": "When two escaping American World War II prisoners are killed, the German POW camp barracks black marketeer, J.J. Sefton, is suspected of being an informer.", "title": "Stalag 17 (1953)" }, "label": "Stalag 17", "parent": "Comedy", "value": 6.1 }]
        }
    }

    public render() {
        return (
            <JqxTreeMap theme={'material-purple'}
                // @ts-ignore
                width={'100%'}
                height={600}
                source={this.state.source}
                colorRange={50}
                renderCallbacks={this.state.renderCallbacks}
            />
        );
    }
}

export default App;
