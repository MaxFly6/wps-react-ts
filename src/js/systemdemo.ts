
export interface SystemDemoRequest {
    Index?: string;
    filepath?: string;
    [key: string]: unknown;
}

function parseRequest(param: string | SystemDemoRequest): SystemDemoRequest {
    return typeof param === 'string' ? JSON.parse(param) as SystemDemoRequest : param
}

export function openOfficeFileFromSystemDemo(param: string | SystemDemoRequest): Record<string, string> {
    const jsonObj = parseRequest(param)
    alert("从业务系统传过来的参数为：" + JSON.stringify(jsonObj))
    return {wps加载项项返回: jsonObj.filepath + ", 这个地址给的不正确"}
}

export function InvokeFromSystemDemo(param: string | SystemDemoRequest): Record<string, string> {
    const jsonObj = parseRequest(param)
    const handleInfo = jsonObj.Index
    switch (handleInfo){
        case "getDocumentName":{
            let docName = ""
            if (window.Application.ActiveWorkbook){
                docName = window.Application.ActiveWorkbook.Name
            }

            return {当前打开的文件名为:docName}
        }

        case "newDocument":{
            const doc = window.Application.Workbooks.Add()
            const newDocName = doc.Name
            
            return {操作结果:"新建文档成功，文档名为：" + newDocName}
        }

        case "OpenFile":{
            const filePath = jsonObj.filepath
            if (!filePath) {
                throw new Error("打开文件时必须提供 filepath")
            }
            window.Application.Workbooks.OpenFromUrl(filePath)
            return {操作结果:"打开文件成功"}
        }
        default:
    }

    return {其它xxx:""}
}

export default{
    openOfficeFileFromSystemDemo,
    InvokeFromSystemDemo
}
