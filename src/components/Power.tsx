import { useEffect, useState } from 'react';
import { usePrice } from '../Context';

function Power() {
    type PowerOption = {
        name: string;
        price: number;
    };

    const powerOptions: PowerOption[] = [
        { name: '100 MW', price: 0},
        { name: ' ', price: 150},
        { name: '200 MW', price: 200},
    ];

    const [selectedPower, setSelectedPower] = useState(powerOptions[1]);
    const [sliderValue, setSliderValue] = useState(1);
    const { setPowerPrice } = usePrice();

    useEffect(() => {
        setPowerPrice(powerOptions[1].price); 
    }, []);

    const handlePowerChange = (event: React.ChangeEvent<HTMLInputElement> ) => {
        const value = parseInt(event.target.value);
        const selectedOption = powerOptions[value];
        setSliderValue(value)
        setSelectedPower(selectedOption);
        setPowerPrice(selectedOption.price);
    };

    let trackClass = "track";
    if (sliderValue === 0) {
        trackClass += " start"; 
    } else if (sliderValue === 1) {
        trackClass += " middle"; 
    } else if (sliderValue === 2) {
        trackClass += " end"; 
    }

    return (
        <div className="power">
            <div className="slider">
                <label className="value-label">
                    <div className="label">
                        <div className="label-wrapper">
                            <div className="text label-text">Select power:</div>
                        </div>
                    </div>
                    <div className="value">
                        <div className="output">
                            <div className="output-wrapper">
                                <div className="output-text">{`+ ${selectedPower.price} €`}</div>
                            </div>
                        </div>
                    </div>
                </label>
                <div className="slider-track">
                    <input 
                        type="range" 
                        min="0" 
                        max="2" 
                        step="1" 
                        value={sliderValue} 
                        onChange={handlePowerChange}
                        className={trackClass} 
                    />
                    <div className="scale">
                        {powerOptions.map((option) => (
                            <div key={option.name} className="scale-point">
                                <div className="scale-text">{option.name}</div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
  };
  
  export default Power;