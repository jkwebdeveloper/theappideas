import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import menu_logo from '../assets/images/menu_logo.png'
import MenuData from './MenuData'

const Menu = () => {
  const [items, setItems] = useState(MenuData)
      

  const filterItem = (cateItem) => {
    const updateItems = MenuData.filter((curElem) => {
      return curElem.category === cateItem
    })

    setItems(updateItems)
  }
  
  return (
    <section className="section kf-menu kf-menu-tabs">
      <div className="container">
        <div className="kf-titles align-center">
          <div className="kf-subtitle" data-animate="active">
            Choisissez le meilleur menu
          </div>
          <h3 className="kf-title" data-animate="active">
            Choisissez le meilleur menu
          </h3>
        </div>
        <div className="kf-filter kf-filter-menu" data-animate="active">
          <a to="#" data-href=".all" onClick={() => setItems(MenuData)}>
            Toute
          </a>
          <a
            to="#"
            data-href=".hot-coffee"
            onClick={() => filterItem('Entrées')}
          >
            Entrées
          </a>
          <a to="#" data-href=".hot-coffee" onClick={() => filterItem('Plats')}>
            Plats
          </a>
          <a
            to="#"
            data-href=".hot-coffee"
            onClick={() => filterItem('Boissons')}
          >
            Boissons
          </a>
          <a to="#" data-href=".dessert" onClick={() => filterItem('Desserts')}>
            Desserts
          </a>
          <a to="#" data-href=".dessert" onClick={() => filterItem('Salades')}>
            Salades
          </a>
        </div>
        {/* {plats == true || desserts == true ? null : ( */}
        <div
          className="kf-menu-items"
          style={{ backgroundImage: `url(${menu_logo})` }}
        >
          <div className="row">
            {items.map((elem) => {
              const { id, name, image, description, price } = elem

              return (
                <div
                  key={id}
                  className="kf-menu-item-col col-xs-12 col-sm-12 col-md-12 col-lg-6 all hot-coffee"
                >
                  <div className="kf-menu-item" data-animate="active">
                    <div className="image kf-image-hover">
                      <Link to="#" className="has-popup-image">
                        <img src={image} alt={name} />
                      </Link>
                    </div>
                    <div className="desc">
                      <h5 className="name">{name}</h5>
                      <div className="subname">{description}</div>
                      <div className="price">{price}</div>
                    </div>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Menu