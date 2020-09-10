/* 所有的数据 */
class Datas {
    /* 构造方法 */
    constructor() {
        this.currentState = StateType.None;
        this.volume = 100;
        this.language = LanguageType.English;
        this.currentTime = new Time(0, 0);
        this.inputTime = new Time(24, 0);
    }
}
