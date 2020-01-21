---
title: src/utils
lang: zh-CN
description: learn Element-ui utils
sidebarDepth: 2
meta:
  - name: learnElement
    content: learnElement, learn Element-ui
---

本文件主要放 Element-ui src/utils 目录的内容。

## `dom.js` 文件

`dom.js`文件内容：

### isServer

```js
const isServer = Vue.prototype.$isServer;
```

`Vue.prototype.$isServer`表示当前是否是在服务器端渲染，例如使用 [create-nuxt-app](https://zh.nuxtjs.org/guide/installation/#%E8%BF%90%E8%A1%8C-create-nuxt-app) 创建的项目中，在 `page/index.vue` 的 `created` 生命周期中添加 `console.log(this.$isServer)` 服务器端打印出来为 `true` 。

### ieVersion IE版本

```js
const ieVersion = isServer ? 0 : Number(document.documentMode);
```

[document.documentMode](https://www.runoob.com/jsref/prop-doc-documentmode.html)

### trim

```js
const trim = function(string) {
  return (string || '').replace(/^[\s\uFEFF]+|[\s\uFEFF]+$/g, '');
};
```

去除字符串首尾空白。

### camelCase

```js
const SPECIAL_CHARS_REGEXP = /([\:\-\_]+(.))/g;
const MOZ_HACK_REGEXP = /^moz([A-Z])/;
const camelCase = function(name) {
  return name.replace(SPECIAL_CHARS_REGEXP, function(_, separator, letter, offset) {
    return offset ? letter.toUpperCase() : letter;
  }).replace(MOZ_HACK_REGEXP, 'Moz$1');
};
```

将字符串转为小驼峰命名的格式。

### on 绑定事件

```js
export const on = (function() {
  if (!isServer && document.addEventListener) {
    return function(element, event, handler) {
      if (element && event && handler) {
        element.addEventListener(event, handler, false);
      }
    };
  } else {
    // 兼容不支持 document.addEventListener，例如低版本IE
    return function(element, event, handler) {
      if (element && event && handler) {
        element.attachEvent('on' + event, handler);
      }
    };
  }
})();
```

#### on 使用方式

```js
on(element, event, handler)
```

### off 解决绑定事件

```js
export const off = (function() {
  if (!isServer && document.removeEventListener) {
    return function(element, event, handler) {
      if (element && event) {
        element.removeEventListener(event, handler, false);
      }
    };
  } else {
    // 兼容不支持 document.removeEventListener，例如低版本IE
    return function(element, event, handler) {
      if (element && event) {
        element.detachEvent('on' + event, handler);
      }
    };
  }
})();
```

#### off 使用方式

```js
off(element, event, handler)
```

### once 一次性事件

```js
export const once = function(el, event, fn) {
  var listener = function() {
    if (fn) {
      fn.apply(this, arguments);
    }
    // 执行过之后就 解决绑定事件
    off(el, event, listener);
  };
  on(el, event, listener);
};
```

### hasClass

指定 dom 上是否含有某个 class 类名

```js
export function hasClass(el, cls) {
  if (!el || !cls) return false;
  // 类名中不能包含空格
  if (cls.indexOf(' ') !== -1) throw new Error('className should not contain space.');
  if (el.classList) {
    // Element.classList： https://developer.mozilla.org/zh-CN/docs/Web/API/Element/classList
    return el.classList.contains(cls);
  } else {
    return (' ' + el.className + ' ').indexOf(' ' + cls + ' ') > -1;
  }
};
```

### addClass 添加class类名

```js
export function addClass(el, cls) {
  if (!el) return;
  var curClass = el.className;
  // 将 cls 以空格分割为 数组，也就是说支持一次性添加多个class类名
  var classes = (cls || '').split(' ');

  for (var i = 0, j = classes.length; i < j; i++) {
    var clsName = classes[i];
    if (!clsName) continue;

    if (el.classList) {
      // classList.add： 如果这些类已经存在于元素的属性中，那么它们将被忽
      el.classList.add(clsName);
    } else if (!hasClass(el, clsName)) {
      // 添加前需要检测是否已存在
      curClass += ' ' + clsName;
    }
  }
  if (!el.classList) {
    el.className = curClass;
  }
};
```

### removeClass 删除class类名

```js
export function removeClass(el, cls) {
  if (!el || !cls) return;
  // 将 cls 以空格分割为 数组，也就是说支持一次性删除多个class类名
  var classes = cls.split(' ');
  var curClass = ' ' + el.className + ' ';

  for (var i = 0, j = classes.length; i < j; i++) {
    var clsName = classes[i];
    if (!clsName) continue;

    if (el.classList) {
      el.classList.remove(clsName);
    } else if (hasClass(el, clsName)) {
      // 之所以添加空格是防止出现多余空格
      curClass = curClass.replace(' ' + clsName + ' ', ' ');
    }
  }
  if (!el.classList) {
    el.className = trim(curClass);
  }
};
```
