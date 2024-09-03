const initialState = {
    compoundInterest: 0,
    principal: 0,
    compoundInterval: 12,
    totalTimeInYears: 0,
};

export default function calculatorReducer(state = initialState, action) {
    switch (action.type) {
        case 'CALCULATE_COMPOUND_INTEREST':
            return {
                ...state,
                principal: action.payload.principal,
                compoundInterest: action.payload.interest,
                compoundInterval: action.payload.compoundInterval,
                totalTimeInYears: action.payload.totalTimeInYears
            };
        default:
            return state;
    }
}







