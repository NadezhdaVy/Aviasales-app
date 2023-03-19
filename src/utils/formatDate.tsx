import format from 'date-fns/format'

const convertTime = (date: string | number) => {
  if (Number(date)) {
    const minutes = Math.floor(Number(date) / 60)
    const seconds = Math.round(Number(date) % 60)

    return `${minutes}ч  ${seconds}м`
  }
  return format(new Date(date), 'hh : mm')
}

export default convertTime
