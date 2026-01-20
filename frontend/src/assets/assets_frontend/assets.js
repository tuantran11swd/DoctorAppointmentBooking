import about_image from "./about_image.png";
import appointment_img from "./appointment_img.png";
import arrow_icon from "./arrow_icon.svg";
import chats_icon from "./chats_icon.svg";
import contact_image from "./contact_image.png";
import cross_icon from "./cross_icon.png";
import Dermatologist from "./Dermatologist.svg";
import doc1 from "./doc1.png";
import doc2 from "./doc2.png";
import doc3 from "./doc3.png";
import doc4 from "./doc4.png";
import doc5 from "./doc5.png";
import doc6 from "./doc6.png";
import doc7 from "./doc7.png";
import doc8 from "./doc8.png";
import doc9 from "./doc9.png";
import doc10 from "./doc10.png";
import doc11 from "./doc11.png";
import doc12 from "./doc12.png";
import doc13 from "./doc13.png";
import doc14 from "./doc14.png";
import doc15 from "./doc15.png";
import dropdown_icon from "./dropdown_icon.svg";
import Gastroenterologist from "./Gastroenterologist.svg";
import General_physician from "./General_physician.svg";
import Gynecologist from "./Gynecologist.svg";
import group_profiles from "./group_profiles.png";
import header_img from "./header_img.png";
import info_icon from "./info_icon.svg";
import logo from "./logo.svg";
import menu_icon from "./menu_icon.svg";
import Neurologist from "./Neurologist.svg";
import Pediatricians from "./Pediatricians.svg";
import profile_pic from "./profile_pic.png";
import razorpay_logo from "./razorpay_logo.png";
import stripe_logo from "./stripe_logo.png";
import upload_icon from "./upload_icon.png";
import verified_icon from "./verified_icon.svg";

export const assets = {
  about_image,
  appointment_img,
  arrow_icon,
  chats_icon,
  contact_image,
  cross_icon,
  dropdown_icon,
  group_profiles,
  header_img,
  info_icon,
  logo,
  menu_icon,
  profile_pic,
  razorpay_logo,
  stripe_logo,
  upload_icon,
  verified_icon,
};

export const specialityData = [
  {
    image: General_physician,
    speciality: "Bác sĩ đa khoa",
  },
  {
    image: Gynecologist,
    speciality: "Bác sĩ phụ khoa",
  },
  {
    image: Dermatologist,
    speciality: "Bác sĩ da liễu",
  },
  {
    image: Pediatricians,
    speciality: "Bác sĩ nhi khoa",
  },
  {
    image: Neurologist,
    speciality: "Bác sĩ thần kinh",
  },
  {
    image: Gastroenterologist,
    speciality: "Bác sĩ tiêu hóa",
  },
];

