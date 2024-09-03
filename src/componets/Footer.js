import React, { useState } from 'react';

function Footer() {

    const [footerLinks, setFooterLinks] = useState([
        { title: 'Finance Popular', links: ['Compound Interest Calculator', 'Loan Calculator', 'Credit Card Payment Calculator'] },
        { title: 'Conversions Popular', links: ['Compound Interest Calculator', 'Loan Calculator', 'Credit Card Payment Calculator'] },
        { title: 'Health Popular', links: ['Compound Interest Calculator', 'Loan Calculator', 'Credit Card Payment Calculator'] },
        { title: 'Handy&Fun Popular', links: ['Compound Interest Calculator', 'Loan Calculator', 'Credit Card Payment Calculator'] },
        { title: 'Cooking Popular', links: ['Compound Interest Calculator', 'Loan Calculator', 'Credit Card Payment Calculator'] },
        { title: ' Conversions Popular', links: ['Compound Interest Calculator', 'Loan Calculator', 'Credit Card Payment Calculator'] },
    ]);

    return (
        <>
            <footer className="footer">
                <div className="footer-links">
                    {footerLinks.map((category, index) => (
                        <div key={index} className="link-category">
                            <h3>{category.title}</h3>
                            <ul>
                                {category.links.map((link, index) => (
                                    <li key={index}>
                                        <a href="#">{link}</a>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>
            </footer>
            <div className='footardate'>
                <h1>LOGO</h1>
                <h5>Copyright &copy; {new Date().getFullYear()} Calculator & Converters Hub</h5>
                <p>Hazell industries, 124 City Rode,London.EC1V 2Nx</p>
            </div>
        </>
    )
}

export default Footer
