import { __ } from '@wordpress/i18n';

export const Quote = (props) => {
  const {
    attributes: {
      blockClass,
    },
  } = props;

  return (
    <div className={`${blockClass}-editor`}>
      {__('Svg Grid Block', 'ts-blocks')}
    </div>
  );
};
