import { filterAction } from './../actions/filterAction'
import { IFilterItem } from './../../modules/models'
import { FilterActionTypes } from '../../constants/filterActionTypes'

//init InterFace
export interface IFilerState {
  filter: IFilterItem
}

//init State

export const initFilterState: IFilerState = {
  filter: {
    status: 'all',
    sort: 'added',
  },
}

export default function filterReducer(state: IFilerState = initFilterState, action: filterAction) {
  console.log('stateFilter' + state)
  switch (action.type) {
    case FilterActionTypes.FILTER_STATUS:
      return {
        ...state,
        filter: { ...state.filter, status: action.payload },
      }
    case FilterActionTypes.FILTER_SORT:
      return {
        ...state,
        filter: { ...state.filter, sort: action.payload },
      }
    default:
      return state
  }
}
