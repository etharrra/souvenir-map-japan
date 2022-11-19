let json_arr = [
    {
        "id": 1,
        "name": "Hokkaido",
        "prefecture": {
            "Hokkaido": ["Hokkaido"]
        }
    },
    {
        "id": 2,
        "name": "Tohoku",
        "prefecture": {
            "Aomori": ["Aomori"],
            "Iwate": ["Path_371"],
            "Miyagi": ["Path_361", "Path_362", "Path_363", "Path_364", "Path_365", "Path_366", "Path_367"],
            "Akita": ["Akita"],
            "Yamagata": ["Path_368", "Path_369", "Path_370"],
            "Fukushima": ["Path_360"]
        }
    },
    {
        "id": 3,
        "name": "Hokuriku_Shinetsu",
        "prefecture": {
            "Niigata": ["Niigata"],
            "Toyama": ["Path_382"],
            "Ishikawa": ["Ishikawa"],
            "Fukui": ["Path_380"],
            "Nagano": ["Nagano"]
        }
    },
    {
        "id": 4,
        "name": "Kanto",
        "prefecture": {
            "Tokyo": ["Path_389", "Path_390", "Path_391", "Path_392", "Path_393", "Path_394", "Path_395", "Path_396", "Path_397", "Path_398", "Path_399", "Path_400", "Path_401"],
            " Kanagawa": ["Path_387", "Path_388"],
            "Chiba": ["Chiba"],
            "Saitama": ["Path_402"],
            "Ibaraki": ["Ibaraki"],
            "Tochigi": ["Tochigi"],
            "Gunma": ["Path_384"]
        }
    },
    {
        "id": 5,
        "name": "Tokai",
        "prefecture": {
            "Yamanashi": ["Yamanashi"],
            "Shizuoka": ["Path_680"],
            "Gifu": ["Path_679"],
            "Aichi": ["Path_350", "Path_351", "Path_352"],
            "Mie": ["Path_353", "Path_354"]
        }
    },
    {
        "id": 6,
        "name": "Kansai",
        "prefecture": {
            "Kyoto": ["Path_425"],
            "Osaka": ["Path_423"],
            "Shiga": ["Path_355", "Path_355"],
            "Hyogo": ["Path_413", "Path_414", "Path_415", "Path_416", "Path_417", "Path_418"],
            "Nara": ["Nara"],
            "Wakayama": ["Path_419", "Path_420", "Path_421", "Path_422"]
        }
    },
    {
        "id": 7,
        "name": "Chugoku",
        "prefecture": {
            "Tottori": ["Tottori"],
            "Shimane": ["Shimane"],
            "Okayama": ["Path_405", "Path_406", "Path_407", "Path_408", "Path_409", "Path_410", "Path_411", "Path_412"],
            "Hiroshima": ["Path_499", "Path_500", "Path_501", "Path_502", "Path_503", "Path_504", "Path_505", "Path_506", "Path_507", "Path_508", "Path_509", "Path_510", "Path_511", "Path_512", "Path_513", "Path_514", "Path_515", "Path_516", "Path_517", "Path_518", "Path_519", "Path_520", "Path_521", "Path_522"],
            "Yamaguchi": ["Path_481", "Path_482", "Path_483", "Path_484", "Path_485", "Path_486", "Path_487", "Path_488", "Path_489", "Path_490", "Path_491", "Path_492", "Path_493", "Path_494", "Path_495", "Path_496", "Path_497", "Path_498"]
        }
    },
    {
        "id": 8,
        "name": "Shikoku",
        "prefecture": {
            "Tokushima": ["Path_436", "Path_437"],
            "Kagawa": ["Path_438", "Path_439", "Path_440", "Path_441", "Path_442", "Path_443", "Path_444", "Path_445", "Path_446", "Path_447", "Path_448", "Path_449", "Path_450", "Path_451"],
            "Ehime": ["Path_452", "Path_453", "Path_454", "Path_455", "Path_456", "Path_457", "Path_458", "Path_459", "Path_460", "Path_461", "Path_462", "Path_463", "Path_464", "Path_465", "Path_466", "Path_467", "Path_468", "Path_469", "Path_470", "Path_471", "Path_472", "Path_473", "Path_474", "Path_475", "Path_476", "Path_477", "Path_478", "Path_479", "Path_480"],
            "Kochi": ["Path_432", "Path_433", "Path_434", "Path_435"]
        }
    },
    {
        "id": 9,
        "name": "Kyushu",
        "prefecture": {
            "Fukuoka": ["Path_426", "Path_427", "Path_428", "Path_429", "Path_430", "Path_431"],
            "Saga": ["Path_575", "Path_576", "Path_577", "Path_578", "Path_579", "Path_580", "Path_581"],
            "Nagasaki": ["Path_582", "Path_583", "Path_584", "Path_585", "Path_586", "Path_587", "Path_588", "Path_589", "Path_590", "Path_591", "Path_592", "Path_593", "Path_594", "Path_595", "Path_596", "Path_597", "Path_598", "Path_599", "Path_600", "Path_601", "Path_602", "Path_603", "Path_604", "Path_605", "Path_606", "Path_607", "Path_608", "Path_609", "Path_610", "Path_611", "Path_612", "Path_613", "Path_614", "Path_615", "Path_616", "Path_617", "Path_618", "Path_619", "Path_620", "Path_621", "Path_622", "Path_623", "Path_624", "Path_625", "Path_626", "Path_627", "Path_628", "Path_629", "Path_630", "Path_631", "Path_632", "Path_633", "Path_634"],
            "Oita": ["Path_556", "Path_557", "Path_558", "Path_559", "Path_560", "Path_561", "Path_562"],
            "Kumamoto": ["Path_563", "Path_564", "Path_565", "Path_566", "Path_567", "Path_568", "Path_569", "Path_570", "Path_571", "Path_572", "Path_573", "Path_574"],
            "Miyazaki": ["Path_554", "Path_555"],
            "Kagoshima": ["Path_523", "Path_524", "Path_525", "Path_526", "Path_527", "Path_528", "Path_529", "Path_530", "Path_531", "Path_532", "Path_533", "Path_534", "Path_535", "Path_536", "Path_537", "Path_538", "Path_539", "Path_540", "Path_541", "Path_542", "Path_543", "Path_544", "Path_545", "Path_546", "Path_547", "Path_548", "Path_549", "Path_550", "Path_551", "Path_552", "Path_553"]
        }
    },
    {
        "id": 10,
        "name": "Okinawa",
        "prefecture": {
            "Okinawa": ["Path_636", "Path_637", "Path_638", "Path_639", "Path_640", "Path_641", "Path_642", "Path_643", "Path_644", "Path_645", "Path_646", "Path_647", "Path_648", "Path_649", "Path_650", "Path_651", "Path_652", "Path_653", "Path_654", "Path_655", "Path_656", "Path_657", "Path_658", "Path_659", "Path_660", "Path_661", "Path_662", "Path_663", "Path_664", "Path_665", "Path_666", "Path_667", "Path_668", "Path_669", "Path_670", "Path_671", "Path_672", "Path_673", "Path_674", "Path_675", "Path_676"]
        }
    },
    {
        "id": 11,
        "name": "線",
        "prefecture": {
            "線": ["Path_683", "Path_684", "Path_685", "Path_686", "Path_687", "Path_688", "Path_689", "Path_690"],
        }
    }
];

