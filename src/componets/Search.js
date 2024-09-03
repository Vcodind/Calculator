import React from 'react'

function Search() {
  return (
      <div classNameName="search">
                  <input  className='sear' style={{width:"100%", borderRadius:"1rem", padding:"1rem", border:"none", boxShadow:" rgba(0, 0, 0, 0.15) 0px 5px 15px 0px", marginTop:"0.8rem"}} type="text" placeholder= "Search for a calculator or converter" />
                    <button className="mbtn" style={{backgroundColor:"#a1c6a1"}}> <i className="ri-hand-coin-fill"></i><span>Finance</span> </button>
                    <button className="mbtn"> <i className="ri-git-merge-line"></i> <span>Featured Units</span> </button>
                    <button className="mbtn"> <i className="ri-arrow-left-right-line"></i> <span>Unit Convertor</span> </button>
                    <button className="mbtn"> <i className="ri-file-hwp-line"></i><span>Handy</span> </button>
                    <button className="mbtn"> <i className="ri-bowl-line"></i><span>Cooking</span> </button>
                    <button className="mbtn"> <i className="ri-first-aid-kit-fill"></i> <span>Health</span></button>
                
                </div>
  )
}

export default Search
