import React, {Component} from "react";

const labels = [
  {
    text: '简单',
    difficulty: 'easy'
  },
  {
    text: '一般',
    difficulty: 'normal'
  },
  {
    text: '困难',
    difficulty: 'hard'
  }
];


//下面的content是this，但是为什么要从那边传过来
const DifficultySetter = ({text, difficulty, content, disabled}) =>(
    <div className='form-inline'>
      <div className='col-sm-2 no-padding input-style form-group'>
        <label>{text}</label>
        <input type="number"
               className='level-input form-control'
               disabled={disabled}
               ref={(ref)=> {
                 content[difficulty] = ref;
               }}
               onBlur={content.handleUpdate.bind(content)}/>
      </div>

    </div>
);


export default class LogicPuzzle extends Component {
  constructor(props) {
    super(props);
    this.state = {
      inputState: this.props.logicPuzzle
    }
  }

  handleUpdate() {
    let definition;
    //下面的this.easy...是上面的ref
    if (this.logic.checked) {
      definition = {
        easy: parseInt(this.easy.value),
        normal: parseInt(this.normal.value),
        hard: parseInt(this.hard.value)
      };
    }
    this.props.updateLogicPuzzle(definition);
  }



  componentDidMount() {
    this.props.initLogicPuzzle();
  }

  componentDidUpdate(){
    this.easy.value = this.props.logicPuzzle.easy || '';
    this.normal.value = this.props.logicPuzzle.normal ||'';
    this.hard.valur = this.props.logicPuzzle.hard || '';
  }


  changeLogicState() {
    //这里有一个点就是可以在setState的回调里面写东西
    this.setState(
        {inputState: !this.state.inputState},
        ()=> {
          this.logic.checked = this.state.inputState;
          this.handUpdateLogic();
        })
  }

  handUpdateLogic() {
    let definition;
    if (!this.logic.checked) {
      definition = {};
    }
    this.props.updateLogicPuzzle(definition);
  }


  render() {
    return (
        <div className="logic-puzzle">
          <form className="form-horizontal">
            <div className="form-group">
              <label className="col-sm-3 control-label">逻辑题</label>
              <div className="checkbox com-sm-1">
                <input type="checkbox"
                       ref={(ref)=> {
                         this.logic = ref;
                       }}
                       checked={this.state.inputState}
                       onChange={this.changeLogicState.bind(this)}/>
              </div>
            </div>
          </form>

          <div ref={(ref)=> {
            this.logicBox = ref;
          }}>
            <div className='row form-group col-sm-offset-3'>
              {labels.map((label, index)=>(
                  <DifficultySetter key={index}
                                    {...label}
                                    content={this}
                                    disabled={this.state.inputState}/>
              ))}
            </div>

          </div>


        </div>
    )
  }

}