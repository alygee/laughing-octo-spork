import { InjectionKey } from 'vue';
import { FormComponentMixin } from '../../mixins/FormComponent/FormComponentMixin';
export declare type FormProvider = {
    onChildMounted: (child: FormComponentMixin) => void;
    onChildUnmounted: (child: FormComponentMixin) => void;
};
export declare const FormServiceKey: InjectionKey<FormProvider>;
