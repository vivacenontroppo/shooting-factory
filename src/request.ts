import { IResWords } from './generate';

const getData = async (url: string): Promise<IResWords[]> => {
  try {
    const response = await fetch(url);
    if (response.ok) {
      const mine = response.json();

      return mine;
    }
    throw new Error('Request failed!');
  } catch (error) {
    console.log(error);
  }
};

// const getData = (url: string): Promise<IResWords[]> => 
//   fetch(url).then(res => res.json())
//   .catch(console.error)
// ;

export { getData };
