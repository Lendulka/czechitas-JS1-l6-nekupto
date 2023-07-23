console.log('funguji')

const products = [
  {
    id: 1,
    image: 'img/destniklobouk.jpg',
    name: 'Deštník Klobouk',
    description: 'Vynikající pokud si často zapomínáte deštník a nechcete být nikdy překvapeni nečekanou přeháňkou.',
    alt: 'Card image cap',
  },
  {
    id: 2,
    image: 'img/slepickabelka.jpg',
    name: 'Slepička Kabelka',
    description: 'Nejlepší způsob jak zaujmout neotřelou módou v ulíčkách kolem Staroměstkého náměstí.',
    alt: 'Slepičkabelka',
  },
  {
    id: 3,
    image: 'img/anatoplavky.jpg',
    name: 'Anato Plavky',
    description: 'Aby muži na rozpálených plážích kromě vašeho těla obdivovali také vaše nitro.',
    alt: 'Anatoplavky',
  }
]

const cardDeckElm = document.querySelector('.card-deck')

const displayProduct = () => {
  cardDeckElm.innerHTML += products.map(oneProduct => `
      <div id="product${oneProduct.id}" class="card mb-4 box-shadow text-center">
        <img class="card-img-top" src="${oneProduct.image}" alt="${oneProduct.alt}"/>
        <div class="card-body">
          <h2 class="card-title">${oneProduct.name}</h2>
          <p class="card-text">${oneProduct.description}</p>
        </div>
        <button type="button" class="btn btn-lg btn-block">Koupit</button>
      </div>
    `
  ).join('')
}

displayProduct()

const product1Elm = document.querySelector('#product1')
product1Elm.classList.add('border-primary')

const product1BtnElm = document.querySelector('#product1 button')
product1BtnElm.classList.add('btn-primary')

const styleProduct = (event) => {
  cardArray.forEach(oneCard => {
    oneCard.classList.remove('border-primary')
  })

  btnArray.forEach(oneBtn => {
    oneBtn.classList.remove('btn-primary')
  })

  let targetElm = event.currentTarget
  targetElm.classList.add('border-primary')

  let targetLastChild = event.currentTarget.lastChild.previousElementSibling
  targetLastChild.classList.add('btn-primary')
}

const styleButton = (event) => {
  btnArray.forEach(oneBtn => {
    oneBtn.classList.remove('btn-primary')
  })

  let targetElm = event.target
  targetElm.classList.add('btn-primary')
}

const cardArray = document.querySelectorAll('.card')
cardArray.forEach(oneCard => {
  oneCard.addEventListener('click', styleProduct)
})

const btnArray = document.querySelectorAll('.btn')
btnArray.forEach(oneBtn => {
  oneBtn.addEventListener('click', styleButton)
})

