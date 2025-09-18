import * as React from 'react';
import { useRef, useCallback } from 'react';
import JqxTree from 'jqwidgets-scripts/jqwidgets-react-tsx/jqxtree';

const App = () => {
  const treeA = useRef<JqxTree>(null);
  const treeB = useRef<JqxTree>(null);
  const logStart = useRef<HTMLDivElement>(null);
  const logEnd = useRef<HTMLDivElement>(null);
  const textarea = useRef<HTMLTextAreaElement>(null);

  const dragStart = useCallback((item: any): boolean => {
    if (item.label === 'Community') {
      return false;
    }
    return true;
  }, []);

  const dragEnd = useCallback((item: any): boolean => {
    if (item.label === 'Forum') {
      return false;
    }
    return true;
  }, []);

  const onDragStart = useCallback((event: any): void => {
    if (logStart.current) logStart.current.innerText = 'Drag Start: ' + event.args.label;
    if (logEnd.current) logEnd.current.innerText = '';
  }, []);

  const onDragEnd = useCallback((event: any): void => {
    if (logEnd.current) logEnd.current.innerText = 'Drag End';
    const args = event.args;
    if (args && args.label && textarea.current) {
      let x = args.originalEvent?.pageX;
      let y = args.originalEvent?.pageY;
      if (args.originalEvent?.originalEvent?.touches) {
        const touch = args.originalEvent.originalEvent.changedTouches[0];
        x = touch.pageX;
        y = touch.pageY;
      }
      const rect = textarea.current.getBoundingClientRect();
      const width = textarea.current.clientWidth;
      const height = textarea.current.clientHeight;
      const right = rect.left + width;
      const bottom = rect.top + height;
      if (x >= rect.left && x <= right && y >= rect.top && y <= bottom) {
        textarea.current.value = event.args.label;
      }
    }
  }, []);

  const dragStartTreeA = useCallback((event: any) => {
    onDragStart(event);
  }, [onDragStart]);

  const dragEndTreeA = useCallback((event: any) => {
    onDragEnd(event);
  }, [onDragEnd]);

  const dragStartTreeB = useCallback((event: any) => {
    onDragStart(event);
  }, [onDragStart]);

  const dragEndTreeB = useCallback((event: any) => {
    onDragEnd(event);
  }, [onDragEnd]);

  return (
    <div>
      <div style={{ float: 'left' }}>
        <JqxTree
          theme="material-purple"
          ref={treeA}
          style={{ float: 'left', marginLeft: '0px' }}
          onDragStart={dragStartTreeA}
          onDragEnd={dragEndTreeA}
          width={220}
          height={330}
          dragStart={dragStart}
        >
          <ul>
            <li>Home</li>
            <li>
              Solutions
              <ul>
                <li>Education</li>
              </ul>
            </li>
            <li>Financial services</li>
            <li>Community</li>
          </ul>
        </JqxTree>
        <JqxTree
          theme="material-purple"
          ref={treeB}
          style={{ float: 'left', marginLeft: '20px' }}
          onDragStart={dragStartTreeB}
          onDragEnd={dragEndTreeB}
          width={220}
          height={330}
          allowDrag={true}
          allowDrop={true}
          dragEnd={dragEnd}
        >
          <ul>
            <li>Products</li>
            <li item-expanded="true">
              Support
              <ul>
                <li>Support home</li>
                <li>Customer Service</li>
              </ul>
            </li>
            <li>Knowledge base</li>
            <li>Forum</li>
          </ul>
        </JqxTree>
        <div style={{ width: '200px', height: '200px', float: 'left', marginLeft: '20px' }}>
          <textarea ref={textarea} rows={5} />
        </div>
      </div>
      <div style={{ fontSize: '13px', fontFamily: 'Verdana', paddingTop: '20px', clear: 'both' }}>
        <b>Events Log:</b>
        <div ref={logStart} />
        <div ref={logEnd} />
        <br />
        <b>Note:</b>
        <br />
        Dragging of "Community" is disabled.
        <br />
        Dropping of "Forum" is disabled.
      </div>
    </div>
  );
};

export default App;