import { DOCKLEFT, DOCKRIGHT, HIDETASKPANE, ADDSTRING, GETDOCNAME, SETDEMOSPAN, OPENWEB, type TaskpaneAction } from "../actions/taskpane";
import * as Immutable from "immutable";
import Util from "../js/util.js"

type TaskpaneStateKey = "docName" | "demoSpan";
export type TaskpaneState = Immutable.Map<TaskpaneStateKey, string | null>;

const defaultState = Immutable.Map<TaskpaneStateKey, string | null>({
    docName: null,
    demoSpan: "waiting..."
});

export default function taskpaneReducer(state: TaskpaneState = defaultState, action: TaskpaneAction): TaskpaneState {
    switch (action.type) {
        case DOCKLEFT:
            {
                const tsId = Util.GetPluginStorageValue<number>("taskpane_id")
                if (tsId){
                    let tskpane = window.Application.GetTaskPane(tsId)
                    let value: Kso.MsoCTPDockPosition;
                    if (window.Application.Enum)
                        value = window.Application.Enum.msoCTPDockPositionLeft as Kso.MsoCTPDockPosition;
                    else
                        value = Util.WPS_Enum.msoCTPDockPositionLeft as Kso.MsoCTPDockPosition
                    tskpane.DockPosition = value
                }
                break
            }
        case DOCKRIGHT:
            {
                const tsId = Util.GetPluginStorageValue<number>("taskpane_id")
                if (tsId){
                    let tskpane = window.Application.GetTaskPane(tsId)
                    let value: Kso.MsoCTPDockPosition;
                    if (window.Application.Enum)
                        value = window.Application.Enum.msoCTPDockPositionRight as Kso.MsoCTPDockPosition;
                    else
                        value = Util.WPS_Enum.msoCTPDockPositionRight as Kso.MsoCTPDockPosition
                    tskpane.DockPosition = value
                }
                break
            }
        case HIDETASKPANE:
            {
                const tsId = Util.GetPluginStorageValue<number>("taskpane_id")
                if (tsId){
                    let tskpane = window.Application.GetTaskPane(tsId)
                    tskpane.Visible = false
                }
                break
            }
        case ADDSTRING:
            {
                let curSheet = window.Application.ActiveSheet;
                if (curSheet){
                    curSheet.Cells.Item(1, 1).Formula="Hello, wps加载项!" + curSheet.Cells.Item(1, 1).Formula
                }
                break;
            }
        case GETDOCNAME:
            {
                let doc = window.Application.ActiveWorkbook
                let textValue
                if (!doc){
                    textValue = "当前没有打开任何文档"
                } else {
                    textValue = doc.Name
                }
                let newState = state.set('docName', textValue)
                return newState
            }
        case SETDEMOSPAN:
            {
                let newState = state.set('demoSpan', action.data)
                return newState
            }
        case OPENWEB:
            {
                const param = state.get('demoSpan')
                if (param) {
                    window.Application.OAAssist.ShellExecute(param)
                }
                break
            }
        default:
    }
    return state;
}
