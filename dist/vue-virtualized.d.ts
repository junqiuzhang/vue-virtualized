import { PropType } from "vue";
declare const VueVirtualized: import("vue").DefineComponent<{
    width: {
        type: NumberConstructor;
        required: true;
    };
    height: {
        type: NumberConstructor;
        required: true;
    };
    itemCount: {
        type: NumberConstructor;
        required: true;
        default: number;
    };
    itemSize: {
        type: PropType<(i: number) => number>;
        required: true;
        default: () => number;
    };
    renderItem: {
        type: PropType<(params: {
            index: number;
            style: any;
        }) => JSX.Element>;
        required: true;
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
    itemSize: (i: number) => number;
    renderItem: (params: {
        index: number;
        style: any;
    }) => JSX.Element;
    reRenderCount: number;
    preRenderPageCount: number;
} & {}>, {
    itemCount: number;
    itemSize: (i: number) => number;
    reRenderCount: number;
    preRenderPageCount: number;
}>;
export default VueVirtualized;
