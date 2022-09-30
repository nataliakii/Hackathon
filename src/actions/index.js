import axios from 'axios';
import _ from 'lodash';

export async function fetchData(input) {
  const rootNameURL = 'https://api.agify.io?name=';

  const request = await axios.get(`${rootNameURL}${input}`);

  return {
    type: 'FETCH_DATA',
    payload: request,
  };
}

export async function fetchDog() {
  const dogURL = 'https://dog.ceo/api/breeds/image/random';
  const request = await axios.get(`${dogURL}`);

  return {
    type: 'FETCH_DOG',
    payload: request.data.message,
  };
}

export async function fetchArtwork() {
  const random0to10 = _.random(10);
  const random0to99 = _.random(99);
  const transformString = (arr) =>
    `${arr.slice(0, arr.indexOf('\n'))}(${arr.slice(arr.indexOf('\n') + 1)})`;
  const transformData = (obj) => {
    const root = obj.data.data[random0to99];
    const { title } = root;
    const { id } = root;
    const date = root.date_start;
    const description = root.thumbnail.alt_text;
    const artist = transformString(root.artist_display);
    const imageId = root.image_id;
    return {
      title,
      date,
      description,
      artist,
      imageId,
      id,
    };
  };
  const artworkRandomURL = `https://api.artic.edu/api/v1/artworks?page=${random0to10}&limit=100`;
  const request = await axios.get(`${artworkRandomURL}`);

  const artworkData = transformData(request);
  artworkData.imageURL = `https://www.artic.edu/iiif/2/${artworkData.imageId}/full/843,/0/default.jpg`;

  console.log(artworkData);
  return {
    type: 'FETCH_ARTWORK',
    payload: artworkData,
  };
}
