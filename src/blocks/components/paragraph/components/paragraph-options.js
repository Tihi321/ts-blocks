import { Fragment } from '@wordpress/element';
import { __ } from '@wordpress/i18n';
import { PanelBody, SelectControl } from '@wordpress/components';

export const ParagraphOptions = (props) => {
  const {
    styleColor,
    onChangeStyleColor,
    styleSize,
    onChangeStyleSize,
    removeStyle,
    styleFamily,
    onChangeStyleFamily,
  } = props;

  return (
    <Fragment>
      {removeStyle !== true &&
        <PanelBody title={__('Paragraph Details', 'a1-careers-page')}>

          {styleColor &&
            <SelectControl
              label={__('Paragraph Color', 'a1-careers-page')}
              value={styleColor}
              options={[
                { label: __('Default', 'a1-careers-page'), value: 'default' },
                { label: __('Primary', 'a1-careers-page'), value: 'primary' },
              ]}
              onChange={onChangeStyleColor}
            />
          }

          {styleFamily &&
            <SelectControl
              label={__('Paragraph Family', 'a1-careers-page')}
              value={styleFamily}
              options={[
                { label: __('A1 Sans', 'a1-careers-page'), value: 'a1-sans' },
                { label: __('A1 Serif', 'a1-careers-page'), value: 'a1-serif' },
              ]}
              onChange={onChangeStyleFamily}
            />
          }
          {styleSize &&
            <SelectControl
              label={__('Paragraph Size', 'a1-careers-page')}
              value={styleSize}
              options={[
                { label: __('Default (18px)', 'a1-careers-page'), value: 'default' },
                { label: __('Medium (14px)', 'a1-careers-page'), value: 'medium' },
                { label: __('Small (12px)', 'a1-careers-page'), value: 'small' },
                { label: __('Big (24px)', 'a1-careers-page'), value: 'big' },
                { label: __('Biggest (36px)', 'a1-careers-page'), value: 'biggest' },
              ]}
              onChange={onChangeStyleSize}
            />
          }
        </PanelBody>
      }
    </Fragment>
  );
};

