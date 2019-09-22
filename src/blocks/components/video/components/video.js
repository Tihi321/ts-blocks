import { __ } from '@wordpress/i18n';
import { Fragment } from '@wordpress/element';
import { IconButton, Toolbar } from '@wordpress/components';
import {
  BlockControls,
  MediaPlaceholder,
  MediaUpload,
} from '@wordpress/editor';

export const Video = (props) => {
  const {
    placeholderTitle = __('Media area', 'a1-careers-page'),
    showToolbar = true,
    toolbarOnTop = true,
    mediaTitle,
    mediaUrl,
    mediaId,
    mediaType = 'video',
    className,
    iconClass = 'components-toolbar__control',
    onChangeMedia,
  } = props;

  const mediaUploadElement = (
    <MediaUpload
      onSelect={onChangeMedia}
      allowedTypes={[mediaType]}
      value={mediaId}
      render={({ open }) => (
        <IconButton
          className={iconClass}
          label={__('Edit Media', 'a1-careers-page')}
          icon="edit"
          onClick={open}
        />
      )}
    />
  );

  const getToolbarMediaEditButton = () => {
    if (toolbarOnTop) {
      return (
        <BlockControls>
          <Toolbar>{mediaUploadElement}</Toolbar>
        </BlockControls>
      );
    }
    return <Fragment>{mediaUploadElement}</Fragment>;
  };

  const getRenderVideo = () => {
    return (
      <Fragment>
        {showToolbar && getToolbarMediaEditButton()}
        <figure className={className}>
          {mediaTitle}
        </figure>
      </Fragment>
    );
  };

  const getRenderImage = () => {
    return (
      <Fragment>
        {showToolbar && getToolbarMediaEditButton()}
        <figure className={className}>
          <img className="media-image-class" src={mediaUrl} alt={mediaTitle} />
        </figure>
      </Fragment>
    );
  };

  const getRenderPlaceholder = () => {
    return (
      <MediaPlaceholder
        icon="format-image"
        labels={{
          title: placeholderTitle,
        }}
        onSelect={onChangeMedia}
        accept={`${mediaType}/*`}
        allowedTypes={mediaType}
      />
    );
  };

  if (mediaUrl) {
    return (mediaType === 'video') ? getRenderVideo() : getRenderImage();
  }

  return getRenderPlaceholder();
};
