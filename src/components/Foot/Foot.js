import React, { useState, useEffect } from 'react';
import OutputFood from '../OutputFood/OutputFood';







export default function Food(props) {
  const { onAdd } = props;

  const [data, setData] = useState([])

  const getData = async () => {
    let req = await fetch('https://ashkana.herokuapp.com/products/')
    let res = await req.json()
    setData(res)
  }
  console.log(data);
  useEffect(() => {
    getData()
  }, [])

  return (
    <div >

     <OutputFood
       data={data}
       onAdd={onAdd}/>
    </div>);
}
