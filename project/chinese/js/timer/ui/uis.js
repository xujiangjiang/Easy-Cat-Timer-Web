/* 所有的[Ui] */
class Uis {
    /* 构造函数 */
    constructor() {
        //初始化
        this.titleBarUi = new TitleBarUi();
        this.countdownUi = new CountdownUi();
        this.timingUi = new TimingUi();
        this.settingUi = new SettingUi();
    }
    /* 属性 */
    //计时器的[标题栏]
    get TitleBarUi() {
        return this.titleBarUi;
    }
    //计时器的[倒计时界面]
    get CountdownUi() {
        return this.countdownUi;
    }
    //计时器的[定时界面]
    get TimingUi() {
        return this.timingUi;
    }
    //计时器的[设置界面]
    get SettingUi() {
        return this.settingUi;
    }
}
