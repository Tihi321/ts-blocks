import React, { useState } from 'react';
import { JobsSearchEditor } from '../components/jobs-search-editor';

const App = (props) => {
  const {
    options,
    className,
  } = props;

  const [location, setLocation] = useState('');
  const [search, setSearch] = useState('');

  return (
    <div className={`${className}__search`}>
      <div className={`${className}__form`}>
        <JobsSearchEditor
          onSubmit={(e) => {
            e.preventDefault();
          }}
          search={search}
          onChangeSearch={setSearch}
          onChangeLocation={setLocation}
          location={location}
          options={options.map((option) => {
            return { value: option.toLowerCase(), label: option };
          })}
        />
      </div>
    </div>
  );
};

export default App;
