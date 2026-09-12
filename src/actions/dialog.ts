export const GETDOCNAME = "getDocName";
export const CREATETASKPANE = "createTaskpane";
export const NEWDOC = "newDoc";
export const ADDSTRING = "addString";
export const CLOSEDOC = "closeDoc";
export const SETDEMOSPAN = "setDemoSpan";
export const OPENWEB = "openWeb";

export function getDocName() {
    return { type: GETDOCNAME } as const
}

export function createTaskpane() {
    return { type: CREATETASKPANE } as const
}

export function newDoc() {
    return { type: NEWDOC } as const
}

export function addString() {
    return { type: ADDSTRING } as const
}

export function closeDoc() {
    return { type: CLOSEDOC } as const
}

export function setDemoSpan(data: string) {
    return { type: SETDEMOSPAN, data } as const
}

export function openWeb() {
    return { type: OPENWEB } as const
}

export type DialogAction =
    | ReturnType<typeof getDocName>
    | ReturnType<typeof createTaskpane>
    | ReturnType<typeof newDoc>
    | ReturnType<typeof addString>
    | ReturnType<typeof closeDoc>
    | ReturnType<typeof setDemoSpan>
    | ReturnType<typeof openWeb>;
