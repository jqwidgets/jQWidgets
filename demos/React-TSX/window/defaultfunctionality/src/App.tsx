import * as React from 'react';
 


import JqxButton from 'jqwidgets-scripts/jqwidgets-react-tsx/jqxbuttons';
import JqxCheckBox from 'jqwidgets-scripts/jqwidgets-react-tsx/jqxcheckbox';
import JqxTabs from 'jqwidgets-scripts/jqwidgets-react-tsx/jqxtabs';
import JqxWindow from 'jqwidgets-scripts/jqwidgets-react-tsx/jqxwindow';

class App extends React.PureComponent<{}, {}> {
    private myWindow = React.createRef<JqxWindow>();
    private jqxWidget = React.createRef<HTMLDivElement>();

    constructor(props: {}) {
        super(props);
        this.onShowButton = this.onShowButton.bind(this);
        this.onHideButton = this.onHideButton.bind(this);
        this.onResizeCheckBox = this.onResizeCheckBox.bind(this);
        this.onDragCheckBox = this.onDragCheckBox.bind(this);
    }

    public componentDidMount(): void {
        const offsetLeft = this.jqxWidget.current!.offsetLeft;
        const offsetTop = this.jqxWidget.current!.offsetTop;
        this.myWindow.current!.setOptions({
            position: { x: offsetLeft + 50, y: offsetTop + 50 }
        });

        this.myWindow.current!.focus();
    }

