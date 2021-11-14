# this 到底是什麼？

有很多因素要考慮：

    - 非物件導向底下，要看執行環境有不同預設值：
        node.js : global
        瀏覽器 : window
        嚴格模式 : undefined ( node.js 跟瀏覽器都一樣 )
    - 物件導向中， this 就是 new 出來的 instance
    - DOM 事件綁定時， this 為綁定的 DOM 物件
    - 單純在物件底下，this 跟如何呼叫 function 有關
        如果是在物件本身上呼叫，this 為物件本身
        把 function 抽出來呼叫，this 則為預設值 ( global or window or undefined )
    - arrow function 中，根據外部的 this 是什麼而決定

如何改變 this：

    - bind : 將 this 值固定下來，回傳 function
    - call or apply : 指定 this，傳入參數並執行 function

