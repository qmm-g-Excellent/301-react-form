import React, {Component} from 'react';
import PaperInfo from "../containers/paper-info";
import LogicPuzzle from "./logic-puzzle";

export  default class PaperEditor extends Component {
  componentWillUnmount() {

  }

  render() {
    return (
        <div id="paper">
          <div className="paper-header">
            新增试卷
          </div>
          <div className="paper-body">
            <PaperInfo/>
            <LogicPuzzle/>
          </div>
        </div>
    );
  }
}