import React from 'react';
import './About.css'

export default function About() {
  return (

        <div className='about'>
          <div className="container">
          <div className="about__us">
            <p id='history'>Наша История</p>
            <div className="about__us_all">
              

              <p className='text'>Как и у любого другого самобытного места, у нас есть своя, особая история. Идея ресторана пришла основателям неожиданно. Во время прогулки по лесу создатель нашего ресторана застрял в сотнях километров от ближайшего населенного пункта. Вдали от цивилизации и связи им пришлось навремя обустровать себе нехитрый быт, добывать и готовить себе еду. Lorem ipsum dolor sit amet consectetur, adipisicing elit. Deserunt dolorum fuga iusto quam pariatur inventore aliquam accusamus tenetur exercitationem iure aliquid reprehenderit, officiis esse consectetur quia quisquam voluptas a. Veritatis, vel! Porro voluptatibus voluptatum sequi eos! Aliquam mollitia magni quae. Numquam illum, quidem consequatur ad incidunt distinctio laudantium. Tenetur, fugiat.</p>

              <img id='about_img' src="https://chankete.com/wp-content/uploads/2021/11/icon-01.png" alt="" />

            </div>

              <img id='img' src="https://img03.rl0.ru/afisha/o/www.afisha.ru/uploads/images/c/3e/c3e7e102365a4a7f946d3d9a4c9a2368.jpg" alt="" />
          </div>

          <div className="about__comments">
            <p id='comments'>Отзывы о нашем ресторане</p>

            <div className="comments__all">

            <div className="comments__col-3">
              <p className='text'>Ужинали с партнёрами в данном ресторане. Ресторан реально высокой кухни - от приготовления блюд, до оформления с подачей. Все изысканно и вкусно. Стейки - шикарные, заказывал прожарку медиум-велл, принесли точно, что и просил. Ну и приятно удивили цены - очень демократично. </p>
              <img src="https://imageio.forbes.com/specials-images/imageserve/61688aa1d4a8658c3f4d8640/Antonio-Juliano/0x0.jpg?fit=bounds&format=jpg&width=960" alt="" />
              <h3>Evgeny R.</h3>
            </div>

            <div className="comments__col-3">
              <p className='text'>Искали в интернете где поужинать и по совету местных коллег пришли сюда. Очень красивые интерьеры, отличное меню, авторские десерты и чаи. Нам повели экскурсию по всему ресторану удивительно красивое место. В целом - очень приятные впечатления от ресторана, в следующий раз зайдем .</p>
              <img src="https://cdn.lifehack.org/wp-content/uploads/2014/03/shutterstock_97566446.jpg" alt="" />
              <h3>Anna N.</h3>
            </div>

            <div className="comments__col-3">
              <p className='text'>Зашли быстро покушать, а просидели в удовольствие три часа))) еда и десерты вкусные, обстановка уютная. Сидели на улице, есть столики и отдельные шатры со шторками. После 20.00 живая музыка. Внутри здания очень респектабельные интерьеры, есть два зала больших и маленькие залы.</p>
              <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcReKjGxrT5SVZyo98SntDFL-rlk5aSJJytZfA&usqp=CAU" alt="" />
              <h3>Olivia W.</h3>
            </div>

            </div>

            </div>

          </div>

        </div>
  )
}