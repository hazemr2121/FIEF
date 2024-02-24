import Image from "next/image";
import CustomContainer from "@/components/Home/main-container";
export default function Home() {
  return (
    <>
      <div>
        <CustomContainer
          header={"FIEF"}
          description={"معهد المستقبل العالي للهندسة بالفيوم"}
        />
      </div>
    </>
  );
}
