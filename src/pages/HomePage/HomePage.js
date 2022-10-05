import React, { useState } from 'react';
import Foot from '../../components/Foot/Foot';
import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer'
import Basket from '../../components/Basket/Basket';
import Modal from '../../components/Modal/Modal'
import Dessert from '../../components/Dessert/Dessert';

export default function HomePage() {


  const [cardItems, setCardItems] = useState([])

  const [show, setShow] = useState(false)




  const onAdd = (product) => {
    const exist = cardItems.find((x) => x.id === product.id);
    if (exist) {
      setCardItems(
        cardItems.map((x) =>
          x.id === product.id ? { ...exist, qty: exist.qty + 1 } : x
        )
      );
    } else {
      setCardItems([...cardItems, { ...product, qty: 1 }]);
    }
  };



  const onRemove = (product) => {
    const exist = cardItems.find((x) => x.id === product.id);
    if (exist.qty === 1) {
      setCardItems(cardItems.filter((x) => x.id !== product.id));
    } else {
      setCardItems(
        cardItems.map((x) =>
          x.id === product.id ? { ...exist, qty: exist.qty - 1 } : x
        )
      );
    }
  };



  return <div>
    <Header countCartItems={cardItems.length}
      setShow={setShow}
    />
   
    <Modal
      show={show}
      setShow={setShow} >

  <Basket
        cardItems={cardItems}
        onAdd={onAdd}
        onRemove={onRemove}
      />




    </Modal>
  

    <Foot onAdd={onAdd} />




    <Footer />
  </div>;
}