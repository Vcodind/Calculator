import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { assets } from '../asset/assets';

function Sec2() {
    const [viewType, setViewType] = useState('year')
    const compoundInterest = parseFloat(useSelector((state) => state.calculator.compoundInterest)) || 0;
    const principal = parseFloat(useSelector((state) => state.calculator.principal)) || 0;
    const totalTimeInYears = parseFloat(useSelector((state) => state.calculator.totalTimeInYears)) || 0;
    const totalMonths = Math.round(totalTimeInYears * 12);
    console.log(principal);

    const monthlyRate = Math.pow(1 + (compoundInterest / principal), 1 / totalMonths) - 1;
    const yearlyRate = Math.pow(1 + (compoundInterest / principal), 1 / totalTimeInYears) - 1;

    const rows = [];
    if (viewType === 'month') {
        for (let i = 1; i <= totalMonths; i++) {   
            const accumulatedInterest = principal * Math.pow((1 + monthlyRate), i) - principal;
            const totalForMonth = principal + accumulatedInterest;
            rows.push({
                label: `month ${i}`,
                interest: accumulatedInterest,
                principal: principal,
                total: totalForMonth
            });
        }
    } else {
        for (let i = 1; i <= totalTimeInYears; i++) {
            const accumulatedInterest = principal * Math.pow((1 + yearlyRate), i) - principal;
            const totalForYear = principal + accumulatedInterest;
            rows.push({
                label: `Year ${i}`,
                interest: accumulatedInterest,
                principal: principal,
                total: totalForYear,
            });
        }
    }



    return (
        <>
            <div className="conv">
                <div className="seccon">
                    <div className="card2">
                        <h2>Interest calculation for {totalTimeInYears} years</h2>
                        <div className="cardss2">
                            <div className="cardd2" style={{ backgroundColor: "rgb(193 161 198)" }}>
                                <p>Future investment value</p>
                                <h4>{(principal + compoundInterest).toFixed(2)}</h4>
                                <img src={assets.copy.png} alt="" />
                            </div>
                            <div className="cardd2" style={{ backgroundColor: "#a1c6a1" }}> 
                                <p>Total interest earned</p>
                                <h4>{compoundInterest.toFixed(2)}</h4>
                                <img src={assets.copy.png} alt="" />
                            </div>
                            <div className="cardd2" style={{ backgroundColor: "rgb(161 167 198)" }}>
                                <p>Initial balance</p>
                                <h4>{principal.toFixed(2)}</h4>
                            </div>
                        </div> 
                        <div className="bt"> 
                            <button className="bt1"> <strong>5% </strong>Nominal rate (yearly)</button>
                            <button className="bt1"> <strong>5% </strong>Nominal rate (yearly)</button>
                        </div>
                        <hr />
                        <div className="year">
                            <select value={viewType} onChange={(e) => setViewType(e.target.value)}>
                                <option value="">Year</option>
                                <option value="option3">Month</option>
                            </select>
                            <div className="icon"> 
                                <i style={{
                                    backgroundColor: "rgb(109, 230, 178)",
                                    height: "2rem",
                                    width: "2rem",
                                    borderRadius: "0.2rem",
                                    textAlign: "center",
                                    padding: "0.4rem",
                                }} className="ri-folder-chart-line"></i>
                                <i className="ri-line-chart-fill"></i>
                                <i className="ri-bar-chart-horizontal-line"></i>
                            </div>
                        </div>
                        <div className="table"> 
                            <div className='.table-wrapper'>  
                                <div className="table-container">
                                    <table>
                                        <tbody>
                                            <tr>
                                                <td>{viewType === 'year' ? 'year' : 'month'}</td>
                                                <td>Interest</td>
                                                <td style={{ backgroundColor: "#d9f1d9" }}>Principal</td>
                                                <td style={{ backgroundColor: "#f1e2d9" }}>Total</td>
                                            </tr> 
                                            {rows.map((row, index) => (
                                                <tr key={index}>
                                                    <td>{row.label}</td>
                                                    <td>{row.interest.toFixed(2)}</td>
                                                    <td style={{ backgroundColor: "#d9f1d9", color: "green" }}>{row.principal.toFixed(2)}</td>
                                                    <td style={{ backgroundColor: "#f1e2d9", color: "orange" }}>{row.total.toFixed(2)}</td>
                                                </tr>
                                            ))}
                                        </tbody>
                                    </table>
                                </div>
                                <div className="bts">
                                    <div className="btss">
                                        <button className="btn">Start over</button>
                                    </div>
                                    <div className="btts">
                                        <button className="btn">CSV</button>
                                        <button className="btn">Share</button>
                                    </div>
                                </div>
                            </div>
                            </div>
                        </div>
                    </div>
                    <div className="cot">
                        <h2>Using our interest calculator</h2>
                        <p>Our interest calculator helps you calculate the interest on your savings or loan. You can use it to determine how much interest you will earn or pay over a period of time. The calculator takes into account the principal.</p>
                        <h2>What is compound interest?</h2>
                        <p>Compound interest is the interest calculated on the initial principal, which also includes all the accumulated interest from previous periods on a deposit or loan. In other words, compound interest is the interest earned on both the principal and</p>
                        <div className='wealth'> 
                            <h3>"My wealth has come from a combination of living in America, some lucky genes, and compound interest."</h3>
                            <p>Warren Buffett, 2010</p>
                        </div>
                        <h2>How is compound interest calculated?</h2>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates blanditiis facere veritatis temporibus, officiis adipisci aliquid voluptate vitae eos quia dolorem harum ab beatae nam earum? Nihil sapiente ut soluta?</p>
                        <h4>Compound interest is calculated using the formula: A = P(1 + r/n)^(nt), where A is the amount of money accumulated after n years, including interest, P is the principal amount, r is the annual interest rate (in decimal), n is the number of times that interest is compounded per year, and t is the time the money is invested or borrowed for, in years.</h4>
                    </div>
                </div>
            </>
            );
}
            export default Sec2;
