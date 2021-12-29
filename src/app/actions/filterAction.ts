import { FilterActionTypes } from './../../constants/filterActionTypes'

//init interface
export interface IFilterStatusAction {
  type: FilterActionTypes.FILTER_STATUS
  payload: any
}

export interface IFilterSortAction {
  type: FilterActionTypes.FILTER_SORT
  payload: any
}

//init Action creator

//action filter status
export function filterStatusChange(status: any): IFilterStatusAction {
  return { type: FilterActionTypes.FILTER_STATUS, payload: status }
}
//action filter sort

export function filterSortChange(sort: any): IFilterSortAction {
  return {
    type: FilterActionTypes.FILTER_SORT,
    payload: sort,
  }
}

// action all
export type filterAction = IFilterSortAction | IFilterStatusAction
