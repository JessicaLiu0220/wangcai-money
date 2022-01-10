const localStorageKeyName = "tagList"
type Tag = {
    id: string;
    name: string;
}
type TagListModel = {
    data: Tag[]
    fetch: () => Tag[]
    create: (number: string) => 'success' | 'duplicated'//success表示成功，duplicated表示失败
    update: (id: string, number: string) => 'success' | 'duplicated' | 'not found'
    remove: (id: string) => boolean
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
        const names = this.data.map(item => item.name)
        if (names.indexOf(name) >= 0) { return 'duplicated' }
        this.data.push({ id: name, name: name });
        this.save();
        return 'success';
    },
    //更新数据
    update(id, name) {
        const idList = this.data.map(item => item.id)
        if (idList.indexOf(id) >= 0) {
            const names = this.data.map(item => item.name)
            if (names.indexOf(name) >= 0) {
                return 'duplicated'
            } else {
                const tag = this.data.filter(item => item.id === id)[0]
                tag.name = name;
                // tag.id = name;
                this.save()
                return 'success'
            }
        } else {
            return 'not found'
        }
    },
    //删除数据
    remove(id: string) {
        let index = -1;
        for (let i = 0; i < this.data.length; i++) {
            if (this.data[i].id === id) {
                index = i;
                break
            }
        }
        this.data.splice(index, 1)
        this.save()
        return true
    },
    //保存数据
    save() {
        window.localStorage.setItem(localStorageKeyName, JSON.stringify(this.data));

    }
}
export { tagListModel };