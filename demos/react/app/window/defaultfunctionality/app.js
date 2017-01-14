import React from 'react';
import ReactDOM from 'react-dom';

import JqxWindow from '../../../jqwidgets-react/react_jqxwindow.js';
import JqxTabs from '../../../jqwidgets-react/react_jqxtabs.js';
import JqxCheckBox from '../../../jqwidgets-react/react_jqxcheckbox.js';
import JqxButton from '../../../jqwidgets-react/react_jqxbuttons.js';

class App extends React.Component {
    componentDidMount() {
        this.refs.jqxWindow.focus();

        this.refs.showWindowButton.on('click', (event) => {
            this.refs.jqxWindow.open();
        });

        this.refs.hideWindowButton.on('click', (event) => {
            this.refs.jqxWindow.close();
        });

        this.refs.resizeCheckBox.on('change', (event) => {
            if (event.args.checked) {
                this.refs.jqxWindow.resizable(true);
            } else {
                this.refs.jqxWindow.resizable(false);
            }
        });

        this.refs.dragCheckBox.on('change', (event) => {
            if (event.args.checked) {
                this.refs.jqxWindow.draggable(true);
            } else {
                this.refs.jqxWindow.draggable(false);
            }
        });
    }
    render () {
        let tabHTML =`
          <ul style="margin-left: 30px;">
              <li>Avatar</li>
              <li>End Game</li>
              <li>Twilight</li>
              <li>Unstoppable</li>
              <li>Priest</li>
          </ul>
          <div>
              <img src="../../../images/avatar.png" style="float: left; margin: 10px;" alt="" />
              Avatar is a 2009 American[6][7] epic science fiction film written and directed by
              James Cameron, and starring Sam Worthington, Zoe Saldana, Stephen Lang, Michelle
              Rodriguez, Joel David Moore, Giovanni Ribisi and Sigourney Weaver. The film is set
              in the mid-22 century, when humans are mining a precious mineral called unobtanium
              on Pandora , a lush habitable moon of a gas giant in the Alpha Centauri star system.
              The expansion of the mining colony threatens the continued existence of a local
              tribe of Na vi—a humanoid species indigenous to Pandora. The film&#39;s title refers
              to the genetically engineered Na vi-human hybrid bodies used by a team of researchers
              to interact with the natives of Pandora.
          </div>
          <div>
              <img src="../../../images/endgame.png" style="float: left; margin: 10px;" alt="" />
              End Game is a 2006 action/thriller film, written and directed by Andy Cheng. The
              film stars Cuba Gooding, Jr. as Secret Service agent Alex Thomas, who is shot in
              the hand, while unsuccessfully trying to protect the President (played by Jack Scalia)
              from an assassin&#39;s bullet. Later, with the help of a persistent newspaper reporter
              named Kate Crawford (played by Angie Harmon), he uncovers a vast conspiracy behind
              what initially appeared to be a lone gunman. James Woods, Burt Reynolds, and Anne
              Archer co–star in this film that was originally set to be shown in cinemas by MGM
              in 2005, but was delayed by the takeover from Sony and eventually sent direct to
              DVD.
          </div>
          <div>
              <img src="../../../images/twilight.png" style="float: left; margin: 10px;" alt="" />
              The project was in development for approximately three years at Paramount Pictures,
              during which time a screen adaptation that differed significantly from the novel
              was written. Summit Entertainment acquired the rights to the novel after three years
              of the project&#39;s stagnant development. Melissa Rosenberg wrote a new adaptation
              of the novel shortly before the 2007–2008 Writers Guild of America strike and sought
              to be faithful to the novel&#39;s storyline. Principal photography took 44 days, and
              completed on May 2, 2008; the film was primarily shot in Oregon
          </div>
          <div>
              <img src="../../../images/unstoppable.png" style="float: left; margin: 10px;" alt="" />
              Meanwhile, in a rail yard within the northern town of Fuller, two AWVR hostlers,
              Dewey (Ethan Suplee) and Gilleece (T.J. Miller), are ordered by Fuller operations
              dispatcher Bunny (Kevin Chapman) to move a freight train led by locomotive #777
              (nicknamed "Triple Seven") off its current track to clear the track for an excursion
              train carrying schoolchildren. Dewey attempts to take shortcuts, instructing Gilleece
              to leave the hoses for the air brakes disconnected for the short trip. Dewey later
              leaves the moving cab to throw a misaligned rail switch along the train&#39;s path,
              but is unable to climb back on, as the train&#39;s throttle jumps from idle, to full
              power. He is forced to report the train as a "coaster" to Fuller yardmaster Connie
              Hooper (Rosario Dawson)...
          </div>
          <div>
              <img src="../../../images/priest.png" style="float: left; margin: 10px;" alt="" />
              Priest is a 2011 American post-apocalyptic sci-fi western and supernatural action
              film starring Paul Bettany as the title character. The film, directed by Scott Stewart,
              is based on the Korean comic of the same name. In an alternate world, humanity and
              vampires have warred for centuries. After the last Vampire War, the veteran Warrior
              Priest (Bettany) lives in obscurity with other humans inside one of the Church&#39;s
              walled cities. When the Priest&#39;s niece (Lily Collins) is kidnapped by vampires,
              the Priest breaks his vows to hunt them down. He is accompanied by the niece&#39;s boyfriend
              (Cam Gigandet), who is a wasteland sheriff, and a former Warrior Priestess (Maggie
              Q).
          </div>
        `;
        return (
            <div>
                <div>
                    <JqxButton ref='showWindowButton' width={70} value='Open'/>
                    <JqxButton ref='hideWindowButton' width={70} value='Close' style={{ marginTop: 2 }} />
                </div>
                <div style={{ marginTop: 10 }}>
                    <JqxCheckBox ref='resizeCheckBox' width={185} checked={true} value='Resizable'/>
                    <JqxCheckBox ref='dragCheckBox'   width={185} checked={true} value='Enable drag' style={{ marginTop: 2 }} />
                </div>
                <div style={{ width: '100%', height: 650, marginTop: 50 }}>
                    <JqxWindow ref='jqxWindow'
                        width={500} height={300} position={{ x: 60, y: 175 }}
                        minWidth={200} minHeight={200} maxWidth={700}
                        maxHeight={400} showCollapseButton={true}
                    >
                        <div >
                            <span>
                                <img src="../../../images/movie.png" alt="" style={{ marginRight: 15 }}/>Movies
                            </span>
                        </div>
                        <div style={{ overflow: 'hidden' }}>
                            <JqxTabs template={tabHTML} width={'100%'} height={'100%'}/>
                        </div>
                    </JqxWindow>
                </div>
            </div>
        )
    }
}

ReactDOM.render(<App />, document.getElementById('app'));
