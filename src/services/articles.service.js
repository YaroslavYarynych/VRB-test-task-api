// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const getAll = async () => {
  try {
    const response = await fetch(
      'https://newsapi.org/v2/everything?domains=techcrunch.com&page=1&pageSize=10&apiKey=07bbb3b1f9c648cca7df57d1ebe6e7f6',
    );

    const data = await response.json();

    return data;
  } catch (error) {
    console.error('Error fetching news:', error);
    throw error;
  }
};

export const getMore = async (page) => {
  try {
    const response = await fetch(
      `https://newsapi.org/v2/everything?domains=techcrunch.com&page=${page}&pageSize=10&apiKey=07bbb3b1f9c648cca7df57d1ebe6e7f6`,
    );

    const data = await response.json();

    return data;
  } catch (error) {
    console.error('Error fetching news:', error);
    throw error;
  }
};
