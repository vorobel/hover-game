export const changeDataFormat = (data) => {
  return (
    Object.keys(data).map(key => ({
      label: key,
      value: data[key].field
    }))
  )
}