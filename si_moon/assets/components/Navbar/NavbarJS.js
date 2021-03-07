$(window).load(function () {
    let height = window.innerHeight,
        x = 0,
        y = height / 2,
        curveX = 1,
        curveY = 0,
        targetX = 0,
        xitteration = 0,
        yitteration = 0,
        menuExpanded = false, blob, blobPath, hamburger;

    (blob = $("#blob")),
        (blobPath = $("#blob-path")),
        (hamburger = $(".hamburger"));
    0
    $(this).on("mousemove", function (e) {
        x = e.pageX;

        y = e.pageY;
    });

    $(".hamburger, .menu-inner").on("mouseenter", function () {
        $(this).parent().addClass("expanded");
        menuExpanded = true;
    });

    $(".menu-inner").on("mouseleave", function () {
        menuExpanded = false;
        $(this).parent().removeClass("expanded");
    });

    function easeOutExpo(
        currentIteration,
        startValue,
        changeInValue,
        totalIterations
    ) {
        return (
            changeInValue *
            (-Math.pow(2, (-10 * currentIteration) / totalIterations) + 1) +
            startValue
        );
    }

    const hoverZone = 150;
    const expandAmount = 7;

    function svgCurve() {
        if (curveX > x - 1 && curveX < x + 1) {
            xitteration = 0;
        } else {
            if (menuExpanded) {
                targetX = 0;
            } else {
                xitteration = 0;
                if (x > hoverZone) {
                    targetX = 0;
                } else {
                    targetX = -(((60 + expandAmount) / 100) * (x - hoverZone));
                }
            }
            xitteration++;
        }

        if (curveY > y - 1 && curveY < y + 1) {
            yitteration = 0;
        } else {
            yitteration = 0;
            yitteration++;
        }

        curveX = easeOutExpo(xitteration, curveX, targetX - curveX, 100);
        curveY = easeOutExpo(yitteration, curveY, y - curveY, 100);

        const anchorDistance = 200;
        const curviness = anchorDistance - 40;

        const newCurve2 =
            "M60," +
            height +
            "H0V0h60v" +
            (curveY - anchorDistance) +
            "c0," +
            curviness +
            "," +
            curveX +
            "," +
            curviness +
            "," +
            curveX +
            "," +
            anchorDistance +
            "S60," +
            curveY +
            ",60," +
            (curveY + anchorDistance * 2) +
            "V" +
            height +
            "z";

        blobPath.attr("d", newCurve2);

        blob.width(curveX + 60);

        hamburger.css("transform", "translate(" + curveX + "px, " + curveY + "px)");

        $("h2").css("transform", "translateY(" + curveY + "px)");
        window.requestAnimationFrame(svgCurve);
    }

    window.requestAnimationFrame(svgCurve);
});
