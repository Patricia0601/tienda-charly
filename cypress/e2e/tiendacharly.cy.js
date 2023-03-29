describe("Prueba de validacion pagina de inicio",() =>{


it.only("Validar pagina de inicio" , ()=> {
cy.visit("https://www.lacolonia.com/?utm_source=google&utm_medium=cpc&utm_campaign=aon_purebrand")
cy.get('.lacoloniaqa-lacolonia-franchise-selector-0-x-regionItems').select("San Pedro Sula")
cy.get('.lacoloniaqa-lacolonia-franchise-selector-0-x-backButton').click()
cy.get(':nth-child(10) > .vtex-flex-layout-0-x-flexRow > .vtex-store-components-3-x-container > .mt0 > [style="width:60%"] > .vtex-flex-layout-0-x-flexCol > .vtex-flex-layout-0-x-flexColChild > .vtex-slider-layout-0-x-sliderLayoutContainer > .vtex-slider-layout-0-x-sliderTrackContainer > [data-testid="slider-track"] > .vtex-slider-layout-0-x-slide--firstVisible.vtex-slider-layout-0-x-slide--visible > .vtex-slider-layout-0-x-slideChildrenContainer > .vtex-product-summary-2-x-container > .vtex-product-summary-2-x-clearLink > .vtex-product-summary-2-x-element > .lacolonia-theme-lacolonia-0-x-buttonAddToCartContainer > .lacolonia-theme-lacolonia-0-x-buttonAddToCart').click()
cy.get('.vtex-minicart-2-x-minicartContainer > .pa4').click()
cy.wait(5000)
cy.get('#proceed-to-checkout').click()
cy.get('#cart-to-orderform').click()

})

it("Validar pagina de inicio" , ()=> {

})


it("Validar pagina de inicio" , ()=> {

})





})



    