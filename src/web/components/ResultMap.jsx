const ResultMap = (props) => {
    const { result } = props

    return (
      <>
        {result.split("\n").map((item, index) => (
          <span key={index}>{item}</span>
        ))}
      </>
    )
}

export default ResultMap