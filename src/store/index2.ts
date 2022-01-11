import { recordListModel } from "@/models/recordListModel";
import { tagListModel } from "@/models/tagListModel";

const store = {
    //record store
    recordList: recordListModel.fetch(),
    createRecord: (record: RecordItem) => recordListModel.create(record),

    //tag store
    tagList: tagListModel.fetch(),
    findTag(id: string) {
        return this.tagList.filter(t => t.id === id)[0];
    },
    createTag: (name: string) => {
        const message = tagListModel.create(name);
        if (message === "duplicated") {
            window.alert("该类名已经存在");
        } else {
            return;
        }
    },
    removeTag: (id: string) => {
        return tagListModel.remove(id)
    },
    updateTag: (id: string, name: string) => {
        return tagListModel.update(id, name)
    }

}
export default store