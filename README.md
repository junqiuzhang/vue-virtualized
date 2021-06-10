# vue-virtualized

[中文文档](https://github.com/junqiuzhang/vue-virtualized/blob/master/README_zh-CN.md)

vue-virtualized is a virtual rendering library, it can help you achieve virtual rendering of long lists, thereby improving the performance of list rendering.

## Feature

1. vue-virtualized is lightweight, only 100 lines of code, 2 KB in size.
2. vue-virtualized has very good performance, no matter how long the list is, it can be easy 60 fps.
3. vue-virtualized is written using vue3 composition api, and full support for typescript.

## Install

```
# Yarn
yarn add vue-virtualized

# NPM
npm install --save vue-virtualized
```

## Usage

See example for usage, there are some announcements:

1. vue-virtualized only support vue3, using jsx grammar.
2. vue-virtualized only support one-dimension list, not support two-dimension table.
3. vue-virtualized use renderItem function to render list items.
4. vue-virtualized use reRenderCount to determine if list updates are needed.
5. vue-virtualized use preRenderPageCount to control the number of pre-rendered pages.

### example

```tsx
import List from "vue-virtualized";
<List
  height={400}
  width={600}
  itemCount={props.dataSource.length} // Used to traverse a list, usually the length of the data source
  itemSize={(index) => {
    // used to get the height of a list item, numbers or functions can be passed
    return 100;
  }}
  reRenderCount={1} // if your change list item‘s height, you must change this value
  preRenderPageCount={1} // number of pre-rendered pages, the larger the number, the more list items will be pre-rendered
  renderItem={({ index, style }) => {
    // used to render list items
    const data = props.dataSource[index];
    return <div style={style}>{data}</div>;
  }}
/>;
```

### interface

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

## License

ISC
