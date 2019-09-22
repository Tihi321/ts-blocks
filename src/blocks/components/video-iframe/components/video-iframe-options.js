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
      { value: 'controls', label: __('Controls', 'a1-careers-page') },
      { value: 'autoplay', label: __('Autoplay', 'a1-careers-page') },
      { value: 'loop', label: __('Loop', 'a1-careers-page') },
      { value: 'muted', label: __('Muted', 'a1-careers-page') },
      { value: 'background', label: __('Background', 'a1-careers-page') },
      { value: 'autopause', label: __('Autopause', 'a1-careers-page') },
      { value: 'title', label: __('Title', 'a1-careers-page') },
    ],
  } = props;

  return (
    <PanelBody title={__('Video Iframe Settings', 'a1-careers-page')}>
      {options && <Select
        className={componentClass}
        classNamePrefix="vi"
        isMulti
        closeMenuOnSelect={false}
        value={options}
        onChange={onChangeOptions}
        options={opitionValues}
        placeholder={__('Select', 'a1-careers-page')}
      />}
      <TextControl
        label={__('Video Id', 'a1-careers-page')}
        value={id}
        onChange={onChangeId}
      />
    </PanelBody>
  );
};
