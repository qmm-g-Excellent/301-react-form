import paper from "../paper-data/paper";

const editPaper = (data, newData)=> {
  let paperData = paper;
  const {paperName, description} = newData;
  if (paperName) {
    paperData.paperName = newData.paperName;
  }
  if (description) {
    paperData.description = description;
  }
  return paperData;


};

export default editPaper;