import * as React from 'react'
import * as ReactDOM from 'react-dom'
import JqxButton from 'jqwidgets-scripts/jqwidgets-react-tsx/jqxbuttons'
import JqxEditor from 'jqwidgets-scripts/jqwidgets-react-tsx/jqxeditor'
import JqxWindow from 'jqwidgets-scripts/jqwidgets-react-tsx/jqxwindow'

function App() {
  const myWindow = React.useRef<JqxWindow>(null)

  const btnOnClick = React.useCallback(() => {
    myWindow.current!.open()
    ReactDOM.render(
      <JqxEditor
        theme={'material-purple'}
        width={'100%'}
        height={'99%'}
        tools={'bold italic underline font size'}
      />,
      document.querySelector('#myEditor')
    )
  }, [])

  return (
    <div>
      <JqxButton theme="material-purple" onClick={btnOnClick} width={100}>
        Open Editor
      </JqxButton>
      <JqxWindow
        theme="material-purple"
        ref={myWindow}
        width={350}
        height={400}
        maxWidth={800}
        autoOpen={false}
        resizable={false}
        position="top, left"
      >
        <div>jqxEditor</div>
        <div id="myEditor" />
      </JqxWindow>
    </div>
  )
}

export default App