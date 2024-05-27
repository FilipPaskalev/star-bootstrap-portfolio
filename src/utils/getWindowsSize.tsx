type WindowSize = {
  width: number;
  height: number;
};

const getWindowSize = (): WindowSize => {
  const { innerWidth: width, innerHeight: height } = window;
  return { width, height };
};

export default getWindowSize;
