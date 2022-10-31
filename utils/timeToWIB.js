const timeToWIB = (time) => {
  return `${new Date().toISOString().slice(11, 16)} WIB`;
};

export default timeToWIB;
