import React, { useEffect } from 'react';
import { Fragment } from '@wordpress/element';
import { InspectorControls } from '@wordpress/editor';
import { codeHooks } from '../../components/hooks';
import { getAllActions } from '../../assets/scripts/utils/actions';
import manifest from './manifest.json';

import { CodeOptions } from './components/code-options';
import { CodeEditor } from './components/code-editor';

export const Quote = (props) => {
  const {
    attributes,
    isSelected,
  } = props;

  useEffect(() => {
    codeHooks.doAction('tsb_highlight_please');
  }, [isSelected]);


  const actions = {
    ...getAllActions(props, manifest),
  };

  return (
    <Fragment>
      <InspectorControls>
        <CodeOptions
          attributes={attributes}
          actions={actions}
        />
      </InspectorControls>
      <CodeEditor
        attributes={attributes}
        actions={actions}
      />
    </Fragment>
  );
};
