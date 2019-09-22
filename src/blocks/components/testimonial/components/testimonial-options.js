import { __ } from '@wordpress/i18n';
import { Fragment } from '@wordpress/element';
import { TextControl, TextareaControl } from '@wordpress/components';

export const TestimonialOptions = (props) => {
  const {
    content,
    onChangeContent,
    title,
    onChangeTitle,
  } = props;

  return (
    <Fragment>
      {onChangeContent && <TextareaControl
        label={__('Content', 'a1-careers-page')}
        value={content}
        onChange={onChangeContent}
      />}
      {onChangeTitle && <TextControl
        label={__('Title', 'a1-careers-page')}
        value={title}
        onChange={onChangeTitle}
      />}
    </Fragment>
  );
};

