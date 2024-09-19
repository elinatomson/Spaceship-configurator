import { useState } from 'react';
import { usePrice } from '../Context';

function Color() {
    type ColorOption = {
        name: string;
        price: number;
        color: string;
    };

    const colorOptions: ColorOption[] = [
        { name: 'Snow', price: 0, color: 'white' },
        { name: 'Volcano', price: 100, color: 'orange' },
        { name: 'Sky', price: 100, color: 'blue' },
    ];

    const [selectedColor, setSelectedColor] = useState(colorOptions[0]);
    const { setColorPrice } = usePrice();

    const handleColorChange = (color: ColorOption) => {
        setSelectedColor(color);
        setColorPrice(color.price);
    };

    return (
      <form className="color">
        <div className="text select-text">Select color:</div>
        <div className="options color-options">
            {colorOptions.map((color) => (
                <div key={color.name} className={`option ${selectedColor.name === color.name ? 'selected' : ''}`} onClick={() => handleColorChange(color)}>
                    <div className="color-container">
                        <div className={`rectangle ${color.color}`}></div>
                    </div>
                    <div className="color-textbox">
                        <div className="text option-text">
                            {color.name}
                        </div>
                        <div className="price">
                            {`+${color.price}€`}
                        </div>
                    </div>
                </div>
            ))}
        </div>
      </form>
    );
  };
  
  export default Color;