# vue-virtualized

vue-virtualized 是一个虚拟化渲染的库，可以帮助你实现长列表的虚拟化渲染，从而提升列表渲染性能

## 特点

1. vue-virtualized 非常轻量，共 100 行代码，体积仅有 2 KB
2. vue-virtualized 有非常好的性能，无论多长的列表，都可以轻松实现 60 fps
3. vue-virtualized 使用 vue3 的 composition api 编写，并且全面支持 typescript

## 安装

```
# Yarn
yarn add vue-virtualized

# NPM
npm install --save vue-virtualized
```

## 使用

用法见例子，下面是一些注意事项：

1. vue-virtualized 只支持 vue3，使用 jsx 语法
2. vue-virtualized 只支持一维列表，不支持二维列表
3. vue-virtualized 使用 renderItem 函数渲染列表
4. vue-virtualized 使用 reRenderCount 来判断是否需要重新计算高度并渲染列表
5. vue-virtualized 使用 preRenderPageCount 来控制预渲染的页数

### 例子

```tsx
import List from "vue-virtualized";
<List
  height={400}
  width={600}
  itemCount={props.dataSource.length} // 用于遍历列表，通常是数据源长度
  itemSize={(index) => {
    // 用于获取列表项高度，可传数字或函数
    return 100;
  }}
  reRenderCount={1} // 重新渲染的标记，内部会监听这个标记，如果标记改变，那么会重新渲染列表，所以如果列表项高度改变，那么必须改变这个值
  preRenderPageCount={1} // 预渲染的页数，数字越大，预渲染的列表项就越多
  renderItem={({ index, style }) => {
    // 用于渲染列表项
    const data = props.dataSource[index];
    return <div style={style}>{data}</div>;
  }}
/>;
```

### 接口

```ts
interface IProps {
  width: number;
  height: number;
  itemCount: number;
  itemSize: (index: number) => number;
  renderItem: (params: { index: number; style: CSSProperties }) => JSX.Element;
  reRenderCount?: number;
  preRenderPageCount?: number;
}
```

## 开源协议

MIT
