/// <reference path="../../../jqwidgets-ts/jqwidgets.d.ts" />

function createToolTip(selector1, selector2, selector3, selector4, selector5, selector6, selector7, selector8, selector9)
{

    // defining options
    let options = {
        content: '<b>Title:</b> <i>The Amazing Spider-man</i><br /><b>Year:</b> 2012',
        position: 'mouse',
        name: 'movieTooltip'
    }

    // creating instances
    let filmPicture1: jqwidgets.jqxTooltip = jqwidgets.createInstance(selector1, 'jqxTooltip', options);
    options.content = '<b>Title:</b> <i>The Avengers</i><br /><b>Year:</b> 2012';
    let filmPicture2: jqwidgets.jqxTooltip = jqwidgets.createInstance(selector2, 'jqxTooltip', options);
    options.content = '<b>Title:</b> <i>The Dark Knight Rises</i><br /><b>Year:</b> 2012';
    let filmPicture3: jqwidgets.jqxTooltip = jqwidgets.createInstance(selector3, 'jqxTooltip', options);
    options.content = '<b>Title:</b> <i>Harry Potter and the Deathly Hallows - Part 1</i><br /><b>Year:</b> 2010';
    let filmPicture4: jqwidgets.jqxTooltip = jqwidgets.createInstance(selector4, 'jqxTooltip', options);
    options.content = '<b>Title:</b> <i>Harry Potter and the Deathly Hallows - Part 2</i><br /><b>Year:</b> 2011';
    let filmPicture5: jqwidgets.jqxTooltip = jqwidgets.createInstance(selector5, 'jqxTooltip', options);
    options.content = '<b>Title:</b> <i>Inception</i><br /><b>Year:</b> 2010';
    let filmPicture6: jqwidgets.jqxTooltip = jqwidgets.createInstance(selector6, 'jqxTooltip', options);
    options.content = '<b>Title:</b> <i>Star Trek</i><br /><b>Year:</b> 2009';
    let filmPicture7: jqwidgets.jqxTooltip = jqwidgets.createInstance(selector7, 'jqxTooltip', options);
    options.content = '<b>Title:</b> <i>Star Wars</i> Episode III: <i>Revenge of the Sith</i><br /><b>Year:</b> 2005';
    let filmPicture8: jqwidgets.jqxTooltip = jqwidgets.createInstance(selector8, 'jqxTooltip', options);
    options.content = '<b>Title:</b> <i>Thor</i><br /><b>Year:</b> 2011';
    let filmPicture9: jqwidgets.jqxTooltip = jqwidgets.createInstance(selector9, 'jqxTooltip', options);
}