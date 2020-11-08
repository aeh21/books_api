import { initialState } from "../initialState";
import * as types from "../actions/types";

function booksReducer(state = initialState, action) {
  switch (action.type) {
    case types.FETCH_BOOKS_PENDING:
      return {
        ...state,
        pending: true,
      };
    case types.FETCH_BOOKS_SUCCESS:
      return {
        ...state,
        pending: false,
        bookList: action.payload,
      };
    case types.FETCH_BOOKS_ERROR:
      return {
        ...state,
        pending: false,
        error: action.error,
      };
    case types.FETCH_ITEMS_PER_PAGE:
      return {
        ...state,
        itemsPerPage: action.payload,
      };
    case types.FETCH_PAGE:
      return {
        ...state,
        page: action.payload,
      };
    case types.FETCH_FILTERS:
      return {
        ...state,
        filters: action.payload,
      };
    default:
      return state;
  }
}

export default booksReducer;

/*
 * Selectors - using them to get definde parts of the state and scalability
 * i.e. access books/pending/error from state
 */

export const getBooks = (state) => state?.rootReducer?.bookList?.books;
export const getBooksCount = (state) => state?.rootReducer?.bookList?.count;
export const getBooksPending = (state) => state?.rootReducer?.pending;
export const getBooksError = (state) => state?.rootReducer?.error;
export const getPage = (state) => state?.rootReducer?.page;
export const getItemsPerPage = (state) => state?.rootReducer?.itemsPerPage;
export const getFilters = (state) => state?.rootReducer?.filters;
