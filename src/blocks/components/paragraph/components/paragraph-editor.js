import classnames from 'classnames';
import { __ } from '@wordpress/i18n';
import { RichText } from '@wordpress/editor';

export const ParagraphEditor = (props) => {
  const {
    blockClass,
    placeholder = __('Add your paragraph', 'a1-careers-page'),
    content,
    onChangeContent,
    styleAlign,
    styleSize = 'default',
    styleColor,
    styleFamily,
    removeStyle,
  } = props;

  const componentClass = 'paragraph';

  const paragraphClass = classnames([
    componentClass,
    `${componentClass}__color--${styleColor}`,
    `${componentClass}__align--${styleAlign}`,
    `${componentClass}__size--${styleSize}`,
    `${componentClass}__family--${styleFamily}`,
    `${blockClass}__paragraph`,
  ]);

  return (
    <div className={removeStyle ? '' : paragraphClass}>
      <RichText
        placeholder={placeholder}
        onChange={onChangeContent}
        value={content}
      />
    </div>
  );
};
