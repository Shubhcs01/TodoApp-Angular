export class Todo {
    sno: Number
    title: String
    desc: String
    active: Boolean

    constructor(sno: Number, title: String, desc: String, active: Boolean) {
        this.sno = sno;
        this.title = title;
        this.desc = desc;
        this.active = active;
    }
}