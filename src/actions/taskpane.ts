export const DOCKLEFT = "dockLeft";
export const DOCKRIGHT = "dockRight";
export const HIDETASKPANE = "hideTaskPane";
export const ADDSTRING = "addString";
export const GETDOCNAME = "getDocName";
export const SETDEMOSPAN = "setDemoSpan";
export const OPENWEB = "openWeb";


export function dockLeft() {
    return { type: DOCKLEFT } as const
}

export function dockRight() {
    return { type: DOCKRIGHT } as const
}

export function hideTaskPane() {
    return { type: HIDETASKPANE } as const
}

export function addString() {
    return { type: ADDSTRING } as const
}

export function getDocName() {
    return { type: GETDOCNAME } as const
}

export function setDemoSpan(data: string) {
    return { type: SETDEMOSPAN, data } as const
}

export function openWeb() {
    return { type: OPENWEB } as const
}

export type TaskpaneAction =
    | ReturnType<typeof dockLeft>
    | ReturnType<typeof dockRight>
    | ReturnType<typeof hideTaskPane>
    | ReturnType<typeof addString>
    | ReturnType<typeof getDocName>
    | ReturnType<typeof setDemoSpan>
    | ReturnType<typeof openWeb>;
