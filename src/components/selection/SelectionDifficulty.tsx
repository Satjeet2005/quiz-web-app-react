import style from "./SelectionDifficulty.module.css";
import { useState } from "react";

interface Props {
  selectedDifficulty: number;
  handleDifficultyChange: (id: number) => void;
}

const invoiceStatuses = [
  {
    id: 1,
    value: "any",
    label: "Any",
    description: "All difficulty levels",
    icon: (
      <svg
        viewBox="-0.31749999500000003 -0.6350000200000001 6.98499989 8.57250027"
        version="1.1"
        x="0px"
        y="0px"
        className={style.fill}
      >
        <g transform="translate(0,-290.64999)">
          <path
            style={{
              color: "#000000",
              fontStyle: "normal",
              fontVariant: "normal",
              fontWeight: "normal",
              fontStretch: "normal",
              fontSize: "medium",
              lineHeight: "normal",
              fontFamily: "sans-serif",
              textIndent: "0",
              textAlign: "start",
              textDecoration: "none",
              letterSpacing: "normal",
              wordSpacing: "normal",
              textTransform: "none",
              writingMode: "horizontal-tb",
              direction: "ltr",
              textOrientation: "mixed",
              dominantBaseline: "auto",
              baselineShift: "baseline",
              textAnchor: "start",
              whiteSpace: "normal",
              clipRule: "nonzero",
              display: "inline",
              overflow: "visible",
              visibility: "visible",
              opacity: 1,
              isolation: "auto",
              mixBlendMode: "normal",
              colorInterpolation: "sRGB",
              fillOpacity: 1,
              fillRule: "nonzero",
              stroke: "none",
              strokeWidth: 0.5291667,
              strokeLinecap: "round",
              strokeLinejoin: "round",
              strokeMiterlimit: 4,
              strokeDasharray: "none",
              strokeDashoffset: 0,
              strokeOpacity: 1,
              colorRendering: "auto",
              imageRendering: "auto",
              shapeRendering: "auto",
              textRendering: "auto",
            }}
            d="m 1.8469231,291.17654 a 0.26460982,0.26460982 0 0 0 -0.181901,0.0801 l -1.05833341,1.05834 a 0.26460982,0.26460982 0 0 0 0,0.37517 l 1.05833341,1.05678 a 0.26460982,0.26460982 0 1 0 0.3731022,-0.3731 l -0.6061631,-0.60772 h 4.1237801 a 0.2646485,0.2646485 0 1 0 0,-0.52916 H 1.4340276 l 0.6040967,-0.60565 a 0.26460982,0.26460982 0 0 0 -0.1912012,-0.45476 z m 2.6484158,2.64532 a 0.26460982,0.26460982 0 0 0 -0.027387,10e-4 0.26460982,0.26460982 0 0 0 -0.1560618,0.4532 l 0.6071975,0.60717 H 0.79427299 a 0.26460982,0.26460982 0 0 0 -0.027387,0 0.26519877,0.26519877 0 0 0 0.027387,0.52969 H 4.9165027 l -0.6046126,0.60513 a 0.26460982,0.26460982 0 1 0 0.3731021,0.37517 l 1.0583334,-1.05885 a 0.26460982,0.26460982 0 0 0 0,-0.3731 l -1.0583334,-1.05828 a 0.26460982,0.26460982 0 0 0 -0.1896533,-0.0811 z"
          />
        </g>
      </svg>
    ),
  },
  {
    id: 2,
    value: "easy",
    label: "Easy",
    description: "Perfect for beginners",

    icon: (
      <svg
        version="1.1"
        x="0px"
        y="0px"
        viewBox="0 0 100 125"
        style={{ marginTop: "4px" }}
      >
        <g>
          <g fill="none" strokeWidth="8px">
            <path d="M28,88.3c-0.9,0-1.8-0.3-2.6-0.9c-1.6-1.2-2.2-3.1-1.6-5l6.9-21.2c0.3-0.9,0-2-0.8-2.5l-18-13.1c-1.6-1.2-2.2-3.1-1.6-5    c0.6-1.9,2.3-3.1,4.2-3.1h22.3c1,0,1.9-0.6,2.2-1.6l6.9-21.2c0.6-1.9,2.3-3.1,4.2-3.1s3.6,1.2,4.2,3.1L61.1,36    c0.3,0.9,1.2,1.6,2.2,1.6h22.3c2,0,3.6,1.2,4.2,3.1c0.6,1.9,0,3.8-1.6,5l-18,13.1c-0.8,0.6-1.1,1.6-0.8,2.5l6.9,21.2    c0.6,1.9,0,3.8-1.6,5c-1.6,1.2-3.6,1.2-5.2,0l-18-13.1c-0.8-0.6-1.9-0.6-2.7,0l-18,13.1C29.8,88,28.9,88.3,28,88.3z" />
          </g>
        </g>
      </svg>
    ),
  },
  {
    id: 3,
    value: "medium",
    label: "Medium",
    description: "Moderate challenge",

    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 100 125"
        fill="none"
        x="0px"
        y="0px"
        style={{ marginTop: "3px" }}
      >
        <path
          strokeWidth="8px"
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M51.8236 5.21171C55.4885 6.07066 58.0836 9.37493 58.0836 13.1825V35.3753H70.9164C73.7057 35.3753 76.2979 36.8307 77.7745 39.2259C79.251 41.621 79.4033 44.6174 78.1772 47.1532L57.2608 90.4138C55.6073 93.8338 51.8413 95.6472 48.1764 94.7883C44.5115 93.9293 41.9164 90.6251 41.9164 86.8175V64.6247H29.0836C26.2943 64.6247 23.7021 63.1693 22.2255 60.7741C20.749 58.379 20.5967 55.3826 21.8228 52.8468L42.7392 9.5862C44.3927 6.1662 48.1587 4.35276 51.8236 5.21171Z"
        />
      </svg>
    ),
  },
  {
    id: 4,
    value: "hard",
    label: "Hard",
    description: "For experienced users",

    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 32 42"
        style={{ marginTop: "5px" }}
      >
        <path
          fill="none"
          strokeWidth="3px"
          d="M21.778 11.642a13.429 13.429 0 0 1-1.095 4.558 1.89 1.89 0 0 1-2.486.976 1.89 1.89 0 0 1-.977-2.485 9.693 9.693 0 0 0 .811-3.897c0-3.863-2.253-7.208-5.514-8.794 2.254 9.97-6.168 10.002-6.168 18.35 0 5.33 4.32 9.65 9.649 9.65 5.331 0 9.651-4.32 9.651-9.65.001-3.562-2.167-6.751-3.871-8.708z"
        />
      </svg>
    ),
  },
];

