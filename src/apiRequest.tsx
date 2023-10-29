// This file contains the function that makes the api request and returns an error message if there is one
// This function is called in the App.tsx file and is used to abstract the Create Update and Delete functionality

type ApiRequest = {
  url: string;
  optionsObj?: object;
  errMsg?: string | null;
};

const apiRequest = async ({
  url = "",
  optionsObj,
  errMsg = null,
}: ApiRequest) => {
  try {
    const res = await fetch(url, optionsObj);
    if (!res.ok) throw Error("Please reload the page");
  } catch (error) {
    if (error instanceof Error) errMsg = error.message;
  } finally {
    // eslint-disable-next-line no-unsafe-finally
    return errMsg;
  }
};

export default apiRequest;
