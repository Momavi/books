function BookMapArray({ volume }) {
  return (
    <span>
      {
        volume !== undefined
          ?
          volume.map((value, index) => {
            return (
              volume.length - 1 > index
                ?
                <span key={index}>{value}, </span>
                :
                <span key={index}>{value}</span>
            )
          })
          :
          null
      }
    </span>
  )
}
export default BookMapArray