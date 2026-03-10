// JavaScript Document
//ハンバーガーメニュー
// 変数定義

let humberger = document.getElementById("js-humberger");
let menu = document.querySelector(".js-nav-area");

// メニュー開閉制御
humberger.addEventListener("click", () => { //ハンバーガーボタンが選択されたら
    humberger.classList.toggle("-active");
});
humberger.addEventListener("click", () => { //ハンバーガーボタンが選択されたら
    menu.classList.toggle("-active");
});
menu.addEventListener("click", () => { //ハンバーガーボタンが選択されたら
    menu.classList.toggle("-active");
});


//絞り込み
var searchItem = '.tab_menu';   // 絞り込む項目を選択するエリア
var listItem = '.tab_content';       // 絞り込み対象のアイテム
var hideClass = 'is-hide';         // 絞り込み対象外の場合に付与されるclass名
var activeClass = 'is-active';     // 選択中のグループに付与されるclass名

$(function () {
    // 絞り込みを変更した時
    $(searchItem).on('click', function () {
        $(searchItem).removeClass(activeClass);
        var group = $(this).addClass(activeClass).data('group');
        search_filter(group);
    });
});

/**
 * リストの絞り込みを行う
 * @param {String} group data属性の値
 */
function search_filter(group) {
    // 非表示状態を解除
    $(listItem).removeClass(hideClass);
    // 値が空の場合はすべて表示
    if (group === '') {
        return;
    }
    // リスト内の各アイテムをチェック
    for (var i = 0; i < $(listItem).length; i++) {
        // アイテムに設定している項目を取得
        var itemData = $(listItem).eq(i).data('group');
        // 絞り込み対象かどうかを調べる
        if (itemData !== group) {
            $(listItem).eq(i).addClass(hideClass);
        }
    }
}
//fadeIn
function fadeAnime() {

    //動きの指定
    $('.fadeInTrigger').each(function () { //fadeInTriggerというクラス名が
        var elemPos = $(this).offset().top - 50;
        var scroll = $(window).scrollTop();
        var windowHeight = $(window).height();
        if (scroll >= elemPos - windowHeight) {
            $(this).addClass('fadeIn');
        } else {
            $(this).removeClass('fadeIn');
        }
    });
}

$(window).scroll(function () {

    fadeAnime();

});

$(window).on('load', function () {

    fadeAnime();

});

//フェードアップ
$(function () {
    $(window).scroll(function () {
        $('.js-fadeUp').each(function () {
            var pos = $(this).offset().top;
            var scroll = $(window).scrollTop();
            var windowHeight = $(window).height();
            if (scroll > pos - windowHeight + 100) {
                $(this).addClass('scrollUp');
            }
        });
    });
});

//splitTextAnimation
const textAnimation = (entries, obs) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            // 処理
            let text = entry.target.textContent;
            let result = text.split('');
            let newText = '';

            for (let i = 0; i < result.length; i++) {
                newText += '<span><span style="animation-delay: ' + (i * 0.03) + 's">' + result[i] + '</span></span>';
            }
            entry.target.innerHTML = newText;

            obs.unobserve(entry.target);
        }
    });
};

const textAnimeObserver = new IntersectionObserver(textAnimation);
const textAnimeElements = document.querySelectorAll('.textanimation');
textAnimeElements.forEach((textAnimeElement) => {
    textAnimeObserver.observe(textAnimeElement);
});


// Swiper initialization
const swiperInit = () => {
    const swipers = document.querySelectorAll('.mySwiper');

    swipers.forEach((swiperElement) => {
        // Find controls within the component or use direct children if structure allows, 
        // but standard Swiper practice for scoped controls:
        const nextEl = swiperElement.querySelector('.swiper-button-next');
        const prevEl = swiperElement.querySelector('.swiper-button-prev');
        const paginationEl = swiperElement.querySelector('.swiper-pagination');

        new Swiper(swiperElement, {
            loop: true,
            speed: 1000,
            autoplay: {
                delay: 4000,
                disableOnInteraction: false,
            },
            observer: true,
            observeParents: true,
            pagination: {
                el: paginationEl,
                clickable: true,
            },
            navigation: {
                nextEl: nextEl,
                prevEl: prevEl,
            },
        });
    });
};

// Call initialization
document.addEventListener('DOMContentLoaded', swiperInit);

