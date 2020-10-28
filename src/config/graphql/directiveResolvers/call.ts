const call = (next, _src, _args, _content) => {
  return next().then((str: string) => {
    console.log(str)
    return str
  })
}

export default call
