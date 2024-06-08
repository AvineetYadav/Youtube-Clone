const useCount = (info) => {
  if (info >= 1000000) {
    return (info / 1000000).toFixed(1) + "M";
  } else if (info >= 1000) {
    return (info / 1000).toFixed(0) + "K";
  }
};

export default useCount;
