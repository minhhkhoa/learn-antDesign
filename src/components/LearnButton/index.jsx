import { Button } from "antd";
import { VerticalAlignBottomOutlined } from "@ant-design/icons"
import { useState } from "react";

function LearnButton() {

  const [loading, setLoading] = useState(false);

  const handleClick = () => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 3000)
  }
  return (
    <>
      <Button
        type="dashed"
        loading={loading}
        onClick={handleClick}
        disabled={loading}
        href="https://github.com/minhhkhoa/learn-antDesign"
        size="large"
      >
        Click me!
      </Button>
      <Button icon={<VerticalAlignBottomOutlined />}>
        Button
      </Button>
    </>
  )
}

export default LearnButton;