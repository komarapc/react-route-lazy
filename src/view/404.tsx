import BodyWrapper from "../components/BodyWrapper";

export default function NotFound() {
  return (
    <>
      <BodyWrapper>
        <div className="flex items-center justify-center w-full min-h-screen bg-blue-400 text-white text-4xl">
          Ooops! Page not found.
        </div>
      </BodyWrapper>
    </>
  );
}
