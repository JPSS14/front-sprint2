class ProductsController {
  constructor() {
    let $ = document.querySelector.bind(document);

    this._message = new Bind(
      new Message(),
      new MessageView($('#messageView')),
      'message'
    );

    this.allProducts();
  }

  allProducts() {

    let service = new ProductService();
    let teste = service.obterProdutos();
    console.log(teste);
    // TODO: implementar

    // let service = new ProdutoService();
    // service
    //   .obterProdutos()
    //   .then()
    //   .catch();

    this._message.message = 'ProductsController ainda não foi implementado.';
  }
}
