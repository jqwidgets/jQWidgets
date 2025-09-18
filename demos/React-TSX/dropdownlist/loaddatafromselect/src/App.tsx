import React, { useEffect, useRef, useState } from 'react';
import JqxDropDownList from 'jqwidgets-scripts/jqwidgets-react-tsx/jqxdropdownlist';

const options = [
  'Affogato',
  'Americano',
  'Bicerin',
  'Breve',
  'Café Bombón',
  'Caffé Corretto',
  'Café Crema',
  'Caffé Latte',
  'Caffé macchiato',
  'Café mélange',
  'Coffee milk',
  'Cafe mocha',
  'Cappuccino',
  'Carajillo',
  'Cuban espresso',
  'Espresso',
  'The Flat White',
  'Frappuccino',
  'Galao',
  'Greek frappé coffee',
  'Iced Coffee﻿',
  'Indian filter coffee',
  'Instant coffee',
  'Irish coffee',
  'Liqueur coffee'
];

const App = () => {
  const [selectedIndex, setSelectedIndex] = useState(0);
  const myDropDownList = useRef<any>(null);
  const mySelect = useRef<HTMLSelectElement>(null);
  const updating = useRef(false);

  useEffect(() => {
    if (myDropDownList.current) {
      myDropDownList.current.loadFromSelect('select');
    }
  }, []);

  const listOnSelect = (event: any) => {
    if (event.args && !updating.current) {
      const index = event.args.item.index;
      if (mySelect.current) {
        mySelect.current.selectedIndex = index;
      }
    }
  };

  const onSelectChange = () => {
    updating.current = true;
    const index = mySelect.current!.selectedIndex;
    setSelectedIndex(index);
    setTimeout(() => {
      if (myDropDownList.current) {
        myDropDownList.current.ensureVisible(index);
      }
      updating.current = false;
    }, 0);
  };

  return (
    <div>
      <JqxDropDownList
        theme="material-purple"
        ref={myDropDownList}
        style={{ float: 'left' }}
        onSelect={listOnSelect}
        width={200}
        height={30}
        selectedIndex={selectedIndex}
      />
      <div style={{ float: 'left' }}>
        <select
          ref={mySelect}
          id="select"
          onChange={onSelectChange}
          style={{ height: '25px', width: '200px', marginLeft: '30px' }}
        >
          {options.map(option => (
            <option key={option}>{option}</option>
          ))}
        </select>
      </div>
    </div>
  );
};

export default App;