    public render() {
        const tabsStyle: React.CSSProperties = { float: "left", margin: 10 };
        return (
            <div ref={this.jqxWidget}>
                <div style={{ float: "left" }}>
                    <div>
                        <JqxButton theme={'material-purple'} style={{ float: "left" }} width={70} onClick={this.onShowButton}>Open</JqxButton>
                        <JqxButton theme={'material-purple'} style={{ float: "left", marginLeft: 5 }} width={70} onClick={this.onHideButton}>Close</JqxButton>
                    </div>
                    <div style={{ display: 'inline-block', marginTop: 10 }}>
                        <JqxCheckBox theme={'material-purple'} width={120} checked={true} onChange={this.onResizeCheckBox}>
                            Resizable
                        </JqxCheckBox>
                        <JqxCheckBox theme={'material-purple'} width={120} checked={true} onChange={this.onDragCheckBox}>
                            Enable drag
                        </JqxCheckBox>
                    </div>
                </div>

                <div style={{ width: '100%', height: 650, marginTop: 50 }}>
                    <JqxWindow theme={'material-purple'} ref={this.myWindow}
                        width={500}
                        height={300}
                        minWidth={200} maxWidth={700}
                        minHeight={200} maxHeight={400}
                        showCollapseButton={true}
                    >
                        <div>
                            <span>
                                <img src="https://www.jqwidgets.com/react/images/movie.png" alt="" style={{ marginRight: '15px' }} />Movies
                            </span>
                        </div>
                        <div style={{ overflow: 'hidden' }}>
                            <JqxTabs theme={'material-purple'} width={'100%'} height={'100%'}>
                                <ul>
                                    <li>Avatar</li>
                                    <li>End Game</li>
                                    <li>Twilight</li>
                                    <li>Unstoppable</li>
                                    <li>Priest</li>
                                </ul>
                                <div>
                                    <img src="https://www.jqwidgets.com/react/images/avatar.png" style={tabsStyle} alt="" />
                                    Avatar is a 2009 American[6][7] epic science fiction film written and directed by
                                    James Cameron, and starring Sam Worthington, Zoe Saldana, Stephen Lang, Michelle
                                    Rodriguez, Joel David Moore, Giovanni Ribisi and Sigourney Weaver. The film is set
                                    in the mid-22nd century, when humans are mining a precious mineral called unobtanium
                                    on Pandora , a lush habitable moon of a gas giant in the Alpha Centauri star system.
                                    The expansion of the mining colony threatens the continued existence of a local
                                    tribe of Na'vi—a humanoid species indigenous to Pandora. The film's title refers
                                    to the genetically engineered Na'vi-human hybrid bodies used by a team of researchers
                                    to interact with the natives of Pandora.
                                </div>
                                <div>
                                    <img src="https://www.jqwidgets.com/react/images/endgame.png" style={tabsStyle} alt="" />
                                    End Game is a 2006 action/thriller film, written and directed by Andy Cheng. The
                                    film stars Cuba Gooding, Jr. as Secret Service agent Alex Thomas, who is shot in
                                    the hand, while unsuccessfully trying to protect the President (played by Jack Scalia)
                                    from an assassin's bullet. Later, with the help of a persistent newspaper reporter
                                    named Kate Crawford (played by Angie Harmon), he uncovers a vast conspiracy behind
                                    what initially appeared to be a lone gunman. James Woods, Burt Reynolds, and Anne
                                    Archer co–star in this film that was originally set to be shown in cinemas by MGM
                                    in 2005, but was delayed by the takeover from Sony and eventually sent direct to
                                    DVD.
                                </div>
                                <div>
                                    <img src="https://www.jqwidgets.com/react/images/twilight.png" style={tabsStyle} alt="" />
                                    The project was in development for approximately three years at Paramount Pictures,
                                    during which time a screen adaptation that differed significantly from the novel
                                    was written. Summit Entertainment acquired the rights to the novel after three years
                                    of the project's stagnant development. Melissa Rosenberg wrote a new adaptation
                                    of the novel shortly before the 2007–2008 Writers Guild of America strike and sought
                                    to be faithful to the novel's storyline. Principal photography took 44 days, and
                                    completed on May 2, 2008; the film was primarily shot in Oregon
                                </div>
                                <div>
                                    <img src="https://www.jqwidgets.com/react/images/unstoppable.png" style={tabsStyle} alt="" />
                                    Meanwhile, in a rail yard within the northern town of Fuller, two AWVR hostlers,
                                    Dewey (Ethan Suplee) and Gilleece (T.J. Miller), are ordered by Fuller operations
                                    dispatcher Bunny (Kevin Chapman) to move a freight train led by locomotive #777
                                    (nicknamed "Triple Seven") off its current track to clear the track for an excursion
                                    train carrying schoolchildren. Dewey attempts to take shortcuts, instructing Gilleece
                                    to leave the hoses for the air brakes disconnected for the short trip. Dewey later
                                    leaves the moving cab to throw a misaligned rail switch along the train's path,
                                    but is unable to climb back on, as the train's throttle jumps from idle, to full
                                    power. He is forced to report the train as a "coaster" to Fuller yardmaster Connie
                                    Hooper (Rosario Dawson)...
                                </div>
                                <div>
                                    <img src="https://www.jqwidgets.com/react/images/priest.png" style={tabsStyle} alt="" />
                                    Priest is a 2011 American post-apocalyptic sci-fi western and supernatural action
                                    film starring Paul Bettany as the title character. The film, directed by Scott Stewart,
                                    is based on the Korean comic of the same name. In an alternate world, humanity and
                                    vampires have warred for centuries. After the last Vampire War, the veteran Warrior
                                    Priest (Bettany) lives in obscurity with other humans inside one of the Church's
                                    walled cities. When the Priest's niece (Lily Collins) is kidnapped by vampires,
                                    the Priest breaks his vows to hunt them down. He is accompanied by the niece's boyfriend
                                    (Cam Gigandet), who is a wasteland sheriff, and a former Warrior Priestess (Maggie
                                    Q).
                                </div>
                            </JqxTabs>
                        </div>
                    </JqxWindow>
                </div>
            </div>
        );
    }

    // Event handling
    private onShowButton(): void {
        this.myWindow.current!.open();
    }

    private onHideButton(): void {
        this.myWindow.current!.close();
    }

    private onResizeCheckBox(event: any): void {
        if (event.args.checked) {
            this.myWindow.current!.setOptions({ resizable: true });
        }
        else {
            this.myWindow.current!.setOptions({ resizable: false });
        }
    }

    private onDragCheckBox(event: any): void {
        if (event.args.checked) {
            this.myWindow.current!.setOptions({ draggable: true });
        }
        else {
            this.myWindow.current!.setOptions({ draggable: false });
        }
    }
}

export default App;
