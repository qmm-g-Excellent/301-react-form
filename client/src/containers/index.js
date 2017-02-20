//这里一会儿试一下去掉ｉｎｄｅｘ可不可以；
import PaperEditor from "../components/index";
import {connect} from "react-redux";

const mapDispatchToProps = (dispatch)=> {
  return {
    initPaperData: (data)=> {
      dispatch({type: 'INIT_PAPER_DATA', data});
    },
    initStacks: (data)=> {
      dispatch({type: 'INIT_STACKS', data});

    }
  };
}

// export default connect(mapStateToProps, mapDispatchToProps)(PaperEditor);

export default connect(()=> {
  return {};
}, mapDispatchToProps)(PaperEditor);