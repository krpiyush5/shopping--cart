function remove(id){
    var rem=localStorage.getItem("catalog");
    var val=JSON.parse(rem);

        val[id].value=val[id].value-1;
        localStorage.setItem("catalog",JSON.stringify(val));
        display();


}
function add(id) {
    var add=localStorage.getItem("catalog");
    var val=JSON.parse(add);
    if(val[id].value<4)
    {
        val[id].value=val[id].value+1;
        localStorage.setItem("catalog",JSON.stringify(val));
        display();
    }

}
function display() {


var cart;
cart=localStorage.getItem("catalog");
  var data=JSON.parse(cart);


   var table=$('#mylist');
   table.empty();
   table.append($(`
<thead>
<tr>
            <th>S.No.</th>
            <th>Product</th>
            <th>Price</th>
            <th>Qty</th>
            <th>Amt</th>
        </tr>
   </thead>
`));
   var carttotal=0;
   var count=0;
   for(var prod in data)
   {if(data[prod].value>0)
   {
       count++;
     table.append($(`<tr>
<td> ${count}</td>
<td>${ data[prod].name}</td>
<td>Rs ${ data[prod].price}</td>
<td>
<i onclick="remove(${prod})" class="fa fa-minus-circle"></i>
${data[prod].value}
<i onclick="add(${prod})" class="fa fa-plus-circle"></i>
</td>
<td>Rs ${ data[prod].value*data[prod].price}</td>
</tr>
     
`));
     carttotal+=data[prod].value*data[prod].price;
   }
   }
   table.append($(`<tr>
<td colspan="4"><b>Total</b></td>
<td>Rs ${carttotal}</td>
</tr>`))
table.append($(`<tr>
<td colspan="4"><b>GST</b></td>
<td>18% of Total</td>
</tr>`))
   table.append($(`<tr>
<td colspan="4"><b>Total Amount</b></td>
<td>Rs ${ carttotal+(carttotal*18/100)}</td>
</tr>`))

}
display();