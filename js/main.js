class ProductsList {
    constructor(container = '.products'){
        this.data = [];
        this.container = container;
        this.productsAll = [];
        this.init();
    }
    init(){
        this._fetchProducts();
        this._render();
    }
    _fetchProducts(){
        this.data = [
            {id: 1, title: 'Notebook', price: 2000},
            {id: 2, title: 'Mouse', price: 30},
            {id: 3, title: 'Keyboard', price: 55},
            {id: 4, title: 'Gamepad', price: 65},
            {id: 5, title: 'Chair', price: 120, template: 1},
        ];
    }
    _render(){
        const block = document.querySelector(this.container);
        for (let product of this.data){
            const prod = new ProductItem(product);
            this.productsAll.push(prod);
            block.insertAdjacentHTML('beforeend', prod.render());
        }
    }
    GetTotalCost(){
        let sum = 0;
        for(let item of this.data){
            sum += item.price;
        }
        return sum;
    }
}


class ProductItem {
    constructor(product, img = `https://placehold.it/120x80`) {
        this.title = product.title;
        this.price = product.price;
        this.id = product.id;
        this.img = img
    }

    render(){
        return `<div class="product-item">
                  <img src="${this.img}" alt="${this.title}">
                  <div class="desc">
                      <h3>${this.title}</h3>
                      <p>${this.price}</p>
                      <button class="buy-btn">Купить</button>
                  </div>
              </div>`
    }
}

class Cart {
    constructor(){
        this.items = [];
    }
    GetTotalCost(){}
    GetTotalCount() {}
    RemoveItem(itemTitle){}
    AddItem(item, count = 1){}
    SetCountItem(itemTitle, count){}
    Clear(){}
    GetItems(){}
}

class CartItem {
    constructor(){
        this.title = '';
        this.count = 0;
        this.price = 0;
    }
    SetCount(count){}
    GetCost(){}
}

const products = new ProductsList();