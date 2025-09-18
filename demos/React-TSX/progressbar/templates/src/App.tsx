import * as React from 'react';
import { useRef, useEffect, useCallback } from 'react';
import JqxProgressBar from 'jqwidgets-scripts/jqwidgets-react-tsx/jqxprogressbar';

const App = () => {
  const myProgressBar2 = useRef<JqxProgressBar>(null);
  const myProgressBar3 = useRef<JqxProgressBar>(null);
  const myProgressBar4 = useRef<JqxProgressBar>(null);
  const myProgressBar5 = useRef<JqxProgressBar>(null);
  const myProgressBar6 = useRef<JqxProgressBar>(null);

  const renderText = useCallback((text: string, value: number) => {
    if (value! < 55) {
      return '<span class="jqx-rc-all" style="color: #333;">' + text + '</span>';
    }
    return '<span class="jqx-rc-all" style="color: #fff;">' + text + '</span>';
  }, []);

  useEffect(() => {
    const values: Record<number, { value: number; interval: any }> = {};

    const addInterval = (id: number, progressBar: React.RefObject<JqxProgressBar>, intervalStep: number) => {
      values[id] = { value: 0, interval: null };
      values[id].interval = setInterval(() => {
        values[id].value++;
        if (values[id].value === 100) {
          clearInterval(values[id].interval);
        }
        progressBar.current && progressBar.current.val(values[id].value);
      }, intervalStep);
    };

    addInterval(2, myProgressBar2, 20);
    addInterval(3, myProgressBar3, 30);
    addInterval(4, myProgressBar4, 40);
    addInterval(5, myProgressBar5, 50);
    addInterval(6, myProgressBar6, 60);

    return () => {
      Object.values(values).forEach(v => clearInterval(v.interval));
    };
  }, []);

  return (
    <div style={{ fontSize: '13px', fontFamily: 'Verdana', float: 'left' }}>
      <div style={{ marginTop: '10px' }}>Primary</div>
      <JqxProgressBar
        theme={'material-purple'}
        ref={myProgressBar2}
        width={250}
        height={30}
        animationDuration={0}
        showText={true}
        renderText={renderText}
        template={'primary'}
        value={0}
      />
      <div style={{ marginTop: '10px' }}>Success</div>
      <JqxProgressBar
        theme={'material-purple'}
        ref={myProgressBar3}
        width={250}
        height={30}
        animationDuration={0}
        showText={true}
        renderText={renderText}
        template={'success'}
        value={0}
      />
      <div style={{ marginTop: '10px' }}>Info</div>
      <JqxProgressBar
        theme={'material-purple'}
        ref={myProgressBar4}
        width={250}
        height={30}
        animationDuration={0}
        showText={true}
        renderText={renderText}
        template={'info'}
        value={0}
      />
      <div style={{ marginTop: '10px' }}>Warning</div>
      <JqxProgressBar
        theme={'material-purple'}
        ref={myProgressBar5}
        width={250}
        height={30}
        animationDuration={0}
        showText={true}
        renderText={renderText}
        template={'warning'}
        value={0}
      />
      <div style={{ marginTop: '10px' }}>Danger</div>
      <JqxProgressBar
        theme={'material-purple'}
        ref={myProgressBar6}
        width={250}
        height={30}
        animationDuration={0}
        showText={true}
        renderText={renderText}
        template={'danger'}
        value={0}
      />
    </div>
  );
};

export default App;