import { __ } from '@wordpress/i18n';
import { PanelBody, TextControl } from '@wordpress/components';
import Select from 'react-select';

export const VideoIframeOptions = (props) => {
  const {
    componentClass = 'video-iframe-select',
    onChangeId,
    onChangeOptions,
    options,
    id,
    opitionValues = [
      { value: 'controls', label: __('Controls', 'ts-blocks') },
      { value: 'autoplay', label: __('Autoplay', 'ts-blocks') },
      { value: 'loop', label: __('Loop', 'ts-blocks') },
      { value: 'muted', label: __('Muted', 'ts-blocks') },
      { value: 'background', label: __('Background', 'ts-blocks') },
      { value: 'autopause', label: __('Autopause', 'ts-blocks') },
      { value: 'title', label: __('Title', 'ts-blocks') },
    ],
  } = props;

  return (
    <PanelBody title={__('Video Iframe Settings', 'ts-blocks')}>
      {options && <Select
        className={componentClass}
        classNamePrefix="vi"
        isMulti
        closeMenuOnSelect={false}
        value={options}
        onChange={onChangeOptions}
        options={opitionValues}
        placeholder={__('Select', 'ts-blocks')}
      />}
      <TextControl
        label={__('Video Id', 'ts-blocks')}
        value={id}
        onChange={onChangeId}
      />
    </PanelBody>
  );
};
