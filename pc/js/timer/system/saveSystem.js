/* 系统：[保存&读取 系统] */
class SaveSystem {
    /* [保存] */
    Save() {
        //获取这个网页的localStorage对象
        let _localStorage = window.localStorage;
        //修改数据
        _localStorage.setItem("volume", TimerApp.Datas.volume + "");
        _localStorage.setItem("language", TimerApp.Datas.language + "");
    }
    /* [读取] */
    Load() {
        //获取这个网页的localStorage对象
        let _localStorage = window.localStorage;
        //获取数据
        let _volume = _localStorage.getItem("volume");
        let _language = _localStorage.getItem("language");
        //把字符串转换为数字
        if (_volume != null) {
            TimerApp.Datas.volume = window.parseInt(_volume);
        }
        if (_language != null) {
            TimerApp.Datas.language = window.parseInt(_language);
        }
        //修改音量
        TimerApp.Uis.SettingUi.UpdateVolume(TimerApp.Datas.volume);
        TimerApp.Systems.AudioSystem.UpdateVolume(TimerApp.Datas.volume);
        //修改语言
        TimerApp.Uis.SettingUi.UpdateLanguage(TimerApp.Datas.language);
        TimerApp.Systems.LanguageSystem.SetLanguage(TimerApp.Datas.language);
    }
}
