import React, { createContext, useContext, useState, ReactNode } from 'react';

interface TemperatureContextType {
    degree: "C" | "F";
    setDegree: (value: "C" | "F") => void;
}

export const TemperatureContext = createContext<TemperatureContextType>({
    degree: "C",
    setDegree: () => {} 
});

interface TemperatureProviderProps {
    children: ReactNode;
}

export const TemperatureProvider: React.FC<TemperatureProviderProps> = ({ children }) => {
    const [degree, setDegree] = useState<"C" | "F">("C");

    return (
        <TemperatureContext.Provider value={{ degree, setDegree }}>
            {children}
        </TemperatureContext.Provider>
    );
};

export const useTemperature = (): TemperatureContextType => {
    const context = useContext(TemperatureContext);
    if (!context) {
        throw new Error('useTemperature must be used within a TemperatureProvider');
    }
    return context;
};