let sjson = getJsonData("/assets/data/souvenirs.json");

// get regions for list
let regions = json_arr.filter(function (i) {
    if (i.name !== "線") {
        return i.name;
    }
}).map(function (v) {
    return v.name;
});

// render list
/*let list_html = ""
$.each(regions, function(i, v) {
    // console.log(v);
    list_html += `
    <li class="list__item">
        <button class="${v}">${v.toUpperCase().replace('_','/')}</button>
    </li>
    `;
});
$('.souvenir_item--slider').html(list_html);*/

// souvenir--slider for list item
$('.souvenir--slider').slick({
    slidesToShow: 4,
    slidesToScroll: 1,
    dots: false,
    arrows: true,
    nextArrow: $('.souvenir_layer_slider #next'),
    prevArrow: $('.souvenir_layer_slider #prev'),
    responsive: [
        {
            breakpoint: 769,
            settings: {
                centerPadding: '27%',
                slidesToShow: 1,
                centerMode: true,
                focusOnSelect: true,
                arrows: false,
            }
        },
    ]
});

// souvenir_item--slider for list button
$('.souvenir_item--slider').slick({
    slidesToShow: 4,
    initialSlide: 2,
    slidesToScroll: 1,
    dots: false,
    arrows: true,
    nextArrow: $('.souvenir_item_slider #next'),
    prevArrow: $('.souvenir_item_slider #prev'),
    responsive: [
        {
            breakpoint: 769,
            settings: {
                // initialSlide: 5,
                centerPadding: '30.5%',
                slidesToShow: 1,
                centerMode: true,
                focusOnSelect: true,
                arrows: false,
            }
        },
    ]
});

