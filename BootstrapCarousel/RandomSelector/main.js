



$(document).ready(function(){
    $("input").click(function(){
        let numberoflistitem=$("#choices li").length;
        let randomchildnumber=Math.floor(Math.random()*numberoflistitem)
         $("#random-result").text($("#choices li").eq(randomchildnumber).text());
         $("#random-pic").attr("src",pictures[randomchildnumber]);
    });
});