import Image from "next/image";
export default function Adminsistration() {
  return (
    <div className="container mx-auto mt-10 shadow-lg text-right bg-gray-200">
      <div className="flex">
        <div className="w-1/2">
          <Image
            src="/الهيكل التنظيمي.png"
            alt="Image"
            width={1000}
            height={1000}
          />
        </div>
        <div className="w-1/2 mt-5 text-center ">
          <h1 className="text-4xl font-bold text-center pb-5">
            الجهاز الإدارى
          </h1>
          <h3 className="text-xl font-semibold  text-center pr-5">
            يتكون مجلس إدارة معهد المستقبل من كل من الساده
          </h3>
          <ul className="list-disc list-inside rtl  pl-4 font-semibold p-5">
            <li className="mb-2 ">
              لواء . أ. ح . مهندس / أسامه مخلوف – رئيس مجلس الإدارة
            </li>
            <li className="mb-2">
              الســـــيد الأســتـــاذ / نجم عبدالستار – نائب رئيس مجلس الإدارة
            </li>
            <li className="mb-2">
              الاستاذ الدكتور / محى الدين مصطفى – عميد المعهد
            </li>
            <li className="mb-2">المهندس / أيمن مخلوف – عضو مجلس إدارة</li>
            <li className="mb-2">لواء دكتور/ إيهاب مخلوف – عضو مجلس إدارة</li>
            <li className="mb-2">المهندس / محمد يونس – عضو مجلس إدارة</li>
            <li className="mb-2">الدكتور / محمد عبد المنعم – عضو مجلس إدارة</li>
            <li className="mb-2">
              الدكتور / محمد سيد محمد معوض – عضو مجلس إدارة
            </li>
            <li className="mb-2">أمين عام المعهد : الاستاذ / تامر شرقاوى</li>
          </ul>
          <br />
          <h3 className="text-xl font-semibold mb-4 text-center">
            وضع المعهد معايير تقييم أداء الجهاز الإدارى
          </h3>
          <div className="flex row-auto justify-center">
            <ul className="list-none list-inside rtl pl-4 font-semibold text-right">
              <li className="mb-2">الالتزام باوقات الدوام</li>
              <li className="mb-2">مدي تعرضه للجزاءات (ايجابيه وسلبيه)</li>
              <li className="mb-2">الدقه ف العمل</li>
              <li className="mb-2">القدره على إداره الوقت وجدوله الاعمال</li>
              <li className="mb-2">الاهتمام بالتطوير وتحسين مستوي العمل</li>
              <li className="mb-2">التحليل وحل المشكلات</li>
              <li className="mb-2">القيام بأعمال ابداعيه وابتكارات</li>
              <li className="mb-2">الاجتهاد والتجاوب مع ضغط العمل</li>
              <li className="mb-2">استغلال واشغال اوقات العمل المقرره</li>
              <li className="mb-2">
                السرعه والكفاءه في انجاز الاعمال الموكله اليه
              </li>
            </ul>

            <ul className="list-disc list-inside rtl pl-4 font-semibold text-left">
              <li className="mb-2">المشاركه والعمل ضمن فريق</li>
              <li className="mb-2">الالمام بمهام الوظيفه</li>
              <li className="mb-2">الالتزام بمكان العمل</li>
              <li className="mb-2">
                تنظيم وترتيب مكان العمل والمحافظه على الاجهزه والمواد
              </li>
              <li className="mb-2">التقيد بالتعليمات والاجراءات وتنفيذها</li>
              <li className="mb-2">لديه روح المبادره وحسن التصرف</li>
              <li className="mb-2">مهارات الاتصال (كتابيه وشفويه)</li>
              <li className="mb-2">حسن العلاقه مع رئيسه المباشر والزملاء</li>
              <li className="mb-2">حسن العلاقه مع الجمهور</li>
              <li className="mb-2">حسن الملبس والمظهر</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
