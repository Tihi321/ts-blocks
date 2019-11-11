import { Fragment } from '@wordpress/element';
import { InspectorControls } from '@wordpress/editor';
import { getActions } from 'EighshiftBlocksGetActions';
import manifest from './manifest.json';

import { CodeSandboxOptions } from './components/code-sandbox-options';
import { CodeSandboxEditor } from './components/code-sandbox-editor';

export const CodeSandbox = (props) => {
  const {
    attributes,
  } = props;

  const actions = getActions(props, manifest);

  return (
    <Fragment>
      <InspectorControls>
        <CodeSandboxOptions
          attributes={attributes}
          actions={actions}
        />
      </InspectorControls>
      <CodeSandboxEditor
        attributes={attributes}
        actions={actions}
      />
    </Fragment>
  );
};
