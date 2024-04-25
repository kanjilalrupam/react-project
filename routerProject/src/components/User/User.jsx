import { useParams } from "react-router-dom";
const User = () => {
  const { id } = useParams();
  return (
    <div className="text-center p-4 text-xl font-bold bg-gray-700 text-white">
      Parameter received in the address bar after /user/ is : {id}
    </div>
  );
};

export default User;
