import products from "./products";
const cart = () => {   
   let iconCart = document.querySelector('.icon-cart');
    let closeBtn = document.querySelector('.cartTab .close');
    let body = document.querySelector('body');
    let cart = [];

    iconCart.addEventListener('click', ()=>{
        body.classList.toggle('activeTabCart');
    })
    closeBtn.addEventListener('click', ()=>{
        body.classList.toggle('activeTabCart');
    })

    const setProductInCcart = (IdProduct, quantity, position) =>{
        if(quantity > 0){
            if(position < 0){
                cart.push({
                    product_id: IdProduct,
                    quantity: quantity
                });
            }else{
                cart[position].quantity = quantity;
            }
        }
        refreshCartHTML();
    }
    const refreshCartHTML = () => {
        let listHTML = document.querySelector('listCcart');
        let totalHTML = document.querySelector('.icon-cart span');
        let totalQuantity = 0;
        cart.forEach(item => {
            totalQuantity = totalQuantity + item.quantity;
        })
        totalHTML.innerText = totalQuantity;
    }

    document.addEventListener('click', (event) => {
        let buttonClick = event.target;
        let IdProduct = buttonClick.dataset.id;
        let position = cart.findIndex((value) => value.product_id == IdProduct);
        let quantity = position < 0 ? 0 : cart[position].quantity;

        if(buttonClick.classList.contains('addCart')){
            quantity++;
            setProductInCcart(IdProduct, quantity, position);
        }
    })
}
export default cart;