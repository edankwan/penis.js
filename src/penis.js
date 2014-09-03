/**

The Giant Penis License (GPL)

Copyright (c) 2013 Edan Kwan

            ▄▄██▄██▄▄
          ▄█    █    █▄
         ▄█           █▄
         █             █
        █               █
        █               █
        █               █
        █               █
         █▄     █     ▄█
          █    ▄▄▄    █
          █           █
          █           █
          █           █
          █           █
          █           █
          █           █
          █           █
          █           █
          █           █
          █           █
          █           █
          █           █
    ▄████▄█           █▄████▄
  ▄█                         █▄
 █                             █
█                               █
█                               █
█                               █
█             ▄▄█▄▄             █
 █           █     █           █
  █▄       ▄█       █▄       ▄█
    █▄▄▄▄▄█           █▄▄▄▄▄█

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in
all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
THE SOFTWARE.
**/


(function () {

    'use strict';
    /*jslint browser: true*/
    /*global define, module, global*/

    var _undef;

    var _global = typeof window === 'undefined' ? global : window;

    var prev = { B : _undef, D : _undef };


    var penis = {

        version: 0.2,

        setBalls: function (balls) {
            if (prev.B === _undef) {
              prev.B = _global.B;
            }
            _global.B = balls;
        },

        setHead: function (head) {
            if (prev.D === _undef) {
              prev.D = _global.D;
            }
            _global.D = head;
        },

        reset: function(){
            _global.D = prev.D;
            prev.D = _undef;
            _global.B = prev.B;
            prev.B = _undef;
        }

    };

    // add some setters so we can set penis.balls and penis.head directly if setters are available.
    if(typeof Object.defineProperty == 'function'){
      Object.defineProperty(penis,'balls',{
        get : function(){
          return _global.B;
        },
        set : penis.setBalls,
        enumerable : true,
        configurable : false
      });

      Object.defineProperty(penis,'head',{
        get : function(){
          return _global.D;
        },
        set : penis.setHead,
        enumerable : true,
        configurable : false
      });
    }

    //exports to multiple environments
    if (typeof define === 'function' && define.amd) { //AMD
        define(function () { return penis; });
    } else if (typeof module !== 'undefined' && module.exports) { //node
        module.exports = penis;
    } else { //browser
        //use string because of Google closure compiler ADVANCED_MODE
        /*jslint sub:true */
        _global['penis'] = penis;
    }

}());
