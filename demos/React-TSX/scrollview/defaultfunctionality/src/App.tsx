import * as React from 'react';
import JqxButton from 'jqwidgets-scripts/jqwidgets-react-tsx/jqxbuttons';
import JqxScrollView from 'jqwidgets-scripts/jqwidgets-react-tsx/jqxscrollview';

const App = () => {
    const myScrollView = React.useRef<JqxScrollView>(null);

    const onStartClicked = () => {
        myScrollView.current?.setOptions({ slideShow: true });
    };

    const onStopClicked = () => {
        myScrollView.current?.setOptions({ slideShow: false });
    };

    return (
        <div>
            <JqxScrollView
                theme={'material-purple'}
                ref={myScrollView}
                width={600}
                height={450}
                buttonsOffset={[0, 0]}
            >
                <div>
                    <div className="photo" style={{ backgroundImage: "url(./assets/images/imageNature1.jpg)" }} />
                </div>
                <div>
                    <div className="photo" style={{ backgroundImage: "url(./assets/images/imageNature2.jpg)" }} />
                </div>
                <div>
                    <div className="photo" style={{ backgroundImage: "url(./assets/images/imageNature3.jpg)" }} />
                </div>
                <div>
                    <div className="photo" style={{ backgroundImage: "url(./assets/images/imageNature4.jpg)" }} />
                </div>
            </JqxScrollView>
            <div id="buttons">
                <JqxButton
                    theme={'material-purple'}
                    onClick={onStartClicked}
                    width={120}
                >
                    Start Slideshow
                </JqxButton>
                <JqxButton
                    theme={'material-purple'}
                    onClick={onStopClicked}
                    width={120}
                >
                    Stop Slideshow
                </JqxButton>
            </div>
        </div>
    );
};

export default App;