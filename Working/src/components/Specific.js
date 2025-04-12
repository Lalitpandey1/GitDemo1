import { useParams } from "react-router-dom";

const Specific = () => {
  const { var1 } = useParams();
  console.log(var1);
  return (
    <div>
      <h1>Instead of newBook </h1>;<h1>{var1} Specific is referenced</h1>;
    </div>
  );
};
export default Specific;
