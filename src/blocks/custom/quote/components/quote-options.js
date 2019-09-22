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
        label={__('Color', 'ts-blocks')}
        value={color}
        options={[
          { label: __('Default', 'ts-blocks'), value: 'default' },
          { label: __('Light', 'ts-blocks'), value: 'light' },
        ]}
        onChange={actions.onChangeColor}
      />
      <label htmlFor="url">{__('Quote Text', 'ts-blocks')}</label>
      <TextControl
        value={content}
        onChange={actions.onChangeContent}
      />
    </Fragment>
  );
};
