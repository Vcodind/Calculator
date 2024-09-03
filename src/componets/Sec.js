import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { calculateCompoundInterest } from '../redux/CalAction';

function Sec() {
    const dispatch = useDispatch();
    const compoundInterest = useSelector((state) => state.calculator.compoundInterest);
    const [selectedOption, setSelectedOption] = useState('');
    const [principal, setPrincipal] = useState('');    
    const [rate, setRate] = useState('');
    const [years, setYears] = useState('');
    const [months, setMonths] = useState('');
    const [compoundInterval, setCompoundInterval] = useState(12); 

    const handleOptionChange = (event) => {
        setSelectedOption(event.target.value);
    };

    const handleCalculateClick = (event) => {
        event.preventDefault();

        const principalValue = parseFloat(principal);
        const rateValue = parseFloat(rate)/100 ;
        const yearsValue = parseFloat(years) || 0;
        const monthsValue = parseFloat(months) || 0;

        if (isNaN(principalValue) || isNaN(rateValue) || isNaN(yearsValue) || isNaN(monthsValue)) {
            alert("Please enter valid numbers for Principal, Rate, and Time.");
            return;
        }           
        dispatch(calculateCompoundInterest(principalValue, rateValue, yearsValue,monthsValue, compoundInterval));
    };

    console.log("Principal:", principal);
    console.log("Compound Interest:", compoundInterest);
    

    return (
        <div className="cards">
            <form>
                <div className="card1">
                    <label htmlFor="">Currency</label>
                    <div className='btn'>
                        <button>$</button>
                        <button style={{ backgroundColor: "rgb(109, 230, 178)" }}>$</button>
                        <button>$</button>
                        <button>$</button>
                        <button>$</button>
                        <button>$</button> 
                    </div>
                    <div className='initial'>
                        <label htmlFor="">Initial investment</label>
                        <input type="number" placeholder="12000" value={principal} onChange={(e) => setPrincipal(e.target.value)} />
                    </div>
                    <label htmlFor="">Interest rate</label>
                    <div className='interest-ret'>
                        <input type="number" placeholder='3%' value={rate}  onChange={(e) => setRate(e.target.value)} />
                        <select value={selectedOption} onChange={handleOptionChange}>
                            <option value="">Year</option>
                            <option value="option1">1 Year</option>
                            <option value="option2">3 Year</option>
                            <option value="option3">6 Year</option>
                        </select>
                        <div style={{
                            backgroundColor: "rgb(243, 243, 243)", 
                            display: "flex",
                            gap: "0.5rem",
                            borderRadius: "1rem",
                            textAlign: "center",
                            padding: "0 0.5rem",
                            boxShadow: "rgba(0, 0, 0, 0.15) 2.4px 2.4px 3.2px"
                        }}>
                            <p style={{ backgroundColor: "rgb(109, 230, 178)", borderRadius: "0.3rem", padding: "0.2rem" }}>Nominal</p><span><p>AER</p></span>
                        </div>
                    </div> 
                    <div className="ym">
                        <div className="year">
                            <label htmlFor="">Years</label>
                            <div>
                                <input type="number" value={years} placeholder='5 yrs' onChange={(e) => setYears(e.target.value)}  />
                            </div>
                        </div>
                        <div className="Months">
                            <label htmlFor="">Months</label>
                            <div>
                                <input type="text" placeholder='2 mo' value={months}  onChange={(e) => setMonths(e.target.value)} />
                            </div>
                        </div>
                    </div>
                </div>
                <div className="additional">
                    <label htmlFor="">Additional contributions (Optional)</label>  
                    <div className='deposit'>
                        <button>None</button>
                        <button style={{ backgroundColor: "rgb(109, 230, 178)" }}>Deposit</button>
                        <button>Withdrawals</button> 
                        <button>Both</button>
                    </div>
                    <label htmlFor="">Initial investment</label>
                    <div className="initial">
                        <input type="number" placeholder='$23000' />
                        <select value={selectedOption} onChange={handleOptionChange}> 
                            <option value="">Year</option>
                            <option value="option1">Option 1</option> 
                            <option value="option2">Option 2</option> 
                            <option value="option3">Option 3</option>
                        </select> 
                    </div>
                    <label htmlFor="">Annual deposit % increase? (Optional)</label>
                    <div className="annual">
                        <input type="text" placeholder='%' />
                    </div> 
                </div>  
                <div className="compound">  
                    <label htmlFor="">Compound interval</label> 
                    <select value={compoundInterval} onChange={(e) => setCompoundInterval(parseInt(e.target.value))}>
                        <option value="12">Monthly (12/year)</option>
                        <option value="4">Quarterly (4/year)</option>
                        <option value="2">Bi-Annually (2/year)</option>    
                        <option value="1">Annually (1/year)</option> 
                        <option value="365">Daily (365/year)</option>
                    </select> 
                    <button onClick={handleCalculateClick}>Calculate</button>
                    <p>Compound Interest: {compoundInterest ? compoundInterest.toFixed(2) : '0.00'}</p>
                </div>
            </form>
        </div >
    );
}

export default Sec;
