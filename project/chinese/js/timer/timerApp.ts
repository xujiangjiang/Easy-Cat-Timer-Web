/* 计时器 */
/* （管理计时器中的所有逻辑）（计时器的入口类） */
class TimerApp{

    /* 静态变量 */
    private static datas:Datas;//所有的[数据]
    private static systems:Systems;//所有的[系统]
    private static uis:Uis;//所有的[界面]



    /* 静态属性 */
    //所有的[数据]
    public static get Datas():Datas{
        return this.datas;
    }

    //所有的[系统]
    public static get Systems():Systems{
        return this.systems;
    }

    //所有的[界面]
    public static get Uis():Uis{
        return this.uis;
    }



    /* 静态方法 */
    //[入口方法]：调用这个方法，就可以运行计时器
    public static Start(){

        //初始化
        this.datas = new Datas();
        this.systems = new Systems();
        this.uis = new Uis();

        //读取数据
        this.systems.SaveSystem.Load();

    }

}
