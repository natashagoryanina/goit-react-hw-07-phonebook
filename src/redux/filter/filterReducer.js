import { createReducer } from '@reduxjs/toolkit';
import { onFilterChange } from './filterActions';

const filterReducer = createReducer('', {
    [onFilterChange]: (state, {payload}) => {
        const {value} = payload.target;
        return `${value}`;
    }
});

export {filterReducer} ;