import { __ } from '@wordpress/i18n';
import { Video } from './video';

export const VideoOptions = (props) => {
  const {
    onChangeMedia,
    onChangePreviewMedia,
    mediaTitle,
    mediaUrl,
    mediaId,
    previewTitle,
    previewUrl,
    previewId,
  } = props;

  const onVideoClick = () => {
    onChangeMedia({
      id: 0,
      url: '',
      title: '',
    });
  };

  const onPreviewClick = () => {
    onChangePreviewMedia({
      id: 0,
      url: '',
      title: '',
    });
  };

  return (
    <div className="panel-row">
      {onChangeMedia && <div className="panel-row">
        <div className="panel-label">Video File</div>
        <div className="panel-row--reverse-flex">
          {(mediaId > 0) && <button
            className="media-element--remove"
            onClick={onVideoClick}
          >
            {__('X', 'a1-careers-page')}
          </button>}
          <Video
            iconClass="edit-button__options"
            showToolbar={true}
            toolbarOnTop={false}
            className="media-element--reset media-element--text"
            placeholderTitle={__('Video', 'a1-careers-page')}
            mediaTitle={mediaTitle}
            mediaId={mediaId}
            mediaUrl={mediaUrl}
            mediaType="video"
            onChangeMedia={onChangeMedia}
          />
        </div>
      </div>}
      {(onChangePreviewMedia) && <div className="panel-row">
        <div className="panel-label">Preview Image</div>
        <div className="panel-row--reverse-flex">
          {(previewId > 0) && <button
            className="media-element--remove"
            onClick={onPreviewClick}
          >
            {__('X', 'a1-careers-page')}
          </button>}
          <Video
            iconClass="edit-button__options"
            showToolbar={true}
            toolbarOnTop={false}
            className="media-element--reset media-element--icon"
            placeholderTitle={__('Preview image', 'a1-careers-page')}
            mediaTitle={previewTitle}
            mediaId={previewId}
            mediaUrl={previewUrl}
            mediaType="image"
            onChangeMedia={onChangePreviewMedia}
          />
        </div>
      </div>}
    </div>
  );
};
