import { PriceContext } from '../Context'; 
import Color from './Color';
import Power from './Power';
import Drive from './Drive';
import Package from './Package';
import Total from './Total';
import Illustration from './Illustration';
import { useState } from 'react';

function Main() {
  const [colorPrice, setColorPrice] = useState<number>(0);
  const [powerPrice, setPowerPrice] = useState<number>(0);
  const [drivePrice, setDrivePrice] = useState<number>(0);
  const [packagePrice, setPackagePrice] = useState<number>(0);

  return (
      <PriceContext.Provider value={{ colorPrice, setColorPrice, powerPrice, setPowerPrice, drivePrice, setDrivePrice, packagePrice, setPackagePrice }}>
          <main>
              <div className="column">
                  <Color />
                  <Power />
                  <Drive />
                  <Package />
              </div>
              <div className="sidebar">
                  <Total />
                  <Illustration />
              </div>
          </main>
      </PriceContext.Provider>
  );
}
  
  export default Main;