const localStorageKeyName = "recordList"
const model = {
    clone(data: RecordItem[] | RecordItem
    ) {
        return JSON.parse(JSON.stringify(data))
    },
    // 获取数据
    fetch() {
        return JSON.parse(window.localStorage.getItem(localStorageKeyName) || "") as RecordItem[];//把解析出来的对象强制当成RecordItem数组
    },
    //保存数据
    save(data: RecordItem[]) {
        window.localStorage.setItem(localStorageKeyName, JSON.stringify(data));

    }
}
export { model }