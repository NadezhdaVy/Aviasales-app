const suffix = (word: string, count: number) => {
  if (count === 0) {
    return `${word}ок`
  }
  if (count === 1) {
    return `${word}ка`
  }
  return `${word}ки`
}

export default suffix
