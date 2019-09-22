import { __ } from '@wordpress/i18n';
import { PanelBody, TextControl, SelectControl } from '@wordpress/components';

export const WrapperOptions = (props) => {
  const {
    attributes: {
      styleBackgroundColor,
      styleContentWidth,
      styleContentOffset,
      styleContainerWidth,
      styleContainerSpacing,
      styleSpacingTop,
      styleSpacingTopTablet,
      styleSpacingTopMobile,
      styleSpacingBottom,
      styleSpacingBottomTablet,
      styleSpacingBottomMobile,
      styleShowOnlyMobile,
      id,
    },
    actions: {
      onChangeStyleBackgroundColor,
      onChangeStyleContentWidth,
      onChangeStyleContentOffset,
      onChangeStyleContainerWidth,
      onChangeStyleContainerSpacing,
      onChangeStyleSpacingTop,
      onChangeStyleSpacingTopTablet,
      onChangeStyleSpacingTopMobile,
      onChangeStyleSpacingBottom,
      onChangeStyleSpacingBottomTablet,
      onChangeStyleSpacingBottomMobile,
      onChangeStyleShowOnlyMobile,
      onChangeId,
    },
  } = props;

  const maxCols = 12;
  const colsOutput = [];

  for (let index = 1; index <= maxCols; index++) {
    colsOutput.push({ label: `${index} - (${Math.round((100 / maxCols) * index)}%)`, value: index });
  }

  const spacingOptions = [
    { label: __('Not Set', 'a1-careers-page'), value: '' },
    { label: __('Biggest (100px)', 'a1-careers-page'), value: 'biggest' },
    { label: __('Bigger (90px)', 'a1-careers-page'), value: 'bigger' },
    { label: __('Big (80px)', 'a1-careers-page'), value: 'big' },
    { label: __('Largest (70px)', 'a1-careers-page'), value: 'largest' },
    { label: __('Larger (60px)', 'a1-careers-page'), value: 'larger' },
    { label: __('Large (50px)', 'a1-careers-page'), value: 'large' },
    { label: __('Default (40px)', 'a1-careers-page'), value: 'default' },
    { label: __('Medium (30px)', 'a1-careers-page'), value: 'medium' },
    { label: __('Small (20px)', 'a1-careers-page'), value: 'small' },
    { label: __('Tiny (10px)', 'a1-careers-page'), value: 'tiny' },
    { label: __('No padding (0px)', 'a1-careers-page'), value: 'no-spacing' },
  ];

  return (
    <PanelBody title={__('Utility', 'a1-careers-page')}>
      <h3>{__('Colors', 'a1-careers-page')}</h3>

      {styleBackgroundColor &&
        <SelectControl
          label={__('Background Color', 'a1-careers-page')}
          value={styleBackgroundColor}
          options={[
            { label: __('Default', 'a1-careers-page'), value: 'default' },
            { label: __('Light', 'a1-careers-page'), value: 'light' },
            { label: __('Black', 'a1-careers-page'), value: 'black' },
          ]}
          onChange={onChangeStyleBackgroundColor}
        />
      }

      <hr />
      <h3>{__('Content', 'a1-careers-page')}</h3>

      {styleContentWidth &&
        <SelectControl
          label={__('Content Width', 'a1-careers-page')}
          value={styleContentWidth}
          options={colsOutput}
          onChange={onChangeStyleContentWidth}
        />
      }

      {styleContentOffset &&
        <SelectControl
          label={__('Content Offset', 'a1-careers-page')}
          value={styleContentOffset}
          options={[
            { label: __('No offset', 'a1-careers-page'), value: 'none' },
            { label: __('Center', 'a1-careers-page'), value: 'center' },
          ]}
          onChange={onChangeStyleContentOffset}
        />
      }

      <hr />
      <h3>{__('Container', 'a1-careers-page')}</h3>
      {styleContainerWidth &&
        <SelectControl
          label={__('Container Width', 'a1-careers-page')}
          value={styleContainerWidth}
          options={[
            { label: __('Default', 'a1-careers-page'), value: 'default' },
            { label: __('Medium', 'a1-careers-page'), value: 'medium' },
            { label: __('No Width', 'a1-careers-page'), value: 'no-width' },
          ]}
          onChange={onChangeStyleContainerWidth}
        />
      }

      {styleContainerSpacing &&
        <SelectControl
          label={__('Container Spacing', 'a1-careers-page')}
          value={styleContainerSpacing}
          options={[
            { label: __('Default', 'a1-careers-page'), value: 'default' },
            { label: __('No Spacing', 'a1-careers-page'), value: 'no-spacing' },
          ]}
          onChange={onChangeStyleContainerSpacing}
        />
      }

      <hr />
      <h3>{__('Spacing TOP', 'a1-careers-page')}</h3>

      {styleSpacingTop &&
        <SelectControl
          label={__('Desktop', 'a1-careers-page')}
          value={styleSpacingTop}
          options={spacingOptions}
          onChange={onChangeStyleSpacingTop}
        />
      }

      {styleSpacingTopTablet &&
        <SelectControl
          label={__('Tablet', 'a1-careers-page')}
          value={styleSpacingTopTablet}
          options={spacingOptions}
          onChange={onChangeStyleSpacingTopTablet}
        />
      }

      {styleSpacingTopMobile &&
        <SelectControl
          label={__('Mobile', 'a1-careers-page')}
          value={styleSpacingTopMobile}
          options={spacingOptions}
          onChange={onChangeStyleSpacingTopMobile}
        />
      }

      <hr />
      <h3>{__('Spacing BOTTOM', 'a1-careers-page')}</h3>
      {styleSpacingBottom &&
        <SelectControl
          label={__('Desktop', 'a1-careers-page')}
          value={styleSpacingBottom}
          options={spacingOptions}
          onChange={onChangeStyleSpacingBottom}
        />
      }

      {styleSpacingBottomTablet &&
        <SelectControl
          label={__('Tablet', 'a1-careers-page')}
          value={styleSpacingBottomTablet}
          options={spacingOptions}
          onChange={onChangeStyleSpacingBottomTablet}
        />
      }

      {styleSpacingBottomMobile &&
        <SelectControl
          label={__('Mobile', 'a1-careers-page')}
          value={styleSpacingBottomMobile}
          options={spacingOptions}
          onChange={onChangeStyleSpacingBottomMobile}
        />
      }

      <hr />
      <h3>{__('Visibility', 'a1-careers-page')}</h3>
      {styleShowOnlyMobile &&
        <SelectControl
          label={__('Show Block Only On Mobile', 'a1-careers-page')}
          value={styleShowOnlyMobile}
          options={[
            { label: __('False', 'a1-careers-page'), value: 'false' },
            { label: __('True', 'a1-careers-page'), value: 'true' },
          ]}
          onChange={onChangeStyleShowOnlyMobile}
        />
      }

      <hr />
      <h3>{__('General', 'a1-careers-page')}</h3>
      {id &&
        <TextControl
          label={__('Section ID', 'a1-careers-page')}
          value={id}
          onChange={onChangeId}
        />
      }
    </PanelBody>
  );
};
