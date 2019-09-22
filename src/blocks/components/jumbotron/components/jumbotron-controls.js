import { Fragment } from '@wordpress/element';
import { InspectorControls, BlockControls } from '@wordpress/editor';

import { ParagraphToolbar } from '../../paragraph/components/paragraph-toolbar';

export const JubmotronControls = (props) => {
  const {
    paragraphAlign,
    onChangeParagraphAlign,
  } = props;

  return (
    <ParagraphToolbar
      styleAlign={paragraphAlign}
      onChangeStyleAlign={onChangeParagraphAlign}
    />
  );
};