const customColorClass: { [key: string]: string } = {
  any: "purple",
  easy: "green",
  medium: "yellow",
  hard: "red",
};


const Selection = ({ selectedDifficulty, handleDifficultyChange }: Props) => {
  const [isOpen, setIsOpen] = useState(false);

  const selectedStatus = invoiceStatuses.find(
    (status) => status.id === selectedDifficulty
  );

  const handleSelect = (id: number) => {
    handleDifficultyChange(id);
    setIsOpen(false);
  };

  

  return (
    <div className={style.difficultyContainer}>
      <p className={style.heading}>Select Difficulty Level</p>
      <div className={style.dropdownContainer}>
        <button
          className={[style.dropdownTrigger,style[customColorClass[selectedStatus?.value as string] + "Border"]].join(" ")}
          onClick={() => setIsOpen(!isOpen)}
          aria-expanded={isOpen}
          aria-haspopup="listbox"
        >
          <div className={style.triggerContent}>
            <div
              className={[
                style.triggerIcon,
                style[customColorClass[selectedStatus?.value as string]],
              ].join(" ")}
            >
              {selectedStatus?.icon}
            </div>
            <div className={style.triggerInfo}>
              <span className={style.triggerLabel}>{selectedStatus?.label}</span>
              <span className={style.triggerDescription}>{selectedStatus?.description}</span>
            </div>
          </div>
          <svg
            className={
              isOpen
                ? style.chevron
                : [style.chevron, style.chevronOpen].join(" ")
            }
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
          >
            <polyline points="6,9 12,15 18,9" />
          </svg>
        </button>

        {isOpen && (
          <>
            <div className={style.overlay} onClick={() => setIsOpen(false)} />
            <div className={style.dropdownMenu} role="listbox">
              {invoiceStatuses.map((status) => (
                <button key={status.value} className={selectedStatus?.id === status.id ? [ style.dropdownItem,style[customColorClass[selectedStatus.value]]].join(" ") : style.dropdownItem } onClick={() => handleSelect(status.id)} role="option" aria-selected={selectedStatus?.id === status.id}>

                  <div className={selectedStatus?.id === status.id ? [style.itemIcon,style[customColorClass[selectedStatus.value]]].join(" ") : style.itemIcon}>
                    {status.icon}
                  </div>

                  <div className={style.itemContent}>
                    <span className={style.itemLabel}>{status.label}</span>
                    <span className={style.itemDescription}>
                      {status.description}
                    </span>
                  </div>

                  <span className={selectedStatus?.id === status.id ? [style.selectedIndicator,style[customColorClass[selectedStatus.value]]].join(" ") : style.selectedIndicator}></span>

                </button>
              ))}
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default Selection;
