// Original JavaScript code by Chirp Internet: chirpinternet.eu
// Please acknowledge use of this code by including this header.

// https://www.the-art-of-web.com/javascript/feedback-modal-window/

'use strict';

let checkForm = function (e) {
    let form = (e.target) ? e.target : e.srcElement;
    if (form.name.value == "") {
        alert("Please enter your Name");
        form.name.focus();
        e.preventDefault ? e.preventDefault() : e.returnValue = false;
        return;
    }
    if (form.email.value == "") {
        alert("Please enter a valid Email address");
        form.email.focus();
        e.preventDefault ? e.preventDefault() : e.returnValue = false;
        return;
    }
    if (form.message.value == "") {
        alert("Please enter your comment or question in the Message box");
        form.message.focus();
        e.preventDefault ? e.preventDefault() : e.returnValue = false;
        return;
    }
};

let modal_init = function () {

    let modalWrapper = document.getElementById("modal_wrapper");
    let modalWindow = document.getElementById("modal_window");

    let openModal = function (e) {
        modalWrapper.className = "overlay";
        let overflow = modalWindow.offsetHeight - document.documentElement.clientHeight;
        if (overflow > 0) {
            modalWindow.style.maxHeight = (parseInt(window.getComputedStyle(modalWindow).height) - overflow) + "px";
        }
        modalWindow.style.marginTop = (-modalWindow.offsetHeight) / 2 + "px";
        modalWindow.style.marginLeft = (-modalWindow.offsetWidth) / 2 + "px";
        e.preventDefault ? e.preventDefault() : e.returnValue = false;
    };

    let closeModal = function (e) {
        modalWrapper.className = "";
        e.preventDefault ? e.preventDefault() : e.returnValue = false;
    };

    let clickHandler = function (e) {
        if (!e.target) e.target = e.srcElement;
        if (e.target.tagName == "DIV") {
            if (e.target.id != "modal_window") closeModal(e);
        }
    };

    let keyHandler = function (e) {
        if (e.keyCode == 27) closeModal(e);
    };

    if (document.addEventListener) {
        document.getElementById("modal_open").addEventListener("click", openModal, false);
        document.getElementById("modal_close").addEventListener("click", closeModal, false);
        document.addEventListener("click", clickHandler, false);
        document.addEventListener("keydown", keyHandler, false);
    } else {
        document.getElementById("modal_open").attachEvent("onclick", openModal);
        document.getElementById("modal_close").attachEvent("onclick", closeModal);
        document.attachEvent("onclick", clickHandler);
        document.attachEvent("onkeydown", keyHandler);
    }

};

if (document.addEventListener) {
    document.getElementById("modal_feedback").addEventListener("submit", checkForm, false);
    document.addEventListener("DOMContentLoaded", modal_init, false);
} else {
    document.getElementById("modal_feedback").attachEvent("onsubmit", checkForm);
    window.attachEvent("onload", modal_init);
}