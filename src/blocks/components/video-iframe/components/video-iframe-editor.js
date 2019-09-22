export const VideoIframeEditor = (props) => {
  const {
    componentClass = 'video-iframe',
    id,
    options,
  } = props;

  const optionsMap = options.map((option) => {
    return `${option.value}=1`;
  }).join('&');

  const optionsString = (optionsMap) ? `?${optionsMap}` : '';

  return (
    <div className={componentClass}>
      {
        id &&
        <div className={`${componentClass}__video`} >
          <iframe className={`${componentClass}__iframe`} title="vimeo-player" src={`https://player.vimeo.com/video/${id}${optionsString}`} frameBorder="0" allow="autoplay; fullscreen" allowFullScreen ></iframe>
        </div>
      }
    </div>
  );
};
