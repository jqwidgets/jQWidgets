import * as React from 'react';
import { useRef, useCallback, useMemo, useState } from 'react';
import './App.css';
import JqxKanban, { jqx, IKanbanProps } from 'jqwidgets-scripts/jqwidgets-react-tsx/jqxkanban';

const App = () => {
  const myKanban = useRef<JqxKanban>(null);
  const [itemIndex, setItemIndex] = useState(0);
  const theme = jqx.theme;

  const fields = useMemo(() => [
    { name: 'id', type: 'string' },
    { name: 'status', map: 'state', type: 'string' },
    { name: 'text', map: 'label', type: 'string' },
    { name: 'tags', type: 'string' },
    { name: 'color', map: 'hex', type: 'string' },
    { name: 'resourceId', type: 'number' }
  ], []);

  const source = useMemo(() => ({
    dataFields: fields,
    dataType: 'array',
    localData: [
      { id: '1161', state: 'new', label: 'Combine Orders', tags: 'orders, combine', hex: '#5dc3f0', resourceId: 3 },
      { id: '1645', state: 'work', label: 'Change Billing Address', tags: 'billing', hex: '#f19b60', resourceId: 1 },
      { id: '9213', state: 'new', label: 'One item added to the cart', tags: 'cart', hex: '#5dc3f0', resourceId: 3 },
      { id: '6546', state: 'done', label: 'Edit Item Price', tags: 'price, edit', hex: '#5dc3f0', resourceId: 4 },
      { id: '9034', state: 'new', label: 'Login 404 issue', tags: 'issue, login', hex: '#6bbd49' }
    ]
  }), [fields]);

  const resourcesAdapterFunc = useCallback(() => {
    const resourcesSource = {
      dataFields: [
        { name: 'id', type: 'number' },
        { name: 'name', type: 'string' },
        { name: 'image', type: 'string' },
        { name: 'common', type: 'boolean' }
      ],
      dataType: 'array',
      localData: [
        { id: 0, name: 'No name', image: 'https://www.jqwidgets.com/react/images/andrew.png', common: true },
        { id: 1, name: 'Andrew Fuller', image: 'https://www.jqwidgets.com/react/images/andrew.png' },
        { id: 2, name: 'Janet Leverling', image: 'https://www.jqwidgets.com/react/images/janet.png' },
        { id: 3, name: 'Steven Buchanan', image: 'https://www.jqwidgets.com/react/images/steven.png' },
        { id: 4, name: 'Nancy Davolio', image: 'https://www.jqwidgets.com/react/images/nancy.png' },
        { id: 5, name: 'Michael Buchanan', image: 'https://www.jqwidgets.com/react/images/Michael.png' },
        { id: 6, name: 'Margaret Buchanan', image: 'https://www.jqwidgets.com/react/images/margaret.png' },
        { id: 7, name: 'Robert Buchanan', image: 'https://www.jqwidgets.com/react/images/robert.png' },
        { id: 8, name: 'Laura Buchanan', image: 'https://www.jqwidgets.com/react/images/Laura.png' },
        { id: 9, name: 'Laura Buchanan', image: 'https://www.jqwidgets.com/react/images/Anne.png' }
      ]
    };
    return new jqx.dataAdapter(resourcesSource);
  }, []);

  const getIconClassName = useCallback((): string => {
    switch (theme) {
      case 'darkblue':
      case 'black':
      case 'shinyblack':
      case 'ui-le-frog':
      case 'metrodark':
      case 'orange':
      case 'highcontrast':
      case 'ui-sunny':
      case 'ui-darkness':
        return 'jqx-icon-plus-alt-white ';
    }
    return 'jqx-icon-plus-alt';
  }, [theme]);

  const columns = useMemo(() => [
    { text: 'Backlog', iconClassName: getIconClassName(), dataField: 'new', maxItems: 4 },
    { text: 'In Progress', iconClassName: getIconClassName(), dataField: 'work', maxItems: 2 },
    { text: 'Done', iconClassName: getIconClassName(), dataField: 'done', maxItems: 5 }
  ], [getIconClassName]);

  const columnRenderer = useCallback((element: any, collapsedElement: any, column: any): void => {
    if (element[0]) {
      const elementHeaderStatus = element[0].getElementsByClassName('jqx-kanban-column-header-status')[0];
      const collapsedElementHeaderStatus = collapsedElement[0].getElementsByClassName('jqx-kanban-column-header-status')[0];
      setTimeout(() => {
        const columnItems = myKanban.current!.getColumnItems(column.dataField).length;
        elementHeaderStatus.innerHTML = ` (${columnItems}/${column.maxItems})`;
        collapsedElementHeaderStatus.innerHTML = ` (${columnItems}/${column.maxItems})`;
      }, 100);
    }
  }, []);

  const template =
    '<div class="jqx-kanban-item" id="">'
    + '<div class="jqx-kanban-item-color-status"></div>'
    + '<div style="display: none;" class="jqx-kanban-item-avatar"></div>'
    + '<div class="jqx-icon jqx-icon-close jqx-kanban-item-template-content jqx-kanban-template-icon"></div>'
    + '<div class="jqx-kanban-item-text"></div>'
    + '<div style="display: none;" class="jqx-kanban-item-footer"></div>'
    + '</div>';

  const itemRenderer = useCallback((element: any, item: any, resource: any): void => {
    element[0].getElementsByClassName('jqx-kanban-item-color-status')[0].innerHTML = `<span style="line-height: 23px; margin-left: 5px;">${resource.name}</span>`;
    element[0].getElementsByClassName('jqx-kanban-item-text')[0].style.background = item.color;
  }, []);

  const onItemAttrClicked = useCallback((event: any): void => {
    const args = event.args;
    if (args.attribute === 'template') {
      myKanban.current!.removeItem(args.item.id);
    }
  }, []);

  const onColumnAttrClicked = useCallback((event: any): void => {
    const args = event.args;
    if (args.attribute === 'button') {
      args.cancelToggle = true;
      if (!args.column.collapsed) {
        const colors = ['#f19b60', '#5dc3f0', '#6bbd49', '#dddddd'];
        myKanban.current!.addItem({
          color: colors[Math.floor(Math.random() * 4)],
          resourceId: Math.floor(Math.random() * 4),
          status: args.column.dataField,
          tags: 'new task',
          text: `<input placeholder="(No Title)" style="width: 96%; margin-top:2px; border-radius: 3px;border-color: #ddd; line-height:20px; height: 20px;" class="jqx-input" id="newItem${itemIndex}" value= "" />`
        });
        const id = `newItem${itemIndex}`;
        setTimeout(() => {
          const myInput = document.getElementById(id) as HTMLInputElement | null;
          if (myInput) {
            myInput.addEventListener('mousedown', (eventEl: any) => {
              eventEl.stopPropagation();
            });
            myInput.addEventListener('mouseup', (eventEl: any) => {
              eventEl.stopPropagation();
            });
            myInput.addEventListener('keydown', (eventEl: any) => {
              if (eventEl.keyCode === 13) {
                const valueElement = `<span>${eventEl.target.value}</span>`;
                eventEl.target.insertAdjacentHTML('beforebegin', valueElement);
                eventEl.target.remove();
              }
            });
            myInput.focus();
          }
        }, 0);
        setItemIndex(idx => idx + 1);
      }
    }
  }, [itemIndex]);

  const dataAdapter = useMemo(() => new jqx.dataAdapter(source), [source]);
  const resources = useMemo(() => resourcesAdapterFunc(), [resourcesAdapterFunc]);

  return (
    <JqxKanban
      theme="material-purple"
      ref={myKanban}
      onItemAttrClicked={onItemAttrClicked}
      onColumnAttrClicked={onColumnAttrClicked}
      // @ts-ignore
      width="100%"
      template={template}
      source={