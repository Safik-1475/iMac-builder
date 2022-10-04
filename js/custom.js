const extraMemory = document.getElementById('sixteenGB');
// console.log(extraMemory);
extraMemory.addEventListener('click', function () {
    // console.log('Sixteen GB  Memory');
    document.querySelector('#memory-cost').innerText = 300;
});

// Storage SSD
const storage512 = document.getElementById('ssd2');
const storage1TB = document.getElementById('ssd3');

// UPDATE STORAGE 
function storageCost(cost) {
    let storageCost = cost;
    // console.log(storageCost);
    if (storageCost == 200) {
        document.getElementById('storage-cost').innerText = cost;
    } else if (storageCost == 400) {
        document.getElementById('storage-cost').innerText = cost;
    }
};

storage512.addEventListener('click', function () {
    storageCost(200);
    iMacPriceCalculate();
});
storage1TB.addEventListener('click', function () {
    storageCost(400);
    iMacPriceCalculate();
});

// Update free delivery and paid delivery
function freePaidDelivery(charge) {
    let deliveryCharge = charge;
    if (deliveryCharge == 0) {
        document.getElementById('delivery-cost').innerText = 0;
    } else if (deliveryCharge == 20) {
        document.getElementById('delivery-cost').innerText = 20;
    }
}
const freeDelivery = document.getElementById('free-delivery');
const paidDelivery = document.getElementById('paid-delivery');
freeDelivery.addEventListener('click', function () {
    freePaidDelivery(0);
    iMacPriceCalculate();
})
paidDelivery.addEventListener('click', function () {
    freePaidDelivery(20);
    iMacPriceCalculate();
});

function iMacPriceCalculate() {
    let bestPrice = document.getElementById('best-price').innerText;
    const memoryCost = document.getElementById('memory-cost').innerText;
    const storageCost = document.getElementById('storage-cost').innerText;
    const deliveryCost = document.getElementById('delivery-cost').innerText;
    const countTotalPrice = parseFloat(bestPrice) + parseFloat(memoryCost) + parseFloat(storageCost) + parseFloat(deliveryCost);
    // set inner text total price 
    document.getElementById('total-price').innerText = countTotalPrice;
}
