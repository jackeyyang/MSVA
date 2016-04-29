/**
 * Happy and healthy for my family
 * Created by jackey on 16/4/29.
 */

$(function(){
    $(document).on('mouseover','.tab span',function(){
        var index = $(this).index();
        $(".tab span").removeClass("active");
        $(this).addClass("active");
        $(".tab-con").hide().eq(index).show();
    });
    $('.tab span').eq(0).mouseover();
});