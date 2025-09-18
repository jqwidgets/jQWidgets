import * as React from 'react';
import JqxButton from 'jqwidgets-scripts/jqwidgets-react-tsx/jqxbuttons';
import JqxNotification from 'jqwidgets-scripts/jqwidgets-react-tsx/jqxnotification';

const quotes = [
    "I'm gonna make him an offer he can't refuse.",
    "Toto, I've got a feeling we're not in Kansas anymore.",
    "You talkin' to me?",
    "Bond. James Bond.",
    "I'll be back.",
    "Round up the usual suspects.",
    "I'm the king of the world!",
    "A martini. Shaken, not stirred.",
    "May the Force be with you.",
    "Well, nobody's perfect."
];

const App = () => {
    const myNotification = React.useRef<JqxNotification>(null);

    const onClick = React.useCallback(() => {
        const content = document.getElementById('content');
        if (content) {
            const quote = quotes[Math.floor(Math.random() * quotes.length)];
            content.innerHTML = quote;
        }
        myNotification.current?.open();
    }, []);

    return (
        <div>
            <JqxNotification
                theme="material-purple"
                ref={myNotification}
                width="100%"
                autoClose={false}
                appendContainer="#container"
                opacity={0.9}
                template="info"
            >
                <div id="content" />
            </JqxNotification>

            <JqxButton theme="material-purple" onClick={onClick} width={115}>
                Open notification
            </JqxButton>

            <div
                id="container"
                style={{
                    width: '300px',
                    height: '400px',
                    marginTop: '15px',
                    backgroundColor: '#F2F2F2',
                    border: '1px dashed #AAAAAA',
                    overflow: 'auto'
                }}
            />
        </div>
    );
};

export default App;