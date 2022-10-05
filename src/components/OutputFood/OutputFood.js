import React from 'react';
import "./OutputFood.css"
import { BsBasketFill } from 'react-icons/bs'
import { BsStarFill } from 'react-icons/bs'
import { BsStarHalf } from 'react-icons/bs'



export default function OutputFood(props) {


  return (
    <div className='container'>

      <div className='row'>

        {
         props.data.map((el) => {

            return (
              <div key={el.id} className="col-3">
               
                  <div className="image">
                    {/* <img src={el.image} alt="" /> */}
                    <img src="https://www.orbismarketwatch.com/wp-content/uploads/2021/10/1030_teen_brain_food_choices.jpg" alt="" style={{ width: "100%" }} />
                  </div>
                
                <div className="info">
                  <h3>{el.name}</h3>

                  <ul className='rating'>
                    <li><BsStarFill /></li>
                    <li><BsStarFill /></li>
                    <li><BsStarFill /></li>
                    <li><BsStarFill /></li>
                    <li><BsStarHalf /></li>
                  </ul>
                  <div className='info_price'>
                    <span className="price">{el.price} coм</span>
                    <button onClick={() => props.onAdd(el)} className='add-to-card'><BsBasketFill /></button>
                  </div>

                </div>
              </div>
            )
          })

        }


      </div>
    </div>



  )

}
