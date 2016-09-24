(function(){
    var StiteTouch = function(obj,event,fn){
        obj.indexOf('#')!=-1?obj=obj.replace('#', ''):obj;
        this.obj = document.getElementById(obj);
        if(typeof(event)!='string'){
            console.log('%c!event不存在','color:red;')
        }else{
            switch (event) {
                case 'touchstart':
                    this.touchstart(fn);
                    break;
                case 'tap':
                    this.touchstart(fn);
                    break;
                case 'touchend':
                    this.touchend(fn);
                    break;
                case 'touchmove':
                    this.touchmove(fn);
                    break;
                case 'drag':
                    this.drag(fn);
                    break;
                case 'dragend':
                    this.dragend(fn);
                    break;
                case 'swipe':
                    this.swipe(fn);
                    break;
                case 'swiperight':
                    this.swiperight(fn);
                    break;
                case 'swipeleft':
                    this.swipeleft(fn);
                    break;
                case 'swipetop':
                    this.swipetop(fn);
                    break;
                case 'swipebottom':
                    this.swipebottom(fn);
                    break;
                case 'longTap':
                    this.longTap(fn);
                    break;
                default:
                    console.log('%c方法不存在','color:red;')
                    break;
            }
        }
    }
    
    // touchstart封装
    StiteTouch.prototype.touchstart = function(fn){
        this.obj.addEventListener('touchstart',function(e){
            var touches = e.touches[0];
            e.x = touches.clientX;
            e.y = touches.clientY;
            if(fn){
                fn.call(this,e);
            }
        },false);
    }

    // touchend封装
    StiteTouch.prototype.touchend = function(fn){
        this.obj.addEventListener('touchend',function(e){
            var touchend = e.changedTouches[0];
            e.x = touchend.clientX;
            e.y = touchend.clientY;
            if(fn){
                fn.call(this,e);
            }
        },false);
    }

    // touchend封装
    StiteTouch.prototype.touchmove = function(fn){
        this.obj.addEventListener('touchmove',function(e){
            var touches = e.touches[0];
            e.x = touches.clientX;
            e.y = touches.clientY;
            if(fn){
                fn.call(this,e);
            }
        },false);
    }

    // drag封装
    StiteTouch.prototype.drag = function(fn){
        var lax,lay;
        this.touchstart(function(ev){
            lax = ev.x||0;
            lay = ev.y||0;
        });
        this.touchmove(function(ev){
            ev.x = ev.x-lax;
            ev.y = ev.y-lay;
            if(fn){
                fn.call(this,ev)
            }
        });
    }

    //dragend封装
    StiteTouch.prototype.dragend = function(fn){
        var lax,lay;
        this.touchstart(function(ev){
            lax = ev.x||0;
            lay = ev.y||0;
        });
        this.touchend(function(ev){
            ev.x = ev.x-lax;
            ev.y = ev.y-lay;
            if(fn){
                fn.call(this,ev)
            }
        });
    }


    // swipe
    StiteTouch.prototype.swipe = function(fn){
        var startLax,startLay,lock;
        this.touchstart(function(ev){
            startLax = ev.x;
            startLay = ev.y;
            lock = true;
        });
        this.touchmove(function(ev){
            lock = false;
            ev.preventDefault();
        });
        this.touchend(function(ev){
            if(lock) return false;
            endLax = ev.x;
            endLay = ev.y;
            if(Math.abs(endLax-startLax)>20||Math.abs(endLay-startLay)>20){
                fn.call(this,ev);
            }
            lock = true;
        });
    }
    // swiperight
    StiteTouch.prototype.swiperight = function(fn){
        var startLax,startLay,lock;
        this.touchstart(function(ev){
            startLax = ev.x;
            startLay = ev.y;
            lock = true;
        });
        this.touchmove(function(ev){
            lock = false;
            ev.preventDefault();
        });
        this.touchend(function(ev){
            if(lock) return false;
            endLax = ev.x;
            endLay = ev.y;
            if(Math.abs(endLax-startLax)>20&&Math.abs(endLay-startLay)<20){
                if(endLax-startLax>20){
                    fn.call(this,ev);
                }
            }
            lock = true;
        });
    }
    // swipeleft
    StiteTouch.prototype.swipeleft = function(fn){
        var startLax,startLay,lock;
        this.touchstart(function(ev){
            startLax = ev.x;
            startLay = ev.y;
            lock = true;
        });
        this.touchmove(function(ev){
            lock = false;
            ev.preventDefault();
        });
        this.touchend(function(ev){
            if(lock) return false;
            endLax = ev.x;
            endLay = ev.y;
            if(Math.abs(endLax-startLax)>20&&Math.abs(startLay-endLay)<20){
                if(endLax-startLax<-20){
                    fn.call(this,ev);
                }
            }
            lock = true;
        });
    }
    // swipetop
    StiteTouch.prototype.swipetop = function(fn){
        var startLax,startLay,lock;
        this.touchstart(function(ev){
            startLax = ev.x;
            startLay = ev.y;
            lock = true;
        });
        this.touchmove(function(ev){
            lock = false;
            ev.preventDefault();
        });
        this.touchend(function(ev){
            if(lock) return false;
            endLax = ev.x;
            endLay = ev.y;
            if(Math.abs(endLay-startLay)>20&&Math.abs(startLax-endLax)<20){
                if(endLay-startLay<-20){
                    fn.call(this,ev);
                }
            }
            lock = true;
        });
    }
    // swipebottom
    StiteTouch.prototype.swipebottom = function(fn){
        var startLax,startLay,lock;
        this.touchstart(function(ev){
            startLax = ev.x;
            startLay = ev.y;
            lock = true;
        });
        this.touchmove(function(ev){
            lock = false;
            ev.preventDefault();
        });
        this.touchend(function(ev){
            if(lock) return false;
            endLax = ev.x;
            endLay = ev.y;
            if(Math.abs(endLay-startLay)>20&&Math.abs(endLax-startLax)<20){
                if(endLay-startLay>20){
                    fn.call(this,ev);
                }
            }
            lock = true;
        });
    }

    // longTap
    StiteTouch.prototype.longTap = function(fn){
        var startLax,startLay,tapTime;
        this.touchstart(function(ev){
            startLax = ev.x;
            startLay = ev.y;
            tapTime = setTimeout(function(){
                fn.call(this,ev);
            },1000);
            ev.preventDefault();
        });
        this.touchmove(function(ev){
            endLax = ev.x;endLay = ev.y;
            if(Math.abs(startLax-endLax)>5||Math.abs(startLay-endLay)>5){
                clearTimeout(tapTime);
                tapTime = null;
            }
        });
        this.touchend(function(){
            if(tapTime){
                clearTimeout(tapTime);
                tapTime = null;
            }
        });
    }

    window.StiteTouch = StiteTouch;

    return window.StiteTouch;
})();