import * as React from 'react';
import { useRef, useRef as useToggleRef } from 'react';
import JqxButton from 'jqwidgets-scripts/jqwidgets-react-tsx/jqxbuttons';
import JqxTooltip from 'jqwidgets-scripts/jqwidgets-react-tsx/jqxtooltip';

const App = () => {
    const myTooltip = useRef<JqxTooltip>(null);
    const image = useRef<HTMLImageElement>(null);
    const toggle = useToggleRef<boolean>(false);

    const click = () => {
        if (toggle.current) {
            myTooltip.current!.close();
            toggle.current = !toggle.current;
        } else {
            const imageElement = image.current!;
            const x = imageElement.offsetLeft - imageElement.width / 2 + 10;
            const y = imageElement.offsetTop + imageElement.height + 5;
            myTooltip.current!.open(x, y);
            toggle.current = !toggle.current;
        }
    };

    return (
        <div>
            <JqxButton theme={'material-purple'} width={100} height={20} onClick={click}>Toggle tooltip</JqxButton>
            <div style={{ marginLeft: 210, width: 'auto' }}>
                <JqxTooltip
                    theme={'material-purple'}
                    ref={myTooltip}
                    name={"moveTooltip"}
                    autoHide={false}
                    trigger={'none'}
                    closeOnClick={false}
                    content={"The Amazing Spider-man"}
                    position={"left"}
                >
                    <img ref={image} src='https://www.jqwidgets.com/react/images/The_Amazng_Spider_Man.jpeg' />
                </JqxTooltip>
            </div>
        </div>
    );
};

export default App;