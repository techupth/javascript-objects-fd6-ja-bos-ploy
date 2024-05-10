// Exercise #1: Food Order

const FoodOrder = {
  orderNumber: "A0234",
  address: "Bangkok",
  paymentType: "Cash",
  totalPrice: 4500,
  restaurantName: "MK",
};

FoodOrder.totalPrice = 5000;
FoodOrder.paymentType = "Credit Card";

console.log(FoodOrder);
