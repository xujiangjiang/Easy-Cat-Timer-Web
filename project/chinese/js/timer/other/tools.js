/* 所有的工具 */
class Tools {
    /* [把1个字符串，转换为整数]
       参数1：要转换的字符串
       返回值：转换后的数字*/
    static StringToInt(_string) {
        //变量
        let _isHaveDecimalPoint = false; //是否有小数点了？
        let _numberString = ""; //数字的字符串
        //循环字符串中的每一个字符（这一步是为了去掉字符串中 非数字的部分）
        for (let i = 0; i < _string.length; i++) {
            //把这个字符转换成数字
            let _chat = window.parseInt(_string[i]);
            //如果转换成功了
            //注意：(_chat===_chat)的意思是，如果1个数据等于自己，那么这个数据的值就不是NaN
            if (_chat === _chat) {
                //就把这个数字，加入到字符串中
                _numberString += _chat;
            }
        }
        //如果没有数字
        if (_numberString == "") {
            _numberString = "0";
        }
        //把这个数字字符串，转换为数字
        let _number = window.parseInt(_numberString);
        //返回值
        return _number;
    }
    /* [把1个字符串，转换为小数]
        参数1：要转换的字符串
        返回值：转换后的数字*/
    static StringToFloat(_string) {
        //变量
        let _isHaveDecimalPoint = false; //是否有小数点了？
        let _numberString = "0"; //数字的字符串
        //循环字符串中的每一个字符（这一步是为了去掉字符串中 非数字的部分）
        for (let i = 0; i < _string.length; i++) {
            //如果这个字符是 小数点
            if (_string[i] == ".") {
                //如果还没有小数点
                if (_isHaveDecimalPoint == false) {
                    //修改标识符
                    _isHaveDecimalPoint = true;
                    //把这个小数点，加入到字符串中
                    _numberString += ".";
                }
            }
            //如果这个字符不是 小数点
            else {
                //把这个字符转换成数字
                let _chat = window.parseFloat(_string[i]);
                //如果转换成功了
                //注意：(_chat===_chat)的意思是，如果1个数据等于自己，那么这个数据的值就不是NaN
                if (_chat === _chat) {
                    //就把这个数字，加入到字符串中
                    _numberString += _chat;
                }
            }
        }
        //如果没有数字
        if (_numberString == "") {
            _numberString = "0";
        }
        //把这个数字字符串，转换为数字
        let _number = window.parseFloat(_numberString);
        //返回值
        return _number;
    }
    /* [把数字转换为字符串]
        (如果数字是5，并且是2位数。那么最后输出的是05)
        参数1：1个数字
        参数2：这个数字有几位数？*/
    static NumberToString(_number, _digits) {
        //变量
        let _numberString = _number + ""; //把这个数字，转换为字符串
        let _string = ""; //字符串
        //如果数字是5，并且是2位数。那么最后输出的是05
        for (let i = 0; i < _digits; i++) {
            if (i < _numberString.length) {
                _string = _string + _numberString[i];
            }
            else {
                _string = "0" + _string;
            }
        }
        //返回值
        return _string;
    }
    /* [限制1个数字的 最大值和最小值]
       参数1：1个数字
       参数2：最小值
       参数3：最大值
       返回值：限制后的数字 */
    static ClampNumber(_number, _min, _max) {
        //这个数字，不能大于最大值，不能小于最小值
        if (_number < _min) {
            _number = _min;
        }
        else if (_number > _max) {
            _number = _max;
        }
        //返回值
        return _number;
    }
    /* [获取随机数（整数）]
       参数1：最小值
       参数2：最大值
       返回值：随机出来的数字（包含最小值，不包含最大值） */
    static RandomInt(_min, _max) {
        //先随机1个0-1的数字（包含0，不包含1）
        let _randomNumber = Math.random();
        /* 然后让这个数字，乘以一个数字
           如果[0-1]的数字，乘以5，那么这个随机数的范围就是[0-5]
           如果我们让这个数字乘以(max-min)
           那么这个数字的取值范围就是0到max-min啦！
           
           但是这样还不行，我们还要让这个数字加上min，
           这样，这个数字的取值范围就是 min到max了（包含min，不包含max）*/
        _randomNumber = _randomNumber * (_max - _min) + _min;
        //然后，我们取整（那小数点，转换为整数）
        _randomNumber = Math.floor(_randomNumber);
        //返回值
        return _randomNumber;
    }
}
