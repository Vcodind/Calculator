import React from 'react'
import { Link } from 'react-router-dom'

function Header() {
  return (
    <div className='header'>
           <Link to='/'> <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR5ace2F6UvNjqVXfTjuDzDGvg9DfauyPcqMfpKzJZlfyq4ToCNZFSBiF5PS5QtywYK9qE&usqp=CAU" alt="" /><span>Calc</span></Link>
           <span style={{fontSize:"1.5rem"}}>Article</span>
    </div>
  )
}
export default Header
