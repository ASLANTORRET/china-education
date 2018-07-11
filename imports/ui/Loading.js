import React from 'react';

/*
 * A reusable loading component
 */

const Loading = () => (
  // <div className="Loading">
  //   <div className="Loading-bounce Loading-bounce--1" />
  //   <div className="Loading-bounce Loading-bounce--2" />
  //   <div className="Loading-bounce Loading-bounce--3" />
  // </div>

    <div id="loading">
        <div id="loading-center">
            <div id="loading-center-absolute">
            	<div id="object"></div>
            </div>
        </div>
    </div>
);

export default Loading;
