'use strict';

/**
 * Saves game state to local storage.
 * @param {string} key - The key under which the state is stored.
 * @param {object} state - The state to be persisted.
 */
function saveGameState(key, state) {
    localStorage.setItem(key, JSON.stringify(state));
}

/**
 * Loads game state from local storage.
 * @param {string} key - The key under which the state is stored.
 * @returns {object|null} - The loaded state or null if not found.
 */
function loadGameState(key) {
    const state = localStorage.getItem(key);
    return state ? JSON.parse(state) : null;
}

/**
 * Clears the saved game state from local storage.
 * @param {string} key - The key under which the state is stored.
 */
function clearGameState(key) {
    localStorage.removeItem(key);
}

module.exports = {
    saveGameState,
    loadGameState,
    clearGameState
};
