/* 所有的[Ui] */
class Uis{
    
    /* 变量 */
    private titleBarUi:TitleBarUi;//计时器的[标题栏]
    private countdownUi:CountdownUi;//计时器的[倒计时界面]
    private timingUi:TimingUi;//计时器的[定时界面]
    private settingUi:SettingUi;//计时器的[设置界面]



    /* 属性 */
    //计时器的[标题栏]
    public get TitleBarUi():TitleBarUi{
        return this.titleBarUi;
    }

    //计时器的[倒计时界面]
    public get CountdownUi():CountdownUi{
        return this.countdownUi;
    }

    //计时器的[定时界面]
    public get TimingUi():TimingUi{
        return this.timingUi;
    }

    //计时器的[设置界面]
    public get SettingUi():SettingUi{
        return this.settingUi;
    }



    /* 构造函数 */
    constructor(){

        //初始化
        this.titleBarUi = new TitleBarUi();
        this.countdownUi = new CountdownUi();
        this.timingUi = new TimingUi();
        this.settingUi = new SettingUi();
        
    }

}