import React from 'react';
import swimmingImage from '../../assets/swimming.png'
import playground from '../../assets/playground.png'
import classroom from '../../assets/class.png'
import bg from '../../assets/bg.png'
const QZone = () => {
  return (
    <div className="bg-base-200 p-3">
      <h2 className="font-bold mb-5">QZone</h2>
      <div className="space-y-5">
        <img src={swimmingImage} alt="" />
        <img src={classroom} alt="" />
        <img src={playground} alt="" />
      </div>
      <div className='mt-2'>
        <img src={bg} alt="" />
      </div>
    </div>
  );
};

export default QZone;