//在后续的wps版本中，wps的所有枚举值都会通过wps.Enum对象来自动支持，现阶段先人工定义
const WPS_Enum = {
    msoCTPDockPositionLeft: 0,
    msoCTPDockPositionRight: 2
}

type PluginStorageValue = string | number | boolean;

function GetUrlPath() {
    let e = document.location.toString()
    e = decodeURI(e)
    if (-1 !== e.indexOf("/"))
        e = e.substring(0, e.lastIndexOf("/"))
    return e
}

function GetPluginStorageValue<T extends PluginStorageValue>(key: string): T | null {
    return Application.PluginStorage.getItem(key) as unknown as T | null
}

export default {
    WPS_Enum,
    GetUrlPath,
    GetPluginStorageValue
}
