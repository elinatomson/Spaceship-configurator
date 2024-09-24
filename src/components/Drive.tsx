import { useState } from 'react';
import { usePrice } from '../Context';

function Drive() {
    type DriveOption = {
        name: string;
        price: number;
    };

    const driveOptions: DriveOption[] = [
        { name: 'No', price: 0 },
        { name: 'Yes', price: 1000 },
    ];

    const [selectedDrive, setSelectedDrive] = useState(driveOptions[0]);
    const { setDrivePrice } = usePrice();

    const handleDriveChange = (drive: DriveOption) => {
        setSelectedDrive(drive);
        setDrivePrice(drive.price);
    };

    return (
      <div className="drive">
        <div className="text select-text">Warp drive:</div>
        <div className="options">
            {driveOptions.map((drive) => (
                <div key={drive.name} className={`option ${selectedDrive.name === drive.name ? 'selected' : ''}`} onClick={() => handleDriveChange(drive)}>
                    <div className="drive-text">
                        <div className="text option-text">
                            {drive.name}
                        </div>
                        <div className="price">
                            {`+${drive.price}€`}
                        </div>
                    </div>
                </div>
            ))}
        </div>
      </div>
    );
  };
  
  export default Drive;