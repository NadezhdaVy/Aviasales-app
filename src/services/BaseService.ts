export default class BaseService {
  baseUrl = 'https://aviasales-test-api.kata.academy/'

  createUrl = (url: string, params?: Array<{ [index: string]: string } | string>) => {
    const newUrl = new URL(url, this.baseUrl)

    // if (searchID) {
    //   newUrl.searchParams.append('searchId', searchID)
    // }

    if (params) {
      params.forEach((element) => {
        newUrl.searchParams.append(Object.keys(element)[0], Object.values(element)[0])
      })
    }
    return newUrl
  }
}
