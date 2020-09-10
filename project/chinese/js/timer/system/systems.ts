/* 所有的[系统] */
class Systems{
    
    /* 变量 */
    private audioSystem:AudioSystem;//[音效系统]
    private timeSystem:TimeSystem;//[时间系统]
    private saveSystem:SaveSystem;//[保存系统]



    /* 属性 */
    //[音效系统]
    public get AudioSystem():AudioSystem{
        return this.audioSystem;
    }

    //[时间系统]
    public get TimeSystem():TimeSystem{
        return this.timeSystem;
    }
    
    //[保存系统]
    public get SaveSystem():SaveSystem{
        return this.saveSystem;
    }



    /* 构造函数 */
    constructor(){

        //初始化
        this.audioSystem = new AudioSystem();
        this.timeSystem = new TimeSystem();
        this.saveSystem = new SaveSystem();
        
    }

}