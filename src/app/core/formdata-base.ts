export class FormDataBase<T>{
  value?: T;    
  Selectoptions?: T;
  controlType?: string;
  controlName: string;
  groupName?: string;
  groupData? : any[];
  required: boolean;
  readyOnly?: boolean;
  order?: number;
  ElemClass: string;
  controlTitle: string;
  searchBtn?: boolean;
  hidden?: boolean;

  constructor(options: {
      value?: T,
      Selectoptions?: T,
      controlType?: string,
      controlName?: string,
      groupName?: string,
      groupData? : any[],
      required?: boolean,
      readyOnly?: boolean,
      order?: number,
      ElemClass?: string,
      controlTitle?: string,
      searchBtn?: boolean,
      hidden?: boolean
    } = {}) {
    this.value = options.value || null;
    this.Selectoptions = options.Selectoptions;
    this.controlType = options.controlType || '';
    this.controlName = options.controlName || '';
    this.controlType = options.controlType || '';
    this.groupData = options.groupData || [];
    this.required = !!options.required;
    this.readyOnly = !!options.readyOnly;
    this.order = options.order === undefined ? 1 : options.order;
    this.ElemClass = options.ElemClass || '';
    this.controlTitle = options.controlTitle || '';
    this.searchBtn = !!options.searchBtn;
    this.hidden = !!options.hidden;
  }
}