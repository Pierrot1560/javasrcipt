import { FiChevronLeft, FiChevronRight } from 'react-icons/fi';
import './Pagination.css';

interface PaginationProps {
  currentPage: number;
  totalPages: number;
  onPageChange: (page: number) => void;
}

export function Pagination({ currentPage, totalPages, onPageChange }: PaginationProps) {
  const pages = Array.from({ length: totalPages }, (_, i) => i + 1);

  return (
    <div className="pagination">
      <button 
        className="pagination__arrow" 
        aria-label="prev" 
        onClick={() => onPageChange(currentPage - 1)}
        disabled={currentPage === 1}
      >
        <FiChevronLeft />
      </button>

      {pages.map((page) => (
        <span
          key={page}
          className={`pagination__page ${page === currentPage ? 'pagination__page--active' : ''}`}
          onClick={() => onPageChange(page)}
        >
          {page}
        </span>
      ))}

      <button 
        className="pagination__arrow" 
        aria-label="next" 
        onClick={() => onPageChange(currentPage + 1)}
        disabled={currentPage === totalPages}
      >
        <FiChevronRight />
      </button>
    </div>
  );
}