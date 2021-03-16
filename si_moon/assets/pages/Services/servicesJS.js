$(window).click(function () {


    console.log("module JS chargé");

    const Expand = (function () {
        const tile = $('.strips__strip');
        const tileLink = $('.strips__strip > .strip__content');
        const tileText = tileLink.find('.strip__inner-text');
        const stripClose = $('.strip__close');

        let expanded = false;

        const open = function () {

            const tile = $(this).parent();

            if (!expanded) {
                tile.addClass('strips__strip--expanded');
                // add delay to inner text
                tileText.css('transition', 'all .5s .3s cubic-bezier(0.23, 1, 0.32, 1)');
                stripClose.addClass('strip__close--show');
                stripClose.css('transition', 'all .6s 1s cubic-bezier(0.23, 1, 0.32, 1)');
                expanded = true;
            }
        };

        const close = function () {
            if (expanded) {
                tile.removeClass('strips__strip--expanded');
                // remove delay from inner text
                tileText.css('transition', 'all 0.15s 0 cubic-bezier(0.23, 1, 0.32, 1)');
                stripClose.removeClass('strip__close--show');
                stripClose.css('transition', 'all 0.2s 0s cubic-bezier(0.23, 1, 0.32, 1)')
                expanded = false;
            }
        }

        const bindActions = function () {
            tileLink.on('click', open);
            stripClose.on('click', close);
        };

        const init = function () {
            bindActions();
        };

        return {
            init: init
        };

    }());

    Expand.init();
});





