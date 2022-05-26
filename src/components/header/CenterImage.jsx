import React from 'react';
import Me from '../../assets/me.png'


const CenterImage = () => {
  return (
    <div className='centerImage__contanier'>
        <img className='centerImage__contanier__img' src={Me} alt="" />
    </div>
  )
}

export default CenterImage
