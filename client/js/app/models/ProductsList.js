class ProductsList {
  // TODO: implementar

  constructor(){

    this._products = [];
  }

  add(product){

    this._products.push(product);
  }

  remove(){

    this._products = [];
  }

  get products(){

    return [].concat(this._products);
  }
}
