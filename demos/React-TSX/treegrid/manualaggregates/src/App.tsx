import React, { useRef, useMemo } from 'react';
import JqxTreeGrid, { jqx } from 'jqwidgets-scripts/jqwidgets-react-tsx/jqxtreegrid';

const App = () => {
  const myTreeGrid = useRef<JqxTreeGrid>(null);

  const { columns, source, ready } = useMemo(() => {
    const data: any[] = [
      {
        budget: "1230000",
        children: [
          {
            id: "2",
            name: "Finance Division",
            budget: "423000",
            location: "San Antonio",
            children: [
              {
                id: "3",
                name: "Accounting Department",
                budget: "113000",
                location: "San Antonio"
              },
              {
                id: "4",
                name: "Investment Department",
                budget: "310000",
                location: "San Antonio",
                children: [
                  {
                    id: "5",
                    name: "Banking Office",
                    budget: "240000",
                    location: "San Antonio"
                  },
                  {
                    id: "6",
                    name: "Bonds Office",
                    budget: "70000",
                    location: "San Antonio"
                  }
                ]
              }
            ]
          },
          {
            id: "7",
            name: "Operations Division",
            budget: "600000",
            location: "Miami",
            children: [
              {
                id: "8",
                name: "Manufacturing Department",
                budget: "300000",
                location: "Miami"
              },
              {
                id: "9",
                name: "Public Relations Department",
                budget: "200000",
                location: "Miami"
              },
              {
                id: "10",
                name: "Sales Department",
                budget: "100000",
                location: "Miami"
              }
            ]
          },
          {
            id: "11",
            name: "Research Division",
            budget: "200000",
            location: "Boston"
          }
        ],
        id: "1",
        location: "Las Vegas",
        name: "Corporate Headquarters"
      }
    ];

    const source: any = {
      dataFields: [
        { name: 'name', type: 'string' },
        { name: 'budget', type: 'number' },
        { name: 'id', type: 'number' },
        { name: 'children', type: 'array' },
        { name: 'location', type: 'string' }
      ],
      dataType: 'json',
      hierarchy: {
        root: 'children'
      },
      id: 'id',
      localData: data
    };

    const dataAdapter = new jqx.dataAdapter(source);

    const columns = [
      { align: 'left', dataField: 'name', text: 'Name', width: 300 },
      { align: 'left', cellsAlign: 'left', dataField: 'location', text: 'Location', width: 250 },
      {
        aggregates: [
          {
            Total: (
              aggregatedValue: any,
              currentValue: any,
              column: any,
              record: any,
              aggregateLevel: any
            ) => {
              if (record.checked && record.level === aggregateLevel) {
                return aggregatedValue + currentValue;
              } else {
                return aggregatedValue;
              }
            }
          }
        ],
        aggregatesRenderer: (
          aggregatesText: string,
          column: any,
          element: any,
          aggregates: any,
          type: any
        ) => {
          let renderString = '';
          if (type === 'aggregates') {
            renderString = '<div style="margin: 4px; float: right;  height: 100%;">';
          } else {
            renderString = '<div style="float: right;  height: 100%;">';
          }
          const euro = dataAdapter.formatNumber(0.74 * aggregates.Total, 'f2');
          const usd = dataAdapter.formatNumber(aggregates.Total, 'f2');
          renderString +=
            "<table><tr><td rowspan='2'><strong>Total: </strong></td><td align='right'>" +
            usd +
            " USD</td><tr><td align='right'>" +
            euro +
            " EUR</td></tr></table>";
          return renderString;
        },
        align: 'center',
        cellsAlign: 'center',
        cellsFormat: 'c2',
        dataField: 'budget',
        text: 'Budget'
      }
    ];

    const ready = () => {
      setTimeout(() => {
        myTreeGrid.current?.expandRow(1);
        myTreeGrid.current?.expandRow(2);
      });
    };

    return { columns, source: dataAdapter, ready };
  }, []);

  return (
    <JqxTreeGrid
      theme="material-purple"
      ref={myTreeGrid}
      // @ts-ignore
      width="100%"
      source={source}
      showSubAggregates={true}
      columnsResize={true}
      aggregatesHeight={55}
      checkboxes={true}
      columns={columns}
      ready={ready}
    />
  );
};

export default App;