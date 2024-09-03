import React, { useState } from 'react';

function Data() {

    const [latestArticles, setLattArticles] = useState([
        {
            title: 'Maximizing your investments: Understanding compound interest',
            disc: 'in the realm of personal finance ,few concepts wiled as much power and promise as compon...',
            link: '#',
            imageUrl: ''
        },
        {
            title: 'Maximizing your investments: Understanding compound interest',
            disc: 'in the realm of personal finance ,few concepts wiled as much power and promise as compon...',
            link: '#',
            imageUrl: ''
        },
        {
            title: 'Maximizing your investments: Understanding compound interest',
            disc: 'in the realm of personal finance ,few concepts wiled as much power and promise as compon...',
            link: '#',
            imageUrl: ''
        },
        {
            title: 'Maximizing your investments: Understanding compound interest',
            disc: 'in the realm of personal finance ,few concepts wiled as much power and promise as compon...',
            link: '#',
            imageUrl: ''
        },

    ]);

    const [newArticle, setnewArticles] = useState([
        {
            title: 'Maximizing your investments: Understanding compound interest',
            disc: 'in the realm of personal finance ,few concepts wiled as much power and promise as compon...',
            link: '#',
            imageUrl: ''
        },
        {
            title: 'Maximizing your investments: Understanding compound interest',
            disc: 'in the realm of personal finance ,few concepts wiled as much power and promise as compon...',
            link: '#',
            imageUrl: ''
        },
        {
            title: 'Maximizing your investments: Understanding compound interest',
            disc: 'in the realm of personal finance ,few concepts wiled as much power and promise as compon...',
            link: '#',
            imageUrl: ''
        },
        {
            title: 'Maximizing your investments: Understanding compound interest',
            disc: 'in the realm of personal finance ,few concepts wiled as much power and promise as compon...',
            link: '#',
            imageUrl: ''
        },
        {
            title: 'Maximizing your investments: Understanding compound interest',
            disc: 'in the realm of personal finance ,few concepts wiled as much power and promise as compon...',
            link: '#',
            imageUrl: ''
        },

    ]);

    return (
        <>

            <div className='data_one'>
                <div className="latest-articles">
                    <h2>Latest Articles</h2>
                    <div className="article-grid">
                        {latestArticles.map((article, index) => (
                            <div key={index} className="article">
                                {/* <img src={article.imageUrl} alt="" /> */}
                                <button>{article.imageUrl} </button>
                                <h4>{article.title}</h4>
                                <p>{article.disc}</p>
                                <a href={article.link}>Read More</a>
                            </div>
                        ))}
                    </div>
                </div>
                <div className="box-article">
                    {newArticle.map((article, index) => (
                        <div key={index} className='col'>
                            <div className="box">
                                <button>hello</button>
                            </div>
                            <div className="conte">
                                <h5> {article.title}</h5>
                                <p>{article.disc}</p>
                                <a href={article.link}>Read More</a>
                            </div>
                        </div>
                    ))}

                </div>
            </div>
        </>
    )
}

export default Data
