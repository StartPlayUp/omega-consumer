import { Carousel } from 'antd';
const HomePageMainDoorContainer = () => {
  const linkArray = [
    "https://images.unsplash.com/photo-1557804506-669a67965ba0?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1267&q=80",
    "https://images.unsplash.com/photo-1557804506-669a67965ba0?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1267&q=80",
    "https://images.unsplash.com/photo-1557804506-669a67965ba0?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1267&q=80",
  ]

  const contentStyle = {
    height: '24rem',
    color: '#fff',
    lineHeight: '160px',
    textAlign: 'center',
    background: '#364d79',
  };

  const imageStyle = {
    height: '24rem',
    margin: "0 auto",
  }

  return (
    <div className="w-full h-96 overflow-hidden">
      <Carousel autoplay>
        {linkArray.map((i, idx) => (
          <div key={idx} className="w-screen h-full flex justify-center" >
            <div style={contentStyle}>
              {console.log("test : ", idx, i)}
              <img style={imageStyle} src={i} />
            </div>
          </div>
        ))}
      </Carousel>
    </div>
  );
};

export default HomePageMainDoorContainer;
