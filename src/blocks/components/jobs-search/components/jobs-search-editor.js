import React from 'react';
import { __ } from '@wordpress/i18n';
import Select from 'react-select';
import makeAnimated from 'react-select/animated';

export const JobsSearchEditor = (props) => {
  const {
    className = 'jobs-search',
    search,
    onChangeSearch,
    location,
    onChangeLocation,
    options,
    onSubmit,
  } = props;

  const BACKGROUND_COLOR = '#E8EFF3';
  const MAIN_COLOR = '#6693ac';

  const onSearchChange = (e) => {
    onChangeSearch(e.target.value);
  };

  const colourStyles = {
    control: (styles) => ({ ...styles, backgroundColor: 'white' }),
    multiValue: (styles) => {
      return {
        ...styles,
        backgroundColor: BACKGROUND_COLOR,
      };
    },
    multiValueLabel: (styles) => ({
      ...styles,
      color: MAIN_COLOR,
    }),
    multiValueRemove: (styles) => ({
      ...styles,
      color: MAIN_COLOR,
      ':hover': {
        backgroundColor: MAIN_COLOR,
      },
    }),
  };

  return (
    <form className={className} onSubmit={onSubmit}>
      <h2 className={`${className}__title`}>
        {__('Find your job at A1!', 'a1-careers-page')}
      </h2>
      <fieldset className={`${className}__search`}>
        <i className={`${className}__search-icon`}></i>
        <input type="text" className={`${className}__search-input`} placeholder={__('Beruf, Begriff', 'a1-careers-page')} value={search} onChange={onSearchChange} />
      </fieldset>
      <fieldset className={`${className}__location`}>
        <i className={`${className}__location-icon`}></i>
        <Select
          className={`${className}__select`}
          classNamePrefix="job"
          isSearchable
          isMulti
          closeMenuOnSelect={false}
          components={makeAnimated()}
          value={location}
          onChange={onChangeLocation}
          options={options}
          styles={colourStyles}
          placeholder={__('Location', 'a1-careers-page')}
        />
      </fieldset>
      <input className={`${className}__submit`} type="submit" value={__('Search', 'a1-careers-page')} />
    </form>
  );
};

