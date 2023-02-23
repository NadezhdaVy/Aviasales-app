import format from 'date-fns/format'

const convertTime = (date) => {
  if (Number(date)) {
    const minutes = Math.floor(date / 60)
    const seconds = Math.round(date % 60)

    return `${minutes}ч  ${seconds}м`
  }
  return format(new Date(date), 'hh : mm')
}

export default convertTime
