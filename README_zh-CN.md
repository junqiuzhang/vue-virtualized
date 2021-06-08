# vue-virtualized

vue-virtualized 是一个虚拟化渲染的库，类似于react-window


## 安装
```
# Yarn
yarn add vue-virtualized

# NPM
npm install --save vue-virtualized
```

## 使用
用法类似于 react-window，下面是几个不同点：

1. vue-virtualized 只支持 vue3，使用 jsx 语法
2. vue-virtualized 只支持虚拟化一维列表，不支持虚拟化二维列表
3. vue-virtualized 使用 renderItem 函数渲染列表
4. vue-virtualized 使用 renderCount 来判断是否需要重新计算高度并渲染列表

### 例子

```tsx
import List from "vue-virtualized";
<List
  height={400}
  width={600}
  itemCount={props.dataSource.length} // Used to traverse a list, usually the length of the data source
  itemSize={(index) => {
    // used to get the height of a list item
    return 100;
  }}
  renderCount={0} // if your change list item‘s height, you must change this value
  renderItem={({ index, style }) => {
    // used to render list items
    const data = props.dataSource[index];
    return <div style={style}>{data}</div>;
  }}
/>;
```

## 开源协议
ISC
