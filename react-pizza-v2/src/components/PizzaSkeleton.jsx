import React from 'react';
import ContentLoader from 'react-content-loader';

const PizzaSkeleton = () => (
  <ContentLoader
    className="pizza block"
    speed={2}
    width={280}
    height={465}
    viewBox="0 0 280 465"
    backgroundColor="#f3f3f3"
    foregroundColor="#ecebeb">
    <circle cx="139" cy="121" r="123" />
    <rect x="0" y="262" rx="15" ry="15" width="280" height="20" />
    <rect x="189" y="311" rx="0" ry="0" width="17" height="0" />
    <rect x="99" y="305" rx="0" ry="0" width="45" height="2" />
    <rect x="1" y="313" rx="12" ry="12" width="280" height="68" />
    <rect x="53" y="376" rx="0" ry="0" width="1" height="0" />
    <rect x="4" y="406" rx="14" ry="14" width="95" height="30" />
    <rect x="144" y="401" rx="14" ry="14" width="123" height="41" />
  </ContentLoader>
);

export default PizzaSkeleton;
