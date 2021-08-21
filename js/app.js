//Extra memory
document.getElementById('memory-8gb').addEventListener('click', function(){
    const memoryPrice = document.getElementById('memory-price');
    memoryPrice.innerText = 0;
    total();

});
document.getElementById('memory-16gb').addEventListener('click', function(){
    const memoryPrice = document.getElementById('memory-price');
    memoryPrice.innerText = 180;
    total();
});  

//Extra Storage
document.getElementById('storage-256gb').addEventListener('click', function(){
    const storagePrice = document.getElementById('storage-price');
    storagePrice.innerText = 0;
    total();

});
document.getElementById('storage-512gb').addEventListener('click', function(){
    const storagePrice = document.getElementById('storage-price');
    storagePrice.innerText = 100;
    total();

});
document.getElementById('storage-1tb').addEventListener('click', function(){
    const storagePrice = document.getElementById('storage-price');
    storagePrice.innerText = 180;
    total();

});

//Delivery Cost
document.getElementById('free-delivery').addEventListener('click', function(){
    const deliveryCost = document.getElementById('delivery-cost');
    deliveryCost.innerText = 0;
    total();

});
document.getElementById('premium-delivery').addEventListener('click', function(){
    const deliveryCost = document.getElementById('delivery-cost');
    deliveryCost.innerText = 20;
    total();

}); 

// total
function total (){
    const bestPrice = document.getElementById('best-price').innerText;
    const memoryPrice = document.getElementById('memory-price').innerText;
    const storagePrice = document.getElementById('storage-price').innerText;
    const deliveryCost = document.getElementById('delivery-cost').innerText;

    const totalPriceSum = parseFloat(bestPrice)+ parseFloat(memoryPrice) + parseFloat(storagePrice) + parseFloat(deliveryCost);
    
    const totalPrice = document.getElementById('total-price');
    totalPrice.innerText = totalPriceSum;

    const updateTotal = document.getElementById('update-total');
    updateTotal.innerText = totalPriceSum;
};

// promo code and update total
document.getElementById('discount-btn').addEventListener('click', function(){
    promoCode()
});

function promoCode (){
    const totalPrice = document.getElementById('total-price').innerText;
    const promoCodeInput = document.getElementById('promo-code');
    const promoCode = promoCodeInput.value
    const givenPromoCode = 'stevekaku';
    if (promoCode == givenPromoCode){
       const discountPrice = parseFloat (totalPrice) *20 /100;
       const totalDiscount = parseFloat (totalPrice) - discountPrice;
       const updateTotal = document.getElementById('update-total');
       updateTotal.innerText = totalDiscount;  
       promoCodeInput.value = ''; 
    }   
};




