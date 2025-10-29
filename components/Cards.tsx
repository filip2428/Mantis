import React from "react";
import Image from "next/image";
import { Card } from "antd";

const { Meta } = Card;

const App: React.FC = () => (
  <Card
    hoverable
    style={{ width: 240 }}
    cover={
      <Image
        draggable={false}
        alt="example"
        src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png"
        width={240}
        height={240}
        className="h-60 w-full object-cover"
      />
    }
  >
    <Meta title="Europe Street beat" description="www.instagram.com" />
  </Card>
);

export default App;
