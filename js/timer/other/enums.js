/* 所有的枚举类型 */
//语言的类型
var LanguageType;
(function (LanguageType) {
    LanguageType[LanguageType["None"] = 0] = "None";
    LanguageType[LanguageType["English"] = 1] = "English";
    LanguageType[LanguageType["Chinese"] = 2] = "Chinese"; //中文
})(LanguageType || (LanguageType = {}));
//状态的类型
var StateType;
(function (StateType) {
    StateType[StateType["None"] = 0] = "None";
    StateType[StateType["Run"] = 1] = "Run";
    StateType[StateType["Pause"] = 2] = "Pause";
    StateType[StateType["Stop"] = 3] = "Stop"; //停止
})(StateType || (StateType = {}));
//音效的类型
var AudioType;
(function (AudioType) {
    AudioType[AudioType["None"] = 0] = "None";
    AudioType[AudioType["Complete"] = 1] = "Complete";
    AudioType[AudioType["CatUp"] = 2] = "CatUp";
    AudioType[AudioType["CatDown"] = 3] = "CatDown";
    AudioType[AudioType["ButtonDown"] = 4] = "ButtonDown";
    AudioType[AudioType["ButtonUp"] = 5] = "ButtonUp";
    AudioType[AudioType["AddOrlessNumber"] = 6] = "AddOrlessNumber";
})(AudioType || (AudioType = {}));
