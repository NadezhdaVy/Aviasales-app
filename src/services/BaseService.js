export default class BaseService {
  baseUrl = 'https://aviasales-test-api.kata.academy/'

  createUrl = (url, params) => {
    const newUrl = new URL(url, this.baseUrl)

    if (params) {
      params.forEach((element) => {
        newUrl.searchParams.append(Object.keys(element), Object.values(element))
      })
    }
    return newUrl
  }
}
