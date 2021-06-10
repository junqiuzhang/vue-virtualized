import { PropType, VNodeTypes } from "vue";
/**
 * vue-virtualized is a virtual rendering library like react-window.
 */
declare const VueVirtualized: import("vue").DefineComponent<{
    width: {
        type: NumberConstructor;
        required: true;
        default: number;
    };
    height: {
        type: NumberConstructor;
        required: true;
        default: number;
    };
    itemCount: {
        type: NumberConstructor;
        required: true;
        default: number;
    };
    itemSize: {
        type: PropType<number | ((i: number) => number)>;
        required: true;
        default: number;
    };
    renderItem: {
        type: PropType<(params: {
            index: number;
            style: any;
        }) => VNodeTypes>;
        required: true;
        default: () => JSX.Element;
    };
    reRenderCount: {
        type: NumberConstructor;
        required: false;
        default: number;
    };
    preRenderPageCount: {
        type: NumberConstructor;
        required: false;
        default: number;
    };
}, () => JSX.Element, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, Record<string, any>, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<{
    width: number;
    height: number;
    itemCount: number;
    itemSize: number | ((i: number) => number);
    renderItem: (params: {
        index: number;
        style: any;
    }) => VNodeTypes;
    reRenderCount: number;
    preRenderPageCount: number;
} & {}>, {
    width: number;
    height: number;
    itemCount: number;
    itemSize: number | ((i: number) => number);
    renderItem: (params: {
        index: number;
        style: any;
    }) => VNodeTypes;
    reRenderCount: number;
    preRenderPageCount: number;
}>;
export default VueVirtualized;