export const doctors = [
  {
    _id: "doc1",
    about:
      "BS. Nguyễn Văn Minh cam kết mang đến dịch vụ chăm sóc sức khỏe toàn diện cho bệnh nhân, tập trung vào phòng ngừa bệnh, chẩn đoán sớm và điều trị hiệu quả. Với nhiều năm kinh nghiệm trong nghề, BS. Nguyễn Văn Minh luôn đặt sức khỏe của bệnh nhân lên hàng đầu.",
    address: {
      line1: "123 Đường 3/2, Quận 10",
      line2: "Phường 12, Thành phố Hồ Chí Minh",
    },
    degree: "Bác sĩ Y khoa",
    experience: "4 Năm",
    fees: 50,
    image: doc1,
    name: "BS. Nguyễn Văn Minh",
    speciality: "Bác sĩ đa khoa",
  },
  {
    _id: "doc2",
    about:
      "BS. Trần Thị Lan cam kết mang đến dịch vụ chăm sóc sức khỏe toàn diện cho bệnh nhân, tập trung vào phòng ngừa bệnh, chẩn đoán sớm và điều trị hiệu quả. Với nhiều năm kinh nghiệm trong nghề, BS. Trần Thị Lan luôn đặt sức khỏe của bệnh nhân lên hàng đầu.",
    address: {
      line1: "456 Đường Võ Văn Ngân, Quần Thể",
      line2: "Phường Bình Thọ, Thành phố Thủ Đức",
    },
    degree: "Bác sĩ Y khoa",
    experience: "3 Năm",
    fees: 60,
    image: doc2,
    name: "BS. Trần Thị Lan",
    speciality: "Bác sĩ phụ khoa",
  },
  {
    _id: "doc3",
    about:
      "BS. Lê Hoàng Long cam kết mang đến dịch vụ chăm sóc sức khỏe toàn diện cho bệnh nhân, tập trung vào phòng ngừa bệnh, chẩn đoán sớm và điều trị hiệu quả. Với nhiều năm kinh nghiệm trong nghề, BS. Lê Hoàng Long luôn đặt sức khỏe của bệnh nhân lên hàng đầu.",
    address: {
      line1: "789 Đường Cộng Hòa, Quận Tân Bình",
      line2: "Phường 13, Thành phố Hồ Chí Minh",
    },
    degree: "Bác sĩ Y khoa",
    experience: "1 Năm",
    fees: 30,
    image: doc3,
    name: "BS. Lê Hoàng Long",
    speciality: "Bác sĩ da liễu",
  },
  {
    _id: "doc4",
    about:
      "BS. Phạm Thu Hà cam kết mang đến dịch vụ chăm sóc sức khỏe toàn diện cho bệnh nhân, tập trung vào phòng ngừa bệnh, chẩn đoán sớm và điều trị hiệu quả. Với nhiều năm kinh nghiệm trong nghề, BS. Phạm Thu Hà luôn đặt sức khỏe của bệnh nhân lên hàng đầu.",
    address: {
      line1: "321 Đường Lê Văn Sỹ, Quận 3",
      line2: "Phường 10, Thành phố Hồ Chí Minh",
    },
    degree: "Bác sĩ Y khoa",
    experience: "2 Năm",
    fees: 40,
    image: doc4,
    name: "BS. Phạm Thu Hà",
    speciality: "Bác sĩ nhi khoa",
  },
  {
    _id: "doc5",
    about:
      "BS. Hoàng Đức Tuấn cam kết mang đến dịch vụ chăm sóc sức khỏe toàn diện cho bệnh nhân, tập trung vào phòng ngừa bệnh, chẩn đoán sớm và điều trị hiệu quả. Với nhiều năm kinh nghiệm trong nghề, BS. Hoàng Đức Tuấn luôn đặt sức khỏe của bệnh nhân lên hàng đầu.",
    address: {
      line1: "555 Đường Nguyễn Trãi, Quận 5",
      line2: "Phường 8, Thành phố Hồ Chí Minh",
    },
    degree: "Bác sĩ Y khoa",
    experience: "4 Năm",
    fees: 50,
    image: doc5,
    name: "BS. Hoàng Đức Tuấn",
    speciality: "Bác sĩ thần kinh",
  },
  {
    _id: "doc6",
    about:
      "BS. Đặng Quốc Bảo cam kết mang đến dịch vụ chăm sóc sức khỏe toàn diện cho bệnh nhân, tập trung vào phòng ngừa bệnh, chẩn đoán sớm và điều trị hiệu quả. Với nhiều năm kinh nghiệm trong nghề, BS. Đặng Quốc Bảo luôn đặt sức khỏe của bệnh nhân lên hàng đầu.",
    address: {
      line1: "555 Đường Nguyễn Trãi, Quận 5",
      line2: "Phường 8, Thành phố Hồ Chí Minh",
    },
    degree: "Bác sĩ Y khoa",
    experience: "4 Năm",
    fees: 50,
    image: doc6,
    name: "BS. Đặng Quốc Bảo",
    speciality: "Bác sĩ thần kinh",
  },
  {
    _id: "doc7",
    about:
      "BS. Vũ Hải Triều cam kết mang đến dịch vụ chăm sóc sức khỏe toàn diện cho bệnh nhân, tập trung vào phòng ngừa bệnh, chẩn đoán sớm và điều trị hiệu quả. Với nhiều năm kinh nghiệm trong nghề, BS. Vũ Hải Triều luôn đặt sức khỏe của bệnh nhân lên hàng đầu.",
    address: {
      line1: "123 Đường 3/2, Quận 10",
      line2: "Phường 12, Thành phố Hồ Chí Minh",
    },
    degree: "Bác sĩ Y khoa",
    experience: "4 Năm",
    fees: 50,
    image: doc7,
    name: "BS. Vũ Hải Triều",
    speciality: "Bác sĩ đa khoa",
  },
  {
    _id: "doc8",
    about:
      "BS. Bùi Thị Xuân cam kết mang đến dịch vụ chăm sóc sức khỏe toàn diện cho bệnh nhân, tập trung vào phòng ngừa bệnh, chẩn đoán sớm và điều trị hiệu quả. Với nhiều năm kinh nghiệm trong nghề, BS. Bùi Thị Xuân luôn đặt sức khỏe của bệnh nhân lên hàng đầu.",
    address: {
      line1: "456 Đường Võ Văn Ngân, Quần Thể",
      line2: "Phường Bình Thọ, Thành phố Thủ Đức",
    },
    degree: "Bác sĩ Y khoa",
    experience: "3 Năm",
    fees: 60,
    image: doc8,
    name: "BS. Bùi Thị Xuân",
    speciality: "Bác sĩ phụ khoa",
  },
  {
    _id: "doc9",
    about:
      "BS. Ngô Thanh Mai cam kết mang đến dịch vụ chăm sóc sức khỏe toàn diện cho bệnh nhân, tập trung vào phòng ngừa bệnh, chẩn đoán sớm và điều trị hiệu quả. Với nhiều năm kinh nghiệm trong nghề, BS. Ngô Thanh Mai luôn đặt sức khỏe của bệnh nhân lên hàng đầu.",
    address: {
      line1: "789 Đường Cộng Hòa, Quận Tân Bình",
      line2: "Phường 13, Thành phố Hồ Chí Minh",
    },
    degree: "Bác sĩ Y khoa",
    experience: "1 Năm",
    fees: 30,
    image: doc9,
    name: "BS. Ngô Thanh Mai",
    speciality: "Bác sĩ da liễu",
  },
  {
    _id: "doc10",
    about:
      "BS. Đỗ Minh Quân cam kết mang đến dịch vụ chăm sóc sức khỏe toàn diện cho bệnh nhân, tập trung vào phòng ngừa bệnh, chẩn đoán sớm và điều trị hiệu quả. Với nhiều năm kinh nghiệm trong nghề, BS. Đỗ Minh Quân luôn đặt sức khỏe của bệnh nhân lên hàng đầu.",
    address: {
      line1: "321 Đường Lê Văn Sỹ, Quận 3",
      line2: "Phường 10, Thành phố Hồ Chí Minh",
    },
    degree: "Bác sĩ Y khoa",
    experience: "2 Năm",
    fees: 40,
    image: doc10,
    name: "BS. Đỗ Minh Quân",
    speciality: "Bác sĩ nhi khoa",
  },
  {
    _id: "doc11",
    about:
      "BS. Cao Thị Ngọc cam kết mang đến dịch vụ chăm sóc sức khỏe toàn diện cho bệnh nhân, tập trung vào phòng ngừa bệnh, chẩn đoán sớm và điều trị hiệu quả. Với nhiều năm kinh nghiệm trong nghề, BS. Cao Thị Ngọc luôn đặt sức khỏe của bệnh nhân lên hàng đầu.",
    address: {
      line1: "555 Đường Nguyễn Trãi, Quận 5",
      line2: "Phường 8, Thành phố Hồ Chí Minh",
    },
    degree: "Bác sĩ Y khoa",
    experience: "4 Năm",
    fees: 50,
    image: doc11,
    name: "BS. Cao Thị Ngọc",
    speciality: "Bác sĩ thần kinh",
  },
  {
    _id: "doc12",
    about:
      "BS. Lưu Hồng Sơn cam kết mang đến dịch vụ chăm sóc sức khỏe toàn diện cho bệnh nhân, tập trung vào phòng ngừa bệnh, chẩn đoán sớm và điều trị hiệu quả. Với nhiều năm kinh nghiệm trong nghề, BS. Lưu Hồng Sơn luôn đặt sức khỏe của bệnh nhân lên hàng đầu.",
    address: {
      line1: "555 Đường Nguyễn Trãi, Quận 5",
      line2: "Phường 8, Thành phố Hồ Chí Minh",
    },
    degree: "Bác sĩ Y khoa",
    experience: "4 Năm",
    fees: 50,
    image: doc12,
    name: "BS. Lưu Hồng Sơn",
    speciality: "Bác sĩ thần kinh",
  },
  {
    _id: "doc13",
    about:
      "BS. Phan Thị An cam kết mang đến dịch vụ chăm sóc sức khỏe toàn diện cho bệnh nhân, tập trung vào phòng ngừa bệnh, chẩn đoán sớm và điều trị hiệu quả. Với nhiều năm kinh nghiệm trong nghề, BS. Phan Thị An luôn đặt sức khỏe của bệnh nhân lên hàng đầu.",
    address: {
      line1: "123 Đường 3/2, Quận 10",
      line2: "Phường 12, Thành phố Hồ Chí Minh",
    },
    degree: "Bác sĩ Y khoa",
    experience: "4 Năm",
    fees: 50,
    image: doc13,
    name: "BS. Phan Thị An",
    speciality: "Bác sĩ đa khoa",
  },
  {
    _id: "doc14",
    about:
      "BS. Trần Đức Mạnh cam kết mang đến dịch vụ chăm sóc sức khỏe toàn diện cho bệnh nhân, tập trung vào phòng ngừa bệnh, chẩn đoán sớm và điều trị hiệu quả. Với nhiều năm kinh nghiệm trong nghề, BS. Trần Đức Mạnh luôn đặt sức khỏe của bệnh nhân lên hàng đầu.",
    address: {
      line1: "456 Đường Võ Văn Ngân, Quần Thể",
      line2: "Phường Bình Thọ, Thành phố Thủ Đức",
    },
    degree: "Bác sĩ Y khoa",
    experience: "3 Năm",
    fees: 60,
    image: doc14,
    name: "BS. Trần Đức Mạnh",
    speciality: "Bác sĩ phụ khoa",
  },
  {
    _id: "doc15",
    about:
      "BS. Lý Thị Hạnh cam kết mang đến dịch vụ chăm sóc sức khỏe toàn diện cho bệnh nhân, tập trung vào phòng ngừa bệnh, chẩn đoán sớm và điều trị hiệu quả. Với nhiều năm kinh nghiệm trong nghề, BS. Lý Thị Hạnh luôn đặt sức khỏe của bệnh nhân lên hàng đầu.",
    address: {
      line1: "789 Đường Cộng Hòa, Quận Tân Bình",
      line2: "Phường 13, Thành phố Hồ Chí Minh",
    },
    degree: "Bác sĩ Y khoa",
    experience: "1 Năm",
    fees: 30,
    image: doc15,
    name: "BS. Lý Thị Hạnh",
    speciality: "Bác sĩ da liễu",
  },
];
