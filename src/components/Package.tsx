import icon from '../assets/Polygon 3.svg'; 
import { useState } from 'react';
import { usePrice } from '../Context';

function Package() {
    type PackageOption = {
        name: string;
        price: number;
        description: Array<string>;
    };

    const packageOptions: PackageOption[] = [
        { name: 'Basic', price: 0, description:['Air conditioning', 'Cloth seats', 'FM radio'] },
        { name: 'Sport', price: 100, description: ['Personal tech support'] },
        { name: 'Lux', price: 500, description: ['Chrome wheels', 'Window tint', 'Subwoofer'] },
    ];

    const [selectedPackage, setSelectedPackage] = useState(packageOptions[0]);
    const { setPackagePrice } = usePrice();

    const handlePackageChange = (drive: PackageOption) => {
        setSelectedPackage(drive);
        setPackagePrice(drive.price);
    };

    return (
      <form className="package">
        <div className="text select-text">Select option package:</div>
        <div className="options">
            {packageOptions.map((advanced) => (
                <div key={advanced.name} className={`option ${selectedPackage.name === advanced.name ? 'selected' : ''}`} onClick={() => handlePackageChange(advanced)}>
                    <div className="rectangle-text-container">
                        <div className="package-text">
                            <div className="text option-text">
                                {advanced.name}
                            </div>
                            <div className="price">
                                {`+${advanced.price}€`}
                            </div>
                        </div>
                    </div>
                    <div className={`advanced-options ${selectedPackage.name === advanced.name ? 'selected' : ''}`}>
                        <div className={`advanced-option ${advanced.name === 'Lux'? 'third' : ''}`}>
                            {advanced.description.map((item, index) => (
                                <div key={index} className="single-option">
                                    <div className="option-icon">
                                        <img src={icon} alt="Icon" className="icon"/>
                                    </div>
                                    <div className="advanced-text">
                                        {item}
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            ))}
        </div>
      </form>
    );
  };
  
  export default Package;