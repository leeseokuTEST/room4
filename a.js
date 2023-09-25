// $(function(){$ajax({url:"", success: , error:})})




// $(function(){$.ajax({url:"./j.json", success:function(aa){let adata = ""; aa.a.map(function(a,b){adata +=`<li class=${a.cls}>${a.sb}</li>`;}); $("#a").html(adata)}})})




// $(function(){$.ajax({url:"./j.json", success:function(zz){let leeseoku=""; zz.a.map(function(a,b){leeseoku +=`<li class=${a.cls}>${a.sb}</li>`}); $("#a").html(leeseoku)}})})




$(
    function(){

        $.ajax({
            url:"./j.json",
            success:function(zz){
               let leeseoku = ""; 
                zz.a.map(
                    (a,b)=>{
                        leeseoku+=`<li class=${a.cls}>${a.sb}</li>`;
                    }
                )
                $("#a").html(leeseoku)
            },
            error:function(request,status,error){
                alert("code:"+request.status+"\n"+"message:"+request.responseText+"\n"+"error:"+error);
               }
          
        })
    }
)




















































