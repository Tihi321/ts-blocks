import { __ } from '@wordpress/i18n';

export const TestimonialEditor = (props) => {
  const {
    className = 'testimonial',
    content,
    titleContent,
    onClickVideo,
    isVideo,
    buttonText = __('Play video', 'a1-careers-page'),
    buttonClassName,
  } = props;

  return (
    <div className={className}>
      <div className={`${className}__content`}>
        {content}
        {isVideo && <button className={`${buttonClassName || className}__play-btn`} onClick={onClickVideo}>{buttonText}<span className={`${className}__icon`}></span></button>}
      </div>
      <div className={`${className}__name`}>{titleContent}</div>
    </div>
  );
};

