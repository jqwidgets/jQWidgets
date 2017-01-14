import React from 'react';
import ReactDOM from 'react-dom';

import JqxRibbon from '../../../jqwidgets-react/react_jqxribbon.js';
import JqxDropDownButton from '../../../jqwidgets-react/react_jqxdropdownbutton.js';
import JqxGrid from '../../../jqwidgets-react/react_jqxgrid.js';
import JqxButton from '../../../jqwidgets-react/react_jqxbuttons.js';
import JqxTooltip from '../../../jqwidgets-react/react_jqxtooltip.js';
import JqxDropDownList from '../../../jqwidgets-react/react_jqxdropdownlist.js';
import JqxColorPicker from '../../../jqwidgets-react/react_jqxcolorpicker.js';
import JqxToggleButton from '../../../jqwidgets-react/react_jqxtogglebutton.js';

class App extends React.Component {
  componentDidMount() {
    this.refs.fileItemButton.setContent('<span style="position: relative; line-height: 26px; margin-left:10px;"">File</span>');
    this.refs.fontColorDropDown.setContent('<span style="position:relative; display:inline; top: 2px"><div class="icon FontDialogImage"></div><span id="fontColorPreview" style="display: block; position:absolute;  height: 3px; width: 16px; background:#000"></span></span><span style="position:relative; display: inline; top:3px">Font Color</span>');
    this.refs.buckerColorDropDown.setContent('<span style="position:relative; display:inline"><div class="icon paintcan"></div><span id="bucketColorPreview" style="display: block; position:absolute;  height: 3px; width: 16px; background:#000"></span></span><span style="position:relative; display: inline; top:3px"></span>');
    this.refs.highlightDropDown.setContent('<span style="position:relative; display:inline; top: 2px"><div class="icon pencil"></div><span id="highlightColorPreview" style="display: block; position:absolute;  height: 3px; width: 16px; background:#F00"></span></span><span style="position:relative; display: inline; top:3px">Highlight Color</span>');
    this.refs.myRibbon.disableAt(0);

    this.refs.pasteButton.on('click', (event) =>
    {
        let text = document.getElementsByClassName('pasteText')[0].innerHTML;
        console.log(text + ' clicked');
    });

    this.refs.onPasteDropDownSelect.on('select', (event) =>
    {
        let pasteData =
            [
                { label: 'Paste', imageClass: 'icon page_paste' },
                { label: 'Paste Special', imageClass: 'icon paste_plain' },
                { label: 'Paste text', imageClass: 'icon paste_word' },
                { label: 'Paste link', imageClass: 'icon PasteImage' }
            ];
        let index = event.args.index;
        let icon = '<span class="' + pasteData[index].imageClass + '" style="zoom: 1.5"></span>';
        document.getElementsByClassName('pasteButton')[0].innerHTML = icon + '<span class="pasteText">' + pasteData[index].label + '</span>';
        this.refs.pasteButton.render();
    });

    this.refs.fontColorPicker.on('colorchange', (event) =>
    {
        document.getElementById('fontColorPreview').style.background = '#' + event.args.color.hex;
    });

    this.refs.highlightColorPicker.on('colorchange', (event) =>
    {
        document.getElementById('highlightColorPreview').style.background = '#' + event.args.color.hex;
    });

    this.refs.bucketColorPicker.on('colorchange', (event) =>
    {
        document.getElementById('bucketColorPreview').style.background = '#' + event.args.color.hex;
    });

    this.refs.superScript.on('click', () =>
    {
        this.refs.subScript.toggled(false);
    });

    this.refs.subScript.on('click', () =>
    {
        this.refs.superScript.toggled(false);
    });

  }
  render () {
    let numberrenderer = (row, column, value) => {
        return '<div style="text-align: center; margin-top: 5px;">' + (1 + value) + '</div>';
    };
    let datafields = [];
    let columns = [];
    for (let i = 0; i < 26; i++) {
        let text = String.fromCharCode(65 + i);
        if (i == 0) {
            let cssclass = 'jqx-widget-header';
            if (theme != '') cssclass += ' jqx-widget-header-' + theme;
            columns[columns.length] = {
                pinned: true,
                exportable: false,
                text: '',
                columntype: 'number',
                cellclassname: cssclass,
                cellsrenderer: numberrenderer
            };
        }
        datafields[datafields.length] = { name: text };
        columns[columns.length] = { text: text, datafield: text, width: 60, align: 'center' };
    }
    let source =
    {
        unboundmode: true,
        totalrecords: 100,
        datafields: datafields
    };
    let dataAdapter = new $.jqx.dataAdapter(source);
    let fontListSource =
    [
        "<span style='font-family: Courier New;'>Courier New</span>",
        "<span style='font-family: Times New Roman;'>Times New Roman</span>",
        "<span style='font-family: Arial;'>Arial</span>"
    ];
    let fontSizeListSource = [8, 9, 10, 11, 12, 14, 18, 20, 22, 24];
    let fontSizeListRenderer = (index, label, value) =>
    {
        return '<span style="font-size:' + value + 'px;">' + value + '</span>';
    };
    let changeCaseListSource = ['Sentence Case', 'lowercase', 'UPPERCASE', 'Capitalize Each Word'];
    let changeCaseListSelectionRenderer = (object, index, label) =>
    {
        return '<div class="icon change-case-16" style="top:3px;  position:relative"></div>';
    };
    let pasteData =
    [
        { label: 'Paste', imageClass: 'icon page_paste' },
        { label: 'Paste Special', imageClass: 'icon paste_plain' },
        { label: 'Paste text', imageClass: 'icon paste_word' },
        { label: 'Paste link', imageClass: 'icon PasteImage' }
    ];
    let pasteRenderer = (index, label, value) =>
    {
        let labelEl = '<span style="font-size: 10px">' + label + '</span>';
        let icon = '<span class="' + pasteData[index].imageClass + '" style=""></span>';
        return '<span>' + icon + labelEl + '</span>';
    };
    let pasteRelectionRenderer = (object, index, label) =>
    {
        return "";
    };
    return (
      <div>
          <JqxRibbon ref='myRibbon'
                width={802}  height={131}  animationType={'none'}
                selectionMode={'click'}  position={'top'}  mode={'default'}
                theme={'demoTheme'}  selectedIndex={1}>
              <ul>
                  <li id='fileItem'>
                      <JqxDropDownButton ref='fileItemButton' className='fileItemDropDown'
                           width={50}  height={26}  arrowSize={0}
                           dropDownWidth={120} autoDropDownHeight={true}>
                           <div style={{ height: 103 }}>
                              <ul style={{ listStyleType: 'none', margin: 0, padding: 3 }}>
                                  <li>
                                      <JqxButton className='button' theme={'demoTheme'}>
                                          <div className='icon SaveImage'></div> Save
                                      </JqxButton>
                                  </li>
                                  <li>
                                      <JqxButton className='button'   theme={'demoTheme'}>
                                          <div className='icon SaveSelectionImage'></div> Save As
                                      </JqxButton>
                                  </li>
                                  <li>
                                      <JqxButton className='button'  theme={'demoTheme'}>
                                          <div className='icon folder'></div> Open
                                      </JqxButton>
                                  </li>
                                  <li>
                                      <JqxButton className='button'  theme={'demoTheme'}>
                                          <div className='icon close'></div> Close
                                      </JqxButton>
                                  </li>
                              </ul>
                          </div>
                      </JqxDropDownButton>
                  </li>
                  <li>Home</li>
                  <li>Help</li>
              </ul>
              <div>
                  <div style={{ overflow: 'hidden' }}>
                  </div>
                  <div style={{ overflow: 'hidden' }}>
                      <table className='buttonHolderTable' id='clipBoardTable'>
                        <tbody>
                          <tr>
                              <td rowSpan='3' style={{ textAlign: 'center', height: 70, fontSize: 10 }}>
                                  <div id='paste' style={{ width: 50 }}>
                                      <JqxButton ref='pasteButton' className='pasteButton'
                                           width={43}  height={56}  theme={'demoTheme'}>
                                             <span className='icon page_paste' style={{ zoom: 1.5 }}></span>
                                             <span className='pasteText'>Paste</span>
                                      </JqxButton>
                                      <JqxDropDownList ref='onPasteDropDownSelect'
                                           width={35}   height={10}  autoDropDownHeight={true}  animationType={'none'}
                                           theme={'demoTheme'}  selectedIndex={'0'}  source={pasteData}  dropDownWidth={110}
                                           renderer={pasteRenderer}  selectionRenderer={pasteRelectionRenderer}>
                                      </JqxDropDownList>
                                  </div>
                              </td>
                              <td className='firstrow' rowSpan='1'>
                                  <JqxTooltip  position={'mouse'}  theme={'demoTheme'}  content={'Cut (Ctrl + X)'}>
                                      <JqxButton theme={'demoTheme'}>
                                          <div className='icon cut_red'></div>
                                          <span className='cutText'>Cut</span>
                                      </JqxButton>
                                  </JqxTooltip>
                              </td>
                          </tr>
                          <tr>
                              <td className='secondrow'>
                                  <JqxTooltip  position={'mouse'}  theme={'demoTheme'}  content={'Copy (Ctrl + C)'}>
                                      <JqxButton theme={'demoTheme'}>
                                          <div className='icon page_copy'></div>
                                          <span className='copyText'>Copy</span>
                                      </JqxButton>
                                  </JqxTooltip>
                              </td>
                          </tr>
                          <tr>
                              <td className='thirdrow'>
                                  <JqxTooltip  position={'mouse'}  theme={'demoTheme'}  content={'Format Painter'}>
                                      <JqxButton theme={'demoTheme'}>
                                          <div className='icon FormatPainterImage'></div>
                                          <span className='formatPainter'>Format Painter</span>
                                      </JqxButton>
                                  </JqxTooltip>
                              </td>
                          </tr>
                          <tr>
                              <td colSpan='2' style={{ fontSize: 9, textAlign: 'center', top: -3,  position: 'relative' }}>
                                  Clipboard
                              </td>
                          </tr>
                        </tbody>
                      </table>
                      <div className='sectionSeparator'>
                      </div>
                      <table className='buttonHolderTable' style={{ float: 'left' }}>
                        <tbody>
                          <tr>
                              <td colSpan='4'>
                                  <JqxDropDownList
                                       width={120}  height={21}  autoDropDownHeight={true}
                                       theme={'demoTheme'}  selectedIndex={1}  source={fontListSource}>
                                  </JqxDropDownList>
                              </td>
                              <td>
                                  <JqxDropDownList
                                       width={70}  height={21}  autoDropDownHeight={true}  renderer={fontSizeListRenderer}
                                       theme={'demoTheme'}  selectedIndex={2}  source={fontSizeListSource}>
                                  </JqxDropDownList>
                              </td>
                              <td>
                                  <JqxButton  theme={'demoTheme'}>
                                      <div className='icon fontsizeincrease16'></div>
                                  </JqxButton>
                              </td>
                              <td>
                                  <JqxButton  theme={'demoTheme'}>
                                      <div className='icon fontsizedecrease16'></div>
                                  </JqxButton>
                              </td>
                              <td>
                                  <JqxButton  theme={'demoTheme'}>
                                      <div className='icon ClearFormattingImage'></div>
                                  </JqxButton>
                              </td>
                              <td>
                                  <JqxDropDownList
                                       width={40}  selectionRenderer={changeCaseListSelectionRenderer}  autoDropDownHeight={true}
                                       theme={'demoTheme'}  selectedIndex={0}  source={changeCaseListSource}  dropDownWidth={150}>
                                  </JqxDropDownList>
                              </td>
                          </tr>
                          <tr className='secondrow'>
                              <td colSpan='8'>
                                  <JqxDropDownButton ref='fontColorDropDown'
                                       width={130}  height={21}
                                       dropDownWidth={180}  theme={'demoTheme'}>
                                      <div style={{ padding: 3 }}>
                                          <JqxColorPicker ref='fontColorPicker'
                                               width={180}  height={180}
                                               color={'FF0000'}  colorMode={'hue'}>
                                          </JqxColorPicker>
                                      </div>
                                  </JqxDropDownButton>
                                  <div className='separator'></div>
                                  <JqxDropDownButton ref='highlightDropDown'
                                       width={130}  height={21}
                                       dropDownWidth={180}  theme={'demoTheme'}>
                                      <div style={{ padding: 3 }}>
                                          <JqxColorPicker  ref='highlightColorPicker'
                                            width={180}  height={180}
                                            color={'FF0000'}  colorMode={'hue'}>
                                          </JqxColorPicker>
                                      </div>
                                  </JqxDropDownButton>
                              </td>
                          </tr>
                          <tr className='thirdrow'>
                              <td colSpan='8'>
                                  <JqxTooltip  position={'mouse'}  theme={'demoTheme'}  content={'Superscript'} className='inline-block'>
                                      <JqxToggleButton ref='superScript' theme={'demoTheme'}>
                                          <div className='icon text_superscript'></div>
                                      </JqxToggleButton>
                                  </JqxTooltip>
                                  <JqxTooltip  position={'mouse'}  theme={'demoTheme'}  content={'Subscript'} className='inline-block'>
                                      <JqxToggleButton ref='subScript' theme={'demoTheme'}>
                                          <div className='icon text_subscript'></div>
                                      </JqxToggleButton>
                                  </JqxTooltip>
                                  <div className='separator' style={{ top: 3 }}></div>
                                  <JqxTooltip  position={'mouse'}  theme={'demoTheme'}  content={'Bold (Ctrl + B)'} className='inline-block'>
                                      <JqxToggleButton  theme={'demoTheme'}>
                                          <div className='icon text_bold'></div>
                                      </JqxToggleButton>
                                  </JqxTooltip>
                                  <JqxTooltip  position={'mouse'}  theme={'demoTheme'}  content={'Italic (Ctrl + I)'} className='inline-block'>
                                      <JqxToggleButton  theme={'demoTheme'}>
                                          <div className='icon text_italic'></div>
                                      </JqxToggleButton>
                                  </JqxTooltip>
                                  <JqxTooltip  position={'mouse'}  theme={'demoTheme'}  content={'Underline (Ctrl + U)'} className='inline-block'>
                                      <JqxToggleButton  theme={'demoTheme'}>
                                          <div className='icon text_underline'></div>
                                      </JqxToggleButton>
                                  </JqxTooltip>
                                  <JqxTooltip  position={'mouse'}  theme={'demoTheme'}  content={'Strikethrough'} className='inline-block'>
                                      <JqxToggleButton  theme={'demoTheme'}>
                                          <div className='icon text_strikethrough'></div>
                                      </JqxToggleButton>
                                  </JqxTooltip>
                              </td>
                          </tr>
                          <tr>
                              <td colSpan='9' style={{ fontSize: 9, textAlign: 'center' }}>
                                  Font
                              </td>
                          </tr>
                        </tbody>
                      </table>
                      <div className='sectionSeparator'>
                      </div>
                      <table className='buttonHolderTable' style={{ float: 'left', marginTop: -4 }}>
                        <tbody>
                          <tr className='firstrow'>
                              <td colSpan='8'>
                                  <JqxTooltip  position={'mouse'} theme={'demoTheme'}  content={'Bulleted List'} className='inline-block'>
                                      <JqxButton  theme={'demoTheme'}>
                                        <div className='icon text_list_bullets'></div>
                                      </JqxButton>
                                  </JqxTooltip>
                                  <JqxTooltip  position={'mouse'} theme={'demoTheme'}  content={'Numbered List'} className='inline-block'>
                                      <JqxButton  theme={'demoTheme'}>
                                          <div className='icon text_list_numbers'></div>
                                      </JqxButton>
                                  </JqxTooltip>
                                  <JqxTooltip position={'mouse'} theme={'demoTheme'}  content={'Decrease Indent'} className='inline-block'>
                                      <JqxButton  theme={'demoTheme'}>
                                          <div className='icon text_indent'></div>
                                      </JqxButton>
                                  </JqxTooltip>
                                  <JqxTooltip position={'mouse'} theme={'demoTheme'}  content={'Increase Indent'} className='inline-block'>
                                      <JqxButton  theme={'demoTheme'}>
                                          <div className='icon text_indent_remove'></div>
                                      </JqxButton>
                                  </JqxTooltip>
                                  <JqxTooltip position={'mouse'} theme={'demoTheme'}  content={'Sort Direction'} className='inline-block'>
                                      <JqxButton  theme={'demoTheme'}>
                                          <div className='icon SortHS'></div>
                                      </JqxButton>
                                  </JqxTooltip>
                                  <JqxTooltip position={'mouse'} theme={'demoTheme'}  content={'Fill Style'} className='inline-block'>
                                      <JqxDropDownButton ref='buckerColorDropDown' className='top'
                                           width={42}  height={19}
                                           dropDownWidth={180}  theme={'demoTheme'}>
                                          <div style={{ padding: 3 }}>
                                              <JqxColorPicker ref='bucketColorPicker'
                                               width={180}  height={180}
                                               color={'000000'}  colorMode={'hue'}>
                                              </JqxColorPicker>
                                          </div>
                                      </JqxDropDownButton>
                                  </JqxTooltip>
                              </td>
                          </tr>
                          <tr className='secondrow'>
                              <td colSpan='8'>
                                  <JqxTooltip position={'mouse'} theme={'demoTheme'}  content={'Align Text Left (Ctrl + L)'} className='inline-block'>
                                      <JqxButton  theme={'demoTheme'}>
                                          <div className='icon text_align_left'></div>
                                      </JqxButton>
                                  </JqxTooltip>
                                  <JqxTooltip position={'mouse'} theme={'demoTheme'}  content={'Center (Ctrl + E)'} className='inline-block'>
                                      <JqxButton  theme={'demoTheme'}>
                                          <div className='icon text_align_center'></div>
                                      </JqxButton>
                                  </JqxTooltip>
                                  <JqxTooltip position={'mouse'} theme={'demoTheme'}  content={'Align Text Right (Ctrl + R)'} className='inline-block'>
                                      <JqxButton  theme={'demoTheme'}>
                                          <div className='icon text_align_right'></div>
                                      </JqxButton>
                                  </JqxTooltip>
                                  <JqxTooltip position={'mouse'} theme={'demoTheme'}  content={'Justify (Ctrl + J)'} className='inline-block'>
                                      <JqxButton  theme={'demoTheme'}>
                                          <div className='icon text_align_justify'></div>
                                      </JqxButton>
                                  </JqxTooltip>
                                  <div className='separator' style={{ top: 5, height: 15 }}></div>
                                  <JqxTooltip position={'mouse'} theme={'demoTheme'}  content={'Line and Paragraph Spacing'} className='inline-block'>
                                      <JqxButton  theme={'demoTheme'}>
                                          <div className='icon text_linespacing'></div>
                                      </JqxButton>
                                  </JqxTooltip>
                                  <JqxTooltip position={'mouse'} theme={'demoTheme'}  content={'Show/Hide special characters'} className='inline-block'>
                                      <JqxButton  theme={'demoTheme'}>
                                          <div className='icon ShowParagraphMarksImage'></div>
                                      </JqxButton>
                                  </JqxTooltip>
                              </td>
                          </tr>
                          <tr>
                              <td style={{ height: 43, textAlign: 'center', verticalAlign: 'bottom', fontSize:9 }}>
                                  Alignment
                              </td>
                          </tr>
                        </tbody>
                      </table>
                      <div className='sectionSeparator'>
                      </div>
                  </div>
                  <div style={{ overflow: 'hidden' }}>
                      <table className='buttonHolderTable' style={{ height: '100%' }}>
                        <tbody>
                          <tr>
                              <td className='bigTd'>
                                  <JqxButton className='button'  theme={'demoTheme'}  width={36}  height={36}>
                                      <img className='img' src='../../../images/help-26.png' />
                                  </JqxButton>
                                  Help
                              </td>
                              <td className='bigTd'>
                                  <JqxButton className='button'  theme={'demoTheme'}  width={36}  height={36}>
                                      <img className='img' src='../../../images/about-26.png' />
                                  </JqxButton>
                                  About
                              </td>
                              <td className='bigTd'>
                                  <JqxButton className='button'  theme={'demoTheme'}  width={36}  height={36}>
                                      <img className='img' src='../../../images/downloading_updates-26.png' />
                                  </JqxButton>
                                  Update
                              </td>
                          </tr>
                        </tbody>
                      </table>
                  </div>
              </div>
          </JqxRibbon>
          <JqxGrid
               width={800}  source={dataAdapter}  theme={'demoTheme'}  editable={true}
               columnsresize={true} selectionmode={'multiplecellsadvanced'} columns={columns}>
          </JqxGrid>
      </div>
    )
  }
}

ReactDOM.render(<App />, document.getElementById('app'));
