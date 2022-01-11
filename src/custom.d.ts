type RecordItem = {
    tags: string[];
    notes: string;
    type: string;
    amount: number;
    createdAt?: Date;
};
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


