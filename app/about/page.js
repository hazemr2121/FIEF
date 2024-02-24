// pages/about.js
import Royaa from "@/components/about/royaa";
import Card from "@/components/shared/card";

export default function About() {
  return (
    <>
      <div className="mx-auto max-w-lg p-8 bg-gray-100 rounded-lg shadow-lg">
        <h1 className="text-3xl font-bold text-center mb-4">
          معهد المستقبل العالي للهندسة بالفيوم
        </h1>
        <div className="mb-4">
          <h2 className="text-xl font-semibold">معلومات عن المعهد:</h2>
          <p className="text-right">
            <span className="font-semibold">عنوان المعهد:</span> محافظة الفيوم –
            دمو – محافظة الفيوم
          </p>
          <p className="text-right">
            <span className="font-semibold">رقم طابع التنسيق:</span> ( 15 )
          </p>
          <p className="text-right">
            <span className="font-semibold">مدة الدراسة:</span> 5 سنوات دراسية
          </p>
        </div>
        <div className="mb-4">
          <h2 className="text-xl font-semibold">المؤهلات المقبولة:</h2>
          <ul className="list-disc list-inside text-right">
            <li>
              الثانوية العامة الشعبة الهندسية وما يعادلها من الشهادات العربية
              والأجنبية.
            </li>
            <li>
              الثانوية الصناعية نظام 3 سنوات بحد أدنى 75% من المجموع الكلي.
            </li>
            <li>دبلوم المدارس الصناعية نظام الخمس سنوات.</li>
            <li>دبلوم المعاهد الفنية الصناعية.</li>
          </ul>
        </div>
        <div className="mb-4">
          <h2 className="text-xl font-semibold">أقسام المعهد:</h2>
          <ul className="list-disc list-inside text-right">
            <li>تخصص الهندسة المدنية.</li>
            <li>تخصص الهندسة المعمارية.</li>
            <li>الهندسة الكهربية ( هندسة الالكترونيات والاتصالات الكهربية).</li>
          </ul>
        </div>
        <div className="mb-4">
          <h2 className="text-xl font-semibold">الدرجة العلمية الممنوحة:</h2>
          <p className="text-right">
            درجة البكالوريوس في إحدى التخصصات المعتمدة من وزير التعليم العالي
          </p>
        </div>
        <div className="mb-4">
          <h2 className="text-xl font-semibold">قرارات هامة:</h2>
          <p className="text-right">قرار الإنشاء: 58 بتاريخ 2015/1/12</p>
          <p className="text-right">
            قرار المعادلة: صدر قرار المجلس الأعلى للجامعات رقم (124) بتاريخ
            2020/5/18 بمعادلة درجة بكالوريوس من قسمى ( الهندسة المعمارية –
            الهندسة الكهربية ” هندسة الالكترونيات والاتصالات الكهربية ) التي
            يمنحها المعهد بدرجة البكالوريوس في الهندسة التي تمنحها الجامعات
            المصرية الخاضعة لقانون تنظيم الجامعات رقم (49) لسنة 1972 ولائحته
            التنفيذية في التخصصات المناظرة يعمل بهذا القرار حتى نهاية العام
            الدراسي (2023 /2024) صدر قرار المجلس الأعلى للجامعات رقم (153)
            بتاريخ 2022/6/8 بتجديد معادلة درجة بكالوريوس من قسم الهندسة المدنية
            التي يمنحها المعهد بدرجة البكالوريوس في الهندسة التي تمنحها الجامعات
            المصرية الخاضعة لقانون تنظيم الجامعات رقم (49) لسنة 1972 ولائحته
            التنفيذية في التخصصات المناظرة (يعمل بهذا القرار حتى نهاية العام
            الدراسي 2026/2025.
          </p>
        </div>
      </div>
      <div>
        <h1 className="font-bold  text-right ">الموقع العام للمعهد</h1>
        <div className="flex justify-center">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3498.8297583359636!2d30.8718957!3d29.2957257!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1459833cceec95c9%3A0x928c78dfeeadbcbd!2s%D9%85%D8%B9%D9%87%D8%AF%20%D9%87%D9%86%D8%AF%D8%B3%D8%A9%20%D8%A7%D9%84%D9%81%D9%8A%D9%88%D9%85%E2%80%AD%E2%80%AD%E2%80%AD!5e0!3m2!1sen!2seg!4v1643962068035"
            width="600"
            height="450"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
          ></iframe>
        </div>
      </div>
      <Royaa />
    </>
  );
}
