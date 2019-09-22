import { Fragment } from '@wordpress/element';
import { InspectorControls } from '@wordpress/editor';
import { getAllActions } from '../../assets/scripts/utils/actions';
import manifest from './manifest.json';

import { QuoteOptions } from './components/quote-options';
import { QuoteEditor } from './components/quote-editor';

export const Quote = (props) => {
  const {
    attributes,
  } = props;

  const actions = {
    ...getAllActions(props, manifest),
  };

  return (
    <Fragment>
      <InspectorControls>
        <QuoteOptions
          attributes={attributes}
          actions={actions}
        />
      </InspectorControls>
      <QuoteEditor
        attributes={attributes}
      />
    </Fragment>
  );
};
