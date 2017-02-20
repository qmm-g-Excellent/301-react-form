import paper from "../paper-data/paper";
const initLogicPuzzle = (state = {}, action)=> {
  switch (action.type){
    case　'INIT_LOGIC_PUZZLE':{
      let logicPuzzle = paper.sections.find((section)=>{
        return section.type === 'logicPuzzle';
      });
      return logicPuzzle.description;
    }

    default:
      return state;
  }
};

export default initLogicPuzzle;