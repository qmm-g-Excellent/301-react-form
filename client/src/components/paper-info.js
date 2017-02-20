import React, {Component} from "react";

export default class PaperInfo extends Component {

  componentDidMount() {
    this.receivePropsData();
  }

  componentDidUpdate() {
    this.receivePropsData();
  }

  receivePropsData() {
    //这里的props来自container
    this.paperName.value = this.props.paper.paperName || '';
    this.description.value = this.props.paper.description || '';
  }

  editPaperName() {
    //这里props方法来自containers 里面的一个方法
    this.props.editPaper({paperName: this.paperName.value})
  }

  editPaperDescription() {
    this.props.editPaper({description: this.description.value});
  }


  render() {
    return (
        <div>
          {/*<div className="paper-header">*/}
          {/*<span>新增试卷</span>*/}
          {/*</div>*/}

          <div id="paper-info">
            <div className="page-body">
              <div className="form=group row">
                <label className="col-sm-3 control-label"> 试卷名称 </label>
                <div className="col-sm-6">
                  <input type="text" className="form-control"
                         placeholder='请输入试卷名称'
                         ref={(ref) => {
                           this.paperName = ref;
                         }}
                         onBlur={this.editPaperName.bind(this)}/>
                </div>
              </div>

              <div className="form-group row">
                <label className="col-sm-3 control-label">试卷描述</label>
                <div className="col-sm-6">
                  <textarea type="text" className="form-control"
                            placeholder="请输入试卷描述"
                            ref={(ref) => {
                              this.description = ref;
                            }}
                            onBlur={this.editPaperDescription.bind(this)}/>
                </div>

              </div>

            </div>

          </div>
        </div>
    )
  }
}