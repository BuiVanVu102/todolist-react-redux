export interface ITodoItem {
  userId: number | string
  id: number | string
  title: string
  completed: boolean
  date?: Date | string
}

export interface IFilterItem {
  status: string
  sort: string
}
// export enum ApiStatus {
//   LOADING = 'loading',
//   LOADED = 'loaded',
//   FAILED = 'failed',
// }
