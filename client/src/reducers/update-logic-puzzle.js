import paper from "../paper-data/paper";

const updateLogicPuzzle = (state = {}, data)=> {
  const paperData = paper;
  let logicSection = paperData.sections.find((section)=> {
    return section.type === 'logicPuzzle';
  });
  if (!logicSection) {
    let newLogic = {
      type: 'logicPuzzle',
      description: data
    };
    paperData.sections.push(newLogic);
    return paperData;
  }


  //这里疑惑？？　我绝得它就是！
  if(!data){
    let newSection = paper.sections.filter((section)=>{
      return section.type != 'logicPuzzle';
    });
    paperData.sections = newSection;
    return paperData;
  }

  logicSection = data;
  logicSection = paperData.sections.map((section) =>{
    if(section.type === 'logicPuzzle'){
      section.description = logicSection;
    }
    return section;
  });
   return paperData;


};

export default  updateLogicPuzzle;