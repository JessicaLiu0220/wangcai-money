const localStorageKeyName = "tagList"
type TagListModel = {
    data: string[]
    fetch: () => string[]
    create: (number: string) => 'success' | 'duplicated'//success表示成功，duplicated表示失败
    save: () => void
}

const tagListModel: TagListModel = {
    data: [],
    // 获取数据
    fetch() {
        this.data = JSON.parse(window.localStorage.getItem(localStorageKeyName) || "[]");//把解析出来的对象强制当成RecordItem数组
        return this.data
    },
    create(name: string) {
        if (this.data.indexOf(name) >= 0) { return 'duplicated' }
        this.data.push(name);
        this.save();
        return 'success';
    },
    //保存数据
    save() {
        window.localStorage.setItem(localStorageKeyName, JSON.stringify(this.data));

    }
}
export { tagListModel };