import {connect} from "react-redux";
import PaperInfo from "../components/paper-info";

//这个函数的参数本应该是state,但是这里的解构是解构的是state吗？？？
const mapStateToProps = (state)=> {
  return {paper: state.paperName};
};

const mapDispatchToProps = (dispatch)=> {
  return {
    editPaper: (data)=> {
      dispatch({type: 'EDIT_PAPER_INFO', data});
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(PaperInfo);