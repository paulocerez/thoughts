async function dings(url: any) {
  try {
    const response = await fetch(url);
    const msg = "succesfully dings";
    return [null, response] as const;
  } catch (error) {
    return [error, null] as const;
  }
}

async function dings3() {
  const [error, response] = await dings("https://google");

  if (error != null) {
    console.log(error);
    return false;
  }
}
