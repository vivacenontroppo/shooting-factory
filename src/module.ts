const getData = async (url: string) => {
  try {
    const response = await fetch(url);
    if (response.ok) {
      const mine = response.json();

      return mine;
    }
    throw new Error("Request failed!");
  } catch (error) {
    console.log(error);
  }
};

export { getData };
