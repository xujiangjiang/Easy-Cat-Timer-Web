/* 所有的[系统] */
class Systems {
    /* 构造函数 */
    constructor() {
        //初始化
        this.audioSystem = new AudioSystem();
        this.timeSystem = new TimeSystem();
        this.saveSystem = new SaveSystem();
    }
    /* 属性 */
    //[音效系统]
    get AudioSystem() {
        return this.audioSystem;
    }
    //[时间系统]
    get TimeSystem() {
        return this.timeSystem;
    }
    //[保存系统]
    get SaveSystem() {
        return this.saveSystem;
    }
}
