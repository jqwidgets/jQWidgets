import * as React from 'react';
import * as ReactDOM from "react-dom";
import JqxDropDownList from 'jqwidgets-scripts/jqwidgets-react-tsx/jqxdropdownlist';
import JqxSlider from 'jqwidgets-scripts/jqwidgets-react-tsx/jqxslider';
import JqxTreeGrid, { ITreeGridProps, jqx } from 'jqwidgets-scripts/jqwidgets-react-tsx/jqxtreegrid';

const App = () => {
  const myTreeGrid = React.useRef<JqxTreeGrid>(null);
  const dropdownlist = React.useRef<JqxDropDownList>(null);
  const slider = React.useRef<JqxSlider>(null);

  const data: any[] = [
    {
      budget: '1230000',
      children: [
        {
          budget: '423000',
          children: [
            {
              budget: '113000',
              id: '3',
              location: 'San Antonio',
              name: 'Accounting Department',
            },
            {
              budget: '310000',
              children: [
                { budget: '240000', id: '5', location: 'San Antonio', name: 'Banking Office' },
                { budget: '70000', id: '6', location: 'San Antonio', name: 'Bonds Office' },
              ],
              id: '4',
              location: 'San Antonio',
              name: 'Investment Department',
            },
          ],
          id: '2',
          location: 'San Antonio',
          name: 'Finance Division',
        },
        {
          budget: '600000',
          children: [
            { budget: '300000', id: '8', location: 'Miami', name: 'Manufacturing Department' },
            { budget: '200000', id: '9', location: 'Miami', name: 'Public Relations Department' },
            { budget: '100000', id: '10', location: 'Miami', name: 'Sales Department' },
          ],
          id: '7',
          location: 'Miami',
          name: 'Operations Division',
        },
        { budget: '200000', id: '11', location: 'Boston', name: 'Research Division' },
      ],
      id: '1',
      location: 'Las Vegas',
      name: 'Corporate Headquarters',
    },
  ];

  const source: any = {
    dataFields: [
      { name: 'name', type: 'string' },
      { name: 'budget', type: 'number' },
      { name: 'id', type: 'number' },
      { name: 'children', type: 'array' },
      { name: 'location', type: 'string' },
    ],
    dataType: 'json',
    hierarchy: {
      root: 'children',
    },
    id: 'id',
    localData: data,
  };

  // Instantiated once, reference for columns and source
  const dataAdapter = React.useMemo(() => new jqx.dataAdapter(source), []);

  // Memory stable for columns + ready function
  const columns = React.useMemo(
    () => [
      { editable: false, dataField: 'id', text: 'ID', width: 150 },
      {
        columnType: 'template',
        createEditor: (row: any, cellvalue: any, editor: any, cellText: any, width: any, height: any) => {
          const sourceName: string[] = [
            'Corporate Headquarters',
            'Finance Division',
            'Accounting Department',
            'Investment Department',
            'Banking Office',
            'Bonds Office',
            'Operations Division',
            'Manufacturing Department',
            'Public Relations Department',
            'Sales Department',
            'Research Division',
          ];
          const wrapperDropdownlist = document.createElement('div');
          wrapperDropdownlist.style.cssText = 'overflow: hidden; position: relative; height: 100%; width: 100%;';
          editor[0].appendChild(wrapperDropdownlist);
          const dropdownlistElement = (
            <JqxDropDownList
              theme="material-purple"
              ref={dropdownlist}
              autoDropDownHeight={true}
              height={'100%'}
              source={sourceName}
              width={'100%'}
            />
          );
          ReactDOM.render(dropdownlistElement, wrapperDropdownlist);
        },
        dataField: 'name',
        getEditorValue: (row: any, cellvalue: any, editor: any) => {
          return dropdownlist.current!.val();
        },
        initEditor: (row: any, cellvalue: any, editor: any, cellText: any, width: any, height: any) => {
          dropdownlist.current!.selectItem(cellvalue);
        },
        text: 'Name',
        width: 250,
      },
      {
        align: "right",
        cellsAlign: "right",
        cellsFormat: "c2",
        columnType: 'template',
        createEditor: (row: any, cellvalue: any, editor: any, cellText: any, width: any, height: any) => {
          const wrapperSlider = document.createElement('div');
          editor[0].appendChild(wrapperSlider);
          const tooltipFormatFunction = (value: any) => {
            return jqx.formatNumber(value, 'c2');
          };
          const sliderElement = (
            <JqxSlider
              theme="material-purple"
              ref={slider}
              height={height}
              max={1250000}
              min={0}
              showTicks={false}
              tooltip={true}
              tooltipFormatFunction={tooltipFormatFunction}
              width={width}
            />
          );
          ReactDOM.render(sliderElement, wrapperSlider);
        },
        dataField: 'budget',
        getEditorValue: (row: any, cellvalue: any, editor: any) => {
          return slider.current!.getValue();
        },
        initEditor: (row: any, cellvalue: any, editor: any, cellText: any, width: any, height: any) => {
          let value = parseInt(cellvalue, 10);
          if (isNaN(value)) {
            value = 0;
          }
          slider.current!.setValue(value);
        },
        text: 'Budget',
        width: 150,
      },
      { dataField: 'location', text: 'Location' },
    ],
    [dropdownlist, slider]
  );

  const ready = React.useCallback(() => {
    setTimeout(() => {
      myTreeGrid.current?.expandRow(1);
      myTreeGrid.current?.expandRow(2);
      myTreeGrid.current?.expandRow(7);
    });
  }, []);

  return (
    <JqxTreeGrid
      theme="material-purple"
      ref={myTreeGrid}
      width="100%"
      source={dataAdapter}
      altRows={true}
      autoRowHeight={true}
      editable={true}
      columns={columns}
      ready={ready}
    />
  );
};

export default App;
