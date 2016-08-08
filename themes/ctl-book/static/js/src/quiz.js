/* global alert: true */

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

function submitStatePrevisit(elt) {
    var yourResponse =
        '<div class="response-heading">Your response:</div>';
    jQuery(elt)
        .find('textarea').attr('disabled', 'disabled')
        .before(yourResponse);

    jQuery(elt).find('.casesanswerdisplay').show();
}

function submitStatePrioritized(elt) {
    var yourConcern =
        '<div class="your-choice choice-header">Your concern is...</div>';
    var otherConcerns =
        '<div class="choice-header">' +
        'Let’s look at the other choices...</div>';

    var lst = jQuery(elt).find('.selection-list');
    jQuery(lst).prepend(otherConcerns).prepend(yourConcern)
         .removeClass('selection-list').addClass('explanation-list');
    jQuery(elt).find('input[type=radio]').parent().hide();
    jQuery(elt).find('.selection-block').removeClass('hidden');

    var sel = jQuery(elt).find('input[type=radio]:checked').parent().next();
    jQuery(sel).addClass('highlighted');
    jQuery(elt).find('.your-choice').after(sel);
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
        var elt = jQuery(form).find('.mod5-previsit');
        if (elt.length > 0) {
            submitStatePrevisit(elt);
        }

        elt = jQuery(form).find('.response-prioritized');
        if (elt.length > 0) {
            submitStatePrioritized(elt);
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
            alert('Please complete all form fields before continuing.');
            evt.preventDefault();
            return false;
        }
    });
});
