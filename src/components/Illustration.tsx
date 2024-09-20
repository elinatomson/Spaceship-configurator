import { usePrice } from '../Context';
import snow from '../assets/Snow.svg'; 
import volcano from '../assets/Volcano.svg'; 
import sky from '../assets/Sky.svg'; 

function Illustration() {
    const { colorName } = usePrice();

    const getImageSrc = () => {
        switch (colorName) {
            case 'Snow':
                return snow;
            case 'Volcano':
                return volcano;
            case 'Sky':
                return sky;
            default:
                return snow; 
        }
    };

    return (
        <div>
            <img src={getImageSrc()} alt={colorName} className="illustration" />
        </div>
    );
}

export default Illustration;
