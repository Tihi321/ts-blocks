import { __ } from '@wordpress/i18n';
import { Fragment } from '@wordpress/element';
import { IconButton, Toolbar } from '@wordpress/components';
import {
  BlockControls,
  MediaPlaceholder,
  MediaUpload,
} from '@wordpress/editor';

export const Image = (props) => {
  const {
    placeholderTitle = __('Image area', 'ts-blocks'),
    showToolbar = true,
    toolbarOnTop = true,
    mediaAlt,
    mediaTitle,
    mediaUrl,
    mediaId,
    className,
    iconClass = 'components-toolbar__control',
    onChangeMedia,
  } = props;

  const ALLOWED_MEDIA_TYPES = ['image'];

  const mediaUploadElement = (
    <MediaUpload
      onSelect={onChangeMedia}
      allowedTypes={ALLOWED_MEDIA_TYPES}
      value={mediaId}
      render={({ open }) => (
        <IconButton
          className={iconClass}
          label={__('Edit Image', 'ts-blocks')}
          icon="edit"
          onClick={open}
        />
      )}
    />
  );

  const getRenderToolbarEditButton = () => {
    if (toolbarOnTop) {
      return (
        <BlockControls>
          <Toolbar>{mediaUploadElement}</Toolbar>
        </BlockControls>
      );
    }
    return <Fragment>{mediaUploadElement}</Fragment>;
  };

  const getRenderImage = () => {
    const alt = mediaAlt || mediaTitle;
    return (
      <Fragment>
        {showToolbar && getRenderToolbarEditButton()}
        <figure className={className}>
          <img className="media-image-class" src={mediaUrl} alt={alt} />
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
        accept="image/*"
        allowedTypes={ALLOWED_MEDIA_TYPES}
      />
    );
  };

  if (mediaUrl) {
    return getRenderImage();
  }

  return getRenderPlaceholder();
};
