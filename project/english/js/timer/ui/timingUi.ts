/* 计时器的[定时 界面] */
class TimingUi{

    /* 变量 */
    //[分钟数增加]按钮 的定时器（循环调用） 的id (-1代表没有调用)
    private minuteAddButtonIntervalId:number;
    //[分钟数减少]按钮 的定时器（循环调用） 的id (-1代表没有调用)
    private minuteLessButtonIntervalId:number;
    //[秒钟数增加]按钮 的定时器（循环调用） 的id (-1代表没有调用)
    private secondsAddButtonIntervalId:number;
    //[秒钟数减少]按钮 的定时器（循环调用） 的id (-1代表没有调用)
    private secondsLessButtonIntervalId:number;

    //是否打开了[分钟输入框]？
    private isOpenChangeMinuteInput:boolean;
    //是否打开了[秒钟输入框]？
    private isOpenChangeSecondsInput:boolean;



    /* 元素 */
    //定时界面
    private uiElement:HTMLElement;

    //分钟数[增加] 按钮
    private minuteAddButtonElement:HTMLElement;
    //分钟数[减少] 按钮
    private minuteLessButtonElement:HTMLElement;
    //分钟数[数字] 按钮
    private minuteNumberButtonElement:HTMLElement;
    //秒钟数[增加] 按钮
    private secondsAddButtonElement:HTMLElement;
    //秒钟数[减少] 按钮
    private secondsLessButtonElement:HTMLElement;
    //秒钟数[数字] 按钮
    private secondsNumberButtonElement:HTMLElement;

    //分钟数 文字
    private minuteTextElement:HTMLElement;
    //秒钟数 文字
    private secondsTextElement:HTMLElement;

    //[改变分钟]的面板
    private changeMinutePanelElement:HTMLInputElement;
    //[改变分钟]的输入框
    private changeMinuteInputElement:HTMLInputElement;
    //[改变秒钟]的面板
    private changeSecondsPanelElement:HTMLInputElement;
    //[改变秒钟]的输入框
    private changeSecondsInputElement:HTMLInputElement;
    //[关闭 输入框的面板]的按钮
    private closeInputsButtonElement:HTMLElement;

    //黄色的 背景
    private yellowBackgroundElement:HTMLElement;
    //灰色的 背景
    private grayBackgroundElement:HTMLElement;

    //开始 按钮
    private startButtonElement:HTMLElement;
    //下划线 图片
    private startLineElement:HTMLElement;


    
    /* 属性 */
    //元素：设置界面
    public get UiElement():HTMLElement{
        return this.uiElement;
    }



