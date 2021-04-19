---
title: 快捷键
---

NPlayer 内置多个快捷键可以用于播放器行为。它们只有在播放器元素是聚焦时才生效。

可以通过 `shortcut` 参数来配置是否开启快捷键功能，它默认是 `true`，表示开启。

默认内置有 6 个快捷键。

| 快捷键 | 描述 |
| --- | --- |
| 左 | 快退 |
| 右 | 快进 |
| 上 | 增加音量 |
| 下 | 降低音量 |
| esc | 退出全屏或网页全屏 |
| space | 播放或暂停 |

音量和进度递增的大小可以通过 `seekStep` 和 `volumeStep` 参数控制，它们的默认值是 `10` 和 `0.1`。

```js
new Player({
  seekStep: 15,
  volumeStep: 0.2
})
```