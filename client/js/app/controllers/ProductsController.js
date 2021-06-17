class ProductsController {
  constructor() {
    let $ = document.querySelector.bind(document);

    this._text = $('#search');
    this._staticList = [];

    this._productsList = new Bind(
      new ProductsList(),
      new ProductsView($('#products')),
      'add', 'remove'
    );

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
    // console.log(teste);

    service.obterProdutos()
      .then(produtos => {
        produtos
          .forEach(produto => this._productsList.add(produto));
          this._message.message = 'Produtos importados com sucesso!';
          console.log("produto", produtos);
          this._staticList = produtos;
      })
      .catch(error => this._message = error);

    this._message.message = 'ProductsController ainda não foi implementado.';
  }

  search(){
    let pesquisa = this._staticList.filter(objeto => objeto.descricao.includes(this._text.value) == true);
    console.log("pesquisa",pesquisa);
    this._productsList.remove();
    console.log(this._text.value);
    pesquisa.map(objeto => this._productsList.add(objeto));
    this._message.message = 'Produtos pesquisados com sucesso!';
  }
}
