const formatTime = (time, formatTo) => {
  if (formatTo === 'mm:ss.msms') {
    const mins = `0${Math.floor((time / 60000) % 60)}`.slice(-2);
    const secs = `0${Math.floor((time / 1000) % 60)}`.slice(-2);
    const millis = `0${(time / 10) % 100}`.slice(-2);
    return `${mins}:${secs}.${millis}`;
  }
  const timeArray = time.split(/(\.|:)/g);
  return (
    Number(timeArray[0]) * 60000 +
    Number(timeArray[2]) * 1000 +
    Number(timeArray[4]) * 10
  );
};

export default formatTime;
