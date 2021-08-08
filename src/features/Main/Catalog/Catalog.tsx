import './catalog.css'

function Catalog() {
    const items =  [
        {
            url: './img/1.jpg',
            title: 'Сонячна батарея LongiSolarLR6-72HPH-540M',
            description: 'Потужність на 1м2: 209,7 Вт',
            price: 5488,
        },
        {
            url: './img/2.jpg',
            title: 'Сонячна батарея LongiSolarLR5-72HPH-540M',
            description: 'Потужність на 1м² - 209,1Вт',
            price: 5012,
        }
        ,
        {
            url: './img/3.jpg',
            title: 'Сонячна батарея JinkoSolarJKM340M-60Н-V',
            description: 'Потужність на 1м² - 200Вт',
            price: 3012,
        }
        ,
        {
            url: './img/4.jpg',
            title: "Сонячна батарея Jinko Solar JKM405M-72H-V",
            description: 'Потужність на 1м2: 201,4 Вт',
            price: 4116,
        }
        ,
        {
            url: './img/5.jpg',
            title: 'Сонячна батарея  Inter Energy IE158-72M-H-430M',
            description: 'Потужність на 1м² - 200,1 Вт',
            price: 3660,
        }
        ,
        {
            url: './img/6.jpg',
            title: 'Сонячна батарея Jinko Solar JKM340M-60Н-V',
            description: 'Потужність на 1м² - 172,5 Вт',
            price: 2012,
        }
    ]

  return (
    <div className='catalog'>
      {items.map(({ url, title, description, price }) => {
          return (
              <div className='product-container'>
                  <img className='product-image' src={url}></img>
                  <h6 className='product-title'>{title}</h6>
                  <span className='product-description'>{description}</span>
                  <span className='product-price'>{price} грн</span>
                  <button>Придбати</button>
              </div>
          )
      })}
    </div>
  );
}

export default Catalog;