import React from 'react';
import _ from 'lodash';
import PropTypes from 'prop-types';

const Pagination = ({ pagesCount, pageSize, onPageChange, currentPage }) => {
  const pageCount = Math.ceil(pagesCount / pageSize);
  if (pageCount === 1) return null;

  const pages = _.range(1, pageCount + 1);
  // console.log(pagesCount);
  // console.log(pageSize);
  // console.log(pageCount);
  // console.log(pages);
  //   console.log(currentPage);

  return (
    <nav aria-label='Page navigation example'>
      <ul className='m-1 pagination'>
        {pages.map((page) => (
          <li
            className={'page-item ' + (page === currentPage ? 'active' : '')}
            key={page}
          >
            <a
              className='page-link'
              role='button'
              onClick={() => {
                onPageChange(page);
              }}
            >
              {page}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
};

Pagination.propTypes = {
  pagesCount: PropTypes.number.isRequired,
  pageSize: PropTypes.number.isRequired,
  onPageChange: PropTypes.func.isRequired,
  currentPage: PropTypes.number.isRequired,
};

export default Pagination;
