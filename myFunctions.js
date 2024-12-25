$(document).ready(function () {
    // عرض وإخفاء النموذج
    $('.select-btn').click(function () {
        const title = $(this).data('title');
        const price = $(this).data('price');
        const currentBook = `${title} - ${price}`;

        $('#selected-book').text(currentBook);
        $('#form').show();
    });

    $('#order-form').submit(function (e) {
        e.preventDefault();

        const fullName = $('#full-name').val().trim();
        const nationalId = $('#national-id').val().trim();
        const birthDate = $('#birth-date').val();
        const phone = $('#phone').val().trim();
        const email = $('#email').val().trim();

        // تحقق من الحقول
        if (!/^(0[1-9]|1[0-4])\d{9}$/.test(nationalId)) {
            alert('يرجى إدخال رقم وطني صحيح (11 رقمًا يبدأ بين 01 و 14).');
            return;
        }

        if (fullName && !/^[\u0621-\u064A\s]+$/.test(fullName)) {
            alert('يرجى إدخال الاسم باللغة العربية فقط.');
            return;
        }

        if (birthDate) {
            const currentDate = new Date();
            const enteredDate = new Date(birthDate);
            if (enteredDate >= currentDate) {
                alert('تاريخ الميلاد غير صحيح.');
                return;
            }
        }

        if (phone && !/^(09[3-9])\d{7}$/.test(phone)) {
            alert('يرجى إدخال رقم موبايل صحيح (يتبع شبكتي سيرياتيل أو MTN).');
            return;
        }

        if (email && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
            alert('يرجى إدخال بريد إلكتروني صحيح.');
            return;
        }

        // رسالة نجاح
        alert('تم تقديم الطلب بنجاح!');
        this.reset();
        $('#form').hide();
        $('#selected-book').text('');
    });
});