    /* 构造函数 */
    constructor(){

        /* 初始化 */
        //初始化[变量]
        this.minuteAddButtonIntervalId = -1;
        this.minuteLessButtonIntervalId = -1;
        this.secondsAddButtonIntervalId = -1;
        this.secondsLessButtonIntervalId = -1;
        this.isOpenChangeMinuteInput = false;
        this.isOpenChangeSecondsInput = false;

        //初始化[组件]
        this.uiElement = document.querySelector("#timingUi");
        this.minuteAddButtonElement = document.querySelector("#timingUi .minuteButtons .addButton");
        this.minuteLessButtonElement = document.querySelector("#timingUi .minuteButtons .lessButton");
        this.minuteNumberButtonElement = document.querySelector("#timingUi .minuteButtons .numberButton");
        this.secondsAddButtonElement = document.querySelector("#timingUi .secondsButtons .addButton");
        this.secondsLessButtonElement = document.querySelector("#timingUi .secondsButtons .lessButton");
        this.secondsNumberButtonElement = document.querySelector("#timingUi .secondsButtons .numberButton");
        this.minuteTextElement = document.querySelector("#timingUi .clock .minuteText");
        this.secondsTextElement = document.querySelector("#timingUi .clock .secondsText");
        this.changeMinutePanelElement = document.querySelector("#timingUi .changeClockInput .minute");
        this.changeSecondsPanelElement = document.querySelector("#timingUi .changeClockInput .seconds");
        this.changeMinuteInputElement = document.querySelector("#timingUi .changeClockInput .minute .input") as HTMLInputElement;
        this.changeSecondsInputElement = document.querySelector("#timingUi .changeClockInput .seconds .input") as HTMLInputElement;
        this.closeInputsButtonElement = document.querySelector("#timingUi .changeClockInput .closeButton");
        this.yellowBackgroundElement = document.querySelector("#timingUi .background .yellow");
        this.grayBackgroundElement = document.querySelector("#timingUi .background .gray");
        this.startButtonElement = document.querySelector("#timingUi .start .button");
        this.startLineElement = document.querySelector("#timingUi .start .line");


        /* 改变this的指向（指向当前这个TitleBarUi的对象） */
        let onMouseDownButton = this.OnMouseDownButton.bind(this);
        let onMouseDownMinuteAddButton = this.OnMouseDownMinuteAddButton.bind(this);
        let onMouseDownMinuteLessButton = this.OnMouseDownMinuteLessButton.bind(this);
        let onMouseDownSecondsAddButton = this.OnMouseDownSecondsAddButton.bind(this);
        let onMouseDownSecondsLessButton = this.OnMouseDownSecondsLessButton.bind(this);
        let onMouseUpUi = this.OnMouseUpUi.bind(this);
        let onContextMenuUi = this.OnContextMenuUi.bind(this);
        let onKeyPressUi = this.OnKeyPressUi.bind(this);
        let onClickMinuteNumberButton = this.OnClickMinuteNumberButton.bind(this);
        let onClickSecondsNumberButton = this.OnClickSecondsNumberButton.bind(this);
        let onClickCloseInputsButton = this.OnClickCloseInputsButton.bind(this);
        let onClickStartButton = this.OnClickStartButton.bind(this);
        let onDragStartUi = this.OnDragStartUi.bind(this);


        /* 注册事件 */
        this.minuteAddButtonElement.onmousedown = onMouseDownMinuteAddButton;
        this.minuteLessButtonElement.onmousedown = onMouseDownMinuteLessButton;
        this.secondsAddButtonElement.onmousedown = onMouseDownSecondsAddButton;
        this.secondsLessButtonElement.onmousedown = onMouseDownSecondsLessButton;
        
        this.uiElement.onmouseup = onMouseUpUi;
        this.uiElement.onmouseleave = onMouseUpUi;
        this.uiElement.oncontextmenu = onContextMenuUi;
        this.uiElement.onkeypress = onKeyPressUi;
        this.uiElement.ondragstart = onDragStartUi;

        this.minuteNumberButtonElement.onmousedown = onMouseDownButton;
        this.minuteNumberButtonElement.onclick = onClickMinuteNumberButton;
        this.secondsNumberButtonElement.onmousedown = onMouseDownButton;
        this.secondsNumberButtonElement.onclick = onClickSecondsNumberButton;
        this.closeInputsButtonElement.onmousedown = onMouseDownButton;
        this.closeInputsButtonElement.onclick = onClickCloseInputsButton;

        this.startButtonElement.onmousedown = onMouseDownButton;
        this.startButtonElement.onclick = onClickStartButton;

    }



    /* 公开方法 */
    /* [打开/关闭 此界面] 
       参数1：true是打开，false是关闭*/
    public OpenOrCloseUi(_isOpen:boolean){

        //如果是打开[设置界面]
        if(_isOpen == true){

            this.UiElement.style.display = "block";//显示

        }

        //如果是关闭[设置界面]
        else{

            this.UiElement.style.display = "none";//隐藏

        }

    }



    /* 事件 */
    //当按下按钮时（按下所有的按钮时）
    private OnMouseDownButton():void{

        //播放音效
        TimerApp.Systems.AudioSystem.PlayAudio(AudioType.ButtonDown);

    }


