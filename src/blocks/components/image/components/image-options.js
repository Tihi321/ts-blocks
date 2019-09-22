import { __ } from '@wordpress/i18n';
import { Image } from './image';

export const ImageOptions = (props) => {
  const {
    mediaTitle,
    mediaUrl,
    mediaId,
    onChangeMedia,
  } = props;

  const onClick = () => {
    onChangeMedia({
      id: 0,
      url: '',
      title: '',
    });
  };

  return (
    <div className="panel-row">
      <div className="panel-row--reverse-flex">
        {(mediaId > 0) && <button
          className="media-element--remove"
          onClick={onClick}
        >
          {__('X', 'ts-blocks')}
        </button>}
        <Image
          iconClass="edit-button__options"
          showToolbar={true}
          toolbarOnTop={false}
          className="media-element--reset media-element--icon"
          placeholderTitle={__('field Item icon', 'ts-blocks')}
          mediaTitle={mediaTitle}
          mediaId={mediaId}
          mediaUrl={mediaUrl}
          onChangeMedia={onChangeMedia}
        />
      </div>
    </div>
  );
};
