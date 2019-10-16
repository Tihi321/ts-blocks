import React, { useEffect } from 'react';
import { Fragment } from '@wordpress/element';
import { __ } from '@wordpress/i18n';
import { TextareaControl, SelectControl } from '@wordpress/components';
import { codeHooks } from '../../../components/hooks';

export const CodeOptions = (props) => {
  const {
    attributes: {
      type,
      content,
    },
    actions,
  } = props;

  useEffect(() => {
    codeHooks.doAction('tsb_highlight_please');
  }, [type]);

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
      <label htmlFor="url">{__('Code Text', 'ts-blocks')}</label>
      <TextareaControl
        value={content}
        onChange={actions.onChangeContent}
      />
    </Fragment>
  );
};
