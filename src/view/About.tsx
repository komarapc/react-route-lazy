import BodyWrapper from "@/components/BodyWrapper";
import { lazy } from "react";
import { useNavigate } from "react-router-dom";

const Counter = lazy(() => import("@/components/Counter"));
export default function About() {
  const navigate = useNavigate();
  return (
    <>
      <BodyWrapper className="p-10">
        <h1 className="text-2xl">About</h1>
        <Counter />
        <button
          className="px-4 py-2 bg-blue-400 text-blue-50 rounded"
          onClick={() => navigate(-1)}
        >
          Back
        </button>
      </BodyWrapper>
    </>
  );
}
