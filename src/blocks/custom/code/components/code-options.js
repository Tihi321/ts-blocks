import React, { useEffect, useState } from 'react';
import { Fragment } from '@wordpress/element';
import { __ } from '@wordpress/i18n';
import { SelectControl } from '@wordpress/components';
import { codeHooks } from '../../../components/hooks';

export const CodeOptions = (props) => {
  const {
    attributes: {
      type,
      blockClass,
      showRender,
    },

    actions,
  } = props;

  const [reColor, setReColor] = useState(false);

  useEffect(() => {
    codeHooks.doAction('tsb_highlight_please');
  }, [reColor]);

  return (
    <Fragment>
      <SelectControl
        label={__('Type', 'ts-blocks')}
        value={type}
        options={[
          { label: __('Javascript', 'ts-blocks'), value: 'javascript' },
          { label: __('Php', 'ts-blocks'), value: 'php' },
          { label: __('Html', 'ts-blocks'), value: 'html' },
          { label: __('Typescript', 'ts-blocks'), value: 'typescript' },
          { label: __('Dockerfile', 'ts-blocks'), value: 'dockerfile' },
        ]}
        onChange={actions.onChangeType}
      />
      <div className={`${blockClass}__buttons`}>
        <button
          className={`${blockClass}__button`}
          onClick={() => actions.onChangeShowRender(!showRender)}
        >
          {showRender ? __('Edit', 'ts-blocks') : __('Render', 'ts-blocks')}
        </button>
        <button
          className={`${blockClass}__button`}
          onClick={() => setReColor(!reColor)}
        >
          {__('Restyle', 'ts-blocks')}
        </button>
      </div>
    </Fragment>
  );
};
