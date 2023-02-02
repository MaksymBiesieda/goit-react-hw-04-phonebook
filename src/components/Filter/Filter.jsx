import PropTypes from 'prop-types';
import css from './Filter.module.css';

export default function Filter({onFilterChange, filter}) {
    return (
        <label className={css.filter_label}>
            Find contacts by name
        <input
         type="text"
         name="filter"              
         onChange={onFilterChange}
         className={css.filter_input}
         value={filter}
          />
        </label>
    )
}

Filter.propTypes = {
    onFilterChange: PropTypes.func.isRequired,
    filter: PropTypes.string.isRequired,
}