    //当按下[分钟数增加]按钮时
    private OnMouseDownMinuteAddButton(e:MouseEvent):void{

        //如果不是鼠标左键，就不运行后面的代码啦
        if(e.button != 0)return;

        //增加1个数字
        TimerApp.Datas.inputTime.AddOrRemoveMinute(1);

        //更新数字
        this.minuteTextElement.innerText = TimerApp.Datas.inputTime.MinuteToString();

        //播放音效
        TimerApp.Systems.AudioSystem.PlayAudio(AudioType.ButtonDown);

        

        //开始时的间隔时间（当按下按钮，多少秒后，开始一直增加数字？）
        let _startTime:number = 0.6;

        //开启循环调用，每隔0.2秒 增加1个数字
        this.minuteAddButtonIntervalId = window.setInterval(()=>{

            //等待0.6秒后，再运行后面的代码
            if(_startTime>0){
                _startTime-=0.2;
                return;
            }

            //增加1个数字
            TimerApp.Datas.inputTime.AddOrRemoveMinute(1);

            //更新数字
            this.minuteTextElement.innerText = TimerApp.Datas.inputTime.MinuteToString();

            //播放音效
            TimerApp.Systems.AudioSystem.PlayAudio(AudioType.AddOrlessNumber);
            
        },200);  

    }
    //当按下[分钟数减少]按钮时
    private OnMouseDownMinuteLessButton(e:MouseEvent):void{

        //如果不是鼠标左键，就不运行后面的代码啦
        if(e.button != 0)return;

        //增加1个数字
        TimerApp.Datas.inputTime.AddOrRemoveMinute(-1);

        //更新数字
        this.minuteTextElement.innerText = TimerApp.Datas.inputTime.MinuteToString();

        //播放音效
        TimerApp.Systems.AudioSystem.PlayAudio(AudioType.ButtonDown);

        

        //开始时的间隔时间（当按下按钮，多少秒后，开始一直增加数字？）
        let _startTime:number = 0.6;

        //开启循环调用，每隔0.2秒 增加1个数字
        this.minuteLessButtonIntervalId = window.setInterval(()=>{

            //等待0.6秒后，再运行后面的代码
            if(_startTime>0){
                _startTime-=0.2;
                return;
            }

            //增加1个数字
            TimerApp.Datas.inputTime.AddOrRemoveMinute(-1);

            //更新数字
            this.minuteTextElement.innerText = TimerApp.Datas.inputTime.MinuteToString();

            //播放音效
            TimerApp.Systems.AudioSystem.PlayAudio(AudioType.AddOrlessNumber);
            
        },200);  

    }
    //当按下[秒钟数增加]按钮时
    private OnMouseDownSecondsAddButton(e:MouseEvent):void{

        //如果不是鼠标左键，就不运行后面的代码啦
        if(e.button != 0)return;

        //增加1个数字
        TimerApp.Datas.inputTime.AddOrRemoveSeconds(1);

        //更新数字
        this.secondsTextElement.innerText = TimerApp.Datas.inputTime.SecondsToString();

        //播放音效
        TimerApp.Systems.AudioSystem.PlayAudio(AudioType.ButtonDown);

        

        //开始时的间隔时间（当按下按钮，多少秒后，开始一直增加数字？）
        let _startTime:number = 0.6;

        //开启循环调用，每隔0.2秒 增加1个数字
        this.secondsAddButtonIntervalId = window.setInterval(()=>{

            //等待0.6秒后，再运行后面的代码
            if(_startTime>0){
                _startTime-=0.2;
                return;
            }

            //增加1个数字
            TimerApp.Datas.inputTime.AddOrRemoveSeconds(1);

            //更新数字
            this.secondsTextElement.innerText = TimerApp.Datas.inputTime.SecondsToString();

            //播放音效
            TimerApp.Systems.AudioSystem.PlayAudio(AudioType.AddOrlessNumber);
            
        },200);  

    }
    //当按下[秒钟数减少]按钮时
    private OnMouseDownSecondsLessButton(e:MouseEvent):void{

        //如果不是鼠标左键，就不运行后面的代码啦
        if(e.button != 0)return;

        //增加1个数字
        TimerApp.Datas.inputTime.AddOrRemoveSeconds(-1);

        //更新数字
        this.secondsTextElement.innerText = TimerApp.Datas.inputTime.SecondsToString();

        //播放音效
        TimerApp.Systems.AudioSystem.PlayAudio(AudioType.ButtonDown);

        

        //开始时的间隔时间（当按下按钮，多少秒后，开始一直增加数字？）
        let _startTime:number = 0.6;

        //开启循环调用，每隔0.2秒 增加1个数字
        this.secondsLessButtonIntervalId = window.setInterval(()=>{

            //等待0.6秒后，再运行后面的代码
            if(_startTime>0){
                _startTime-=0.2;
                return;
            }

            //增加1个数字
            TimerApp.Datas.inputTime.AddOrRemoveSeconds(-1);

            //更新数字
            this.secondsTextElement.innerText = TimerApp.Datas.inputTime.SecondsToString();

            //播放音效
            TimerApp.Systems.AudioSystem.PlayAudio(AudioType.AddOrlessNumber);
            
        },200);  

    }


