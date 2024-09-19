import { createContext, useContext } from 'react';

// Define the type for the context
interface PriceContextType {
    colorPrice: number;
    setColorPrice: (price: number) => void;
    powerPrice: number;
    setPowerPrice: (price: number) => void;
    drivePrice: number;
    setDrivePrice: (price: number) => void;
    packagePrice: number;
    setPackagePrice: (price: number) => void;

}

// Create the context with a default value
export const PriceContext = createContext<PriceContextType | undefined>(undefined);

// Create a custom hook for using the context
export const usePrice = () => {
    const context = useContext(PriceContext);
    if (context === undefined) {
        throw new Error('usePrice must be used within a PriceProvider');
    }
    return context;
};
