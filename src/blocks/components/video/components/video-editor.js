import { useState } from 'react';
import classnames from 'classnames';
import ReactPlayer from 'react-player';

export const VideoEditor = (props) => {
  const {
    className = 'video-element',
    url,
    controls = true,
    autoPlay = false,
    loop = false,
    muted = false,
    poster = false,
  } = props;

  const [isHidden, setIsHidden] = useState(false);

  const style = {
    backgroundImage: `url(${poster})`,
  };

  const posterClassName = classnames([
    `${className}__poster`,
    { 'is-hidden': isHidden },
  ]);

  const onmPosterClick = () => {
    setIsHidden(() => true);
  };

  return (
    <div className={className}>
      <button onClick={onmPosterClick} className={posterClassName} style={style}><span className={`${className}__play-icon`}></span></button>
      <ReactPlayer
        className={`${className}__video`}
        playing={isHidden}
        url={url}
        width="100%"
        height="100%"
        controls={controls}
        autoPlay={autoPlay}
        loop={loop}
        muted={muted}
      />
    </div>
  );
};
