'use strict';

const addGameBtn = document.querySelector('.add-game-btn');



function addGameToLibrary() {
    console.log('added game in headcanon'); 
    console.log(Object.create(Game.prototype));
}

function Game(name, platform) {
    this.name = name;
    this.platform = platform;
}

/*
Modal information used in this code:
https://www.the-art-of-web.com/javascript/feedback-modal-window/
*/

const modalInit = function () {
    const modalWrapper = document.querySelector('.modal-wrapper');
    const modalWindow = document.querySelector('.modal-window');

    const openModal = function (e) {
        modalWrapper.className = 'overlay';
        let overflow = modalWindow.offsetHeight - document.documentElement.clientHeight;
        if (overflow > 0) {
            modalWindow.style.maxHeight = (parseInt(window.getComputedStyle(modalWindow).height) - overflow) + 'px';
        }
        modalWindow.style.marginTop = (-modalWindow.offsetHeight) / 2 + 'px';
        modalWindow.style.marginLeft = (-modalWindow.offsetHeight) / 2 + 'px';
        e.preventDefault ? e.preventDefault() : e.returnValue = false;
    };

    const closeModal = function (e) {
        modalWrapper.className = "";
        e.preventDefault ? e.preventDefault() : e.returnValue = false;
    };

    const clickHandler = function (e) {
        if (!e.target) e.target = e.srcElement;
        if (e.target.tagName == "DIV") {
            if (e.target.class != "modal-window") closeModal(e);
        }
    };

    const keyHandler = function (e) {
        if (e.keyCode == 27) closeModal(e);
    }

    if (document.addEventListener) {
        document.querySelector('.add-game-btn').addEventListener('click', openModal, false);
        document.querySelector('.close-modal').addEventListener('click', closeModal, false);
        document.addEventListener('click', clickHandler, false);
        document.addEventListener('keydown', keyHandler, false);
    } else {
        document.querySelector('.add-game-btn').attachEvent('onclick', openModal);
        document.querySelector('.close-modal').attachEvent('onclick', closeModal);
        document.attachEvent('onclick', clickHandler);
        document.attachEvent('onkeydown', keyHandler);
    };

    if (document.addEventListener) {
        // document.querySelector('.modal-input').addEventListener('submit', checkForm, false);
        // document.addEventListener('DOMContentLoaded', modalInit, false);
    } else {
        // document.querySelector('.modal-input').attachEvent('onsubmit', checkForm);
        window.attachEvent('onload', modalInit);
    }
    openModal();
}

addGameBtn.addEventListener('click', modalInit);

