import RequestHttp from './interceptor';

const http = new RequestHttp({
  headers: {
    'Content-Type': 'application/json'
  },
  cache: true,
  isLoading: true
});
export { http };
