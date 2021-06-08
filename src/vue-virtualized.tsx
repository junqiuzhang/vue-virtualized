import { defineComponent, PropType, ref } from "vue";
const DefaultStyle = {
  position: "absolute",
};
const VueVirtualized = defineComponent({
  props: {
    width: Number,
    height: Number,
    itemCount: Number,
    itemSize: Function as PropType<(index: number) => number>,
    renderCount: Number,
    renderItem: Function as PropType<
      (params: { index: number; style: any }) => JSX.Element
    >,
  },
  setup(props, context) {
    const listRef = ref<Element | null>(null);
    const itemsTop = ref<number[]>([]);
    const renderCount = ref<number>();
    const renderItems = () => {
      const itemCount = props.itemCount || 0;
      const items = [];
      if (!listRef.value) {
        return [];
      }
      if (!props.renderItem) {
        return [];
      }
      for (let i = 0; i < itemCount; i++) {
        const currentTop = itemsTop.value[i];
        const currentHeight = itemsTop.value[i + 1] - itemsTop.value[i];
        if (
          currentTop < listRef.value.scrollTop + 2 * props.height! &&
          currentTop + currentHeight > listRef.value.scrollTop - props.height!
        ) {
          items.push(
            props.renderItem({
              index: i,
              style: { ...DefaultStyle, top: `${currentTop}px` },
            })
          );
        }
      }
      return items;
    };
    const calculateItemsTop = () => {
      const itemCount = props.itemCount || 0;
      const items = [0];
      let top = 0;
      for (let i = 0; i < itemCount; i++) {
        if (typeof props.itemSize === "function") {
          top += props.itemSize(i);
        } else if (typeof props.itemSize === "number") {
          top += props.itemSize;
        }
        items.push(top);
      }
      itemsTop.value = items;
    };
    return () => {
      if (props.renderCount !== renderCount.value) {
        calculateItemsTop();
      }
      return (
        <div
          ref={listRef}
          style={{
            width: `${props.width}px`,
            height: `${props.height}px`,
            overflow: "auto",
          }}
          onScroll={calculateItemsTop}
        >
          <div
            style={{
              position: "relative",
              height: `${itemsTop.value[itemsTop.value.length - 1]}px`,
            }}
          >
            {renderItems()}
          </div>
        </div>
      );
    };
  },
});
export default VueVirtualized;
