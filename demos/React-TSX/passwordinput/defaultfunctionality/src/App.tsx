import * as React from 'react';
import JqxPasswordInput from 'jqwidgets-scripts/jqwidgets-react-tsx/jqxpasswordinput';

function App() {
  return (
    <JqxPasswordInput theme="material-purple" width={200} height={25} placeHolder="Enter password" />
  );
}

export default App;