import {action, observable, makeObservable, runInAction} from 'mobx';
import {version, ignore} from 'mobx-sync';

interface IPaginatedQuery<T> {
  pageNumber: number;
  pageSize: number;
  filters?: Partial<T>;
}

interface IPaginatedService<T> {
  query: (params: IPaginatedQuery<T>) => Promise<T[] | undefined>;
}

@version(1.0)
class PaginatedList<T> {
  @ignore @observable list: T[] = [];
  @ignore @observable filters?: Partial<T>;
  @ignore @observable pageNumber = 1;
  @ignore @observable pageSize = 20;
  @ignore @observable loading = false;

  private service: IPaginatedService<T>;

  constructor(pageSize: number, service: IPaginatedService<T>) {
    (this.pageSize = pageSize), (this.service = service);
    makeObservable(this);
  }

  @action async load() {
    runInAction(async () => {
      this.loading = true;
      const response =
        (await this.service.query({
          filters: this.filters,
          pageNumber: this.pageNumber,
          pageSize: this.pageSize,
        })) || [];
      if (this.pageNumber === 1) {
        this.list = response;
      } else {
        this.list = [...this.list, ...response];
      }
      this.loading = false;
    });
  }

  @action nextPage() {
    if (this.loading) return;
    this.pageNumber = this.pageNumber + 1;
    this.load();
  }

  @action restart() {
    this.pageNumber = 1;
    this.load();
  }

  @action reset(filters?: Partial<T>, force?: boolean) {
    if (filters !== this.filters || !this.list.length || force) {
      this.pageNumber = 1;
      this.loading = true;
      this.list = [];
      this.filters = filters;
      this.load();
    }
  }
}

export default PaginatedList;
