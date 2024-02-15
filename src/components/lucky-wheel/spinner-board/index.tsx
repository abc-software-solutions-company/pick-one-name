/* eslint-disable @typescript-eslint/no-use-before-define */
import React, {FC, memo, useEffect, useRef, useState} from 'react';

import {createLinearGradient, isLinearGradient} from '../utils';
import styles from './style.module.scss';

export interface IBoardItem {
  name: string;
}

interface IProps {
  className?: string;
  segments: IBoardItem[];
  colors: string[];
  flipText?: boolean;
}

const SpinnerBoard: FC<IProps> = ({segments, flipText = false, colors = []}) => {
  const [d3, setD3] = useState<any>();
  const spinnerRef = useRef<any>(null);

  useEffect(() => {
    const D3 = import(/* webpackChunkName: "vendor.d3js" */ 'd3');
    Promise.all([D3]).then(resp => setD3(resp[0]));
  }, []);

  useEffect(() => {
    if (!d3 || !spinnerRef.current) return;
    let rect = {width: 560, height: 560};

    const resizeCallback = (entries: ResizeObserverEntry[]) => {
      rect = entries[0].contentRect;
      destroySpinner(d3);
      initPieChart(d3, spinnerRef.current, flipText, rect.width, rect.height, colors, segments);
    };
    const RO = new ResizeObserver(resizeCallback);
    RO.observe(spinnerRef.current);

    return () => {
      destroySpinner(d3);
      RO.disconnect();
    };
  }, [d3, segments, colors, flipText]);

  return <div ref={spinnerRef} className={styles['spinner-board']}></div>;
};

export default memo(SpinnerBoard);

function initPieChart(
  d3: any,
  ref: any,
  flipText: boolean,
  width: number,
  height: number,
  colors: string[],
  segments: IBoardItem[]
) {
  const elmWidth = width;
  const elmHeight = height;
  const radius = Math.min(elmWidth, elmHeight) / 2;
  const size = 360 / segments.length;

  // Colors
  // const color = d3.scaleLinear().domain([0, colors.length - 1]).range(colors);
  const colorOrigin = d3.scaleOrdinal(colors);

  // Generate the SVG
  const svg = d3
    .select(ref)
    .append('svg')
    .attr('class', 'spinner-vector')
    .attr('width', elmWidth)
    .attr('height', elmHeight)
    .append('g')
    .attr('transform', 'translate(' + elmWidth / 2 + ',' + elmHeight / 2 + ')');

  // Generate the pie
  const pie = d3.pie().value(() => size);

  // Generate the arcs
  const arc = d3.arc().innerRadius(0).outerRadius(radius);

  // Generate groups
  const arcs = svg.selectAll('.arc').data(pie(segments)).enter().append('g').attr('class', 'arc');

  arcs
    .append('path')
    .attr('d', arc)
    .attr('fill', (d: {index: number}) => {
      const currentColor = colors[d.index];

      if (isLinearGradient(currentColor)) {
        const gradientId = `gradient-${d.index}`;
        createLinearGradient(d3, currentColor, gradientId);
        return `url(#${gradientId})`;
      } else {
        return colorOrigin(d.index);
      }
    });

  pie(segments).forEach(function (d: any) {
    const [x, y] = arc.centroid(d);
    const labelData = d.data as IBoardItem;
    const rotation =
      flipText && d.endAngle < Math.PI
        ? ((d.startAngle / 2 + d.endAngle / 2) * 180) / Math.PI
        : ((d.startAngle / 2 + d.endAngle / 2 + Math.PI) * 180) / Math.PI;

    svg
      .append('text')
      .attr('alignment-baseline', 'middle')
      .attr('transform', 'translate(' + [x * 1.9, y * 1.9] + ') rotate(-90) rotate(' + rotation + ')')
      .text(labelData.name);
  });
}

function destroySpinner(d3: any) {
  d3.select('.spinner-vector').remove();
}
