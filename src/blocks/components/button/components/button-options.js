import { __ } from '@wordpress/i18n';
import { URLInput } from '@wordpress/editor';
import { PanelBody, SelectControl, TextControl } from '@wordpress/components';

export const ButtonOptions = (props) => {
  const {
    url,
    onChangeUrl,
    title,
    onChangeTitle,
    styleSize,
    onChangeStyleSize,
    styleColor,
    onChangeStyleColor,
    styleSizeWidth,
    onChangeStyleSizeWidth,
    id,
    onChangeId,
  } = props;

  return (
    <PanelBody title={__('Button Details', 'a1-careers-page')}>

      {styleColor &&
        <SelectControl
          label={__('Button Color', 'a1-careers-page')}
          value={styleColor}
          options={[
            { label: __('Default', 'a1-careers-page'), value: 'default' },
            { label: __('Primary', 'a1-careers-page'), value: 'primary' },
          ]}
          onChange={onChangeStyleColor}
        />
      }

      {styleSize &&
        <SelectControl
          label={__('Button Size', 'a1-careers-page')}
          value={styleSize}
          options={[
            { label: __('Default', 'a1-careers-page'), value: 'default' },
            { label: __('Big', 'a1-careers-page'), value: 'big' },
          ]}
          onChange={onChangeStyleSize}
        />
      }

      {styleSizeWidth &&
        <SelectControl
          label={__('Button Size Width', 'a1-careers-page')}
          value={styleSizeWidth}
          options={[
            { label: __('Default', 'a1-careers-page'), value: 'default' },
            { label: __('Block', 'a1-careers-page'), value: 'block' },
          ]}
          onChange={onChangeStyleSizeWidth}
        />
      }

      {onChangeTitle &&
        <div>
          <label htmlFor="url">{__('Button Text', 'a1-careers-page')}</label>
          <TextControl
            value={title}
            onChange={onChangeTitle}
          />
          <br />
        </div>
      }

      {onChangeUrl &&
        <div>
          <label htmlFor="url">{__('Button Link', 'a1-careers-page')}</label>
          <URLInput
            value={url}
            onChange={onChangeUrl}
          />
          <br />
        </div>
      }

      {onChangeId &&
        <div>
          <TextControl
            label={__('Button ID', 'a1-careers-page')}
            value={id}
            onChange={onChangeId}
          />
        </div>
      }

    </PanelBody>
  );
};
