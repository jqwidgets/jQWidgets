import * as React from 'react';
import { useState } from 'react';
import JqxDropDownList from 'jqwidgets-scripts/jqwidgets-react-tsx/jqxdropdownlist';

const App = () => {
    const [source] = useState([
        { html: '<div style="padding: 1px;"><div>Title: Do the Work</div><div>Author: Steven Pressfield</div></div>', title: 'Do the Work', group: 'Business & Investing' },
        { html: '<div style="padding: 1px;"><div>Title: Think and Grow Rich</div><div>Author: Napoleon Hill</div></div>', title: 'Think and Grow Rich', group: 'Business & Investing' },
        { html: '<div style="padding: 1px;"><div>Title: The Toyota Way to Continuous...</div><div>Author: Jeffrey K. Liker</div></div>', title: 'The Toyota Way to Continuous...', group: 'Business & Investing' },
        { html: '<div style="padding: 1px;"><div>Title: Redesigning Leadership </div><div>Author: John Maeda</div></div>', title: 'Redesigning Leadership ', group: 'Business & Investing' },
        { html: '<div style="padding: 1px;"><div>Title: MacBook Pro Portable Genius</div><div>Author: Brad Miser</div></div>', title: 'MacBook Pro Portable Genius', group: 'Computer & Internet Books' },
        { html: '<div style="padding: 1px;"><div>Title: Social Media Metrics Secrets</div><div>Author: John Lovett</div></div>', title: 'Social Media Metrics Secrets', group: 'Computer & Internet Books' },
        { html: '<div style="padding: 1px;"><div>Title: iPad 2: The Missing Manual</div><div>Author: J D Biersdorfer J.D</div></div>', title: 'iPad 2: The Missing Manual', group: 'Computer & Internet Books' },
        { html: '<div style="padding: 1px;"><div>Lincoln and His Admirals</div><div>Author:Craig L. Symonds</div></div>', title: 'Lincoln and His Admirals', group: 'History' },
        { html: '<div style="padding: 1px;"><div>The Dogs of War: 1861</div><div>Author:Emory M. Thomas</div></div>', title: 'The Dogs of War: 1861', group: 'History' },
        { html: '<div style="padding: 1px;"><div>Cleopatra: A Life</div><div>Author:Stacy Schiff</div></div>', title: 'Cleopatra: A Life', group: 'History' },
        { html: '<div style="padding: 1px;"><div>Mother Teresa: A Biography</div><div>Author:Meg Greene</div></div>', title: 'Mother Teresa: A Biography', group: 'History' },
        { html: '<div style="padding: 1px;"><div>The Federalist Papers</div><div>Author:John Jay</div></div>', title: 'The Federalist Papers', group: 'History' }
    ]);

    return (
        <JqxDropDownList
            theme="material-purple"
            width={300}
            height={50}
            source={source}
            selectedIndex={0}
        />
    );
};

export default App;