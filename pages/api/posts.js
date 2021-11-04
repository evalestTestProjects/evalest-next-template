// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

export default (req, res) => {
  res.status(200).json([
    { id: '1', title: 'Post one' },
    { id: '2', title: 'Post two' },
  ])
}
