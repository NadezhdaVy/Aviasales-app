import BaseService from './BaseService'

export default class AviasalesService extends BaseService {
  currId = ''

  getId = async (): Promise<string> => {
    const url = this.createUrl('search')
    const res = await fetch(url)
    if (!res.ok) {
      throw new Error('Something is wrong')
    }
    const id = await res.json()
    this.currId = id
    return id
  }
}
