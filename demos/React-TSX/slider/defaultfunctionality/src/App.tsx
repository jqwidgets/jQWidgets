import React, { useRef, useEffect, useCallback, useState, useMemo } from 'react';
import './App.css';
import JqxCheckBox from 'jqwidgets-scripts/jqwidgets-react-tsx/jqxcheckbox';
import JqxSlider, { ISliderProps } from 'jqwidgets-scripts/jqwidgets-react-tsx/jqxslider';

const App = () => {
  const redSlider = useRef<JqxSlider>(null);
  const greenSlider = useRef<JqxSlider>(null);
  const blueSlider = useRef<JqxSlider>(null);

  const [sliderProps, setSliderProps] = useState<ISliderProps>(() => ({
    height: 60,
    max: 255,
    min: 0,
    mode: "fixed",
    showTickLabels: true,
    step: 25.5,
    tickLabelFormatFunction: (value: any) => {
      if (value === 0) { return value; }
      if (value === 255) { return value; }
      return "";
    },
    ticksFrequency: 25.5,
    tooltip: true,
    tooltipFormatFunction: (value: any) => {
      if (redSlider.current?.getOptions("mode") === 'default') {
        if (value < 10) { return value.toPrecision(3); }
        if (value > 10 && value < 100) { return value.toPrecision(4); }
        else { return value.toPrecision(5); }
      } else {
        if (value < 10) { return value.toPrecision(3); }
        if (value > 10 && value < 256) { return value.toPrecision(4); }
      }
      return value + ' X';
    },
    value: 0
  }));

  const fixHex = useCallback((hex: any) => (hex.length < 2 ? '0' + hex : hex), []);
  const getTextElement = useCallback(
    (color: { r: number; g: number; b: number }) => {
      const nThreshold = 105;
      const bgDelta = (color.r * 0.299) + (color.g * 0.587) + (color.b * 0.114);
      return (255 - bgDelta < nThreshold) ? 'Black' : 'White';
    },
    []
  );

  const setColor = useCallback(() => {
    const red = fixHex(Math.round(redSlider.current!.getOptions("value")).toString(16));
    const green = fixHex(Math.round(greenSlider.current!.getOptions("value")).toString(16));
    const blue = fixHex(Math.round(blueSlider.current!.getOptions("value")).toString(16));
    const colorHex = `#${red}${green}${blue}`;
    const colorLabel = document.getElementById('colorLabel');
    const colorBlock = document.getElementById('colorBlock');
    if (colorBlock) { colorBlock.style.backgroundColor = colorHex; }
    if (colorLabel) {
      colorLabel.innerHTML = colorHex.toUpperCase();
      colorLabel.style.color = getTextElement({ r: parseInt(red, 16), g: parseInt(green, 16), b: parseInt(blue, 16) });
    }
  }, [fixHex, getTextElement]);

  useEffect(() => {
    setColor();
  }, []);

  const handleSliderChange = useCallback(() => {
    setColor();
  }, [setColor]);

  const handleCheckBoxOnChange = useCallback((event: any) => {
    const checked = event.args.checked;
    let value: ISliderProps["mode"] = "default";
    if (!checked) value = "fixed";
    redSlider.current?.setOptions({ mode: value });
    greenSlider.current?.setOptions({ mode: value });
    blueSlider.current?.setOptions({ mode: value });
  }, []);

  const sliderSharedProps = useMemo(() => ({
    height: sliderProps.height,
    max: sliderProps.max,
    min: sliderProps.min,
    showTickLabels: sliderProps.showTickLabels,
    step: sliderProps.step,
    tickLabelFormatFunction: sliderProps.tickLabelFormatFunction,
    ticksFrequency: sliderProps.ticksFrequency,
    tooltip: sliderProps.tooltip,
    tooltipFormatFunction: sliderProps.tooltipFormatFunction,
    value: sliderProps.value,
  }), [sliderProps]);

  return (
    <div style={{ width: 550 }}>
      <div style={{ height: 250 }}>
        <div style={{ float: "left" }}>
          <span style={{ fontStyle: "italic" }}>Red</span>
          <JqxSlider
            theme={'material-purple'}
            ref={redSlider}
            onChange={handleSliderChange}
            mode={sliderProps.mode}
            {...sliderSharedProps}
          />
          <span style={{ fontStyle: "italic" }}>Green</span>
          <JqxSlider
            theme={'material-purple'}
            ref={greenSlider}
            onChange={handleSliderChange}
            mode={sliderProps.mode}
            {...sliderSharedProps}
          />
          <span style={{ fontStyle: "italic" }}>Blue</span>
          <JqxSlider
            theme={'material-purple'}
            ref={blueSlider}
            onChange={handleSliderChange}
            mode={sliderProps.mode}
            {...sliderSharedProps}
          />
        </div>
        <div className={"jqx-rc-all colorBlock"} id={"colorBlock"}>
          <div id={"colorLabel"} />
        </div>
      </div>
      <JqxCheckBox
        theme={'material-purple'}
        onChange={handleCheckBoxOnChange}
        width={200}
        checked={false}
      >
        Smooth Thumb Drag
      </JqxCheckBox>
    </div>
  );
};

export default App;
