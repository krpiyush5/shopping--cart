/**
 * Created by piyush on 5/7/17.
 */




if(!window.localStorage){
var catalog=[];
$.getJSON('package.json', function (data) {
        catalog = data;
        localStorage.setItem('catalog', JSON.stringify(catalog));
        localStorage.setItem("arr",JSON.stringify(arr));

        //retrieve();


    });}
    window.onload=function () {

    $('#mi').click(function () {

        var data = localStorage.getItem("catalog");
        var obj = JSON.parse(data);
        if (Number(obj[0].Qty) > Number(obj[0].value)) {
            obj[0].value = Number(obj[0].value) + 1;
             $('.div1').text( obj[0].value);
        }
        else {
            alert("Not Available");
        }
        localStorage.setItem("catalog", JSON.stringify(obj));
    })
    $('#iph').click(function () {
        var data = localStorage.getItem("catalog");
        var obj = JSON.parse(data);
        if (Number(obj[1].Qty) > Number(obj[1].value)) {
            obj[1].value = Number(obj[1].value) + 1;
            $('.div2').text(obj[1].value);
        }
        else {
            alert("Not Available");
        }
        localStorage.setItem("catalog", JSON.stringify(obj));

    })

        $('#mac').click(function () {
            var data = localStorage.getItem("catalog");
            var obj = JSON.parse(data);
            if (Number(obj[2].Qty) > Number(obj[2].value)) {
                obj[2].value = Number(obj[2].value) + 1;
                $('.div3').text(obj[2].value);
            }
            else {
                alert("Not Available");
            }
            localStorage.setItem("catalog", JSON.stringify(obj));

        })
        $('#rol').click(function () {
            var data = localStorage.getItem("catalog");
            var obj = JSON.parse(data);
            if (Number(obj[3].Qty) > Number(obj[3].value)) {
                obj[3].value = Number(obj[3].value) + 1;
                $('.div4').text(obj[3].value);
            }
            else {
                alert("Not Available");
            }
            localStorage.setItem("catalog", JSON.stringify(obj));

        })
        $('#cube').click(function () {
            var data = localStorage.getItem("catalog");
            var obj = JSON.parse(data);
            if (Number(obj[4].Qty) > Number(obj[4].value)) {
                obj[4].value = Number(obj[4].value) + 1;
                $('.div5').text(obj[4].value);
            }
            else {
                alert("Not Available");
            }
            localStorage.setItem("catalog", JSON.stringify(obj));

        })
        $('#machine').click(function () {
            var data = localStorage.getItem("catalog");
            var obj = JSON.parse(data);
            if (Number(obj[5].Qty) > Number(obj[5].value)) {
                obj[5].value = Number(obj[5].value) + 1;
                $('.div6').text(obj[5].value);
            }
            else {
                alert("Not Available");
            }
            localStorage.setItem("catalog", JSON.stringify(obj));

        })
        $('#shirt').click(function () {
            var data = localStorage.getItem("catalog");
            var obj = JSON.parse(data);
            if (Number(obj[6].Qty) > Number(obj[6].value)) {
                obj[6].value = Number(obj[6].value) + 1;
                $('.div7').text(obj[6].value);
            }
            else {
                alert("Not Available");
            }
            localStorage.setItem("catalog", JSON.stringify(obj));

        })
        $('#choco').click(function () {
            var data = localStorage.getItem("catalog");
            var obj = JSON.parse(data);
            if (Number(obj[7].Qty) > Number(obj[7].value)) {
                obj[7].value = Number(obj[7].value) + 1;
                $('.div8').text(obj[7].value);
            }
            else {
                alert("Not Available");
            }
            localStorage.setItem("catalog", JSON.stringify(obj));

        })


}


