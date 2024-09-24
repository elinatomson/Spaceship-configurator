import arrow from '../assets/Vector.svg'; 
import { usePrice } from '../Context'; 

function Total() {
    const { colorPrice } = usePrice(); 
    const { powerPrice } = usePrice(); 
    const { drivePrice } = usePrice(); 
    const { packagePrice } = usePrice(); 
    const basePrice = 1000;
    
    const totalPrice = basePrice + powerPrice + colorPrice + drivePrice + packagePrice;

    return (
        <div className="total-container">
            <div className="total-box">
                <div className="total-row">
                    <div className="text total-text">Base price:</div>
                    <div className="total-price">{basePrice}€</div>
                </div>
                <div className="total-row">
                    <div className="text total-text">Color:</div>
                    <div className="total-price">+{colorPrice}€</div>
                </div>
                <div className="total-row">
                    <div className="text total-text">Power:</div>
                    <div className="total-price">+{powerPrice}€</div>
                </div>
                <div className="total-row">
                    <div className="text total-text">Warp drive:</div>
                    <div className="total-price">+{drivePrice}€</div>
                </div>
                <div className="total-row">
                    <div className="text total-text">Option package:</div>
                    <div className="total-price">+{packagePrice}€</div>
                </div>
                <hr/>
                <div className="total">
                    <div className="text sum-text">Total:</div>
                    <div className="text option-text">{totalPrice}€</div>
                </div>
            </div> 
            <button>
                <div className="checkout-label">
                    <div className="text checkout-text">
                        Checkout
                    </div>
                </div>
                    <div className='checkout-icon'>
                        <img src={arrow} alt="Arrow" className="checkout-arrow"/>
                    </div>
            </button>
        </div>
    );
  };
  
  export default Total;
