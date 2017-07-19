# StiteTouch
极简的手势插件，秒速上手, 玩转手势,无侵入设计,与现有代码与框架共存,大小仅有4KB。
> JS初始化：

```javascript
var odemo = new StiteTouch('#demo');
  
odemo.touchstart(function(){
    alert('touchstart回调');
});
```
>2、以及可以添加方法如以下写法

```javascript
var odemo = new StiteTouch('#demo','touchstart',function(){
 
    alert('touchstart回调');

});
```
>如：需要添加多种方法，可如下写法：

```javascript
var odemo = new StiteTouch('#demo');
 
odemo.touchstart(function(){
    alert('touchstart回调');
});
 
odemo.touchmove(function(){
    alert('touchmove回调');
});
 
odemo.tap(function(){
    alert('tap回调');
});
 
odemo.swipe(function(){
    alert('swipe回调');
});
```

>touchstart

```javascript
var odemo = new StiteTouch('#demo','touchstart',function(){
    // 执行touchstart回调
});
```