import CustomCarousel from "@/components/slider/custom.slider";
import images from "@/public/المعامل/images";
import { Button } from "@mui/base/Button";

export default function Labs() {
  const kamya = [
    "/المعامل/1.jpg",
    "/المعامل/2.jpg",
    "/المعامل/3.jpg",
    "/المعامل/4.jpg",
    "/المعامل/5.jpg",
    "/المعامل/6.jpg",
  ];
  return (
    <div>
      <h1>المعامل</h1>
      <div>
        <h2>معمل الكمياء</h2>
        {/* <CustomCarousel>
          <img src={kamya[0]} alt="img-1" />
          <img src={kamya[1]} alt="img-2" />
          <img src={kamya[2]} alt="img-3" />
          <img src={kamya[3]} alt="img-4" />
          <img src={kamya[4]} alt="img-5" />
          <img src={kamya[5]} alt="img-6" />
        </CustomCarousel> */}
        <Button>المزيد</Button>
      </div>
    </div>
  );
}
