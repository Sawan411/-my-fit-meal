var cartDetails = JSON.parse(localStorage.getItem("meallocal"))||[];
console.log(cartDetails);
var subtotal=0;
var sum=0;
cartDetails.filter(function (elem, index) {
  var row = document.createElement("tr");

  var col1 = document.createElement("button");
  col1.innerText = "X";
  col1.setAttribute("style", "margin:25px;")
  col1.addEventListener("click", function(){
    document.getElementById("body").deleteRow(index);

  })
  
  var col2 = document.createElement("td");
  col2.innerText = index + 1;
  //    var col1=document.createElement("td");
  //    col1.innerText=elem.Mealpreference;

  //    var col2=document.createElement("td");
  //    col2.innerText=elem.Breakfast;

  var col3 = document.createElement("td");
  col3.innerText =
    "Meal Preference:" +
    elem.Mealpreference +
    "\n" +
    "Choice:" +
    "BreakFast" +
    "," +
    "Lunch" +
    "," +
    "Dinner"+
    "\n" +
    "Add On:"+"Snack"+","+"Drink";

  //    col3.innerText=elem.Breakfast;
  //    col3.innerText=elem.Lunch;
  //    col3.innerText=elem.Dinner;
  var col4 = document.createElement("td");
  col4.innerText =
    "\n" +
    (elem.Breakfast || 0) +
    " + " +
    (elem.Lunch || 0) +
    " + " +
    (elem.Dinner || 0) +
    "\n"+
    (elem.Snack || 0) +
    " + " +
    (elem.Drink || 0);

  var col5 = document.createElement("td");
  //    col5.type="number";
  //    col5.min=1;
  //    col5.setAttribute("class","quantity");

  col5.innerText = elem.Quantity;

  var col6 = document.createElement("td");
  col6.innerText = Number(elem.Quantity) * ((Number(elem.Breakfast) || 0)  +
  (Number(elem.Lunch) || 0) +(Number(elem.Dinner) || 0)+(Number(elem.Snack) || 0)+(Number(elem.Drink) || 0));
  
   subtotal+=Number(col6.innerText);
  console.log(subtotal);
  // console.log(elem.Breakfast);
  // console.log(elem.Quantity)

  row.append(col1, col2, col3, col4, col5,col6);

  document.querySelector("#body").append(row);
});

var discount=document.querySelector("#tdata").innerText =subtotal;



function promo()
{
  if(document.querySelector("#promo").value=="masai30")
  {
    document.querySelector("#tdata").innerText =subtotal-(discount*0.3);
    document.querySelector("#tdata3").innerText=subtotal-(discount*0.3)+50;
    document.querySelector("#showdiscount").innerText="'Congratulations! you got 30% discount'";
    document.querySelector("#showdiscount").style.color="green";

  }
  else{
    document.querySelector("#showdiscount").innerText="Invalid promo";
    document.querySelector("#showdiscount").style.color="red";
  }

}

var bothsum=0;

// console.log(bothsum);
var cartproducts=JSON.parse(localStorage.getItem("CartItems"))
console.log(cartproducts);

  function displayData(cartproducts) {
    document.querySelector("#container").innerHTML="";
    cartproducts.map(function (data,index) {
            
      var mainDiv =document.createElement("div");

      var img = document.createElement("img");
      img.setAttribute("src", data.image_url);
      img.setAttribute("style","width:250px;height:250px;")

      var name = document.createElement("p");
      name.innerText = data.name;

    
      var price = document.createElement("p");
      price.innerText = data.price+" " + data.quant;

  

      var cart = document.createElement("button");
      cart.innerText = "Add Qty";
      cart.onclick = function(){
        window.location.reload();
      }

      cart.addEventListener("click", function () {
        incrementQuantity(index);
      });

      var btn = document.createElement("button");
      btn.innerText = "Remove Qty";
      btn.onclick = function(){
        window.location.reload();
      }

      btn.addEventListener("click", function () {
        decrementQuantity(index);
      });

      mainDiv.append(img, name, price,cart,btn);

      document.querySelector("#showCart").append(mainDiv);
    });
  }
  displayData(cartproducts);
  
  totalPrice();
function totalPrice()
{
            var total =cartproducts.reduce(function(acc, item) {
            return acc + (item.price*item.quant);
            
},0)
     bothsum= document.querySelector("#tdata").innerText =total+subtotal;
     sum=bothsum;
        }
    function incrementQuantity(index) {
        cartproducts[index].quant++;
        localStorage.setItem("CartItems", JSON.stringify(cartproducts));
        displayData(cartproducts);
        totalPrice()
    }
    function decrementQuantity(index)
     {
       if(cartproducts[index].quant>1){
        cartproducts[index].quant--;
        localStorage.setItem("CartItems", JSON.stringify(cartproducts));
        displayData(cartproducts);
        totalPrice()
       }
       else{
         alert("Quantity Should Not Be 0")
       }
        
    }
    function paymentPage(){
        window.location.href="payment.html"
    }

    document.querySelector("#tdata3").innerText=sum+50;