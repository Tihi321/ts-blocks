/* global themeLocalization */
import { get } from './api';

export async function getPosts(
  taxonomy = 'category',
  type = 'slug',
  slugId = '1',
  postsNumber = '3'
) {
  const {
    postEndpoint,
  } = themeLocalization;

  return get(`${postEndpoint}/${taxonomy}/${type}/${slugId}/${postsNumber}`)
    .then((res) => res.json());
}

