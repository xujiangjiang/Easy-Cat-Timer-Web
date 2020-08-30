/* 系统：[保存&读取 系统] */
class SaveSystem{

    /* [保存] */
    public Save():void
    {
        //获取这个网页的localStorage对象
        let _localStorage = window.localStorage;

        //修改数据
        _localStorage.setItem("volume",TimerApp.Datas.volume+"");
    }

    /* [读取] */
    public Load():void
    {
        //获取这个网页的localStorage对象
        let _localStorage = window.localStorage;

        //获取数据
        let _volume:string = _localStorage.getItem("volume");

        //把字符串转换为数字
        if(_volume!=null){
            TimerApp.Datas.volume = window. parseInt(_volume);
        }

        //修改音量
        TimerApp.Uis.SettingUi.UpdateVolume(TimerApp.Datas.volume);
        TimerApp.Systems.AudioSystem.UpdateVolume(TimerApp.Datas.volume);
    }

}