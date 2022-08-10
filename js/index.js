$(document).ready(function ($) {
    function animateElements() {
        $('.progressbar').each(function () {
            var elementPos = $(this).offset().top;
            var topOfWindow = $(window).scrollTop();
            var percent = $(this).find('.circle').attr('data-percent');
            var percentage = parseInt(percent, 10) / parseInt(100, 10);
            var animate = $(this).data('animate');
            if (elementPos < topOfWindow + $(window).height() - 30 && !animate) {
                $(this).data('animate', true);
                $(this).find('.circle').circleProgress({
                    startAngle: -Math.PI / 2,
                    value: percent / 100,
                    thickness: 1,
                    fill: {
                        color: '#e74c3c'
                    }
                }).on('circle-animation-progress', function (event, progress, stepValue) {
                    $(this).find('div').text((stepValue * 100).toFixed(0) + "%");
                }).stop();
            }
        });
    }


    animateElements();
    $(window).scroll(animateElements);
});


function clickMe () {
    let acc = document.getElementById("accordion");
    // let z = acc[0];
    // let s = z[0].style.color = "#ff0036";
    console.log("barev");
    acc.childNodes[1].childNodes[1].style.color="#ff0036";

}

$.ajax({
    url: "ajax/progress.json",
    type: "GET",
    dataType: "json",
    success: function (data) {


        data.progressArr.forEach((i) => {
            let progress = $('#progress');
            let coll = $('<div>', {class:"col-xl-3 col-lg-6 col-md-12 col-sm-12  d-flex justify-content-center"});
            let progressBar = $('<div>', {class:"progressbar"});
            let circle = $('<div>', {class:"circle"});
            $(circle).attr('data-percent',i.percent);
            let divv = $('<div>');
            let trail = $('<div>',{class:"traill"});
            let h3 = $('<h3>',{class:"txt"});
            h3.text(`${i.name}`);
            let par = $('<p>');
            par.text(`${i.text}`);

            progress.append(coll);
            coll.append(progressBar);
            progressBar.append(circle);
            circle.append(divv);
            progressBar.append(trail);
            trail.append(h3);
            trail.append(par);

        });
    }
});

$.ajax({
    url: "ajax/follow.json",
    type: "GET",
    dataType: "json",
    success: function (data) {

        data.followArr.forEach((i) => {
            let parent = $('#parent');
            let col = $('<div>', {class: "col-lg-3 col-md-6 col-12  d-flex justify-content-center"});
            let div = $('<div>',{class: "hovhex"});
            let hexIcons = $('<div>', {class: "hex-iconss"});
            let iconHex = $('<div>', {class:"icon-hexessss"});
            let iCl = $('<i>', {class:i.iconClass1});
            let p = $('<p>', {class:"ride"});
            let div2 = $('<div>');
            p.text(`${i.name}`);
            parent.append(col);
            col.append(div);
            div.append(hexIcons);
            div.append(iconHex);
            div.append(div2);
            div2.append(p);
            iconHex.append(iCl);


        })
    }
});

    $.ajax({
        url: "ajax/team.json",
        type: "GET",
        dataType: "json",
        success: function (data) {

            var team = $('#all');
            data.arr.forEach((i) => {
                var div = `<div class="padding-4 col-xl-3 col-lg-6 col-md-12 col-sm-12 col-xs-12 d-flex justify-content-center">
                                   <div class="overMe">
                                    <img src="${i.img}">
                                        <div class="overlayOverMe">
                                            <div class="row d-flex justify-content-center">
                                                <div class="d-flex px-3">
                                                    <div class="hexaggon">
                                                    </div>
                                                    <div class="icon-hexes">
                                                        <i class="${i.iconClass1} aria-hidden="true"></i>
                                                    </div>

                                                </div>

                                                <div class="d-flex px-2">
                                                    <div class="hexaggon">
                                                    </div>
                                                    <div class="icon-hexes">
                                                        <i class="${i.iconClass2} aria-hidden="true"></i>
                                                    </div>

                                                </div>

                                                <div class="d-flex px-1">
                                                    <div class="hexaggon">
                                                    </div>
                                                    <div class="icon-hexes">
                                                        <i class="${i.iconClass3} aria-hidden="true"></i>
                                                    </div>

                                                </div>
                                            </div>
                                        </div>
                                        <div class="trail">
                                            <h3 class="txt">${i.text}</h3>
                                            <p>${i.txt}</p>
                                        </div>
                                    </div>
                                </div>
`;
                $(team).append(div);




            })

        }
    });


$.ajax({
    url: "ajax/blog.json",
    type: "GET",
    dataType: "json",
    success: function (data) {
        data.blog.forEach((i, index) => {
            if (index < 2) {
                $('#create').append(`<div class="row mb-5 blog_row">
                <div class="col-lg-4 col-md-6 col-12 d-flex justify-content-lg-end justify-content-md-end justify-content-sm-start">
                    <div class="blog_img">
                        <img src="${i.img}" alt="${i.alt}" class="layerr">
                    </div>
                </div>
                <div class="col-lg-8 col-md-6 col-12">
                    <div class="admin_content">
                        <h6>${i.title}</h6>
                        <div class="admin_icon">
                            <i class="${i.icon1}" aria-hidden="true"> ${i.icon1_name}</i>
                            <i class="${i.icon2}" aria-hidden="true"> ${i.icon2_name}</i>
                            <i class="${i.icon3}" aria-hidden="true"> ${i.icon3_name}</i>
                        </div>
                        <p>${i.info}</p>
                        <a class="btn btn-theme btn-sm btn-min-block" href="#" id="butto">View more</a>
                    </div>
                </div>

            </div>`);
            }
        })
    }
        });
// $('#btn_down').on('click', function () {
//     $('.blog_row.hide').removeClass('hide').addClass("show");
// })

// $('#btn_down').click(function () {
//     $('#createtwo').css("display","block");
// });

// document.getElementById("btn_down").addEventListener(click(function () {
//
// });
function dropdown() {
    document.getElementById("createtwo").style.display = "block";
    $.ajax({
        url: "ajax/blog.json",
        type: "GET",
        dataType: "json",
        success: function (data) {
            data.blog.forEach((i, index) => {
                if (index >= 2) {
                    $('#createtwo').append(`<div class="row mb-5 blog_row">
                <div class="col-lg-4 col-md-6 col-12 d-flex justify-content-lg-end justify-content-md-end justify-content-sm-start">
                    <div class="blog_img">
                        <img src="${i.img}" alt="${i.alt}" class="layerr">
                    </div>
                </div>
                <div class="col-lg-8 col-md-6 col-12">
                    <div class="admin_content">
                        <h6>${i.title}</h6>
                        <div class="admin_icon">
                            <i class="${i.icon1}" aria-hidden="true"> ${i.icon1_name}</i>
                            <i class="${i.icon2}" aria-hidden="true"> ${i.icon2_name}</i>
                            <i class="${i.icon3}" aria-hidden="true"> ${i.icon3_name}</i>
                        </div>
                        <p>${i.info}</p>
                        <a class="btn btn-theme btn-sm btn-min-block" href="#" id="butto">View more</a>
                    </div>
                </div>

            </div>`);
            }
            })
        }
    });
    document.getElementById("butonone").style.display = "none";
    document.getElementById("butontwo").style.display = "block";

}

function dropup() {
    document.getElementById("createtwo").style.display = "none";
    document.getElementById("butonone").style.display = "block";
    document.getElementById("butontwo").style.display = "none";

}
