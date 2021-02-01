for(let i = 0; i < $('.tab-button').length; i++) {
    $('.tab-button').eq(i).click(function() {

        $('.tab-button').removeClass('active').eq(i).addClass('active');
        $('.tab-content').removeClass('show').eq(i).addClass('show');
    });
}