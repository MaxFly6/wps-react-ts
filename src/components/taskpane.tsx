import React, { Component } from 'react';
import { connect } from 'react-redux';
import { dockLeft, dockRight, hideTaskPane, addString, getDocName, setDemoSpan, openWeb } from '../actions/taskpane';
import type { RootState } from '../reducers';
import './dialog.css';
import axios from 'axios';

interface TaskpaneProps {
  docName: string | null | undefined;
  demoSpan: string | null | undefined;
  dockLeft: () => unknown;
  dockRight: () => unknown;
  hideTaskPane: () => unknown;
  addString: () => unknown;
  getDocName: () => unknown;
  setDemoSpan: (data: string) => unknown;
  openWeb: () => unknown;
}

class Taskpane extends Component<TaskpaneProps> {

  componentDidMount() {
    axios.get<string>('/.debugTemp/NotifyDemoUrl').then((res) => {
      const { setDemoSpan } = this.props;
      setDemoSpan(res.data);
    });
  }

  onDockLeft = () => {
    const { dockLeft } = this.props;
    dockLeft();
  }

  onDockRight = () => {
    const { dockRight } = this.props;
    dockRight();
  }
  onHideTaskPane = () => {
    const { hideTaskPane } = this.props;
    hideTaskPane();
  }
  onAddString = () => {
    const { addString } = this.props;
    addString();
  }
  onGetDocName = () => {
    const { getDocName } = this.props;
    getDocName();
  }
  onOpenWeb = () => {
    const { openWeb } = this.props;
    openWeb();
  }

  render() {
    const { docName, demoSpan } = this.props;

    return (
      <div className="global">
        <div className="divItem">
          这是一个网页，按<span className="debug">"F12"</span>可以打开调试器。
        </div>
        <div className="divItem">
          这个示例展示了wps加载项的相关基础能力，与B/S业务系统的交互，请用浏览器打开：
            <span className="docs" onClick={this.onOpenWeb}>{demoSpan}</span>
        </div>
        <div className="divItem">开发文档: <span className="docs">https://open.wps.cn/docs/office</span></div>
        <hr />
        <div className="divItem">
          <button onClick={this.onDockLeft}>停靠左边</button>
          <button onClick={this.onDockRight}>停靠右边</button>
          <button onClick={this.onHideTaskPane}>隐藏TaskPane</button>
          <button onClick={this.onAddString} > 文档开头添加字符串</button >
          <button onClick={this.onGetDocName} > 取文件名</button >
        </div >
        <hr />
        <div className="divItem">文档文件名为：<span>{docName}</span></div>
      </div>
    )
  }
}

const mapStateToProps = (state: RootState) => {
  return {
    docName: state.dialog.get('docName'),
    demoSpan: state.dialog.get('demoSpan'),
  }
}

export default connect(mapStateToProps, {
  dockLeft,
  dockRight,
  hideTaskPane,
  addString,
  getDocName,
  setDemoSpan,
  openWeb
})(Taskpane);
