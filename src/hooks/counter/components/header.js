import React from 'react';

const HeaderComponent = () => {
  console.log('HeaderComponent da dc render');
  return (
    <div>
      <h1>this is header</h1>
    </div>
  )
}
export default React.memo(HeaderComponent);