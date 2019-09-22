import formurlencoded from 'form-urlencoded';

export function postAdminAjax(url, data, success, error) {
  return fetch(url, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded; charset=utf-8',
    },
    credentials: 'same-origin',
    body: formurlencoded(data),
  })
    .then((res) => res.json())
    .then((res) => {
      if (success) {
        return success(res);
      }
    })
    .catch((err) => {
      if (error) {
        return error(err);
      }
    });
}
