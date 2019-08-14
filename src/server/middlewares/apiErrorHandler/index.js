export default async (_, next) => {
  try {
    await next()
  } catch (err) {
    throw err
  }
}
