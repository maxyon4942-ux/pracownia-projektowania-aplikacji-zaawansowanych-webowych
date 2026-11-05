export class TodoEntry {
    id: number;
    title: string;
    description?: string;
    isDone?: boolean;

    constructor(id:number, title:string) {
        this.id = id;
        this.title = title;
    }

    render() {
        return `
        <div class="card card-body mt-1 shadow">
           <h3>Tytuł: ${this.title}</h3>
           <p>Id: ${this.id}</p>
        </div>
        `
    }
}