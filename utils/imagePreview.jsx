import React from "react";
import { PhotoSlider } from "react-photo-view";
import "react-photo-view/dist/react-photo-view.css";
import { useLocation, useNavigate } from "react-router-dom";

const ImagePreview = () => {

    const navigate = useNavigate();
    const location = useLocation();
    const images = location.state;

    const [visible, setVisible] = React.useState(false);
    const [index, setIndex] = React.useState(0);

    React.useEffect(() => {
        setVisible(true);
    }, []);

    return (
        <>
        <PhotoSlider
            images={images.map((src) => ({
            src,
            key: src,
            }))}
            visible={visible}
            onClose={() => {setVisible(false); navigate(-1)}}
            index={index}
            onIndexChange={setIndex}
        />
        </>
    );
};

export default ImagePreview;
