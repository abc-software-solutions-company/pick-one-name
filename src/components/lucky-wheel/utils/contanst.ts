let colors: string[] = [];
colors = colors.concat([
  '#7aabce',
  '#f7b2bc',
  '#8dd3c8',
  '#dfc181',
  '#cabbee',
  '#f7caeb',
  '#c5e4c6',
  '#e5c8c4',
  '#cdbeab',
  '#bbc9d6',
  '#ffd7c2',
  '#f7caca'
]);
colors = colors.concat([
  '#689fc7',
  '#f59ca9',
  '#7bcdc0',
  '#dab86d',
  '#bba8e9',
  '#f4b5e3',
  '#b5dcb6',
  '#ddb8b4',
  '#c4b39c',
  '#acbccd',
  '#ffc8aa',
  '#f4b5b5'
]);
colors = colors.concat([
  '#5794c1',
  '#f38596',
  '#69c6b7',
  '#d6ae5a',
  '#ac94e4',
  '#f19fdb',
  '#a4d4a6',
  '#d5a8a3',
  '#bba78d',
  '#9cb0c4',
  '#ffb892',
  '#f19f9f'
]);
colors = colors.concat(...Array(20).fill(colors));

const defaultPlayers = Array(8).fill({name: '', visible: true});

const a = {
  colors,
  defaultPlayers
};

export default a;
