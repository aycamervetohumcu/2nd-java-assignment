let price = prompt("Can you enter the full price, please? For example: $49.99");
let priceNumber = parseFloat(price.replace('$', ''));
let discountedPrice = priceNumber * 0.90;
console.log("New Price: $" + discountedPrice.toFixed(2));
