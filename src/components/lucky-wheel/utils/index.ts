function isLinearGradient(color: string): boolean {
  return color.startsWith('linear-gradient');
}

function createLinearGradient(d3: any, color: string, gradientId: string): void {
  const svg = d3.select('svg');
  const gradient = svg
    .append('defs')
    .append('linearGradient')
    .attr('id', gradientId)
    .attr('gradientTransform', 'rotate(90)');

  // get color from string
  const colors = color.match(/#[0-9a-fA-F]{6}|#[0-9a-fA-F]{3}/g) || [];

  // caculate offset for each color in gradient
  const offsetStep = 100 / (colors.length - 1);

  colors.forEach((c, index) => {
    gradient
      .append('stop')
      .attr('offset', `${index * offsetStep}%`)
      .attr('style', `stop-color:${c};stop-opacity:1`);
  });
}

export {createLinearGradient, isLinearGradient};