// default select
$(document).ready(function () {
    if (window.location.pathname !== "/souvenir_detail.html" && window.location.pathname !== "/souvenir-detail") { // for main page
        $("#Path_389").click();

        /*list item mouser hover*/
        $(document).on('mouseenter', '.souvenir--slider a', function (e) {
            e.preventDefault();
            /*Call hoverin fun*/
            listItemHoverIn($(this)[0].className);
        });
        $(document).on('mouseleave', '.souvenir--slider a', function (e) {
            e.preventDefault();
            /*Call hoverin fun*/
            listItemHoverOut($(this)[0].className);
        });
    } else {  //for detail page
        // let url = window.location.href;
        // let id = url.split('?')[1].split('=');
        const queryString = window.location.search;
        const urlParams = new URLSearchParams(queryString);
        let id = urlParams.get('id');
        if (id == null) {
            id = 0;
        }
        let detail_obj = sjson[id - 1];
        console.log(detail_obj)
        if (detail_obj === undefined) {
            if (window.history.length > 0) {
                window.history.back();
            } else {
                window.location.href = "/"
            }
        } else {
            /*render the detail page*/
            let d_html = `
					<div class="souvenir-detail__content content-image">
						<figure class="souvenir-detail-mainimg">
							<img alt="" src="${detail_obj.main_img}">
						</figure>
						<figure class="souvenir-detail-subimg">`
            $.each(detail_obj.sub_img, function (i, v) {
                d_html += `<img alt="" src="${v}">`
            });
            // d_html +=`<img alt="" src="${detail_obj.main_img}">`;

            d_html += `</figure>
					</div>
					<div class="souvenir-detail__content content-text">                      
						<div class="content-text__head">
							<h2 class="souvenir-detail__title">${detail_obj.title}</h2>
							<p class="souvenir-detail__label">${detail_obj.prefecture}</p>
						</div>

						<div class="content-text__body">
							<p class="description">${detail_obj.description}</p>
							<div class="block">
								<p class="block_title">${detail_obj.block_title}</p>
								<p class="block_description">${detail_obj.block_description}</p>`;
            if (detail_obj.block_link_url != "") {
                d_html += `<a href="${detail_obj.block_link_url}" target="_blank">${detail_obj.block_link_url}</a>`;
            }
            d_html += `</div>
								<div class="ref_block">`;
            if (detail_obj.ref_url.length > 0) {
                $.each(detail_obj.ref_url, function (i, v) {
                    d_html += `<a href="${v}" target="_blank">${v}</a><br/>`
                });

            }
            d_html += `</div>
							<a href="${detail_obj.button_link}" class="button_link" target="_blank">${detail_obj.button_text}</a>
						</div>
					</div>
				`;
            /*render the detail page*/
            $(".souvenir-detail__inner").html(d_html);
        }
    }
});

