
	function largesstnum()
    {
        var num1, num2, num3;
        num1 = Number(document.getElementById("fnum").value);
        num2 = Number(document.getElementById("snum").value);
        

        if(num1>num2)
        {
            // document.getElementById("dis").innerHTML=num1+"is large";
            window.alert(num1+"-is Larger");
        }
        else if(num2>num1)
        {
            // document.getElementById("dis").innerHTML=num2+"is large";
            window.alert(num2+"-is Larger");
        }
        else if(num2>num1 && num2>num1)
        {
            // document.getElementById("dis").innerHTML=num3+"is large";
            window.alert(num2+"is Larger");
        }
    }
