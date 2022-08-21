const str = `
010-1234-5678
thesoco@gmail.com
https://www.omdbapi.com/?apikey=7035c60c
The quick brown fox jusmps the isjidf
abbcccdddd
`

console.log (
  str.match(/(?<=@).{1,}/g)
)