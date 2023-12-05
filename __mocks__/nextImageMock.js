// __mocks__/nextImageMock.js

const NextImage = ({ src, alt, priority, ...rest }) => {
  // eslint-disable-next-line @next/next/no-img-element
  return <img src={src} alt={alt} {...rest} data-priority={priority} />;
};

export default NextImage;
