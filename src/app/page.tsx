import Gallery from '@/components/about/Gallery';
import ImagesPreview from '@/components/about/ImagesPreview';
import AddToCalendarButton from '@/components/events/AddToCalendarButton';
import CountdownClock from '@/components/events/CountdownClock';
import ViewMapButton from '@/components/events/ViewMapButton';
import InvitationForm from '@/components/invitation/InvitationForm';
import { DateFormat, WEDDING_DATE, WEDDING_EVENTS } from '@/constants/date.constant';
import '@leenguyen/react-flip-clock-countdown/dist/index.css';
import { Card, Col, Row } from 'antd';
import { Great_Vibes } from 'next/font/google';
import Image from 'next/image';
import 'react-image-gallery/styles/css/image-gallery.css';

const greatVibes = Great_Vibes({
  weight: '400',
  subsets: ['latin'],
});

export default function Home() {
  return (
    <div className="w-screen h-screen bg-[#F8F5F0]">
      <div className="h-1/2 relative bg-black text-white shadow-lg">
        <div className="h-full bg-[url(/header_background.webp)] bg-cover bg-center opacity-35" />
        <div className="absolute top-0 bottom-0 left-0 right-0 flex flex-col justify-center items-center">
          <div className="flex flex-col items-center lg:flex-row mb-4 md:mb-8">
            <span className={`${greatVibes.className} text-6xl md:text-7xl lg:text-8xl`}>
              Phú Tùng
            </span>
            <span
              className={`${greatVibes.className} text-6xl md:text-7xl lg:text-8xl whitespace-pre`}
            >{` & `}</span>
            <span className={`${greatVibes.className} text-6xl md:text-7xl lg:text-8xl`}>
              Quỳnh Anh
            </span>
          </div>
          <span className="text-3xl md:text-4xl lg:text-5xl">
            {WEDDING_DATE.format(DateFormat.MMM_DD_YYYY)}
          </span>
          <div className="w-40 md:w-50 lg:w-60 h-10 md:h-20 relative">
            <Image src="/title_decoration.svg" alt="Title Decoration" fill />
          </div>
        </div>
      </div>
      <div className="flex flex-col items-center">
        <span className={`${greatVibes.className} text-6xl md:text-7xl lg:text-8xl my-8`}>
          Events
        </span>
        <CountdownClock to={WEDDING_DATE.toISOString()} />
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 p-8">
          {WEDDING_EVENTS.map((event) => (
            <Card key={event.id} className="max-w-144 text-xl shadow-lg">
              <div className="flex flex-col gap-4">
                <span className="text-3xl text-center">{event.title}</span>
                <div className="text-justify">
                  <span className="font-bold">Thời gian: </span>
                  <span>{event.time}</span>
                </div>
                <div className="text-justify">
                  <span className="font-bold">Địa điểm: </span>
                  <span>{event.address}</span>
                </div>
                <Row gutter={16}>
                  <Col span={12}>
                    <AddToCalendarButton
                      eventName={event.title}
                      dateTime={event.dateTime}
                      address={event.address}
                    />
                  </Col>
                  <Col span={12}>
                    <ViewMapButton address={event.address} />
                  </Col>
                </Row>
              </div>
            </Card>
          ))}
        </div>
      </div>
      <div className="flex flex-col items-center">
        <span
          className={`${greatVibes.className} text-6xl md:text-7xl lg:text-8xl text-center my-8`}
        >
          Invitation
        </span>
        <div className="italic max-w-144 lg:max-w-full text-xl text-center px-8">
          Sự hiện diện và tình cảm của mọi người là món quà vô giá, góp phần làm cho ngày cưới của
          chúng tôi thêm trọn vẹn và ý nghĩa.
        </div>
        <div className="w-full p-8">
          <Card className="w-full max-w-144 text-xl shadow-lg m-auto">
            <div>
              <div className="flex flex-col items-center text-center mt-4 mb-8">
                <span className="text-2xl font-bold tracking-wide">
                  Hãy cho chúng tôi biết là bạn sẽ tham dự
                </span>
                <span>Vui lòng xác nhận tham gia trước ngày 18/07/2025</span>
              </div>
              <InvitationForm />
            </div>
          </Card>
        </div>
      </div>
      <div className="flex flex-col items-center">
        <span
          className={`${greatVibes.className} text-6xl md:text-7xl lg:text-8xl text-center my-8`}
        >
          Gratitude
        </span>
        <div className="relative w-72 md:w-144 md:text-justify">
          <Image
            src="/corner_decoration.svg"
            alt="Title Decoration"
            width={100}
            height={100}
            className="absolute right-0 top-0 -rotate-90"
          />
          <Image
            src="/corner_decoration.svg"
            alt="Title Decoration"
            width={100}
            height={100}
            className="absolute left-0 bottom-0 rotate-90"
          />
          <div className="text-xl p-15">
            Phú Tùng và Quỳnh Anh xin gửi lời cảm ơn chân thành nhất đến tất cả quý vị khách quý đã
            dành thời gian đến chung vui và gửi gắm những lời chúc tốt đẹp trong ngày trọng đại của
            chúng tôi.
            <br />
            Xin chân thành cảm ơn!
          </div>
        </div>
      </div>
      <div className="h-40 relative text-center mt-4 mb-8">
        <Image src="/logo.svg" alt="Logo" fill />
      </div>
      <div className="flex flex-col items-center">
        <span className={`${greatVibes.className} text-6xl md:text-7xl lg:text-8xl my-8`}>
          Blessing
        </span>
        <div className="italic max-w-144 lg:max-w-full text-xl text-center mb-8 px-8">
          Yêu thương đong đầy, xin gửi về đây.
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 p-8">
          <div className="relative">
            <Image
              src="/blessing_container.svg"
              alt="Groom blessing"
              width={0}
              height={0}
              className="w-80 h-80 md:w-90 md:h-90 lg:w-100 lg:h-100"
            />
            <div className="absolute top-1/7 left-7/20 flex flex-col items-center">
              <span className="text-sm md:text-base lg:text-xl mb-6">Mừng cưới chú rể</span>
              <Image
                src="/groom_blessing.svg"
                alt="Groom blessing"
                width={0}
                height={0}
                className="w-30 h-30 md:w-33 md:h-33 lg:w-37.5 lg:h-37.5"
              />
            </div>
          </div>
          <div className="relative">
            <Image
              src="/blessing_container.svg"
              alt="Groom blessing"
              width={0}
              height={0}
              className="w-80 h-80 md:w-90 md:h-90 lg:w-100 lg:h-100 transform-[scaleX(-1)]"
            />
            <div className="absolute top-1/7 right-7/20 flex flex-col items-center">
              <span className="text-sm md:text-base lg:text-xl mb-6">Mừng cưới cô dâu</span>
              <Image
                src="/bribe_blessing.svg"
                alt="Bribe blessing"
                width={0}
                height={0}
                className="w-30 h-30 md:w-33 md:h-33 lg:w-37.5 lg:h-37.5"
              />
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-col items-center">
        <span
          className={`${greatVibes.className} text-6xl md:text-7xl lg:text-8xl text-center my-8`}
        >
          About us
        </span>
        <div className="italic max-w-144 lg:max-w-full text-xl text-center mb-8 px-8">
          Được ai đó yêu sâu sắc sẽ mang lại cho bạn sức mạnh, trong khi yêu ai đó sâu sắc sẽ cho
          bạn dũng khí.
        </div>
        <ImagesPreview />
      </div>
      <Gallery />
    </div>
  );
}
