import Card from "@/components/aqsam/card";
export default function Aqsam() {
  return (
    <>
      <div>
        <h1 className="m-5 font-bold text-center text-4xl text-yellow-400">
          الأقسام
        </h1>
      </div>
      <div
        className={
          "grid grid-cols-2 grid-rows-2 gap-x-5 gap-y-5 m-5 place-content-end"
        }
      >
        <Card
          title={"قسم العلوم الاساسية"}
          img={"./قسم العلوم الاساسية.jpg"}
          disc={
            "قسم العلوم الأساسية قسما مسانداً وأساسياً لأقسام المعهد وتكمن أهميته الأساسية في تزويد الطلاب بجوانب المعرفة العلمية واللغوية التي يكتسبونها"
          }
        />
        <Card
          title={"قسم الهندسة المدنية"}
          img={"./قسم العلوم الاساسية.jpg"}
          disc={
            "الهندسة المدنية هي فرع من فروع الهندسة وأكثرها التصاقا بنشأة الإنسان وتطوره عبر السنين والعصور، والمحفز الأساسي للمنتجات المعملية"
          }
        />
        <Card
          title={"قسم الهندسة الكهربية"}
          img={"/عمارة.jpg"}
          disc={
            "الهندسة الكهربية هو تخصص يهتم بدراسة وتطبيقات علوم الكهرباء والإلكترونيات والاتصالات والتحكم ونظم الحاسب الآلي"
          }
        />
        <Card
          title={"قسم الهندسة المعمارية"}
          img={"/عمارة.jpg"}
          disc={
            "الهندسة المعمارية: وهي المعروفة أيضًا باسم هندسة المباني، هي تخصص هندسي يتعامل مع الجوانب التكنولوجية والنهج متعدد التخصصات لتخطيط وتصميم وبناء وتشغيل المباني"
          }
        />
      </div>
    </>
  );
}
