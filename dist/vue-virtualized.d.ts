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
        type: PropType<number | (() => number)>;
        required: true;
    };
    itemSize: {
        type: PropType<number | ((i: number) => number)>;
        required: true;
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
    preRenderPageNumber: {
        type: NumberConstructor;
        required: false;
        default: number;
    };
}, () => JSX.Element, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, Record<string, any>, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<{
    width: number;
    height: number;
    itemCount: number | (() => number);
    itemSize: number | ((i: number) => number);
    renderItem: (params: {
        index: number;
        style: any;
    }) => JSX.Element;
    reRenderCount: number;
    preRenderPageNumber: number;
} & {}>, {
    reRenderCount: number;
    preRenderPageNumber: number;
}>;
export default VueVirtualized;
