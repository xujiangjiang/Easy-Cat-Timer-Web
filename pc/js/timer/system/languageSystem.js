/* 系统：[语言系统] */
class LanguageSystem {
    /* 公开方法 */
    /* [设置语言]
       参数1：语言的类型 */
    SetLanguage(_language) {
        /* 修改语言 */
        TimerApp.Datas.language = _language;
        /* 获取要修改的元素 */
        //设置界面
        let _titleElementInSettingUi = document.querySelector("#settingUi .settingTitle"); //标题
        //定时界面
        let _startButtonElementInTimingUi = document.querySelector("#timingUi .start .button"); //开始按钮
        let _startLineElementInTimingUi = document.querySelector("#timingUi .start .line"); //开始下划线
        //倒计时界面
        let _resetTextElementInCountdownUi = document.querySelector("#countdownUi .blackCat .rope .text .reset"); //重置
        let _pauseTextElementInCountdownUi = document.querySelector("#countdownUi .yellowCat .rope .text .pause"); //暂停
        let _resumeTextElementInCountdownUi = document.querySelector("#countdownUi .yellowCat .rope .text .resume"); //恢复
        let _blackCatLineElementInCountdownUi = document.querySelector("#countdownUi .blackCat .rope .line"); //黑猫绳子
        /* 修改元素的图片 */
        //如果是中文
        if (_language == LanguageType.Chinese) {
            _titleElementInSettingUi.style.backgroundImage = "url(../../../asset/image/text/chinese/SettingTitle.png)";
            _startButtonElementInTimingUi.style.backgroundImage = "url(../../../asset/image/text/chinese/Start.png)";
            _startLineElementInTimingUi.style.backgroundImage = "url(../../../asset/image/text/chinese/StartLine.png)";
            _resetTextElementInCountdownUi.style.backgroundImage = "url(../../../asset/image/text/chinese/Reset.png)";
            _pauseTextElementInCountdownUi.style.backgroundImage = "url(../../../asset/image/text/chinese/Pause.png)";
            _resumeTextElementInCountdownUi.style.backgroundImage = "url(../../../asset/image/text/chinese/Resume.png)";
        }
        //如果是英文
        else {
            _titleElementInSettingUi.style.backgroundImage = "url(../../../asset/image/text/english/SettingTitle.png)";
            _startButtonElementInTimingUi.style.backgroundImage = "url(../../../asset/image/text/english/Start.png)";
            _startLineElementInTimingUi.style.backgroundImage = "url(../../../asset/image/text/english/StartLine.png)";
            _resetTextElementInCountdownUi.style.backgroundImage = "url(../../../asset/image/text/english/Reset.png)";
            _pauseTextElementInCountdownUi.style.backgroundImage = "url(../../../asset/image/text/english/Pause.png)";
            _resumeTextElementInCountdownUi.style.backgroundImage = "url(../../../asset/image/text/english/Resume.png)";
        }
        /* 修改元素的位置 */
        //如果是中文
        if (_language == LanguageType.Chinese) {
            _titleElementInSettingUi.style.top = "215px";
            _titleElementInSettingUi.style.left = "173px";
            _blackCatLineElementInCountdownUi.style.top = "21px";
        }
        //如果是英文
        else {
            _titleElementInSettingUi.style.top = "211px";
            _titleElementInSettingUi.style.left = "178px";
            _blackCatLineElementInCountdownUi.style.top = "34px";
        }
    }
}
