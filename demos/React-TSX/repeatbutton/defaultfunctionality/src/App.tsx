import * as React from 'react';
import { useRef } from 'react';
import JqxProgressBar from 'jqwidgets-scripts/jqwidgets-react-tsx/jqxprogressbar';
import JqxRepeatButton from 'jqwidgets-scripts/jqwidgets-react-tsx/jqxrepeatbutton';

function App() {
    const myProgressBar = useRef<JqxProgressBar>(null);

    const repeatOnClick = () => {
        if (myProgressBar.current) {
            let currentValue = myProgressBar.current.val();
            currentValue += 1;
            myProgressBar.current.setOptions({ animationDuration: 0, value: currentValue });
        }
    };

    return (
        <div>
            <JqxRepeatButton
                theme="material-purple"
                style={{ marginLeft: '25px' }}
                onClick={repeatOnClick}
                width={180}
                delay={10}
            >
                Click Me!
            </JqxRepeatButton>
            <JqxProgressBar
                theme="material-purple"
                ref={myProgressBar}
                style={{ marginTop: '10px' }}
                width={250}
                height={25}
                max={30}
            />
        </div>
    );
}

export default App;