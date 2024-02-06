import {  getAnimeResponse } from '@/libs/api-libs'
import React from 'react'

const anime = async ({ id }) => {
    
    const animeCharacters = await getAnimeResponse(`anime/${id}/characters`)

  return (
    <div>anime</div>
  )
}

export default anime