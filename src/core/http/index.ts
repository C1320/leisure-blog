import RequestHttp from './interceptor';

const http = new RequestHttp({
  headers: {
    'Content-Type': 'application/json'
  },
  cache: true,
  isLoading: true
});

const uploadHttp = new RequestHttp({
  headers: {
    'Content-Type': 'multipart/form-data'
  },
  cache: true,
  isCancel: true,
  isLoading: true
});
export { http, uploadHttp };
