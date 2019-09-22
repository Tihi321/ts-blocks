export const GalleryImageEditor = (props) => {
  const {
    blockClass,
    image: {
      url,
    },
  } = props;

  const defUrl = url || 'https://via.placeholder.com/500x300/DA291C/FFFFFF?Text=A1';

  return (
    <div className={blockClass} style={{ backgroundImage: `url(${defUrl})` }} >
    </div>
  );
};
