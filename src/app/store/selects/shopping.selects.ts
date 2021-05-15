import { createSelector, createFeatureSelector } from '@ngrx/store';
import { AppState } from './../models/app-state.model';
import { ShoppingState } from './../reducers/shopping.reducer';

export const selectShoppingState = (state: AppState) => state.shopping;

export const selectShoppingStateList = createSelector(
  selectShoppingState,
  (state: ShoppingState) => state.list
);
