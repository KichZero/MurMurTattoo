import { type ReactNode, useMemo } from "react";
import "./CircularText.css";

type CircularTextProps = {
  topText?: string;
  bottomText?: string;
  className?: string;
  radius?: number;
  fontSize?: number;
  textDy?: string;
  children?: ReactNode;
};

// Иконка кошки
type IconProps = {
  size: number;
};

const CatIcon = ({ size }: IconProps) => (
  <svg
    fill="#000000"
    stroke="#088BBE"
    strokeWidth="2"
    version="1.1"
    id="Capa_1"
    xmlns="http://www.w3.org/2000/svg"
    xmlnsXlink="http://www.w3.org/1999/xlink"
    viewBox="0 0 121.6 121.6"
    xmlSpace="preserve"
    width={size}
    height={size}
    className="circular-icon circular-icon-cat"
  >
    <g>
      <path d="M30,108.785c9,4.601,19.1,7,29.2,7.2c0.5,0,1.1,0,1.6,0c10.2,0,20.3-2.2,29.5-6.6c8.399-4,16-10,21.601-17.5 c6.399-8.601,9.699-18.9,9.699-29.601c0-6.8,0-13.5,0-20.3c0-7.4,0-14.7,0-22.1c0-2.6,0-5.2,0-7.7c0-4.7-4.699-7.8-9-6.1l-22.8,9.5 c-1.5,0.6-3.2,0.7-4.7,0.1c-7.4-2.9-15.6-4.4-24.3-4.4s-16.9,1.6-24.3,4.4c-1.5,0.6-3.2,0.5-4.7-0.1L9,6.385c-4.3-1.8-9,1.4-9,6.1 c0,3.5,0,7.1,0,10.6c0,7.3,0,14.6,0,22c0,6.2,0,12.3,0,18.5c0,9.9,3.2,19.5,8.9,27.5C14.3,98.585,21.7,104.585,30,108.785z M83,62.485c5.5,0,10,4.5,10,10s-4.5,10-10,10s-10-4.5-10-10C73,66.886,77.5,62.485,83,62.485z M38.6,62.485c5.5,0,10,4.5,10,10 s-4.5,10-10,10s-10-4.5-10-10C28.6,66.886,33.1,62.485,38.6,62.485z"></path>
    </g>
  </svg>
);

// Иконка мыши
const BatIcon = ({ size }: IconProps) => (
  <svg
    fill="#000000"
    stroke="#088BBE"
    strokeWidth="2"
    version="1.1"
    id="Capa_1"
    xmlns="http://www.w3.org/2000/svg"
    xmlnsXlink="http://www.w3.org/1999/xlink"
    viewBox="0 0 168.116 168.115"
    xmlSpace="preserve"
    width={size}
    height={size}
    className="circular-icon circular-icon-bat"
  >
    <g>
      <path d="M89.795,60.477c0,0-1.229,5.39-6.419,5.39c-5.182,0-5.673-5.39-5.673-5.39s-3.447,8.821-5.756,8.821 c-2.311,0-32.948-14.889-32.948-14.889s-4.662-1.984-2.437-6.063C33.316,49.784,9.957,57.215,0,82.708 c3.411-2.475,6.936-4.278,10.085-2.694c2.533,1.278,15.472,9.437,15.472,9.437s2.012,1.17,1.497,6.735 c0.901-0.781,6.723-5.59,9.929-4.044c3.21,1.549,17.481,10.107,17.481,10.107s1.02,0.65,0.955,6.067 c1.765-2.265,5.657-6.128,8.465-4.716c2.706,1.438,12.216,6.572,16.142,8.755c3.929,2.188,4.418,7.414,4.418,7.414 s0.105-5.215,4.033-7.414c2.479-1.258,15.076-8.088,15.076-8.088s3.194-1.159,9.38,4.729c-0.089-2.222-1.041-4.958,0.71-6.741 c1.746-1.773,16.202-9.75,16.202-9.75s2.835-1.852,9.922,3.686c0.12-1.854,0.043-4.552,2.124-6.067 c2.078-1.516,16.809-9.437,16.809-9.437s4.771-2.503,9.417,4.046c-0.377-3.395-7.895-23.534-35.951-35.036 c-0.498,1.562,1.998,2.626-3.721,5.389c-4.755,2.299-32.279,14.148-32.279,14.148S92.953,70.501,89.795,60.477z"></path>
    </g>
  </svg>
);

