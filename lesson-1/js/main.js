const products = [
  { id: 1, title: "Notebook", price: 20000 },
  { id: 2, title: "Mouse", price: 1500 },
  { id: 3, title: "Keyboard", price: 5000 },
  { id: 4, title: "Gamepad", price: 4500 }
];

const renderProduct = (title, price) => {
  return `<div class="card"> 
            <img class="card__preview" src="https://www.placecage.com/260/280">          
            <p class="card__descr">${title}</h3>
            <p class="card__price">${price}</p>
            <button class="button card__button">Добавить в корзину</button>
          </div>`;
};

const renderProducts = list => {
  const productList = list.map(item => renderProduct(item.title, item.price));
  let productsListInStr = productList.join().replace(/,/g, "");
  console.log(productsListInStr);
  document.querySelector(".cards-list").innerHTML = productsListInStr;
};

renderProducts(products);