//get json data
function getJsonData(url) {
    let value = "";
    $.ajax({
        url: url,
        type: 'GET',
        crossDomain: true,
        async: false,
        success: function (res) {
            value = res;
            // console.log(typeof(value));
        },
        error: function (thrownError) {
            console.log(thrownError);
        }
    });
    return value;
}

// map click
$(document).on('click', '#svg_map path', function () {
    // $("#svg_map path").on('click', function() {
    let p_id = this;
    /*select map region*/
    let id = regionSelect(p_id.id, "direct");
    if (id !== false) {
        // select list
        itemClick(id[1]);
        //show list item 
        itemShow(id[1]);
        // slide list button
        if (parseInt($(window).width()) > 769) {
            $('.souvenir_item--slider').slick('slickGoTo', id[0] - 2);
        } else {
            $('.souvenir_item--slider').slick('slickGoTo', id[0] - 1);
        }
    }
});

// sp slide event
$('.souvenir--slider').on('afterChange', function (event, slick, currentSlide) {
    if (parseInt($(window).width()) < 769) {
        let selected_cla = $('.souvenir--slider .slick-current a')[0].className;
        console.log(selected_cla);
        $('#svg_map path[fill="#ff483e"]').attr('fill', '#ead7a6');

        if ($("#" + selected_cla)[0].tagName == "g") {
            $(`#${selected_cla} path`).attr('fill', '#ff483e');
        } else {
            $(`#${selected_cla}`).attr('fill', '#ff483e');
        }
    }
});

$(window).resize(function () {
    $('#svg_map path[fill="#ff483e"]').attr('fill', '#ead7a6');
});


// map hover
let path_color = "";
$("#svg_map path").hover(function () {
    let p_id = this;
    path_color = $(this).attr('fill');
    // console.log(p_id.id)
    if (p_id.id !== "Path_677") {
        let id = regionSelect(p_id.id, "hoverin");
    }
}, function () {
    let p_id = this;
    if (p_id.id !== "Path_677") {
        let id = regionSelect(p_id.id, "hoverout");
        if (id[1] !== "線" && id.length > 0) {
            // fill color to map
            if ($("#" + id[1])[0].tagName == "g") {
                $(`#${id[1]} path`).attr('fill', path_color);
            } else {
                $(`#${id[1]}`).attr('fill', path_color);
            }
            $(".map_item_text span").removeClass('selected');
            $(".selectedR").addClass('selected')

            if ($('.selectedRegion')[0].tagName == "g") {
                $('.selectedRegion path').attr('fill', '#ead7a6');
            } else {
                $('.selectedRegion').attr('fill', '#ead7a6');
            }
        }
    }
});

// click list
$(document).on('click', '.souvenir_item--slider li button', function () {
    // $(".souvenir_item--slider li button").on('click', function() {
    /*select list*/
    itemClick($(this)[0].className);
    /*show list item*/
    let s_class = $(this)[0].className.split(" ")[0];
    itemShow(s_class);
    /*select region on map*/
    regionSelect(s_class, "indirect");
});

// list item hover in
function listItemHoverIn(cla) {
    if ($("#" + cla)[0].tagName == "g") {
        $(`#${cla} path`).attr('fill', '#ff483e');
    } else {
        $(`#${cla}`).attr('fill', '#ff483e');
    }
}

// list item hover out
function listItemHoverOut(cla) {
    if ($("#" + cla)[0].tagName == "g") {
        $(`#${cla} path`).attr('fill', '#ead7a6');
    } else {
        $(`#${cla}`).attr('fill', '#ead7a6');
    }
}

