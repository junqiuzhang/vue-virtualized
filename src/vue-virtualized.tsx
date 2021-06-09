import { defineComponent, PropType, ref, watch } from "vue";
const DefaultStyle = {
  position: "absolute",
};
const VueVirtualized = defineComponent({
  props: {
    width: Number,
    height: Number,
    itemCount: Number,
    itemSize: Function as PropType<(index: number) => number>,
    reRenderItem: Number,
    renderItem: Function as PropType<
      (params: { index: number; style: any }) => JSX.Element
    >,
  },
  setup(props) {
    const listRef = ref<Element | null>(null);
    const itemsTop = ref<number[]>([]);
    const listTop = { value: 0 };
    const throttleDiff = props.height ?? 1;
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
        const curTop = itemsTop.value[i];
        const curHeight = itemsTop.value[i + 1] - itemsTop.value[i];
        if (
          curTop < listRef.value.scrollTop + 2 * props.height! &&
          curTop + curHeight > listRef.value.scrollTop - props.height!
        ) {
          items.push(
            props.renderItem({
              index: i,
              style: { ...DefaultStyle, top: `${curTop}px` },
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
    const handleScroll = () => {
      const curListTop = listRef.value?.scrollTop ?? 0;
      const prevListTop = listTop.value;
      const diff = curListTop - prevListTop;
      if (diff < throttleDiff && diff > -throttleDiff) return;
      listTop.value = curListTop;
      calculateItemsTop();
    };
    watch(
      () => props.reRenderItem,
      () => {
        calculateItemsTop();
      }
    );
    calculateItemsTop();
    return () => {
      return (
        <div
          ref={listRef}
          style={{
            width: `${props.width}px`,
            height: `${props.height}px`,
            overflow: "auto",
          }}
          onScroll={handleScroll}
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
