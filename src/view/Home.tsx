import BodyWrapper from "@/components/BodyWrapper";
import { Link } from "react-router-dom";

export default function Home() {
  return (
    <>
      <BodyWrapper>
        <div className="p-10">
          <h1 className="text-2xl">Home</h1>
          <Link to={"/about"}>About</Link>
        </div>
      </BodyWrapper>
    </>
  );
}
