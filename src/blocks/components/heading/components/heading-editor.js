import classnames from 'classnames';
import { __ } from '@wordpress/i18n';
import { RichText } from '@wordpress/editor';

export const HeadingEditor = (props) => {
  const {
    blockClass,
    placeholder = __('Add your heading', 'a1-careers-page'),
    content,
    onChangeContent,
    level,
    styleAlign,
    styleColor,
    styleSize,
    styleWeight,
    styleType,
    styleFamily,
  } = props;

  const componentClass = 'heading';

  const headingClass = classnames([
    componentClass,
    `${componentClass}__align--${styleAlign}`,
    `${componentClass}__color--${styleColor}`,
    `${componentClass}__size--${styleSize}`,
    `${componentClass}__weight--${styleWeight}`,
    `${componentClass}__family--${styleFamily}`,
    `${blockClass}__heading`,
  ]);

  return (
    <div className={`${componentClass}__editor ${componentClass}__type--${styleType}`}>
      <RichText
        tagName={`h${level}`}
        className={headingClass}
        placeholder={placeholder}
        onChange={onChangeContent}
        value={content}
      />
    </div>
  );
};
