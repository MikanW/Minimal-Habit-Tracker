import { HexColorPicker } from "react-colorful";
import { useState } from 'react';

interface ColorPickerProps {
  setSelectedColor: Function;
  initColor: string;
}

const ColorPicker = ( props:ColorPickerProps ) => {
  const { setSelectedColor, initColor } = props;
  const [color, setColor] = useState(initColor);

  const onColorChange = (value: string) => {
    setColor(value);
    setSelectedColor(value);
  }

  return <HexColorPicker color={color} onChange={onColorChange} />;
};

export default ColorPicker;