import React, {Component} from "react";

export default class LogicPuzzle extends Component {
  constructor(props) {
    super(props);
    this.state = {
      inputState: this.props.logicPuzzle
    }
  }


  componentDidMount(){
    this.props.initLogicPuzzle();
  }



  render(){
    return(
        <div className="logic-puzzle">
          <form className="form-horizontal">
            <div className="form-group">
              <label className="col-sm-3 control-label">逻辑题</label>
              <div className="checkbox com-sm-1">
                <input type="checkbox"
                ref={(ref)=>{
                  this.logic = ref;
                }}
                checked={this.state.inputState}
                />
              </div>
            </div>
          </form>
        </div>
    )
  }

}