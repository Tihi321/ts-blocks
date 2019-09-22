import { __ } from '@wordpress/i18n';

export const CardEditor = ({
  featuredImage,
  link,
  title,
  excerpt,
  buttonText,
}) => {

  const imageUrl = featuredImage || 'https://via.placeholder.com/500x300/DA291C/FFFFFF?text=A1+placeholder+image';

  const componentClass = 'card';
  const imageStyle = {
    backgroundImage: `url(${imageUrl})`,
  };

  const text = buttonText || __('Read more', 'a1-careers-page');

  return (
    <div
      className={componentClass}
      dataHref={link}
    >
      <div
        className={`${componentClass}__image`}
        style={imageStyle}
      />
      <div
        className={`${componentClass}__content`}
      >
        <h2
          className={`${componentClass}__title`}
        >
          {title}
        </h2>
        {(typeof excerpt === 'object') && <div
          className={`${componentClass}__excerpt`}
        >
          {excerpt}
        </div>}
        {(typeof excerpt === 'string') && <div
          dangerouslySetInnerHTML={{ __html: excerpt }}
          className={`${componentClass}__excerpt`}
        >
        </div>}
        <button
          className={`icon--arrow-fat ${componentClass}__read-more`}
        >
          {text}
        </button>
      </div>
    </div>
  );
};
