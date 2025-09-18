import React, { useRef, useState, useCallback } from 'react'
import * as ReactDOM from 'react-dom'
import './App.css'
import JqxSplitter from 'jqwidgets-scripts/jqwidgets-react-tsx/jqxsplitter'
import JqxTabs, { ITabsProps } from 'jqwidgets-scripts/jqwidgets-react-tsx/jqxtabs'

const App = () => {
  const splitter = useRef<JqxSplitter>(null)
  const splitterContainer = useRef<HTMLDivElement>(null)
  const splitter2Container = useRef<HTMLDivElement>(null)

  const initTabContent = useCallback((tab: number) => {
    if (tab === 0) {
      const splitterElement = (
        <JqxSplitter
          theme="material-purple"
          ref={splitter}
          height="100%"
          width="100%"
          panels={[{ size: '50%' }]}
        >
          <div>Content 1.1</div>
          <div>Content 1.2</div>
        </JqxSplitter>
      )
      if (splitterContainer.current) {
        ReactDOM.render(splitterElement, splitterContainer.current)
      }
    } else {
      const splitter2Element = (
        <JqxSplitter
          theme="material-purple"
          ref={splitter}
          height="100%"
          width="100%"
          panels={[{ size: '50%' }]}
          orientation="horizontal"
        >
          <div>Content 2.1</div>
          <div>Content 2.2</div>
        </JqxSplitter>
      )
      if (splitter2Container.current) {
        ReactDOM.render(splitter2Element, splitter2Container.current)
      }
    }
  }, [])

  const tabsProps: ITabsProps = {
    initTabContent,
  }

  return (
    <JqxTabs
      theme="material-purple"
      className="jqx-hideborder jqx-hidescrollbars"
      width={850}
      height={850}
      {...tabsProps}
    >
      <ul>
        <li style={{ marginLeft: 30 }}>Tab 1</li>
        <li>Tab 2</li>
      </ul>
      <div className="jqx-hidescrollbars jqx-hideborder" ref={splitterContainer} />
      <div className="jqx-hidescrollbars jqx-hideborder" ref={splitter2Container} />
    </JqxTabs>
  )
}

export default App