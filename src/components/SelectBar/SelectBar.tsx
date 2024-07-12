import React from 'react'
import Ellipse_W from '@/assets/ellipse_white.png'
import Ellipse_G from '@/assets/ellipse_gray.png'

type SelectBarProps = {
    I: number,
    max: number,
    func: Function
}

const SelectBar: React.FC<SelectBarProps> = ({ I, max, func }) => {
  return (
    <div className='tw-flex tw-gap-1'>
        {
            [...Array(max)].map((_, i) => (
                i === I ? <img onClick={() => func(i)} className='tw-cursor-pointer' src={Ellipse_W} /> : <img onClick={() => func(i)} className='tw-cursor-pointer' src={Ellipse_G} />
            ))
        }
    </div>
  )
}

export default SelectBar