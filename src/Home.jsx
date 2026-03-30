import { Button } from "@/components/ui/button";
function Home() {
  return (
    <h1>
      Welcome home! <div className="text-red-500 text-2xl">Hello</div>{" "}
      <div className="p-6">
        <Button variant="outline">Working</Button>
      </div>
    </h1>
  );
}

export default Home;
