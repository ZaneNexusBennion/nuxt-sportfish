export default defineEventHandler(async (event) => {
  const body = await readBody(event);

  console.log(body.text);

  return {
    success: true,
    msg: "Message sent",
  };
});
