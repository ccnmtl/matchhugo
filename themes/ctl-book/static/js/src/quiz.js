/* global alert: true */
/* exported submitStateGameshow */

function isFormComplete(form) {
    var valid = true;

    var children = jQuery(form).find('input,textarea,select');
    jQuery.each(children, function() {
        if (valid && jQuery(this).is(':visible')) {
            if (this.tagName === 'INPUT' && this.type === 'text' ||
                    this.tagName === 'TEXTAREA') {
                valid = jQuery(this).val().trim().length > 0;
            }

            if (this.tagName === 'SELECT') {
                var value = jQuery(this).val();
                valid = value !== undefined && value.length > 0 &&
                    jQuery(this).val().trim() !== '-----';
            }

            if (this.type === 'checkbox' || this.type === 'radio') {
                // one in the group needs to be checked
                var selector =
                    'input[name=' + jQuery(this).attr('name') + ']';
                valid = jQuery(selector).is(':checked');
            }
        }
    });

    if (!valid) {
        alert('Please complete all form fields before continuing.');
    }

    return valid;
}

function markCorrect(form) {
    jQuery(form).find('input[type="radio"]:checked').each(function() {
        if (jQuery(this).data('value') === 1) {
            jQuery(this).parent().addClass('alert alert-success');
        } else {
            jQuery(this).parent().addClass('alert alert-danger');
        }
    });
}

function submitStateGameshow(form) {
    jQuery(form).find('.casesanswerdisplay').removeClass('hidden');
    markCorrect(form);
}

function submitState(form) {
    jQuery(form).find('.casesanswerdisplay').removeClass('hidden');
    markCorrect(form);
}

jQuery(document).ready(function() {

    // add a print button to every page with a submit button
    jQuery('.btn-submit-section').after(
        '<button class="btn btn-default btn-print flash ' +
        'hidden">Print</button>');

    jQuery('.btn-print').click(function(evt) {
        evt.preventDefault();
        window.print();
        return false;
    });

    jQuery('.btn-submit-section').click(function(evt) {
        evt.preventDefault();

        window.parent.jQuery('body').animate({scrollTop: 0}, 'slow');

        var form = jQuery(this).parents('form');

        // verify all form fields are filled out
        var complete = isFormComplete(form);
        if (!complete) {
            return false;
        }

        jQuery(form).find('input,select,textarea,.btn-submit-section')
            .attr('disabled', 'disabled');
        jQuery('.btn-print').removeClass('hidden');

        // based on quiz type, show/hide various bits
        var sel = '.quiz_cases,.answer-feedback-quiz,.gameshow';
        var elt = jQuery(form).find(sel);
        if (elt.length > 0) {
            submitState(form);
        }
    });

    jQuery(window).on('beforeunload', function() {
        var btn = jQuery('.btn-submit-section');
        if (btn.length > 0 && jQuery(btn).attr('disabled') !== 'disabled') {
            return 'The activity is not complete. ' +
                'Your progress will not be saved if you leave this page.';
        }
    });

    jQuery('li.next a').click(function(evt) {
        var btn = jQuery('.btn-submit-section');
        if (btn.length < 1) {
            return true;
        }

        var submitted = jQuery(btn).attr('disabled') === 'disabled';

        if (!submitted) {
            alert('Please complete and submit the form before continuing.');
            evt.preventDefault();
            return false;
        }
    });
});
