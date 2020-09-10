/* 所有的枚举类型 */
//语言的类型
enum LanguageType{

    None,
    English,//英语
    Chinese//中文

}


//状态的类型
enum StateType{

    None,
    Run,//运行
    Pause,//暂停
    Stop//停止

}


//音效的类型
enum AudioType{
    None,
    Complete,//完成音效
    CatUp,//猫咪站起来
    CatDown,//猫咪坐下
    ButtonDown,//普通按钮按下
    ButtonUp,//普通按钮抬起
    AddOrlessNumber,//[增加或减少][分钟数或者秒钟数]的音效（设定时间的界面）
}