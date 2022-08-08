const Loading = ({ loading }) => {
  return loading ? (
    <svg
      className="animate-spin inline-block border border-dark-blue rounded-full h-5 w-5 ml-3 ..."
      viewBox="0 0 24 24"
    ></svg>
  ) : null;
};

export default Loading;
