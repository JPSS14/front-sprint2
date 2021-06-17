class ProductsView extends View {
  constructor(element) {
    super(element);
  }

  template(model) {
    // TODO: implementar

    return model.products ? `
        <div class="products__row">
          <ol class="products__list">
          ${model.products.map(objeto => 
            `
            
            <li class="products__card">
              <div class="card">
                <img
                  class="card__img"
                  src="${objeto.imagem}"
                  alt="${objeto.descricao}"
                />
                <p class="card__description">
                  ${objeto.descricao}
                </p>
                <p class="card__price">R$ ${objeto.valor}</p>
              </div>
            </li>
            `
            ).join('')}
          </ol>
        </div>
    ` : `<p></p>`;
  }
}
