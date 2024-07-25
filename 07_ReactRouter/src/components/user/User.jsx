import { useParams } from "react-router-dom";

function User() {
  const { userId } = useParams();
  return (
    <div className="text-center bg-gray-600 m-4 text-3xl text-white">
      User: {userId}
    </div>
  );
}

export default User;
