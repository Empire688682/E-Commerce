import React from 'react';
import './Description.css';

const Description = (props) => {
    const {review} = props
  return (
    <div className='description-con'>
        <div className="head">
            <p className='D-heading'>Description</p>
            <p className='reviews'>Reviews ({review})</p>
        </div>
        <p className='description-con-description'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae iusto impedit quos? Magni dolor, odio consequuntur veritatis nulla corrupti enim ut laboriosam ducimus nam laudantium ad deleniti corporis vel at.
        Facere deserunt voluptate pariatur ipsum, labore repellendus a dolorem placeat rerum, nulla quia nihil consequatur, provident quos ex est obcaecati fuga tenetur deleniti voluptatum. Consequatur cupiditate quisquam adipisci iusto hic?
        Magni rerum officia alias harum repellat! Ut architecto neque maxime delectus soluta obcaecati labore officiis placeat nulla assumenda numquam vel ad animi reprehenderit, dicta sit, molestias nihil ex quibusdam qui.</p>
    </div>
  )
}

export default Description
