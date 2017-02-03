export class SecondService {
    public glocalDatavar;
    constructor() {
        this.glocalDatavar = "";
    }
    setTextData(cool) {
        this.glocalDatavar = cool;
    }
    getTextData() {
        return this.glocalDatavar;
    }
}