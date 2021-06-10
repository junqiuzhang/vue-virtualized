import { defineComponent, PropType, ref, watch } from "vue";
const DefaultStyle = {
  position: "absolute",
};
const VueVirtualized = defineComponent({
  props: {
    width: {
      type: Number,
      required: true,
    },
    height: {
      type: Number,
      required: true,
    },
    itemCount: {
      type: Object as PropType<number | (() => number)>,
      required: true,
    },
    itemSize: {
      type: Object as PropType<number | ((i: number) => number)>,
      required: true,
    },
    renderItem: {
      type: Function as PropType<
        (params: { index: number; style: any }) => JSX.Element
      >,
      required: true,
    },
    reRenderCount: {
      type: Number,
      required: false,
      default: 1,
    },
    preRenderPageCount: {
      type: Number,
      required: false,
      default: 1,
    },
  },
  setup(props) {
    const listRef = ref<Element | null>(null);
    const itemsTop = ref<number[]>([]);
    const listTop = { value: 0 };
    const getItemCount = () => {
      if (typeof props.itemCount === "function") {
        return props.itemCount();
      } else if (typeof props.itemCount === "number") {
        return props.itemCount;
      }
      return 0;
    };
    const getItemSize = (i: number) => {
      if (typeof props.itemSize === "function") {
        return props.itemSize(i);
      } else if (typeof props.itemSize === "number") {
        return props.itemSize;
      }
      return 0;
    };
    const renderItems = () => {
      const itemCount = getItemCount();
      const items = [];
      if (!listRef.value) {
        return [];
      }
      if (!props.renderItem) {
        return [];
      }
      const pageBottom =
        listRef.value.scrollTop +
        (1 + props.preRenderPageCount) * props.height;
      const pageTop =
        listRef.value.scrollTop - props.preRenderPageCount * props.height;
      for (let i = 0; i < itemCount; i++) {
        const curTop = itemsTop.value[i];
        const curBottom = itemsTop.value[i + 1];
        if (curTop < pageBottom && curBottom > pageTop) {
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
      const itemCount = getItemCount();
      const items = [0];
      let top = 0;
      for (let i = 0; i < itemCount; i++) {
        top += getItemSize(i);
        items.push(top);
      }
      itemsTop.value = items;
    };
    const handleScroll = () => {
      const curListTop = listRef.value?.scrollTop ?? 0;
      const prevListTop = listTop.value;
      const diff = curListTop - prevListTop;
      const maxDiff = props.height;
      if (diff < maxDiff && diff > -maxDiff) return;
      listTop.value = curListTop;
      calculateItemsTop();
    };
    watch(
      () => props.reRenderCount,
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
