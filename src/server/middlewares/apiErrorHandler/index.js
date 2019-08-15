export default async (_, next) => {
  try {
    await next()
  } catch (err) {
    // eslint-disable-next-line
    console.log(err)
  }
}
