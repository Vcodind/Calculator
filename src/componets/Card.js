import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { getButtons, removeButtons } from '../redux/Action';
import { addButton, removeButton } from '../redux/Reducer';

function Card(props) {
    const dispatch = useDispatch();
    const buttonsState = useSelector((state) => state.buttons);
    const buttons = buttonsState.buttons;

    dispatch(getButtons(), removeButtons());  
        
    const handleAddButton = () => {
        dispatch(addButton({ label: 'calculate interest' })); 
    };    
    const handleRemoveButtons = () => {
        dispatch(removeButton())  
    }       
      
    return (  
        <div className='container'>
            <div className='card' style={{ backgroundColor: props.backgroundColor }}>
                <div className='card-body'>
                    <img src="https://cdn3.iconfinder.com/data/icons/finance-152/64/28-512.png" alt="" />
                    <h1>{props.item}</h1>
                    <p> A suite of financial calculators to assist with projections for savings,investments,loans,mortgages and small business calculations.</p>
                </div>
                <div className='card__btn'>  

                    {buttons.map((button) => (
                        <Link to="/second">
                            <button className='btn'>{button.label}</button>
                        </Link> 
                    ))}
                    {props.isFirstCard && (
                        <button style={{ backgroundColor: "cadetblue" }} onClick={handleAddButton}>Explore More Calculator</button>
                    )}
                </div>   
                <i  style={{ height:"1rem", width:"1rem", backgroundColor:"white", borderRadius:"1rem", textAlign:"center", }} className="ri-arrow-up-s-line" onClick={handleRemoveButtons} ></i>
            </div>
        </div>
    );
}

export default Card;
