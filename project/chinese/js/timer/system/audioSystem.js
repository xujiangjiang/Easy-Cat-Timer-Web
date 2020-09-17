/* 系统：[音效系统] */
class AudioSystem {
    /* 构造方法 */
    constructor() {
        /* 初始化组件 */
        this.buttonDownAudio = document.querySelector("#audios .buttonDown");
        this.buttonUpAudio = document.querySelector("#audios .buttonUp");
        this.addOrLessNumberAudio = document.querySelector("#audios .addOrLessNumber");
        this.completeAudio = document.querySelector("#audios .complete");
        this.catUpAudios = new Array();
        this.catUpAudios.push(document.querySelector("#audios .catUp1"));
        this.catUpAudios.push(document.querySelector("#audios .catUp2"));
        this.catUpAudios.push(document.querySelector("#audios .catUp3"));
        this.catDownAudios = new Array();
        this.catDownAudios.push(document.querySelector("#audios .catDown1"));
        this.catDownAudios.push(document.querySelector("#audios .catDown2"));
        this.catDownAudios.push(document.querySelector("#audios .catDown3"));
    }
    /* 方法 */
    /* [播放音效]
       参数1：音效的类型 */
    PlayAudio(_audioType) {
        //如果用户设置的是 不播放音效，就不执行之后的代码啦~
        if (TimerApp.Datas.volume <= 0)
            return;
        //如果是ios系统，那么就交给supportIosTool脚本，进行播放
        if (OtherApp.SupportIosTool.IsIos == true) {
            OtherApp.SupportIosTool.PlayAudio(_audioType);
            return;
        }
        //播放声音
        switch (_audioType) {
            case AudioType.ButtonDown:
                this.buttonDownAudio.play();
                break;
            case AudioType.ButtonUp:
                this.buttonUpAudio.play();
                break;
            case AudioType.AddOrlessNumber:
                this.addOrLessNumberAudio.play();
                break;
            case AudioType.Complete:
                this.completeAudio.play();
                break;
            case AudioType.CatUp:
                let _catUpIndex = Tools.RandomInt(0, this.catUpAudios.length); //随机1个音频
                this.catUpAudios[_catUpIndex].play(); //播放音频
                this.StopAudio(AudioType.CatUp, _catUpIndex); //停止猫咪抬起 的音频
                this.StopAudio(AudioType.CatDown); //停止猫咪坐下 的音频
                break;
            case AudioType.CatDown:
                let _catDownIndex = Tools.RandomInt(0, this.catDownAudios.length); //随机1个音频
                this.catDownAudios[_catDownIndex].play(); //播放音频
                this.StopAudio(AudioType.CatUp); //停止猫咪抬起 的音频
                this.StopAudio(AudioType.CatDown, _catDownIndex); //停止猫咪坐下 的音频
                break;
        }
    }
    /* [停止音频]
        参数1：音效的类型
        参数2：不要停止哪个音频？（只对CatUp和CatDown有用）  -1代表停止这个类型的所有音频  */
    StopAudio(_audioType, _noStopIndex = -1) {
        //停止声音
        switch (_audioType) {
            case AudioType.CatUp:
                for (let i = 0; i < this.catUpAudios.length; i++) {
                    //如果是要停止的音频
                    if (_noStopIndex != i) {
                        //就停止这个音频
                        this.catUpAudios[i].pause();
                        this.catUpAudios[i].currentTime = 0;
                    }
                }
                break;
            case AudioType.CatDown:
                for (let i = 0; i < this.catDownAudios.length; i++) {
                    //如果是要停止的音频
                    if (_noStopIndex != i) {
                        //就停止这个音频
                        this.catDownAudios[i].pause();
                        this.catDownAudios[i].currentTime = 0;
                    }
                }
                break;
            case AudioType.Complete:
                //就停止这个音频
                this.completeAudio.pause();
                this.completeAudio.currentTime = 0;
                break;
        }
    }
    /* [更新 音量]
      （更新Audio元素 的音量大小）
       参数1：音量的大小（0-100）*/
    UpdateVolume(_volume) {
        //修改数据
        TimerApp.Datas.volume = _volume;
        //因为<audio>元素的volume属性的值 是0到1，所以我们要把音量的值 变成0到1
        _volume = _volume / 100;
        /* 设置所有的 <audio>元素的 volume属性 */
        this.buttonDownAudio.volume = _volume;
        this.buttonUpAudio.volume = _volume;
        this.addOrLessNumberAudio.volume = _volume;
        this.completeAudio.volume = _volume;
        for (let i = 0; i < this.catUpAudios.length; i++) {
            this.catUpAudios[i].volume = _volume;
        }
        for (let i = 0; i < this.catDownAudios.length; i++) {
            this.catDownAudios[i].volume = _volume;
        }
    }
}
