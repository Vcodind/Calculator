export const calculateCompoundInterest = (principal, rate, years, months, compoundInterval) => {
  return dispatch => {
      // Convert total time to years
      const totalTimeInYears = years + (months / 12);

      // Calculate compound interest
      const interest = principal * Math.pow((1 + rate / compoundInterval), compoundInterval * totalTimeInYears) - principal;
      
      // Dispatch the results to the reducer
      dispatch({
          type: 'CALCULATE_COMPOUND_INTEREST',
          payload: {
              interest,
              principal,
              totalTimeInYears,
              compoundInterval
          }
      });
  };
};
