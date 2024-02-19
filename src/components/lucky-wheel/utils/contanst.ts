let colors: string[] = [];
colors = colors.concat([
  'linear-gradient(180deg, #FE7A18 3.8%, #FE9115 34.25%, #FFCC0F 96.09%)',
  'linear-gradient(225deg, #FC9512 22.66%, #FED319 69.33%, #FFEB1C 91.3%)',
  'linear-gradient(90deg, #2FFFFF -0.01%, #2AE7FF 26.99%, #1EA9FF 82%, #1A95FF 100%)',
  'linear-gradient(315deg, #CC0A60 22.59%, #E60C69 54.96%, #FE0E73 90.03%)',
  'linear-gradient(0deg, #3D08EA 1.63%, #600FF4 46.9%, #7815FC 83.94%)',
  'linear-gradient(45deg, #006F67 22.05%, #00756B 26.95%, #00B392 71.12%, #00CBA2 92.15%)',
  'linear-gradient(90deg, #808080 2.36%, #9D9D9D 52.29%, #B5B5B5 100.25%)',
  'linear-gradient(141deg, #FF260D 24.56%, #FE3E0E 42.26%, #FC7B10 80.49%, #FC9512 95.35%)'
]);
colors = colors.concat([
  'linear-gradient(180deg, #FE7A18 3.8%, #FE9115 34.25%, #FFCC0F 96.09%)',
  'linear-gradient(225deg, #FC9512 22.66%, #FED319 69.33%, #FFEB1C 91.3%)',
  'linear-gradient(90deg, #2FFFFF -0.01%, #2AE7FF 26.99%, #1EA9FF 82%, #1A95FF 100%)',
  'linear-gradient(315deg, #CC0A60 22.59%, #E60C69 54.96%, #FE0E73 90.03%)',
  'linear-gradient(0deg, #3D08EA 1.63%, #600FF4 46.9%, #7815FC 83.94%)',
  'linear-gradient(45deg, #006F67 22.05%, #00756B 26.95%, #00B392 71.12%, #00CBA2 92.15%)',
  'linear-gradient(90deg, #808080 2.36%, #9D9D9D 52.29%, #B5B5B5 100.25%)',
  'linear-gradient(141deg, #FF260D 24.56%, #FE3E0E 42.26%, #FC7B10 80.49%, #FC9512 95.35%)'
]);
colors = colors.concat([
  'linear-gradient(180deg, #FE7A18 3.8%, #FE9115 34.25%, #FFCC0F 96.09%)',
  'linear-gradient(225deg, #FC9512 22.66%, #FED319 69.33%, #FFEB1C 91.3%)',
  'linear-gradient(90deg, #2FFFFF -0.01%, #2AE7FF 26.99%, #1EA9FF 82%, #1A95FF 100%)',
  'linear-gradient(315deg, #CC0A60 22.59%, #E60C69 54.96%, #FE0E73 90.03%)',
  'linear-gradient(0deg, #3D08EA 1.63%, #600FF4 46.9%, #7815FC 83.94%)',
  'linear-gradient(45deg, #006F67 22.05%, #00756B 26.95%, #00B392 71.12%, #00CBA2 92.15%)',
  'linear-gradient(90deg, #808080 2.36%, #9D9D9D 52.29%, #B5B5B5 100.25%)',
  'linear-gradient(141deg, #FF260D 24.56%, #FE3E0E 42.26%, #FC7B10 80.49%, #FC9512 95.35%)'
]);
colors = colors.concat(...Array(20).fill(colors));

const defaultPlayers = Array(8).fill({name: '', visible: true});

const a = {
  colors,
  defaultPlayers
};

export default a;