// select map region Fun
function regionSelect(cla, method) {
    $("#svg_map path[fill='#ead7a6']").attr('fill', '#cecac9');
    $("#svg_map path[fill='#ff483e']").attr('fill', '#cecac9');
    let p_id = cla;
    let id = [];
    if (method == "direct") {
        id = findId(p_id);
    } else if (method == "indirect") {
        id[1] = p_id;
    } else if (method == "hoverin") {
        id = findId(p_id);
    } else if (method == "hoverout") {
        id = findId(p_id);
        return id;
    }
    // console.log(id);
    if (id[1] !== "線" && id.length > 0) {
        // fill color to map
        if ($("#" + id[1])[0].tagName == "g") {
            $(`#${id[1]} path`).attr('fill', '#ead7a6');
        } else {
            $(`#${id[1]}`).attr('fill', '#ead7a6');
        }
        $(".map_item_text span").removeClass('selected');
        $("." + id[1].toLowerCase()).addClass('selected');
        if (method != "hoverin") {
            $(".map_item_text span").removeClass('selectedR');
            $("." + id[1].toLowerCase()).addClass('selectedR');
            $('g').removeClass('selectedRegion')
            $('path').removeClass('selectedRegion')
            $(`#${id[1]}`).addClass('selectedRegion');
        }
        return id;
    } else {
        return false;
    }
}

// select list button Fun
function itemClick(cla) {
    let thiz = $("." + cla);
    // console.log(thiz.length);
    if (thiz.length > 0) {
        $(".souvenir_item--slider li button").removeClass('selected');
        thiz.addClass('selected');
    }
}

// show list item Fun
function itemShow(cla) {
    let thiz = $("." + cla);
    // console.log(cla)
    // render the list item
    let list_item_arr = sjson.filter(function (i) {
        if (i.region === cla) {
            return i;
        }
    });
    let item_html = "";
    if (list_item_arr.length < 1) {
        $(".souvenir--slider").addClass('cm_soon_layer');
        item_html += `
			<p class="cm_soon">Coming Soon!</p>
		`;
        $(".souvenir--slider").slick('unslick');
        $(".souvenir--slider").html(item_html);
        $(".souvenir--slider").slick({
            slidesToShow: 4,
            slidesToScroll: 1,
            dots: false,
            arrows: true,
            nextArrow: $('.souvenir_layer_slider #next'),
            prevArrow: $('.souvenir_layer_slider #prev'),
            responsive: [
                {
                    breakpoint: 769,
                    settings: {
                        centerPadding: '27%',
                        slidesToShow: 1,
                        centerMode: true,
                        focusOnSelect: true,
                        arrows: false,
                    }
                },
            ]
        });
    } else {
        $(".souvenir--slider").removeClass('cm_soon_layer');
        $.each(list_item_arr, function (i, v) {
            item_html += `
				<li class="list__item">
					<a href="${v.detail_url}" class="${v.prefecture}">
						<img src="${v.main_img}">
						<div class="figcaption">
							<p class="item">${v.title}</p>
							<p class="sub_item">${v.prefecture}</p>
						</div>
					</a>		
				</li>
			`;
        });
        $(".souvenir--slider").slick('unslick');
        $(".souvenir--slider").html(item_html);
        $(".souvenir--slider").slick({
            slidesToShow: 4,
            slidesToScroll: 1,
            dots: false,
            arrows: true,
            nextArrow: $('.souvenir_layer_slider #next'),
            prevArrow: $('.souvenir_layer_slider #prev'),
            responsive: [
                {
                    breakpoint: 769,
                    settings: {
                        centerPadding: '27%',
                        slidesToShow: 1,
                        centerMode: true,
                        focusOnSelect: true,
                        arrows: false,
                    }
                },
            ]
        });
        // console.log(1);
        $(".souvenir--slider").slick('slickGoTo', 0);
    }
}

// find Id when click map
function findId(p_id) {
    let id = [];
    for (let i = 0; i < json_arr.length; i++) {
        let prefecture = json_arr[i].prefecture;
        $.each(prefecture, function (k, v) {
            if (v.includes(p_id)) {
                id[0] = k;
                return false;
            }
        });
        if (id.length > 0) {
            id[0] = json_arr[i].id;
            id[1] = json_arr[i].name;
            break;
        }
    }
    return id;
}