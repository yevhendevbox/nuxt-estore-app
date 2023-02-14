export default defineEventHandler(async (event) => {

  const { name } = useQuery(event);

  const { age } = await useBody(event)

  return {
    message: `Hello ninja ${name}! You are ${age} years old`
  }
});