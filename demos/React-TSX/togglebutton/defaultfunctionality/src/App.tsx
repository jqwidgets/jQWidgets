import * as React from 'react';
import { useRef, useState } from 'react';
import JqxToggleButton, { IToggleButtonProps } from 'jqwidgets-scripts/jqwidgets-react-tsx/jqxtogglebutton';

function App() {
    const myToggleButton = useRef<JqxToggleButton>(null);
    const [toggled, setToggled] = useState(true);
    const [value, setValue] = useState("Toggled On");
    const height = 30;
    const width = 200;

    const click = (event: any) => {
        const isToggled = myToggleButton.current!.getOptions("toggled");
        if (isToggled) {
            setToggled(true);
            setValue("Toggled On");
        } else {
            setToggled(false);
            setValue("Toggled Off");
        }
    };

    return (
        <div id="jqxWidget">
            <JqxToggleButton
                theme="material-purple"
                ref={myToggleButton}
                className="togglebutton"
                onClick={click}
                height={height}
                value={value}
                width={width}
                toggled={toggled}
            />
            <JqxToggleButton
                theme="material-purple"
                className="togglebutton"
                height={height}
                width={width}
                disabled
                value="Disabled"
            />
        </div>
    );
}

export default App;