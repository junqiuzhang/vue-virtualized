import { defineComponent, PropType, VNodeTypes, ref, watch } from "vue";
const DefaultStyle = {
  position: "absolute",
};
/**
 * vue-virtualized is a virtual rendering library like react-window.
 */
const VueVirtualized = defineComponent({
  props: {
    width: {
      type: Number,
      required: true,
      default: 0,
    },
    height: {
      type: Number,
      required: true,
      default: 0,
    },
    itemCount: {
      type: Number,
      required: true,
      default: 0,
    },
    itemSize: {
      type: [Number, Function] as PropType<number | ((i: number) => number)>,
      required: true,
      default: 0,
    },
    renderItem: {
      type: Function as PropType<
        (params: { index: number; style: any }) => VNodeTypes
      >,
      required: true,
      default: () => <></>,
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
    const listTop = ref<number>(0);
    const itemsTop = ref<number[]>([]);
    const renderItems = (scrollTop: number) => {
      const itemCount = props.itemCount;
      const items = [];
      if (!props.renderItem) {
        return [];
      }
      const pageBottom =
        scrollTop + (1 + props.preRenderPageCount) * props.height;
      const pageTop = scrollTop - props.preRenderPageCount * props.height;
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
        } else if (items.length > 0) {
          break;
        }
      }
      return items;
    };
    const calculateItemsTop = () => {
      const itemCount = props.itemCount;
      const items = [0];
      let top = 0;
      for (let i = 0; i < itemCount; i++) {
        if (typeof props.itemSize === "number") {
          top += props.itemSize;
        } else if (typeof props.itemSize === "function") {
          top += props.itemSize(i);
        }
        items.push(top);
      }
      itemsTop.value = items;
    };
    const handleScroll = (e: UIEvent) => {
      /// @ts-ignore
      const curListTop = e.target?.scrollTop ?? 0;
      const prevListTop = listTop.value;
      const diff = curListTop - prevListTop;
      const maxDiff = props.height / 2;
      if (diff < maxDiff && diff > -maxDiff) return;
      listTop.value = curListTop;
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
            {renderItems(listTop.value)}
          </div>
        </div>
      );
    };
  },
});
export default VueVirtualized;
