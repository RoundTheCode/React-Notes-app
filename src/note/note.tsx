class Note {
    Message: string;
    Created: Date;

    constructor(message: string) {
        this.Message = message;
        this.Created = new Date();
    }
}
export default Note;