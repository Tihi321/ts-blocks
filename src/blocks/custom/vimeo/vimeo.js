import { Fragment } from '@wordpress/element';
import { InspectorControls } from '@wordpress/editor';
import { getActions } from 'EighshiftBlocksGetActions';
import manifest from './manifest.json';

import { VideoIframeEditor } from '../../components/video-iframe/components/video-iframe-editor';
import { VideoIframeOptions } from '../../components/video-iframe/components/video-iframe-options';

export const Vimeo = (props) => {
  const {
    attributes: {
      vimeoId,
      vimeoOptions,
    },
  } = props;

  const actions = getActions(props, manifest);

  return (
    <Fragment>
      <InspectorControls>
        <VideoIframeOptions
          options={vimeoOptions}
          id={vimeoId}
          onChangeId={actions.onChangeVimeoId}
          onChangeOptions={actions.onChangeVimeoOptions}
        />
      </InspectorControls>
      <VideoIframeEditor
        options={vimeoOptions}
        id={vimeoId}
      />
    </Fragment>
  );
};
