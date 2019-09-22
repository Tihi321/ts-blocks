import { __ } from '@wordpress/i18n';
import { URLInput } from '@wordpress/editor';
import { PanelBody, SelectControl } from '@wordpress/components';

export const LinkOptions = (props) => {
  const {
    url,
    onChangeUrl,
    styleColor,
    onChangeColor,
  } = props;

  return (
    <PanelBody title={__('Link Details', 'a1-careers-page')}>

      {styleColor &&
        <SelectControl
          label={__('Link Color', 'a1-careers-page')}
          value={styleColor}
          options={[
            { label: __('Default', 'a1-careers-page'), value: 'default' },
          ]}
          onChange={onChangeColor}
        />
      }

      {onChangeUrl &&
        <div>
          <label htmlFor="url">{__('Link Url', 'a1-careers-page')}</label>
          <URLInput
            value={url}
            onChange={onChangeUrl}
          />
        </div>
      }

    </PanelBody>
  );
};
