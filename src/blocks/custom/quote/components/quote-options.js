import { Fragment } from '@wordpress/element';
import { __ } from '@wordpress/i18n';
import { TextControl, SelectControl } from '@wordpress/components';

export const QuoteOptions = (props) => {
  const {
    attributes: {
      content,
      color,
    },
    actions,
  } = props;

  return (
    <Fragment>
      <SelectControl
        label={__('Color', 'a1-careers-page')}
        value={color}
        options={[
          { label: __('Default', 'a1-careers-page'), value: 'default' },
          { label: __('Light', 'a1-careers-page'), value: 'light' },
        ]}
        onChange={actions.onChangeColor}
      />
      <label htmlFor="url">{__('Quote Text', 'a1-careers-page')}</label>
      <TextControl
        value={content}
        onChange={actions.onChangeContent}
      />
    </Fragment>
  );
};
