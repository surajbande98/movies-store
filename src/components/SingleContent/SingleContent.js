import React from 'react'
import { unavailable } from '../../config/config'

import "./SingleContent.css";

import { Badge } from "@material-ui/core";

import ContentModal from "../ContentModal/ContentModal";

const SingleContent = ({content}) => {
console.log(content);
  const {id,poster_path,title,release_date,media_type,vote_average} = content;
  return (
    <ContentModal media_type={media_type} id={id}>
      <Badge badgeContent={vote_average} color={vote_average > 6 ? 'primary': 'secondary'}></Badge>
        <img className='poster' src={poster_path ? `https://image.tmdb.org/t/p/w300/${poster_path}` : unavailable} alt={title} />
        <b className='title'>{title}</b>
        <span className='subTitle'>{media_type === 'tv' ?  "TV Series" : "Movie"}
        <span>{release_date}</span>
        </span>
    </ContentModal>
  )
}

export default SingleContent