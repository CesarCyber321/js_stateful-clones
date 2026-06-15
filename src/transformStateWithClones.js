'use strict';

/**
 * @param {Object} state
 * @param {Object[]} actions
 *
 * @return {Object[]}
 */
function transformStateWithClones(state, actions) {
  // write code here]

  const statesHistory = [];
  let currentState = { ...state };

  for (const action of actions) {
    // criar nova copia baseada na anterior.
    currentState = { ...currentState };

    if (action.type === 'clear') {
      currentState = {};
    } else if (action.type === 'addProperties') {
      for (const key in action.extraData) {
        currentState[key] = action.extraData[key];
      }
    } else if (action.type === 'removeProperties') {
      const keysToRemove = action.keysToRemove;

      for (const key of keysToRemove) {
        delete currentState[key];
      }
    }
    statesHistory.push(currentState);
  }

  return statesHistory;
}

module.exports = transformStateWithClones;
