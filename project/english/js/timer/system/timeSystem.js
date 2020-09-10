/* 系统：[时间系统] */
class TimeSystem {
    /* 构造方法 */
    constructor() {
        //改变this的指向（指向当前这个TimeSystem的对象）
        let timerOnTick = this.TimerOnTick.bind(this);
        //启动定时器（每隔1秒，调用1次）
        window.setInterval(timerOnTick, 1000);
    }
    /* 私有方法 */
    /* 定时器的 触发方法：
       (每隔1秒，调用1次 这个方法)
       当定时器每次达到间隔时间时，都会触发一次这个方法*/
    TimerOnTick() {
        /* 判断是否进行倒计时？ */
        if (TimerApp.Datas.currentState != StateType.Run)
            return;
        /* 如果已经是0秒了，就停止此任务 */
        if (TimerApp.Datas.currentTime.TimeToSeconds() <= 0) {
            //停止此任务
            TimerApp.Datas.currentState = StateType.Stop;
            //弹出通知
            TimerApp.Uis.CountdownUi.OpenOrCloseCompleteTip(true);
        }
        /* 如果还在倒计时 */
        else {
            //就让时间减1秒
            TimerApp.Datas.currentTime.AddOrRemoveTime(-1);
            //更新[Ui]
            TimerApp.Uis.CountdownUi.UpdateTimeText(TimerApp.Datas.currentTime.ToString());
            //获取当前倒计时的进度
            let _progress = TimerApp.Datas.currentTime.TimeToSeconds() / TimerApp.Datas.inputTime.TimeToSeconds();
            _progress = 100 - Math.floor(_progress * 100);
            _progress = Tools.ClampNumber(_progress, 0, 100);
            //修改标题
            document.title = "Easy Cat Timer - [" + _progress + "%]";
        }
    }
}
