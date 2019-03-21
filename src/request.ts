const getData = async (url: string): Promise<JSON> => {
  try {
    const response = await fetch(url);
    if (response.ok) {
      const mine = response.json();

      return mine;
    }
    throw new Error('Request failed!');
  } catch (error) {
    throw new Error(error);
  }
};

export { getData };
