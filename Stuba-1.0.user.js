// ==UserScript==
// @name         Stuba
// @namespace    http://tampermonkey.net/
// @version      1.0
// @description  Inject custom CSS into a page
// @author       xcernys1
// @match        https://is.stuba.sk/*
// @grant        GM_addStyle
// ==/UserScript==
(function() {
    'use strict';

    // Add responsive meta tag if not present
    if (!document.querySelector('meta[name="viewport"]')) {
        const meta = document.createElement('meta');
        meta.name = 'viewport';
        meta.content = 'width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no';
        document.head.appendChild(meta);
    }

})();
(function() {
    'use strict';

    GM_addStyle(`
    /*amoled dark mode*/
        div.loginform_infobox {
        width: 100% !important;
        background-color: #000 !important;
    }
        body  {
        font-family: verdana, arial, helvetica, sans, sans-serif !important;
        font-size: 13px !important;
        background: #000 !important;
        color: #fff !important;
        text-align: left !important;
        vertical-align: middle !important;
        padding: 0 !important;
        margin: 0 3px !important;
    }
    :root {
        --menitka__bg: #000 !important;
        --menitka_color: white !important;

    ol.breadcrumb {
        background: #000 !important;
        color: #fff !important;
    }
    a {
        color: #fff !important;
    }
    #menitko #vsechny-polozky > .polozky-obal {


        box-shadow: 0px 0px 0px 1px #fdfdfd inset !important;
        border-radius: 5px !important;
        background: linear-gradient(#000000 2rem, transparent 2rem) !important;
        background-color: #000000 !important;
    }


    span.menusectionup svg[role="img"] {

        --uc-fill-inner: #fff !important

        --uc-fill-outer: transparent !important;

        color: #fff !important;

        path {
            fill: #fff !important;
            stroke: #fff !important;
        }
    }
    span.menusectiondown svg[role="img"] {

        --uc-fill-inner: #fff !important;

        --uc-fill-outer: transparent !important;

        color: #fff !important;

        path {
            fill: #fff !important;
            stroke: #fff !important;
        }
    }

    li.breadcrumb-item img[sysid="base-home"] {

        filter: brightness(0) invert(1) !important;
    }

    input[type=checkbox] {
        border: 2px solid rgba(255, 255, 255, .25) !important;
        background-color: #000 !important;
    }
    input[type=radio]:disabled {
        border: 2px solid rgba(255, 255, 255, .25) !important;
        background-color: #000 !important;
        opacity: 1 !important;
    }
    .portal_menu td:not(.portal_menu_hole):not(.active) {
        background: #000 !important;
    }

    td,
    th,
    input,
    select,
    textarea {

        background-color: #000 !important;
        color: #fff !important;
    }

    div.small,
    span.small,
    .small28,
    .small415,
    .xsmall28,
    .xsmall415,
    .ysmall,
    .xsmall,
    .ysmall28,
    .ysmall415 {
        background-color: #000 !important;
        color: #fff !important;
    }




    /*layout edits*/
    div#hlavicka {
        display: none !important;
    }

    div.operinfo {
        display: none !important;
    }

    div.zasadky-container {
        display: none !important;
    }
    div#uis-context-help-titlebar {
        display: block !important;
    }
    div#uis-context-help-reader {
        left: 0 !important;
        top: 0 !important;
    }
    div.helpinbreadcrumbs {
        display: none !important;
    }
    #loginform.highlightbox {

        all: unset !important;
    }
    div.loginform_infobox {
        width: 100% !important;
    }




    div.small,
    span.small,
    .small28,
    .small415,
    .xsmall28,
    .xsmall415,
    .ysmall,
    .xsmall,
    .ysmall28,
    .ysmall415 {
        display: block !important;
        width: auto !important;
    }


    table {
        display: block !important;
        width: 100% !important;
        overflow-x: auto !important;
        /* white-space: nowrap !important;*/
    }
    .zasadky-container table {
        display: table !important;
        border-collapse: separate !important;
        box-sizing: border-box !important;
        text-indent: initial !important;
        unicode-bidi: isolate !important;
    }

    `);
})();