export default function CircularText({
  topText = "TATTOO",
  bottomText = "STUDIO",
  className = "",
  radius = 115,
  fontSize = 46,
  textDy = "0.35em",
  children,
}: CircularTextProps) {
  const { size, circleId, circlePath, iconPositions } = useMemo(() => {
    const s = (radius + fontSize) * 2 + 120; // Дополнительное место для иконок
    const c = s / 2;

    // Правильный путь для полной окружности
    // Формат: M cx,cy m-r,0 a r,r 0 1,1 2r,0 a r,r 0 1,1 -2r,0
    const path = `M ${c},${c} m -${radius},0 a ${radius},${radius} 0 1,1 ${
      radius * 2
    },0 a ${radius},${radius} 0 1,1 -${radius * 2},0`;

    const circleIdValue =
      `text-circle-${topText}-${bottomText}-${radius}-${fontSize}`.replace(
        /[^a-zA-Z0-9-]/g,
        ""
      );

    // Иконки на круге: мышка слева (180°), кошка справа (0°/360°)
    const batIconSize = 50; // Мышь больше
    const catIconSize = 42; // Кот меньше
    const iconOffset = 30; // Отступ от текста (уменьшен для более близкого расположения)

    return {
      size: s,
      circleId: circleIdValue,
      circlePath: path,
      iconPositions: {
        bat: {
          x: c + (radius + iconOffset) * Math.cos(Math.PI), // 180° - слева
          y: c + (radius + iconOffset) * Math.sin(Math.PI),
          size: batIconSize,
        },
        cat: {
          x: c + (radius + iconOffset) * Math.cos(0), // 0° - справа
          y: c + (radius + iconOffset) * Math.sin(0),
          size: catIconSize,
        },
      },
    };
  }, [radius, fontSize, topText, bottomText]);

  return (
    <div className={`circular-text-container ${className}`}>
      <svg
        className="circular-text-svg rotating"
        viewBox={`0 0 ${size} ${size}`}
        width={size}
        height={size}
      >
        <defs>
          <path id={circleId} d={circlePath} fill="none" />
        </defs>
        {/* Верхний текст - TATTOO (сверху, 25% от начала пути) */}
        <text
          fill="#FF0C04"
          fontSize={fontSize}
          fontFamily="Reggae One, sans-serif"
          fontWeight="400"
          className="circular-text-neon"
        >
          <textPath
            href={`#${circleId}`}
            startOffset="25%"
            fill="#FF0C04"
            dy={textDy}
            textAnchor="middle"
          >
            {topText}
          </textPath>
        </text>
        {/* Нижний текст - STUDIO (снизу, 75% от начала пути) */}
        <text
          fill="#FF0C04"
          fontSize={fontSize}
          fontFamily="Reggae One, sans-serif"
          fontWeight="400"
          className="circular-text-neon"
        >
          <textPath
            href={`#${circleId}`}
            startOffset="75%"
            fill="#FF0C04"
            dy={textDy}
            textAnchor="middle"
          >
            {bottomText}
          </textPath>
        </text>
        {/* Иконка мыши слева (180°) */}
        <g
          transform={`translate(${
            iconPositions.bat.x - iconPositions.bat.size / 2
          }, ${iconPositions.bat.y - iconPositions.bat.size / 2})`}
          className="circular-icon-wrapper"
        >
          <BatIcon size={iconPositions.bat.size} />
        </g>
        {/* Иконка кошки справа (0°) */}
        <g
          transform={`translate(${
            iconPositions.cat.x - iconPositions.cat.size / 2
          }, ${iconPositions.cat.y - iconPositions.cat.size / 2})`}
          className="circular-icon-wrapper"
        >
          <CatIcon size={iconPositions.cat.size} />
        </g>
      </svg>
      {children && <div className="circular-text-center">{children}</div>}
    </div>
  );
}
