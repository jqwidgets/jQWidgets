import React, { useRef, useEffect, useState, useCallback } from 'react'
import JqxListBox, { IListBoxProps } from 'jqwidgets-scripts/jqwidgets-react-tsx/jqxlistbox'

const App = () => {
  const myListBox = useRef<JqxListBox>(null)
  const events = useRef<HTMLDivElement>(null)
  const checkedItems = useRef<HTMLDivElement>(null)
  const [source] = useState<string[]>([
    'Affogato',
    'Americano',
    'Bicerin',
    'Breve',
    'Café Bombón',
    'Café au lait',
    'Caffé Corretto',
    'Café Crema',
    'Caffé Latte',
    'Caffé macchiato',
    'Café mélange',
    'Coffee milk',
    'Cafe mocha',
    'Cappuccino',
    'Carajillo',
    'Cortado',
    'Cuban espresso',
    'Espresso',
    'Eiskaffee',
    'The Flat White',
    'Frappuccino',
    'Galao',
    'Greek frappé coffee',
    'Iced Coffee﻿',
    'Indian filter coffee',
    'Instant coffee',
    'Irish coffee',
    'Liqueur coffee'
  ])

  useEffect(() => {
    if (myListBox.current) {
      myListBox.current.checkIndex(0)
      myListBox.current.checkIndex(1)
      myListBox.current.checkIndex(2)
      myListBox.current.checkIndex(5)
    }
  }, [])

  const onCheckChange = useCallback((event: any) => {
    const eventsContainer = events.current
    const checkedItemsContainer = checkedItems.current

    if (!eventsContainer || !checkedItemsContainer || !myListBox.current)
      return

    if (event.args.checked) {
      eventsContainer.innerHTML = 'Checked: ' + event.args.label
    } else {
      eventsContainer.innerHTML = 'Unchecked: ' + event.args.label
    }

    const items = myListBox.current.getCheckedItems()
    let checkedItemsStr = ''
    for (let i = 0; i < items.length; i++) {
      if (i < items.length - 1) {
        checkedItemsStr += items[i].label + ', '
      } else {
        checkedItemsStr += items[i].label
      }
    }

    checkedItemsContainer.innerHTML = checkedItemsStr
  }, [])

  return (
    <div>
      <JqxListBox
        theme="material-purple"
        ref={myListBox}
        onCheckChange={onCheckChange}
        width={200}
        height={250}
        source={source}
        checkboxes={true}
      />
      <div ref={events} style={{ fontSize: '13px', fontFamily: 'Verdana', marginTop: '20px' }} />
      <div ref={checkedItems} style={{ fontSize: '13px', fontFamily: 'Verdana', marginTop: '20px' }} />
    </div>
  )
}

export default App