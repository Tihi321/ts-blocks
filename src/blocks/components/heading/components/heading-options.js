import { __ } from '@wordpress/i18n';
import { PanelBody, SelectControl } from '@wordpress/components';

export const HeadingOptions = (props) => {
  const {
    styleColor,
    onChangeStyleColor,
    styleSize,
    onChangeStyleSize,
    styleWeight,
    onChangeStyleWeight,
    styleType,
    onChangeStyleType,
    styleFamily,
    onChangeStyleFamily,
    children,
  } = props;

  return (
    <PanelBody title={__('Heading Details', 'a1-careers-page')}>

      {styleColor &&
        <SelectControl
          label={__('Heading Color', 'a1-careers-page')}
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
          label={__('Heading Size', 'a1-careers-page')}
          value={styleSize}
          options={[
            { label: __('Default (72px)', 'a1-careers-page'), value: 'default' },
            { label: __('Huge (48px)', 'a1-careers-page'), value: 'huge' },
            { label: __('Biggest (36px)', 'a1-careers-page'), value: 'biggest' },
            { label: __('Bigger (24px)', 'a1-careers-page'), value: 'bigger' },
            { label: __('Big (18px)', 'a1-careers-page'), value: 'big' },
            { label: __('Larger (14px)', 'a1-careers-page'), value: 'larger' },
            { label: __('Large (12px)', 'a1-careers-page'), value: 'large' },
          ]}
          onChange={onChangeStyleSize}
        />
      }

      {styleFamily &&
        <SelectControl
          label={__('Heading Family', 'a1-careers-page')}
          value={styleFamily}
          options={[
            { label: __('A1 Sans', 'a1-careers-page'), value: 'a1-sans' },
            { label: __('A1 Serif', 'a1-careers-page'), value: 'a1-serif' },
          ]}
          onChange={onChangeStyleFamily}
        />
      }

      {styleWeight &&
        <SelectControl
          label={__('Heading Style', 'a1-careers-page')}
          value={styleWeight}
          options={[
            { label: __('Bold', 'a1-careers-page'), value: 'bold' },
            { label: __('Normal', 'a1-careers-page'), value: 'normal' },
          ]}
          onChange={onChangeStyleWeight}
        />
      }

      {styleType &&
        <SelectControl
          label={__('Heading Type', 'a1-careers-page')}
          value={styleType}
          options={[
            { label: __('Default', 'a1-careers-page'), value: 'default' },
            { label: __('Inset', 'a1-careers-page'), value: 'inset' },
          ]}
          onChange={onChangeStyleType}
        />
      }
      {children}
    </PanelBody>
  );
};
