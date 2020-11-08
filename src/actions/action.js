import * as types from './types'

export const fetchBooksPending = () => ({
  type: types.FETCH_BOOKS_PENDING,
})

export const fetchBooksSuccess = (payload) => ({
  type: types.FETCH_BOOKS_SUCCESS,
  payload,
})

export const fetchBooksError = (error) => ({
  type: types.FETCH_BOOKS_ERROR,
  error,
})

export const fetchPage = (payload) => ({
  type: types.FETCH_PAGE,
  payload,
})

export const fetchItemsPerPage = (payload) => ({
  type: types.FETCH_ITEMS_PER_PAGE,
  payload,
})

export const fetchFilters = (payload) => ({
  type: types.FETCH_FILTERS,
  payload,
})

export const fetchBooks = (itemsPerPage, page, filters) => {
  const requestParams = {
    method: "POST",
    redirect: "follow",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      itemsPerPage,
      page,
      filters,
    }),
  }

  return dispatch => {
    // First dispatch pending
    dispatch(fetchBooksPending());
    // Request data from API
    fetch('http://nyx.vima.ekt.gr:3000/api/books', requestParams)
      // decode data into JSON object
      .then(response => response.json())
      .then(result => {
        // Check for errors
        if (result.error) {
          throw(result.error);
        }
        // On success call our success action
        dispatch(fetchBooksSuccess(result));
        return result;
      })
      .catch(error => {
        dispatch(fetchBooksError(error));
      })
  }
}
