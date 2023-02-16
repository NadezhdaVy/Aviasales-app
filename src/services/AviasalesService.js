import BaseService from './BaseService'

export default class AviasalesService extends BaseService {
  currId

  getId = async () => {
    const url = this.createUrl('search')
    const res = await fetch(url)
    if (!res.ok) {
      throw new Error('Something is wrong')
    }
    const id = await res.json()
    this.currId = id
  }

  getTickets = async () => {
    if (!this.currId) {
      await this.getId()
    }

    const url = this.createUrl('tickets', [this.currId])
    const res = await fetch(url)
    if (!res.ok) {
      if (res.status === 500) {
        return this.getTickets()
      }
      throw new Error('Something is wrong')
    }
    const body = res.json()

    return body
  }
}
