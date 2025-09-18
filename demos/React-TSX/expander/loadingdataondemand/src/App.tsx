import React, { useEffect, useRef } from 'react';
import JqxExpander from 'jqwidgets-scripts/jqwidgets-react-tsx/jqxexpander';

const App = () => {
    const myExpander = useRef<JqxExpander>(null);

    useEffect(() => {
        fetch('jqxexpanderxmldata.xml')
            .then(response => response.text())
            .then(data => {
                const content = document.createElement('div');
                content.innerHTML = data;

                const LIArray = content.getElementsByTagName('li');
                const container = document.createElement('div');
                const ul = document.createElement('ul');

                Array.prototype.forEach.call(LIArray, (liItem: HTMLLIElement) => {
                    const li = document.createElement('li');
                    li.innerText = liItem.innerHTML;
                    ul.appendChild(li);
                });

                container.appendChild(ul);

                myExpander.current?.setContent(container.outerHTML);
                myExpander.current?.setHeaderContent(content.getElementsByTagName('header')[0].innerHTML);
            });
    }, []);

    return (
        <JqxExpander theme="material-purple" ref={myExpander} width={350} height={350}>
            <div>
                Loading Header...
            </div>
            <div>
                Loading Content...
            </div>
        </JqxExpander>
    );
};

export default App;