import {
  CheckoutMainContainer,
  CoffeeListSelected,
  FormInput,
  OrdersContainer,
} from './styles'

export function Checkout() {
  return (
    <CheckoutMainContainer>
      <div>
        <h4>Complete seu pedido</h4>
        <OrdersContainer>
          <FormInput id="addressID" type="text" placeholder="CEP" />
          <div>
            <FormInput id="street" type="text" placeholder="Rua" />
          </div>
          <div>
            <FormInput id="houseNumber" type="text" placeholder="Número" />
            <FormInput id="address" type="text" placeholder="Complemento" />
          </div>
          <div>
            <FormInput id="neighborhood" type="text" placeholder="Bairro" />
            <FormInput id="city" type="text" placeholder="Cidade" />
            <FormInput id="uf" type="text" placeholder="UF" />
          </div>
        </OrdersContainer>
      </div>
      <div>
        <h4>Cafés Selecionados</h4>
        <CoffeeListSelected></CoffeeListSelected>
      </div>
    </CheckoutMainContainer>
  )
}
