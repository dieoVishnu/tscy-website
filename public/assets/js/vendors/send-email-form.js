/**
 * Form Validation Methods
 */
jQuery.validator.addMethod("lettersonly", function(value, element) {
    return this.optional(element) || /^[a-z][a-z\s]*$/i.test(value);
}, "Letters only please");
jQuery.validator.addMethod("Email", function(value, element) {
    return this.optional(element) || /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/i.test(value);
}, "Please enter valid email");
jQuery.validator.addMethod("number_validate", function(value, element) {
    return this.optional(element) || /^[0-9 +]+$/i.test(value);
}, "Please enter valid number");
jQuery.validator.addMethod("url_validate", function(value, element) {
    return this.optional(element) || /(?:(?:https?|ftp|file):\/\/|www\.|ftp\.)(?:\([-A-Z0-9+&@#\/%=~_|$?!:,.]*\)|[-A-Z0-9+&@#\/%=~_|$?!:,.])*(?:\([-A-Z0-9+&@#\/%=~_|$?!:,.]*\)|[A-Z0-9+&@#\/%=~_|$])/i.test(value);
}, "Please enter valid URL");

/** Popup Form Validation and Submition */
$("#popup-form").validate({
    rules: {
        first_name: {
            required: true,
            lettersonly: true
        },
        last_name: {
            required: true,
            lettersonly: true
        },
        email: {
            required: true,
            Email: true
        },
        phone_number: {
            required: true,
            number_validate: true
        },
        nationality: {
            required: true,
        },
        about_us: {
            required: true,
        },
    },
    submitHandler: function(form) {
        $(".spinner").removeClass('d-none');
        var formData = {
            first_name: $("#popup-form #first_name").val(),
            last_name: $("#popup-form #last_name").val(),
            email: $("#popup-form #email").val(),
            country_code: $("#popup-form #country_code").val(),
            phone_number: $("#popup-form #phone_number").val(),
            nationality: $("#popup-form #nationality").val(),
            about_us: $("#popup-form #about_us").val(),
        };
        $.ajax({
            type: "POST",
            url: "mail/mail.php",
            data: formData,
            dataType: "json",
            encode: true,
            success: function(data) {
                $(".success-message").append('<div class="alert alert-success" role="alert">' + data.status + '</div>')
                $("#popup-form")[0].reset();
                $(".spinner").addClass('d-none');
                setTimeout(function() {
                    $(".register-popup__cross-btn").trigger("click");
                    $(".alert-success").remove()
                }, 2000);
            },
            error: function(data) {
                $(".success-message").append('<div class="alert alert-danger" role="alert">' + data.status + '</div>')
                $("#popup-form")[0].reset();
                $(".spinner").addClass('d-none');
                setTimeout(function() {
                    $(".alert-danger").remove();
                }, 2000);
            }
        });
        event.preventDefault();
    }
});


/** Contact Form Validation and Submition */
$("#contact-form").validate({
    rules: {
        first_name: {
            required: true,
            lettersonly: true
        },
        last_name: {
            required: true,
            lettersonly: true
        },
        email: {
            required: true,
            Email: true
        },
        phone_number: {
            required: true,
            number_validate: true
        },
        nationality: {
            required: true,
        },
        about_us: {
            required: true,
        },
    },
    submitHandler: function(form) {
        $(".c-spinner").removeClass('d-none');
        var formData = {
            first_name: $("#contact-form #first_name").val(),
            last_name: $("#contact-form #last_name").val(),
            email: $("#contact-form #email").val(),
            country_code: $("#contact-form #country_code").val(),
            phone_number: $("#contact-form #phone_number").val(),
            nationality: $("#contact-form #nationality").val(),
            about_us: $(" #contact-form #about_us").val(),
        };
        $.ajax({
            type: "POST",
            url: "mail/mail.php",
            data: formData,
            dataType: "json",
            encode: true,
            success: function(data) {
                $(".contact-success-message").append('<div class="alert alert-success" role="alert">' + data.status + '</div>')
                $("#contact-form")[0].reset();
                $(".c-spinner").addClass('d-none');
                setTimeout(function() {
                    $(".alert-success").remove()
                }, 2000);
            },
            error: function(data) {
                $(".c-spinner").addClass('d-none');
                $(".contact-success-message").append('<div class="alert alert-danger" role="alert">' + data.status + '</div>')
                $("#contact-form ")[0].reset();
                setTimeout(function() {
                    $(".alert-danger").remove();
                }, 2000);
            }
        });
        event.preventDefault();
    }
});