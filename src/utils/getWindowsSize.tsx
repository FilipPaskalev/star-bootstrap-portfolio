type WindowSize = {
  width: number;
  height: number;
};

export const getWindowSize = (): WindowSize => {
  const { innerWidth: width, innerHeight: height } = window;
  return { width, height };
};
