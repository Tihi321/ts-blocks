import { Fragment } from '@wordpress/element';
import { InspectorControls } from '@wordpress/editor';

import { getAllActions } from '../../assets/scripts/utils/actions';
import manifest from './manifest.json';

import { ImageOptions } from '../../components/image/components/image-options';
import { GalleryImageEditor } from './components/gallery-image-editor';

export const GalleryImage = (props) => {
  const {
    attributes: {
      blockClass,
      image,
    },
  } = props;

  const actions = {
    ...getAllActions(props, manifest),
  };

  return (
    <Fragment>
      <InspectorControls>
        <ImageOptions
          mediaTitle={image.title}
          mediaId={image.id}
          mediaUrl={image.url}
          onChangeMedia={actions.onChangeImage}
        />
      </InspectorControls>
      <GalleryImageEditor
        blockClass={blockClass}
        image={image}
      />
    </Fragment>
  );
};
