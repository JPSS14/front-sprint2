class ProductService {
  constructor() {
    this._http = new HttpService();
  }

  allProducts() {
    // TODO: implementar

  }

  obterProdutos(){

    return new Promise((resolve, reject) =>{

      this._http
        .get('http://localhost:3000/produtos')
        .then(produtos => {
          console.log("olá",produtos);
          resolve(produtos.map(objeto => new Product(objeto.imagem, objeto.descricao, objeto.valor)))
        })
        .catch(erro => {
          console.log(erro);
          reject("Não foi possível obter os produtos");
        })
    });
  }
}
