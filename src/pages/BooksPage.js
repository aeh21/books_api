import React, { Component } from "react";
import { connect } from "react-redux";
import { fetchBooks, fetchFilters, fetchPage } from "../actions/action";

import "../static/css/global.scss";

import {
  getBooks,
  getBooksPending,
  getBooksError,
  getItemsPerPage,
  getFilters,
  getPage,
  getBooksCount,
} from "../reducers/reducer";

import {
  Container,
  Table,
  TableHead,
  TableBody,
  TableRow,
  TableCell,
  Paper,
  Input,
  Button,
} from "@material-ui/core";

import { Pagination, PaginationItem } from "@material-ui/lab";

import Loader from "../components/Loader/Loader";
import { Link } from "react-router-dom";

class BooksPage extends Component {
  constructor(props) {
    super(props);

    this.onChangePage = this.onChangePage.bind(this);
    this.onFilter = this.onFilter.bind(this);

    this.filterInput = React.createRef();
  }

  componentDidMount() {
    const { onFetchBooks, itemsPerPage, page, filters, match } = this.props;
    const currentPage = match.params.currentPage ?? page;

    onFetchBooks(itemsPerPage, currentPage, filters);
  }

  componentDidUpdate(prevProps) {
    const { match, onFetchBooks, itemsPerPage, filters } = this.props;
    const id = match.params.currentPage;

    if (
      prevProps.match.params.currentPage !== id ||
      prevProps.filters !== filters
    ) {
      onFetchBooks(itemsPerPage, id, filters);
    }
  }

  onChangePage(e, pageIndex) {
    const { itemsPerPage, filters, onFetchBooks, onFetchPage } = this.props;
    onFetchPage(pageIndex);
    onFetchBooks(itemsPerPage, pageIndex, filters);
  }

  onFilter(e) {
    const { onFetchFilters } = this.props;
    const query = this.filterInput?.current?.value || "";
    onFetchFilters([
      {
        type: "all",
        values: [query],
      },
    ]);
  }

  render() {
    const {
      pending,
      books,
      booksCount,
      page,
      itemsPerPage,
      match,
    } = this.props;
    const currentPage = match.params.currentPage ?? page;

    let totalPages;
    if (booksCount) {
      // Check the remainder from dividing number of books by number of books we pull in
      let remainder = booksCount % itemsPerPage;
      if (remainder === 0) {
        totalPages = booksCount / itemsPerPage;
      } else {
        // Round up page number if there is a remainder
        // i.e if we remainder is 15 means on next page we have 15 books
        totalPages = Math.ceil(booksCount / itemsPerPage);
      }
    }

    const headers = [
      "Author",
      "Pages",
      "Publication city",
      "Publication country",
      "Publication year",
      "Title",
      "Id",
    ];

    return (
      <>
        <Container className="filter">
          <Input type="text" inputRef={this.filterInput} />
          <Button onClick={this.onFilter}>Filter</Button>
        </Container>
        <Container disableGutters>
          <Paper className="table-container">
            {pending ? (
              <Loader />
            ) : (
              <Table>
                <TableHead>
                  <TableRow>
                    {headers.map((header) => {
                      return <TableCell key={header}>{header}</TableCell>;
                    })}
                  </TableRow>
                </TableHead>
                <TableBody className="table-body">
                  {books?.map((book) => (
                    <TableRow key={book.id}>
                      <TableCell component="th" scope="row">
                        {book.book_author}
                      </TableCell>
                      <TableCell>{book.book_pages}</TableCell>
                      <TableCell>{book.book_publication_city}</TableCell>
                      <TableCell>{book.book_publication_country}</TableCell>
                      <TableCell>{book.book_publication_year}</TableCell>
                      <TableCell>{book.book_title}</TableCell>
                      <TableCell>{book.id}</TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            )}
          </Paper>
        </Container>
        <Container>
          <Pagination
            className="pagination"
            shape="rounded"
            count={totalPages}
            page={parseInt(currentPage)}
            renderItem={(item) =>
              item.page ? (
                <Link
                  className="pagination-link"
                  to={`/books/page/${item.page}`}
                >
                  <PaginationItem component="div" {...item} />
                </Link>
              ) : (
                <PaginationItem component="div" {...item} />
              )
            }
            onChange={this.onChangePage}
          />
        </Container>
      </>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    books: getBooks(state),
    pending: getBooksPending(state),
    error: getBooksError(state),
    itemsPerPage: getItemsPerPage(state),
    page: getPage(state),
    filters: getFilters(state),
    booksCount: getBooksCount(state),
  };
};

const mapDispatchToProps = (dispatch) => ({
  onFetchBooks: (itemsPerPage, page, filters) =>
    dispatch(fetchBooks(itemsPerPage, page, filters)),
  onFetchPage: (page) => dispatch(fetchPage(page)),
  onFetchFilters: (filters) => dispatch(fetchFilters(filters)),
});

export default connect(mapStateToProps, mapDispatchToProps)(BooksPage);
