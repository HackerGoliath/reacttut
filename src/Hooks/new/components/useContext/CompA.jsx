import React, { createContext } from 'react'
import CompB from './CompB';

const BioData = createContext();
const CompA = () => {
    return (
        <div>
            <BioData.Provider value={"Deepak Bhai"}>
                <CompB />
            </BioData.Provider>
        </div>
    )
}

export default CompA
export { BioData }

// Steps:
// Create Context
// Provider
// Consumer