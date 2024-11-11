import TopList from "../../components/TopList/TopList";
import { useEffect, useState } from "react";
import { requestHome } from "../../requests-API";
import ErrorMessage from "../../components/ErrorMessage/ErrorMessage";
import Loader from "../../components/Loader/Loader";

export default function Home() {
  const [homeRequest, setHomeRequest] = useState([]);
  const [errorMessage, setErrorMessage] = useState(false);
  const [loader, setLoader] = useState(false);

  useEffect(() => {
    async function request() {
      try {
        setLoader(true);
        setHomeRequest([]);
        const data = await requestHome();
        console.log(data.data.results);
        setHomeRequest(data.data.results);
      } catch (error) {
        console.log(error);
        setErrorMessage(true);
      } finally {
        setLoader(false);
      }
    }
    request();
  }, []);

  return (
    <div>
      {loader && <Loader />}
      {errorMessage && <ErrorMessage />}
      {homeRequest.length > 0 && <TopList homeRequest={homeRequest} />}
    </div>
  );
}
