import * as React from 'react';
import { useState } from 'react';
import JqxComboBox from 'jqwidgets-scripts/jqwidgets-react-tsx/jqxcombobox';

const App = () => {
    const [source] = useState([
        { html: '<div tabIndex=0 style="padding: 1px;"><div>Title: Do the Work</div><div>Author: Steven Pressfield</div></div>', label: 'Do the Work', group: 'Business & Investing' },
        { html: '<div tabIndex=0 style="padding: 1px;"><div>Title: Think and Grow Rich</div><div>Author: Napoleon Hill</div></div>', label: 'Think and Grow Rich', group: 'Business & Investing' },
        { html: '<div tabIndex=0 style="padding: 1px;"><div>Title: The Toyota Way to Continuous...</div><div>Author: Jeffrey K. Liker</div></div>', label: 'The Toyota Way to Continuous...', group: 'Business & Investing' },
        { html: '<div tabIndex=0 style="padding: 1px;"><div>Title: Redesigning Leadership </div><div>Author: John Maeda</div></div>', label: 'Redesigning Leadership ', group: 'Business & Investing' },
        { html: '<div tabIndex=0 style="padding: 1px;"><div>Title: MacBook Pro Portable Genius</div><div>Author: Brad Miser</div></div>', label: 'MacBook Pro Portable Genius', group: 'Computer & Internet Books' },
        { html: '<div tabIndex=0 style="padding: 1px;"><div>Title: Social Media Metrics Secrets</div><div>Author: John Lovett</div></div>', label: 'Social Media Metrics Secrets', group: 'Computer & Internet Books' },
        { html: '<div tabIndex=0 style="padding: 1px;"><div>Title: iPad 2: The Missing Manual</div><div>Author: J D Biersdorfer J.D</div></div>', label: 'iPad 2: The Missing Manual', group: 'Computer & Internet Books' },
        { html: '<div tabIndex=0 style="padding: 1px;"><div>Lincoln and His Admirals</div><div>Author:Craig L. Symonds</div></div>', label: 'Lincoln and His Admirals', group: 'History' },
        { html: '<div tabIndex=0 style="padding: 1px;"><div>The Dogs of War: 1861</div><div>Author:Emory M. Thomas</div></div>', label: 'The Dogs of War: 1861', group: 'History' },
        { html: '<div tabIndex=0 style="padding: 1px;"><div>Cleopatra: A Life</div><div>Author:Stacy Schiff</div></div>', label: 'Cleopatra: A Life', group: 'History' },
        { html: '<div tabIndex=0 style="padding: 1px;"><div>Mother Teresa: A Biography</div><div>Author:Meg Greene</div></div>', label: 'Mother Teresa: A Biography', group: 'History' },
        { html: '<div tabIndex=0 style="padding: 1px;"><div>The Federalist Papers</div><div>Author:John Jay</div></div>', label: 'The Federalist Papers', group: 'History' },
    ]);

    return (
        <JqxComboBox
            theme="material-purple"
            width={300}
            height={30}
            source={source}
            selectedIndex={0}
        />
    );
};

export default App;