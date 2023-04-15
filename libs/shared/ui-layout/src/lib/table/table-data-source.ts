import {CollectionViewer, DataSource} from '@angular/cdk/collections'
import {BehaviorSubject, map, merge, of} from 'rxjs'

type TableSortDirection = 'asc' | 'desc'

class TableSort<T> {
  constructor(
    public columns: (keyof T)[] = [],
    public active?: keyof T,
    public direction?: TableSortDirection
  ) {}
}

export class TableDataSource<
  T extends Record<string, string | number>
> extends DataSource<T> {
  #data = new BehaviorSubject<T[]>([])
  data$ = this.#data.asObservable()
  sort = new TableSort<T>()

  override connect(collectionViewer: CollectionViewer) {
    const mutations = [collectionViewer.viewChange, this.data$]
    return merge(...mutations).pipe(
      map(() => this.#getSortedData(this.#data.value))
    )
  }

  override disconnect(collectionViewer: CollectionViewer) {
    console.log(collectionViewer)
  }

  #getSortedData = (data: T[]) => {
    const {active, direction} = this.sort
    if (!active || !direction) {
      return data
    }
    return data.sort((a, b) => {
      const isAsc = this.sort.direction === 'asc'
      return this.#compare(a[active], b[active], isAsc)
    })
  }

  #compare(a: string | number, b: string | number, isAsc: boolean) {
    return (a < b ? -1 : 1) * (isAsc ? 1 : -1)
  }
}
