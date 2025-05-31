import React, { useState, useEffect } from "react";

const TextFlipper = ({
    textSequence = [], // array of strings
    interval = 500,    // delay between flips
    className = "",     // optional CSS classes
    tagName = "p" // HTML tag to render the text
}) => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [displayedText, setDisplayedText] = useState("");
    const Tag = tagName;

    useEffect(() => {
        if (!textSequence.length) return;

        let index = 0;
        const flipInterval = setInterval(() => {
            if (index < textSequence.length) {
                setDisplayedText(textSequence[index]);
                setCurrentIndex(index);
                index += 1;
            } else {
                clearInterval(flipInterval);
            }
        }, interval);

        return () => clearInterval(flipInterval);
    }, [textSequence, interval]);

    return (
            <Tag key={currentIndex} className={`text-flipper ${className}`} data-text={displayedText}>
                {displayedText}
            </Tag>
    );
};

export default TextFlipper;

