const TypeEnum = {
    size: 1,
    filing: 2,
    extra: 3,
};

const ingridients =
    [
        {type: TypeEnum.size, name: 'big', price: 100, calorie: 40},
        {type: TypeEnum.size, name: 'small', price: 50, calorie: 20},
        {type: TypeEnum.filing, name: 'cheese', price: 10, calorie: 20},
        {type: TypeEnum.filing, name: 'salad', price: 20, calorie: 5},
        {type: TypeEnum.filing, name: 'potato', price: 15, calorie: 10},
        {type: TypeEnum.extra, name: 'sauce', price: 15, calorie: 0},
        {type: TypeEnum.extra, name: 'mayo', price: 20, calorie: 5}
    ]

class Ingridient {
    constructor(type, name, price, calorie){
        this.type = type;
        this.name = name;
        this.price = price;
        this.calorie = calorie;
    }

    render(){
        switch (this.type) {
            case TypeEnum.size:
            case TypeEnum.filing:{
                return `<input class="burger-ingridient" " type="radio" name="${this.type}" value="${this.name}" checked> <label>${this.name} (${this.price} rub, ${this.calorie} cal)</label><br>`
            }
            case TypeEnum.extra:{
                return `<input class="burger-ingridient" type="checkbox" value="${this.name}"/><label>${this.name} (${this.price} rub, ${this.calorie} cal)</label><br>`
            }
        }
    }
}

class IngridientsStore{
    constructor(){
        this.ingridients = [];
        for (let ingridient of ingridients){
            this.ingridients.push(new Ingridient(ingridient.type, ingridient.name, ingridient.price, ingridient.calorie));
        }
    }
    GetIngridients(){
        return this.ingridients;
    }
    GetIngridient(name){
        return this.ingridients.find(x => x.name == name);
    }
}

class Burger {
    constructor(){
        this.ingridients = this._getIngridients();
    }

    _getIngridients(){
        let ingridients = [];
        var elements = document.querySelectorAll('.burger-ingridient:checked');
        elements.forEach(el => ingridients.push(ingridientStore.GetIngridient(el.value)));
        return ingridients;
    }
    _getTotalCost(){
        let sum = 0;
        for(let item of this.ingridients){
            sum += item.price;
        }
        return sum;
    }
    _getTotalCalorie(){
        let sum = 0;
        for(let item of this.ingridients){
            sum += item.calorie;
        }
        return sum;
    }
    showResult(cost, calories){
        document.querySelector(cost).textContent = this._getTotalCost();
        var result = this._getTotalCalorie();
        document.querySelector(calories).textContent = this._getTotalCalorie();
    }
}

const InsertHtml = (selector, html) => {
    const block = document.querySelector(selector);
    block.insertAdjacentHTML('beforeend', html);
}

var ingridientStore = new IngridientsStore();
for (let ingridient of ingridientStore.ingridients){
    switch (ingridient.type) {
        case TypeEnum.size: {
            InsertHtml(".burger-size", ingridient.render());
            break;
        }
        case TypeEnum.filing: {
            InsertHtml(".burger-filing", ingridient.render());
            break;
        }
        case TypeEnum.extra: {
            InsertHtml(".burger-extra", ingridient.render());
            break;
        }
    }
}

function calcBurger() {
    let burger = new Burger();
    burger.showResult('#burger-cost', '#burger-callories');
}

