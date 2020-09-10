/* 时间：分、秒 */
class Time{

    /* 变量 */
    public minute:number;//分
    public seconds:number;//秒



    /* 构造函数 */
    constructor(_minute:number=0, _seconds:number=0){

        this.minute = _minute;
        this.seconds = _seconds;
        
    }



    /* 方法 */
    /* [添加/减少 分钟数]
    参数1：要改变的分钟数（+代表增加，-代表减少）*/
    public AddOrRemoveMinute(_changeMinute:number):void{

        //修改后的分钟数
        let _newMinute = this.minute + _changeMinute;

        //分钟数最大值是99，最小值是0
        if(_newMinute<0){
            _newMinute=99;
        }
        else if(_newMinute>99){
            _newMinute=0;
        }

        //修改分钟数
        this.minute = _newMinute;

    }      
    /* [添加/减少 秒数]
       参数1：要改变的秒数（+代表增加，-代表减少）*/
    public AddOrRemoveSeconds(_changeSeconds:number):void{

        //修改后的秒钟数
        let _newSeconds = this.seconds + _changeSeconds;

        //秒钟数最大值是59，最小值是0
        if(_newSeconds<0){
            _newSeconds=59;
        }
        else if(_newSeconds>59){
            _newSeconds=0;
        }

        //修改秒钟数
        this.seconds = _newSeconds;
        
    }
    /* [添加/减少 时间]
      （分钟和秒钟都修改）
       参数1：要改变的秒数（+代表增加，-代表减少）*/
    public AddOrRemoveTime(_changeSeconds:number):void{

        //总秒数（当前的时间，一共是多少秒？）
        let _totalSeconds:number = this.minute*60 + this.seconds;

        //修改秒
        _totalSeconds = _totalSeconds + _changeSeconds;

        //再把总秒数，修改成分钟和秒钟
        this.minute = Math.floor(_totalSeconds / 60);
        this.seconds = _totalSeconds - this.minute*60;
        
    }


    /* [改变 分钟] */
    public ChangeMinute(_minute:number):void{

        //分钟 最大值是99，最小值是0
        _minute = Tools.ClampNumber(_minute,0,99);

        //然后修改分钟
        this.minute = _minute;

    }
    /* [改变 秒钟] */
    public ChangeSeconds(_seconds:number):void{

        //秒钟 最大值是59，最小值是0
        _seconds = Tools.ClampNumber(_seconds,0,59);

        //然后修改秒钟
        this.seconds = _seconds;

    }


    /* [把时间转换为秒钟] */
    public TimeToSeconds():number{

        //总秒数（当前的时间，一共是多少秒？）
        let _totalSeconds:number = this.minute*60 + this.seconds;

        //返回值
        return _totalSeconds;

    }
    

    /* [把分钟转换为 字符串（比如2是02）] */
    public MinuteToString():string{

        //如果是6，那么输出06
        let _minute:string = Tools.NumberToString(this.minute,2);

        //返回值
        return _minute;

    }
    /* [把秒钟转换为 字符串（比如2是02）] */
    public SecondsToString():string{

        //如果是6，那么输出06
        let _seconds:string = Tools.NumberToString(this.seconds,2);

        //返回值
        return _seconds;

    }
    /* [把时间转换为 "分钟:秒钟"] */
    public ToString():string{

        //分钟和秒钟
        let _minute:string = Tools.NumberToString(this.minute,2);
        let _seconds:string = Tools.NumberToString(this.seconds,2);

        //返回值
        return _minute+":"+_seconds;

    }

}