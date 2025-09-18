import React, { useRef, useState, useCallback } from 'react';
import ReactDOM from 'react-dom';
import JqxButton from 'jqwidgets-scripts/jqwidgets-react-tsx/jqxbuttons';
import JqxWindow from 'jqwidgets-scripts/jqwidgets-react-tsx/jqxwindow';

const App = () => {
  const mainDemoContainer = useRef<HTMLDivElement>(null);
  const [count, setCount] = useState(1);
  const windowRefs = useRef<any[]>([]);

  const setRef = useCallback((ref: any) => {
    if (ref && !windowRefs.current.includes(ref)) {
      windowRefs.current.push(ref);
    }
    return ref;
  }, []);

  const showWindowButtonClick = useCallback(() => {
    for (const window of windowRefs.current) {
      window && window.open();
    }
  }, []);

  const addWindowButtonClick = useCallback(() => {
    const newDiv = document.createElement('div');
    if (mainDemoContainer.current) {
      mainDemoContainer.current.appendChild(newDiv);
    }
    const offsetPosition = 240 + count * 20;
    let newWindowRef: any;

    const ref = (ref: any) => {
      if (ref && !windowRefs.current.includes(ref)) {
        windowRefs.current.push(ref);
      }
      newWindowRef = ref;
      return ref;
    };

    const newWindow = (
      <JqxWindow
        theme="material-purple"
        ref={ref}
        height={150}
        width={300}
        position={{ x: offsetPosition, y: offsetPosition }}
      >
        <div>Header {count}</div>
        <div>Content {count}</div>
      </JqxWindow>
    );

    ReactDOM.render(newWindow, newDiv);
    setCount(c => c + 1);
  }, [count]);

  return (
    <div style={{ width: '100%', height: 650, border: '0px solid #ccc', marginTop: 15 }}>
      <JqxButton
        theme="material-purple"
        style={{ float: 'left' }}
        onClick={showWindowButtonClick}
        width={120}
      >
        Show Windows
      </JqxButton>
      <JqxButton
        theme="material-purple"
        style={{ float: 'left', marginLeft: 5 }}
        onClick={addWindowButtonClick}
        width={120}
      >
        Add Windows
      </JqxButton>
      <div ref={mainDemoContainer}>
        <JqxWindow
          theme="material-purple"
          ref={setRef}
          width={300}
          height="auto"
          position={{ x: 50, y: 120 }}
        >
          <div>RISC</div>
          <div>
            Some aspects attributed to the first RISC-labeled designs around 1975 include the
            observations that the memory-restricted compilers of the time were often unable
            to take advantage of features intended to facilitate manual assembly coding, and
            that complex addressing modes take many cycles to perform due to the required additional
            memory accesses...
          </div>
        </JqxWindow>
        <JqxWindow
          theme="material-purple"
          ref={setRef}
          width={300}
          height="auto"
          position={{ x: 100, y: 170 }}
        >
          <div>CISC</div>
          <div>
            Before the RISC philosophy became prominent, many computer architects tried to bridge
            the so called semantic gap, i.e. to design instruction sets that directly supported
            high-level programming constructs such as procedure calls, loop control, and complex
            addressing modes, allowing data structure and array accesses to be combined into
            single instructions. Instructions are also typically highly encoded in order to
            further enhance the code density...
          </div>
        </JqxWindow>
        <JqxWindow
          theme="material-purple"
          ref={setRef}
          width={300}
          height="auto"
          position={{ x: 150, y: 220 }}
        >
          <div>Database management system</div>
          <div>
            A database management system (DBMS) is a software package with computer programs
            that control the creation, maintenance, and the use of a database. It allows organizations
            to conveniently develop databases for various applications by database administrators
            (DBAs) and other specialists. A database is an integrated collection of data records,
            files, and other database objects...
          </div>
        </JqxWindow>
      </div>
    </div>
  );
};

export default App;