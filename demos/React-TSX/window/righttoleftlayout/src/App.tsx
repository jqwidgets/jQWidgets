import * as React from 'react'
import './App.css'
import JqxButton from 'jqwidgets-scripts/jqwidgets-react-tsx/jqxbuttons'
import JqxWindow from 'jqwidgets-scripts/jqwidgets-react-tsx/jqxwindow'

function App() {
  const myWindow = React.useRef<JqxWindow>(null)
  const jqxWidget = React.useRef<HTMLDivElement>(null)

  React.useEffect(() => {
    const offsetLeft = jqxWidget.current?.offsetLeft ?? 0
    const offsetTop = jqxWidget.current?.offsetTop ?? 0
    myWindow.current?.setOptions({
      position: { x: offsetLeft + 50, y: offsetTop + 50 },
    })
  }, [])

  const showWindowButtonClick = () => {
    myWindow.current?.open()
  }

  return (
    <div ref={jqxWidget}>
      <JqxButton theme="material-purple" onClick={showWindowButtonClick} width={100}>
        Show
      </JqxButton>
      <JqxWindow
        theme="material-purple"
        ref={myWindow}
        width={500}
        height={400}
        rtl={true}
        resizable={false}
        position={{ x: 90, y: 220 }}
      >
        <div>About 30 St Mary Axe</div>
        <div>
          <img src="https://www.jqwidgets.com/react/images/building_big.jpg" alt="" className="big-image" />
          <div>
            <h3 style={{ textAlign: "right", direction: "rtl" }}>30 St Mary Axe</h3>
            <p className="important-text">
              the Swiss Re Building (colloquially referred to as the Gherkin), is a skyscraper
              in London's main financial district, the City of London, completed in December 2003
              and opened at the end of May 2004. With 40 floors, the tower is 180 metres (591
              ft) tall, and stands on the former site of the Baltic Exchange building, which was
              severely damaged on 10 April 1992 by the explosion of a bomb placed by the Provisional
              IRA.
            </p>
            <div className="more-text">
              The building is on the former site of the Baltic Exchange building, the headquarters
              of a global marketplace for ship sales and shipping information. On 10 April 1992
              the Provisional IRA detonated a bomb close to the Exchange, severely damaging the
              historic Exchange building and neighbouring structures. The UK government's statutory
              adviser on the historic environment, English Heritage, and the City of London governing
              body, the City of London Corporation, were keen that any redevelopment must restore
              the building's old façade onto St Mary Axe. The Exchange Hall was a celebrated fixture
              of the ship trading company.
            </div>
          </div>
        </div>
      </JqxWindow>
    </div>
  )
}

export default App