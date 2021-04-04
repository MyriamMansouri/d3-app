
import React, { useEffect, useRef } from 'react';
import * as d3 from 'd3';

const App = () => {
  const myRef = useRef(null);

  const dataSet = [100, 200, 300, 400, 500];

  useEffect (() => {
    console.log(myRef);
    d3.select(myRef.current).append('p').text('hello from d3');
    
    let size = 500;
    
    let svg = d3.select(myRef.current).append('svg').attr('width', size).attr('height', size);
    
    let rect_width = 200;

    svg.selectAll('rect')
    .data(dataSet)
    .enter()
    .append('rect')
    .attr('x', (d, i) => 5 + i*(rect_width + 5))
    .attr('y', d => size - d)
    .attr('width', rect_width)
    .attr('height', d => d)
    .attr('fill', 'teal');
  }, [dataSet])

  return (
    <div ref={myRef}>
      Mon app 
    </div>
  );
}

export default App;
