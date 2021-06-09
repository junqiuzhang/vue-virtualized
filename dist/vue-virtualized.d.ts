import { PropType } from "vue";
declare const VueVirtualized: import("vue").DefineComponent<{
    width: NumberConstructor;
    height: NumberConstructor;
    itemCount: PropType<number | (() => number)>;
    itemSize: PropType<number | ((index: number) => number)>;
    reRenderItem: NumberConstructor;
    renderItem: PropType<(params: {
        index: number;
        style: any;
    }) => JSX.Element>;
}, () => JSX.Element, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, Record<string, any>, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<{} & {
    width?: number | undefined;
    height?: number | undefined;
    itemCount?: number | (() => number) | undefined;
    itemSize?: number | ((index: number) => number) | undefined;
    reRenderItem?: number | undefined;
    renderItem?: ((params: {
        index: number;
        style: any;
    }) => JSX.Element) | undefined;
}>, {}>;
export default VueVirtualized;
