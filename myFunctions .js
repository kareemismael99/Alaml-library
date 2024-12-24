$(document).ready(function () {
    $('.select-btn').click(function () {
        const title = $(this).data('title');
        const price = $(this).data('price');
        const currentBook = `${title} - ${price}`;

        // إذا كان النموذج ظاهراً لنفس الكتاب، قم بإخفائه
        if ($('#form').is(':visible') && $('#selected-book').text() === currentBook) {
            $('#form').hide();
            $('#selected-book').text('');
        } else {
            // عرض التفاصيل وتحديث النص
            $('#selected-book').text(currentBook);
            $('#form').show();
        }
    });

    $('#order-form').submit(function (e) {
        e.preventDefault();

        const nationalId = $('#national-id').val();

        // التحقق من صحة الرقم الوطني
        if (!validateNationalId(nationalId)) {
            alert('يجب إدخال رقم وطني صحيح مكون من 11 خانة.');
            return;
        }

        alert('تم تقديم الطلب بنجاح!');
        this.reset();
        $('#form').hide();
        $('#selected-book').text('');
    });

    // التحقق من صحة الرقم الوطني (11 خانة والخانتين الأوليين بين 01 و14)
    function validateNationalId(nationalId) {
        const nationalIdRegex = /^(0[1-9]|1[0-4])\d{9}$/;
        return nationalIdRegex.test(nationalId);
    }
});
