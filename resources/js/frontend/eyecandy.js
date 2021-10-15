
$(function () {
    $('.eyecandy').on('click', function () {
        const passwordElem = $(this).parent().find('input[name="password"]');
        const currentType = passwordElem.attr('type');
        
        // Toggle Eye Candy
        $(this).toggleClass('show');
        // Toggle Password input type
        passwordElem.prop({
            type: currentType === 'text' ? 'password' : 'text'
        });
    });
});
