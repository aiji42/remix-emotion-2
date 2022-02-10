import { useCatch } from "remix";

export const loader = () => {
  throw new Response("", { status: 404, statusText: "Not found" });
};

export default () => {
  return null;
};

export function CatchBoundary() {
  const caught = useCatch();
  if (caught.status === 404) {
    return (
      <div>
        <h1>{caught.statusText}</h1>
      </div>
    );
  }
  throw new Error(`Unhandled error: ${caught.status}`);
}