    //当抬起（和鼠标离开）[定时界面]时
    private OnMouseUpUi():void{

        //取消[长按分钟数增加]的循环调用
        if(this.minuteAddButtonIntervalId != -1){
            window.clearInterval(this.minuteAddButtonIntervalId);
            this.minuteAddButtonIntervalId = -1;
        }
        //取消[长按分钟数减少]的循环调用
        if(this.minuteLessButtonIntervalId != -1){
            window.clearInterval(this.minuteLessButtonIntervalId);
            this.minuteLessButtonIntervalId = -1;
        }

        //取消[长按秒钟数增加]的循环调用
        if(this.secondsAddButtonIntervalId != -1){
            window.clearInterval(this.secondsAddButtonIntervalId);
            this.secondsAddButtonIntervalId = -1;
        }
        //取消[长按秒钟数减少]的循环调用
        if(this.secondsLessButtonIntervalId != -1){
            window.clearInterval(this.secondsLessButtonIntervalId);
            this.secondsLessButtonIntervalId = -1;
        }
        
    }
    //当显示[定时界面]的右键菜单时
    private OnContextMenuUi():boolean{

        //不显示右键菜单
        window.event.returnValue=false;  
        return false; 

    }
    //如果在[定时界面]上 按下了按键
    private OnKeyPressUi(e:KeyboardEvent):void{

        //如果是回车键
        if(e.keyCode == 13){
            
            //就关闭输入框
            this.OnClickCloseInputsButton();

            //播放音效
            TimerApp.Systems.AudioSystem.PlayAudio(AudioType.ButtonDown);
            
        }

    }


    //当按下[分钟数]按钮时
    private OnClickMinuteNumberButton():void{
        
        //修改标识符
        this.isOpenChangeMinuteInput = true;

        //修改输入框中的数字
        this.changeMinuteInputElement.value = TimerApp.Datas.inputTime.MinuteToString();

        //关闭黄色的背景
        this.yellowBackgroundElement.style.opacity = "0";

        //打开分钟数的输入框
        this.changeMinutePanelElement.style.visibility = "visible";
        this.closeInputsButtonElement.style.visibility = "visible";

        //选中这个Input
        this.changeMinuteInputElement.focus();

    }
    //当按下[秒钟数]按钮时
    private OnClickSecondsNumberButton():void{
    
        //修改标识符
        this.isOpenChangeSecondsInput = true;

        //修改输入框中的数字
        this.changeSecondsInputElement.value = TimerApp.Datas.inputTime.SecondsToString();

        //关闭灰色的背景
        this.grayBackgroundElement.style.opacity = "0";

        //打开秒钟数的输入框
        this.changeSecondsPanelElement.style.visibility = "visible";
        this.closeInputsButtonElement.style.visibility = "visible";

        //选中这个Input
        this.changeSecondsInputElement.focus();

    }
    //当按下[关闭]按钮时
    private OnClickCloseInputsButton():void{
    
        //如果修改的是分钟数
        if(this.isOpenChangeMinuteInput == true){

            //拿到用户输入的文字
            let _inputString:string = this.changeMinuteInputElement.value;

            //把用户输入的文字，转换为数字
            let _inputNumber:number = Tools.StringToInt(_inputString);

            //修改数据
            TimerApp.Datas.inputTime.ChangeMinute(_inputNumber);

            //更新数字
            this.minuteTextElement.innerText = TimerApp.Datas.inputTime.MinuteToString();

        }

        //如果修改的是秒钟数
        if(this.isOpenChangeSecondsInput == true){

            //拿到用户输入的文字
            let _inputString:string = this.changeSecondsInputElement.value;

            //把用户输入的文字，转换为数字
            let _inputNumber:number = Tools.StringToInt(_inputString);

            //修改数据
            TimerApp.Datas.inputTime.ChangeSeconds(_inputNumber);

            //更新数字
            this.secondsTextElement.innerText = TimerApp.Datas.inputTime.SecondsToString();

        }
        
        //修改标识符
        this.isOpenChangeMinuteInput = false;
        this.isOpenChangeSecondsInput = false;

        //打开背景
        this.yellowBackgroundElement.style.opacity = "1";
        this.grayBackgroundElement.style.opacity = "1";

        //关闭输入框
        this.changeMinutePanelElement.style.visibility = "hidden";
        this.changeSecondsPanelElement.style.visibility = "hidden";
        this.closeInputsButtonElement.style.visibility = "hidden";

    }


    //当鼠标点击[开始]按钮时
    private OnClickStartButton():void{

        //修改时间
        TimerApp.Datas.currentTime.ChangeMinute(TimerApp.Datas.inputTime.minute);
        TimerApp.Datas.currentTime.ChangeSeconds(TimerApp.Datas.inputTime.seconds);

        //更新时间的Ui
        TimerApp.Uis.CountdownUi.UpdateTimeText(TimerApp.Datas.currentTime.ToString());

        //修改状态
        TimerApp.Datas.currentState = StateType.Run;

        //关闭[计时界面]
        TimerApp.Uis.TimingUi.OpenOrCloseUi(false);

        //打开[倒计时界面]
        TimerApp.Uis.CountdownUi.OpenOrCloseUi(true);

    }


    //当开始拖拽时
    private OnDragStartUi():boolean{

        //禁止拖拽
        return false;

    }

}