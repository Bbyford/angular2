export class SearchGridConf<T>{
  rows?: number;    
  paginator?: boolean;
  pageLinks?: number;
  column: T;
  constructor(options: {
      rows?: number,   
      paginator?: boolean,
      pageLinks?: number,
      column?: T
    } = {}) {
    this.rows = options.rows;
    this.paginator = !!options.paginator;
    this.pageLinks = options.pageLinks === undefined ? 3 : options.pageLinks;
    this.column = options.column || null;
  }
}