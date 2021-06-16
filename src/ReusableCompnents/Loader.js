import LoadingOverlay from "react-loading-overlay";
import { Spinner } from "reactstrap";
const Loader = ({ isLoading }) => {
  return (
    <div className="loader_div">
      <LoadingOverlay
        active={isLoading}
        spinner={
          <Spinner
            style={{ width: "3rem", height: "3rem", color: "#007bff" }}
            type="grow"
          />
        }
        fadeSpeed={500}
        text=""
      />
    </div>
  );
};

export default Loader;
