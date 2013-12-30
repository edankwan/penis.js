/**

The Giant Penis License (GLP)

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

    var _global = typeof window === 'undefined' ? global : window;

    var penis = {

        version: 0.1,

        setBalls: function (balls) {
            _global.B = balls;
        },

        setDickHead: function (dickHead) {
            _global.D = dickHead;
        }

    };

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
