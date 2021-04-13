if (document.getElementById('image_1') !== null) {
    document.getElementById('image_1').style.backgroundPositionY = '50%'
    // window.addEventListener('load', function(){
        window.addEventListener('scroll', function() {
            var value = window.scrollY * 0.5;
            document.getElementById('image_1').style.backgroundPositionY = 'calc(50% + ' + value + 'px)';
        })
    // })
}
