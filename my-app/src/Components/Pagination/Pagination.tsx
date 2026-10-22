import { FiChevronLeft, FiChevronRight } from 'react-icons/fi';
import './Pagination.css';

export function Pagination() {
  return (
    <div className="pagination">
      <button className="pagination__arrow" aria-label="prev">
        <FiChevronLeft />
      </button>

      <span className="pagination__page pagination__page--active">1</span>
      <span className="pagination__page">2</span>
      <span className="pagination__page">3</span>
      <span className="pagination__dots">...</span>
      <span className="pagination__page">8</span>

      <button className="pagination__arrow" aria-label="next">
        <FiChevronRight />
      </button>
    </div>
  );
}