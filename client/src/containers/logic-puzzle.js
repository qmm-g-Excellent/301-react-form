import  {connect} from "react-redux";
import LogicPuzzle from "../components/logic-puzzle";

const mapStateToProps =  (state)=>{
   return{
     logicPuzzle: state.logicPuzzle
   }
};

const mapDispatchToProps = (dispatch)=>{
  return{
    initLogicPuzzle: ()=>{
       dispatch({type: 'INIT_LOGIC_PUZZLE'});
    },
    updateLogicPuzzle:(data)=>{
      dispatch({type: 'UPDATE_LOGIC_PUZZLE',data});
    }
  }
};

export  default connect(mapStateToProps, mapDispatchToProps)(LogicPuzzle);
