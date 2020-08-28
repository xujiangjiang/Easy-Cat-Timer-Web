/* 所有的数据 */
class Datas{

    /* 变量 */
    //[状态]相关的数据
    public currentState:StateType;//当前的状态

    //[设置]相关的数据
    public volume:number;//音量
    public language:LanguageType;//语言

    //[时间]相关的数据
    public currentTime:Time;//当前的时间
    public inputTime:Time;//用户输入的时间（用户想要倒计时多少分钟？）



    /* 构造方法 */
    constructor(){
        this.currentState = StateType.None;
        this.volume = 100;
        this.language = LanguageType.English;
        this.currentTime = new Time(0,0);
        this.inputTime = new Time(24,0);
    }

}