export class FormDataBase<T>{
  value?: T;    
  Selectoptions?: T;
  controlType?: string;
  controlName: string;
  required: boolean;
  order?: number;
  ElemClass: string;
  controlTitle: string;
  searchBtn?: boolean;

  constructor(options: {
      value?: T,
      Selectoptions?: T,
      controlType?: string,
      controlName?: string,
      required?: boolean,
      order?: number,
      ElemClass?: string,
      controlTitle?: string,
      searchBtn?: boolean;
    } = {}) {
    this.value = options.value;
    this.Selectoptions = options.Selectoptions;
    this.controlType = options.controlType || '';
    this.controlName = options.controlName || '';
    this.required = !!options.required;
    this.order = options.order === undefined ? 1 : options.order;
    this.ElemClass = options.ElemClass || '';
    this.controlTitle = options.controlTitle || '';
    this.searchBtn = !!options.searchBtn;
  }
}