const order = {
  name: "Rafael Andrade",
  phoneNumber: "11-98763-1416",
  address: {
    street: "Rua das Flores",
    number: "389",
    apartment: "701",
  },
  order: {
    pizza: {
      marguerita: {
        amount: 1,
        price: 25,
      },
      pepperoni: {
        amount: 1,
        price: 20,
      },
    },
    drinks: {
      coke: {
        type: "Coca-Cola Zero",
        price: 10,
        amount: 1,
      },
    },
    delivery: {
      deliveryPerson: "Ana Silveira",
      price: 5,
    },
  },
  payment: {
    total: 60,
  },
};

const customerInfo = (order) => {
  const resul = `Olá ${order.order.delivery.deliveryPerson}, entrega para: ${order.name}, Telefone: ${order.phoneNumber}, ${order.address.street}, N° ${order.address.number}, Complemento: ${order.address.apartment}`;
  console.log(resul);
};

customerInfo(order);

const orderModifier = (order) => {
  // Adicione abaixo as informações necessárias.
  order.name = "Luiz Silva";
  let total = calculaTotal(order);
  const resul = `Olá ${order.name}, o total do seu pedido de ${Object.keys(
    order.order.pizza
  )} e ${Object.keys(order.order.drinks)} é R$${total}`;
  console.log(resul);
};

function calculaTotal(order) {
  const pizzas = Object.keys(order.order.pizza);
  let total = 0;
  for (let item of pizzas) {
    total += order.order.pizza[item].price;
  }
  const drinks = Object.keys(order.order.drinks);
  for (let item of drinks) {
    total += order.order.drinks[item].price;
  }
  return total;
}
orderModifier(order);
