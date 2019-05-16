import * as React from 'react';
 

import JqxButtonGroup, { IButtonGroupProps } from 'jqwidgets-scripts/jqwidgets-react-tsx/jqxbuttongroup';

class App extends React.PureComponent<{}, IButtonGroupProps> {

    constructor(props: {}) {
        super(props);
    };

    public render() {
        return (
            <div>
                <div>Default</div>
                <JqxButtonGroup theme={'material-purple'} mode={'checkbox'}>
                    <button style={{ padding: '4px 16px' }} value='Left' />
                    <button style={{ padding: '4px 16px' }} value='Center' />
                    <button style={{ padding: '4px 16px' }} value='Right' />
                </JqxButtonGroup>
                <br />
                <div>Primary</div>
                <JqxButtonGroup theme={'material-purple'} mode={'checkbox'} template={'primary'}>
                    <button style={{ padding: '4px 16px' }} value='Left' />
                    <button style={{ padding: '4px 16px' }} value='Center' />
                    <button style={{ padding: '4px 16px' }} value='Right' />
                </JqxButtonGroup>
                <br />
                <div>Success</div>
                <JqxButtonGroup theme={'material-purple'} mode={'checkbox'} template={'success'}>
                    <button style={{ padding: '4px 16px' }} value='Left' />
                    <button style={{ padding: '4px 16px' }} value='Center' />
                    <button style={{ padding: '4px 16px' }} value='Right' />
                </JqxButtonGroup>
                <br />
                <div>Info</div>
                <JqxButtonGroup theme={'material-purple'} mode={'checkbox'} template={'info'}>
                    <button style={{ padding: '4px 16px' }} value='Left' />
                    <button style={{ padding: '4px 16px' }} value='Center' />
                    <button style={{ padding: '4px 16px' }} value='Right' />
                </JqxButtonGroup>
                <br />
                <div>Warning</div>
                <JqxButtonGroup theme={'material-purple'} mode={'checkbox'} template={'warning'}>
                    <button style={{ padding: '4px 16px' }} value='Left' />
                    <button style={{ padding: '4px 16px' }} value='Center' />
                    <button style={{ padding: '4px 16px' }} value='Right' />
                </JqxButtonGroup>
                <br />
                <div>Danger</div>
                <JqxButtonGroup theme={'material-purple'} mode={'checkbox'} template={'danger'}>
                    <button style={{ padding: '4px 16px' }} value='Left' />
                    <button style={{ padding: '4px 16px' }} value='Center' />
                    <button style={{ padding: '4px 16px' }} value='Right' />
                </JqxButtonGroup>
            </div>
        );
    }
}

export default App;