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
    { label: __('Not Set', 'ts-blocks'), value: '' },
    { label: __('Biggest (100px)', 'ts-blocks'), value: 'biggest' },
    { label: __('Bigger (90px)', 'ts-blocks'), value: 'bigger' },
    { label: __('Big (80px)', 'ts-blocks'), value: 'big' },
    { label: __('Largest (70px)', 'ts-blocks'), value: 'largest' },
    { label: __('Larger (60px)', 'ts-blocks'), value: 'larger' },
    { label: __('Large (50px)', 'ts-blocks'), value: 'large' },
    { label: __('Default (40px)', 'ts-blocks'), value: 'default' },
    { label: __('Medium (30px)', 'ts-blocks'), value: 'medium' },
    { label: __('Small (20px)', 'ts-blocks'), value: 'small' },
    { label: __('Tiny (10px)', 'ts-blocks'), value: 'tiny' },
    { label: __('No padding (0px)', 'ts-blocks'), value: 'no-spacing' },
  ];

  return (
    <PanelBody title={__('Utility', 'ts-blocks')}>
      <h3>{__('Colors', 'ts-blocks')}</h3>

      {styleBackgroundColor &&
        <SelectControl
          label={__('Background Color', 'ts-blocks')}
          value={styleBackgroundColor}
          options={[
            { label: __('Default', 'ts-blocks'), value: 'default' },
            { label: __('Light', 'ts-blocks'), value: 'light' },
            { label: __('Black', 'ts-blocks'), value: 'black' },
          ]}
          onChange={onChangeStyleBackgroundColor}
        />
      }

      <hr />
      <h3>{__('Content', 'ts-blocks')}</h3>

      {styleContentWidth &&
        <SelectControl
          label={__('Content Width', 'ts-blocks')}
          value={styleContentWidth}
          options={colsOutput}
          onChange={onChangeStyleContentWidth}
        />
      }

      {styleContentOffset &&
        <SelectControl
          label={__('Content Offset', 'ts-blocks')}
          value={styleContentOffset}
          options={[
            { label: __('No offset', 'ts-blocks'), value: 'none' },
            { label: __('Center', 'ts-blocks'), value: 'center' },
          ]}
          onChange={onChangeStyleContentOffset}
        />
      }

      <hr />
      <h3>{__('Container', 'ts-blocks')}</h3>
      {styleContainerWidth &&
        <SelectControl
          label={__('Container Width', 'ts-blocks')}
          value={styleContainerWidth}
          options={[
            { label: __('Default', 'ts-blocks'), value: 'default' },
            { label: __('Medium', 'ts-blocks'), value: 'medium' },
            { label: __('No Width', 'ts-blocks'), value: 'no-width' },
          ]}
          onChange={onChangeStyleContainerWidth}
        />
      }

      {styleContainerSpacing &&
        <SelectControl
          label={__('Container Spacing', 'ts-blocks')}
          value={styleContainerSpacing}
          options={[
            { label: __('Default', 'ts-blocks'), value: 'default' },
            { label: __('No Spacing', 'ts-blocks'), value: 'no-spacing' },
          ]}
          onChange={onChangeStyleContainerSpacing}
        />
      }

      <hr />
      <h3>{__('Spacing TOP', 'ts-blocks')}</h3>

      {styleSpacingTop &&
        <SelectControl
          label={__('Desktop', 'ts-blocks')}
          value={styleSpacingTop}
          options={spacingOptions}
          onChange={onChangeStyleSpacingTop}
        />
      }

      {styleSpacingTopTablet &&
        <SelectControl
          label={__('Tablet', 'ts-blocks')}
          value={styleSpacingTopTablet}
          options={spacingOptions}
          onChange={onChangeStyleSpacingTopTablet}
        />
      }

      {styleSpacingTopMobile &&
        <SelectControl
          label={__('Mobile', 'ts-blocks')}
          value={styleSpacingTopMobile}
          options={spacingOptions}
          onChange={onChangeStyleSpacingTopMobile}
        />
      }

      <hr />
      <h3>{__('Spacing BOTTOM', 'ts-blocks')}</h3>
      {styleSpacingBottom &&
        <SelectControl
          label={__('Desktop', 'ts-blocks')}
          value={styleSpacingBottom}
          options={spacingOptions}
          onChange={onChangeStyleSpacingBottom}
        />
      }

      {styleSpacingBottomTablet &&
        <SelectControl
          label={__('Tablet', 'ts-blocks')}
          value={styleSpacingBottomTablet}
          options={spacingOptions}
          onChange={onChangeStyleSpacingBottomTablet}
        />
      }

      {styleSpacingBottomMobile &&
        <SelectControl
          label={__('Mobile', 'ts-blocks')}
          value={styleSpacingBottomMobile}
          options={spacingOptions}
          onChange={onChangeStyleSpacingBottomMobile}
        />
      }

      <hr />
      <h3>{__('Visibility', 'ts-blocks')}</h3>
      {styleShowOnlyMobile &&
        <SelectControl
          label={__('Show Block Only On Mobile', 'ts-blocks')}
          value={styleShowOnlyMobile}
          options={[
            { label: __('False', 'ts-blocks'), value: 'false' },
            { label: __('True', 'ts-blocks'), value: 'true' },
          ]}
          onChange={onChangeStyleShowOnlyMobile}
        />
      }

      <hr />
      <h3>{__('General', 'ts-blocks')}</h3>
      {id &&
        <TextControl
          label={__('Section ID', 'ts-blocks')}
          value={id}
          onChange={onChangeId}
        />
      }
    </PanelBody>
  );
};
