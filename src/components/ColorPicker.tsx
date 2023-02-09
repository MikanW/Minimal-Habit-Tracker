import { HexColorPicker } from "react-colorful";
import { useState } from 'react';

interface ColorPickerProps {
  setSelectedColor: Function;
}

const ColorPicker = ( props:ColorPickerProps ) => {
  const { setSelectedColor } = props;
  const [color, setColor] = useState("#aabbcc");

  const onColorChange = (value: string) => {
    setColor(value);
    setSelectedColor(value);
  }

  return <HexColorPicker color={color} onChange={onColorChange} />;
};

export default ColorPicker;