import editPaper from "./editor-paper";
import updateLogicPuzzle from "./update-logic-puzzle";
import initLogicPuzzle from "./init-logic-puzzle";

const actionMap = {
  'EDIT_PAPER_INFO': editPaper,
  'INIT_LOGIC_PUZZLE': initLogicPuzzle,
  "UPDATE_LOGIC_PUZZLE": updateLogicPuzzle
};

function paperInfo(state = {}, action) {
  const func = actionMap[action.type];
  if (!func) {
    return state;
  }
  return func(state, action.data);
}

export  default  paperInfo;