 let  blog= document.getElementsByClassName("body")
 console.log(blog);
  for (let i = 0; i < blog.length; i++) {
    let prix = blog[i].children[2];
    let btnplus = blog[i].children[3].children[0];
    let quantity = blog[i].children[3].children[1];
    let btnmoins = blog[i].children[3].children[2];
    let qty=parseInt(quantity.innerHTML)
     let count=parseInt(prix.innerHTML)

    console.log(qty);
    btnplus.addEventListener("click", () => {
        qty++;
        quantity.innerText = qty < 10 ? "0" + qty : qty;
        prix.innerHTML=qty*count
    });

    btnmoins.addEventListener("click", () => {
        if (qty > 0) {
            qty--;
            quantity.innerText = qty < 10 ? "0" + qty : qty;
        }
    });

    let supp = blog[i].children[4].children[0];
    console.log(supp);
     let card=blog[i]
    
    supp.addEventListener('click', function() {
        card.remove()
    })

    let like = blog[i].children[4].children[1];
    console.log(like); 

    like.addEventListener('click', () => {
        if (like) {
            like.style.color = 'red'
        }
        else{
            like.style.color = 'black' 
        }
    })
    
  }
 