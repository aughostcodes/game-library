'use strict';

const addGameBtn = document.querySelector('.add-game-btn');

addGameBtn.addEventListener('click', addGameToLibrary);

function addGameToLibrary() {
    console.log('added game in headcanon');
    console.log(Object.create(Game.prototype));
}

function Game(name, platform) {
    this.name = name;
    this.platform = platform;
}