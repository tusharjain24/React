import { useLoaderData } from "react-router-dom";

function GitHub() {
  const data = useLoaderData();
  //   const [data, setData] = useState([]);
  //   useEffect(() => {
  //     fetch("https://api.github.com/users/tusharjain24")
  //       .then((response) => response.json())
  //       .then((data) => {
  //         // console.log(data);
  //         setData(data);
  //       });
  //   });
  return (
    <div className="text-center bg-gray-600 m-4 text-3xl text-white">
      GitHub Followers: {data.followers}
      <img src={data.avatar_url} alt="Github Profile Picture" width={300} />
    </div>
  );
}

export default GitHub;
