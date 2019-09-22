import { InnerBlocks } from '@wordpress/editor';

export const Gallery = (props) => {
  const {
    attributes: {
      blockClass,
      allowedBlocks,
    },
  } = props;

  return (
    <div className={blockClass}>
      <InnerBlocks allowedBlocks={allowedBlocks} />
    </div>
  );
};
