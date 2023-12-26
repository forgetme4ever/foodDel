const modalFunc = () => {
  const modal = document.querySelector(".cart-modal__overlay");
  const cartBtn = document.getElementById("cart-button");

  const openModal = () => {
    modal.classList.add("open");
  };

  const closeModal = () => {
    modal.classList.remove("open");
  };

  cartBtn.addEventListener("click", () => {
    openModal();
  });

  modal.addEventListener("click", (e) => {
    if (
      e.target.classList.contains("cart-modal__overlay") ||
      e.target.closest(".cart-modal__header--close")
    ) {
      closeModal();
    }
  });
};

const restsFunc = () => { 
    const container = document.querySelector('#rests-container');
    const restArray = [
        {
            id:0,
            title: 'Pizza Plus',
            time: 50,
            rating: 4.5,
            price: 8,
            type: 'Pizza',
            image: 'pizza.jpg'
        },
        {
            id:1,
            title: 'Tanuki',
            time: 50,
            rating: 4.5,
            price: 9,
            type: 'Sushi',
            image: 'tanuki.jpg'
        },
        {
            id:2,
            title: 'Food Band',
            time: 50,
            rating: 4.5,
            price: 9,
            type: 'Pizza',
            image: 'foodBand.jpg'
        },
        {
            id:3,
            title: 'Zhadina',
            time: 50,
            rating: 4.5,
            price: 8,
            type: 'Pizza',
            image: 'zhad.jpg'
        },
        {
            id:4,
            title: 'Food Point',
            time: 50,
            rating: 4.5,
            price: 8,
            type: 'Sushi',
            image: 'pointFood.jpg'
        },
        {
            id:5,
            title: 'Pizza Burger',
            time: 50,
            rating: 4.5,
            price: 8,
            type: 'Pizza',
            image: 'pizzaBurg.jpg'
        }
    ]

    const loading = () => {
        container.innerHTML = '<p style="width:100%; text-align: clearInterval;">Loading</p>'
    }
    

    const renderRests = (array) => {
        container.innerHTML = ''
        array.forEach((card) => {
            container.insertAdjacentHTML('beforeend', `
            
            <a href="goods.html?id=${card.id}" class="products-card">
                    <div class="products-card__image">
<img src="/images/rests/${card.image}" alt="${card.image}">
                    </div>
                    <div class="products-card__description">
                        <div class="products-card__description-row">
                            <h4 class="products-card__description--title">${card.title}</h4>
                            <div class="products-card__description--badge">${card.time} min</div>
                        </div>
                        <div class="products-card__description-row">
                           <div class="products-card__description-info">
                            <div class="products-card__description-info--rating">
                                <img src="/images/items/star.svg" alt="icon: star">
                                ${card.rating}
                            </div>
                            <div class="products-card__description-info--price">From $${card.price}</div>
                            <div class="products-card__description-info--group">Pizza</div>

                           </div>
                        </div>
                    </div>
                </a>
            `)
        });
    }
    if (container) {
        loading()
    setTimeout(() => {
        renderRests(restArray)
    }, 1000)
    }
}


modalFunc();
restsFunc()