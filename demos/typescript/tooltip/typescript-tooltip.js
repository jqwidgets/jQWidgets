/// <reference path="../../../jqwidgets-ts/jqwidgets.d.ts" />
function createToolTip(selector1, selector2, selector3, selector4, selector5, selector6, selector7, selector8, selector9) {
    // defining options
    var options = {
        content: '<b>Title:</b> <i>The Amazing Spider-man</i><br /><b>Year:</b> 2012',
        position: 'mouse',
        name: 'movieTooltip'
    };
    // creating instances
    var filmPicture1 = jqwidgets.createInstance(selector1, 'jqxTooltip', options);
    options.content = '<b>Title:</b> <i>The Avengers</i><br /><b>Year:</b> 2012';
    var filmPicture2 = jqwidgets.createInstance(selector2, 'jqxTooltip', options);
    options.content = '<b>Title:</b> <i>The Dark Knight Rises</i><br /><b>Year:</b> 2012';
    var filmPicture3 = jqwidgets.createInstance(selector3, 'jqxTooltip', options);
    options.content = '<b>Title:</b> <i>Harry Potter and the Deathly Hallows - Part 1</i><br /><b>Year:</b> 2010';
    var filmPicture4 = jqwidgets.createInstance(selector4, 'jqxTooltip', options);
    options.content = '<b>Title:</b> <i>Harry Potter and the Deathly Hallows - Part 2</i><br /><b>Year:</b> 2011';
    var filmPicture5 = jqwidgets.createInstance(selector5, 'jqxTooltip', options);
    options.content = '<b>Title:</b> <i>Inception</i><br /><b>Year:</b> 2010';
    var filmPicture6 = jqwidgets.createInstance(selector6, 'jqxTooltip', options);
    options.content = '<b>Title:</b> <i>Star Trek</i><br /><b>Year:</b> 2009';
    var filmPicture7 = jqwidgets.createInstance(selector7, 'jqxTooltip', options);
    options.content = '<b>Title:</b> <i>Star Wars</i> Episode III: <i>Revenge of the Sith</i><br /><b>Year:</b> 2005';
    var filmPicture8 = jqwidgets.createInstance(selector8, 'jqxTooltip', options);
    options.content = '<b>Title:</b> <i>Thor</i><br /><b>Year:</b> 2011';
    var filmPicture9 = jqwidgets.createInstance(selector9, 'jqxTooltip', options);
}
//# sourceMappingURL=typescript-tooltip.js.map