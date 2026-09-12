/**
 * 这是一个加载项自定义函数
 * @customfunction
 * @param {string} arg0 - 支持字符串参数
 * @param {number} arg1 - 支持数值参数
 * @param {boolean} arg2 - 支持bool参数
 * @returns {string} - 可以设置返回值类型
 */
export function custom_function(
    arg0: string,
    arg1: number,
    arg2: boolean,
    arg3: unknown,
    arg4: unknown,
): string {
    const argAndType = (arg: unknown) => `${arg}: ${typeof arg}`
    const argAndTypeList = [arg0, arg1, arg2, arg3, arg4].map(argAndType)
    const message = `这是一个加载项自定义函数(${argAndTypeList.join(', ')})`
    console.log(message)
    return message
}

