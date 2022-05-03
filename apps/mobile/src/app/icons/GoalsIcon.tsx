import * as React from 'react';
import Svg, {
  SvgProps,
  Circle,
  Path,
  Defs,
  LinearGradient,
  Stop,
} from 'react-native-svg';

const GoalsIcon = (props: SvgProps) => (
  <Svg
    width={props.width || 24}
    height={props.height || 24}
    viewBox={`0 0 ${props.width} ${props.height}`}
    fill="none"
    {...props}
  >
    <Circle cx={25} cy={25} r={25} fill="url(#a)" />
    <Path
      d="M48.689 5.638c-.368 0-.714.021-1.082.021-.801.022-1.623.022-2.424.043 0-.675 0-1.35.021-2.025v-1.37c0-1.35-1.947-1.604-2.856-.992-.65.443-1.19 1.118-1.753 1.666-.974.97-1.948 1.92-2.944 2.89-.281.274-.54.548-.822.8-.303-.189-.628-.379-.953-.548-7.098-3.838-16.058-3.48-22.832.844-6.731 4.302-10.605 12.042-9.978 19.867.628 7.761 5.627 14.784 12.856 18.011 7.38 3.29 16.254 2.383 22.703-2.468 5.497-4.112 8.744-10.545 8.765-17.315-.021-3.986-1.19-7.845-3.246-11.177 1.19-1.16 2.38-2.32 3.55-3.501.562-.57 1.146-1.118 1.71-1.688.389-.38.54-.822.583-1.35.109-.695-.497-1.729-1.298-1.708Zm-5.194-2.657c.065 0 .043 0 0 0Zm0 0h-.044.044ZM29.08 25.105c-.022 1.687-1.126 3.142-2.749 3.648-1.645.506-3.463-.19-4.393-1.56-.953-1.414-.78-3.333.303-4.556 1.147-1.287 3.073-1.666 4.566-.97.13.063.282.126.39.21-.91.908-1.84 1.794-2.749 2.7-.952.928.52 2.362 1.472 1.434.909-.885 1.796-1.771 2.705-2.657a3.77 3.77 0 0 1 .455 1.75Zm-.39-4.682a4.763 4.763 0 0 0-.65-.401c-1.904-1.034-4.328-.928-6.146.253-1.796 1.16-2.857 3.248-2.662 5.357.195 2.088 1.515 3.986 3.485 4.83 1.861.8 4.025.653 5.735-.443 1.688-1.076 2.662-2.932 2.684-4.893a6.07 6.07 0 0 0-1.018-3.227c1.45-1.413 2.879-2.826 4.329-4.24 1.775 2.089 2.727 4.746 2.749 7.467 0 1.813-.433 3.648-1.256 5.251-.41.78-.952 1.624-1.45 2.215a9.974 9.974 0 0 1-.93.97c-.303.274-.758.696-.996.864-3.051 2.32-6.969 3.037-10.648 2.067-3.485-.928-6.493-3.522-7.856-6.728a13.317 13.317 0 0 1-.801-2.741 9.653 9.653 0 0 1-.13-1.245 12.19 12.19 0 0 1 .022-1.54c.108-1.75.714-3.542 1.645-5.082 1.84-3.058 5.194-5.21 8.743-5.652 2.013-.253 3.83-.042 5.714.612.8.274 1.623.696 2.424 1.18.476.296.887.591 1.298.95-1.406 1.35-2.835 2.762-4.285 4.176Zm8.636-11.39.043-.041c-.065.105-.108.105-.043.042Zm4.89 26.575c-1.947 3.058-4.76 5.504-8.094 7.15-6.774 3.331-15.366 2.445-21.296-2.11a21.026 21.026 0 0 1-3.83-3.86c-1.104-1.476-2.035-3.142-2.641-4.766a19.354 19.354 0 0 1-.8-11.114c1.579-7.234 7.38-13.013 14.673-14.869 3.744-.949 7.705-.78 11.384.422a19.827 19.827 0 0 1 3.874 1.75c-.087.275-.087.59-.108.865-.13 1.56-.022 3.164.065 4.745-.325.317-.65.633-.953.95l-.043-.043c-3.16-2.678-7.337-3.775-11.47-3.205-3.961.569-7.51 2.952-9.675 6.2-2.229 3.353-2.77 7.677-1.58 11.494 1.169 3.712 4.004 6.855 7.597 8.457 3.83 1.709 8.202 1.624 12.011-.126 4.848-2.236 7.943-7.234 7.965-12.443-.022-3.27-1.234-6.433-3.355-8.9l1.04-1.013c.822.042 1.644.085 2.466.106.693.02 1.364.02 2.056 0 .347-.021.715-.021 1.061-.127a19.77 19.77 0 0 1 2.77 9.934 19.627 19.627 0 0 1-3.116 10.503Zm-.194-22.398c.108-.043.108-.043.086-.021 0 0-.021 0-.021.02-.022-.02-.043-.02-.065 0 0-.02 0-.02 0 0ZM47.217 8l-2.142 2.11c-1.06 1.033-2.1 2.066-3.16 3.1-.217.02-.433.02-.65.042-.67.021-1.341 0-2.012-.021l-1.775-.063-.065-1.92a20.17 20.17 0 0 1 .022-1.982c0-.127.021-.232.021-.359 1.559-1.518 3.095-3.037 4.653-4.576.325-.338.672-.654.996-.991 0 1.117-.021 2.235-.021 3.374 0 .548.476 1.012 1.038 1.012 1.147-.02 2.273-.042 3.42-.063a4.996 4.996 0 0 1-.325.337Z"
      fill="url(#b)"
    />
    <Path
      d="M42.023 13.21c.108-.043.108-.043.086-.021 0 0-.021 0-.021.02-.022-.02-.043-.02-.065 0Zm0 0c0-.021 0-.021 0 0Zm6.666-7.572c-.368 0-.714.021-1.082.021-.801.022-1.623.022-2.424.043 0-.675 0-1.35.021-2.025v-1.37c0-1.35-1.947-1.604-2.856-.992-.65.443-1.19 1.118-1.753 1.666-.974.97-1.948 1.92-2.944 2.89-.281.274-.54.548-.822.8-.303-.189-.628-.379-.953-.548-7.098-3.838-16.058-3.48-22.832.844-6.731 4.302-10.605 12.042-9.978 19.867.628 7.761 5.627 14.784 12.856 18.011 7.38 3.29 16.254 2.383 22.703-2.468 5.497-4.112 8.744-10.545 8.765-17.315-.021-3.986-1.19-7.845-3.246-11.177 1.19-1.16 2.38-2.32 3.55-3.501.562-.57 1.146-1.118 1.71-1.688.389-.38.54-.822.583-1.35.109-.695-.497-1.729-1.298-1.708Zm-5.194-2.657c.065 0 .043 0 0 0Zm0 0h-.044.044ZM29.08 25.105c-.022 1.687-1.126 3.142-2.749 3.648-1.645.506-3.463-.19-4.393-1.56-.953-1.414-.78-3.333.303-4.556 1.147-1.287 3.073-1.666 4.566-.97.13.063.282.126.39.21-.91.908-1.84 1.794-2.749 2.7-.952.928.52 2.362 1.472 1.434.909-.885 1.796-1.771 2.705-2.657a3.77 3.77 0 0 1 .455 1.75Zm-.39-4.682a4.763 4.763 0 0 0-.65-.401c-1.904-1.034-4.328-.928-6.146.253-1.796 1.16-2.857 3.248-2.662 5.357.195 2.088 1.515 3.986 3.485 4.83 1.861.8 4.025.653 5.735-.443 1.688-1.076 2.662-2.932 2.684-4.893a6.07 6.07 0 0 0-1.018-3.227c1.45-1.413 2.879-2.826 4.329-4.24 1.775 2.089 2.727 4.746 2.749 7.467 0 1.813-.433 3.648-1.256 5.251-.41.78-.952 1.624-1.45 2.215a9.974 9.974 0 0 1-.93.97c-.303.274-.758.696-.996.864-3.051 2.32-6.969 3.037-10.648 2.067-3.485-.928-6.493-3.522-7.856-6.728a13.317 13.317 0 0 1-.801-2.741 9.653 9.653 0 0 1-.13-1.245 12.19 12.19 0 0 1 .022-1.54c.108-1.75.714-3.542 1.645-5.082 1.84-3.058 5.194-5.21 8.743-5.652 2.013-.253 3.83-.042 5.714.612.8.274 1.623.696 2.424 1.18.476.296.887.591 1.298.95-1.406 1.35-2.835 2.762-4.285 4.176Zm8.636-11.39.043-.041c-.065.105-.108.105-.043.042Zm4.89 26.575c-1.947 3.058-4.76 5.504-8.094 7.15-6.774 3.331-15.366 2.445-21.296-2.11a21.026 21.026 0 0 1-3.83-3.86c-1.104-1.476-2.035-3.142-2.641-4.766a19.354 19.354 0 0 1-.8-11.114c1.579-7.234 7.38-13.013 14.673-14.869 3.744-.949 7.705-.78 11.384.422a19.827 19.827 0 0 1 3.874 1.75c-.087.275-.087.59-.108.865-.13 1.56-.022 3.164.065 4.745-.325.317-.65.633-.953.95l-.043-.043c-3.16-2.678-7.337-3.775-11.47-3.205-3.961.569-7.51 2.952-9.675 6.2-2.229 3.353-2.77 7.677-1.58 11.494 1.169 3.712 4.004 6.855 7.597 8.457 3.83 1.709 8.202 1.624 12.011-.126 4.848-2.236 7.943-7.234 7.965-12.443-.022-3.27-1.234-6.433-3.355-8.9l1.04-1.013c.822.042 1.644.085 2.466.106.693.02 1.364.02 2.056 0 .347-.021.715-.021 1.061-.127a19.77 19.77 0 0 1 2.77 9.934 19.627 19.627 0 0 1-3.116 10.503Zm5-27.608-2.142 2.11c-1.06 1.033-2.1 2.066-3.16 3.1-.217.02-.433.02-.65.042-.67.021-1.341 0-2.012-.021l-1.775-.063-.065-1.92a20.17 20.17 0 0 1 .022-1.982c0-.127.021-.232.021-.359 1.559-1.518 3.095-3.037 4.653-4.576.325-.338.672-.654.996-.991 0 1.117-.021 2.235-.021 3.374 0 .548.476 1.012 1.038 1.012 1.147-.02 2.273-.042 3.42-.063a4.996 4.996 0 0 1-.325.337Z"
      stroke="url(#c)"
      strokeWidth={0.5}
    />
    <Path
      d="m47.217 8-2.143 2.11c-1.06 1.033-2.1 2.066-3.16 3.1-.216.02-.433.02-.649.042-.67.02-1.342 0-2.013-.021l-1.774-.064-.065-1.919a20.171 20.171 0 0 1 .021-1.982c0-.127.022-.232.022-.359 1.558-1.518 3.095-3.037 4.653-4.576.325-.338.671-.654.996-.992 0 1.118-.022 2.236-.022 3.375 0 .548.476 1.012 1.039 1.012l3.42-.063a4.998 4.998 0 0 1-.325.337Z"
      fill="#fff"
      stroke="url(#d)"
      strokeWidth={0.5}
    />
    <Path
      d="M29.08 25.105c-.02 1.687-1.125 3.142-2.748 3.648-1.645.506-3.463-.19-4.393-1.56-.953-1.414-.78-3.333.303-4.556 1.147-1.286 3.073-1.666 4.566-.97.13.063.282.127.39.21-.91.908-1.84 1.794-2.749 2.7-.952.928.52 2.362 1.472 1.434.909-.885 1.796-1.771 2.705-2.657a3.77 3.77 0 0 1 .455 1.75Z"
      fill="#fff"
      stroke="url(#e)"
      strokeWidth={0.5}
    />
    <Path
      d="M28.69 20.422a4.783 4.783 0 0 0-.649-.4c-1.904-1.034-4.328-.928-6.146.253-1.797 1.16-2.857 3.248-2.662 5.357.194 2.088 1.515 3.986 3.484 4.83 1.861.8 4.026.653 5.735-.444 1.689-1.075 2.662-2.931 2.684-4.893A6.069 6.069 0 0 0 30.12 21.9c1.45-1.413 2.878-2.826 4.328-4.24 1.775 2.088 2.727 4.746 2.75 7.466 0 1.814-.434 3.65-1.256 5.252-.411.78-.953 1.624-1.45 2.215a9.974 9.974 0 0 1-.93.97c-.304.274-.758.696-.996.864-3.052 2.32-6.97 3.037-10.649 2.067-3.484-.928-6.492-3.522-7.856-6.728a13.323 13.323 0 0 1-.8-2.741 9.638 9.638 0 0 1-.13-1.245 12.172 12.172 0 0 1 .021-1.54c.108-1.75.714-3.542 1.645-5.082 1.84-3.058 5.194-5.21 8.744-5.652 2.012-.253 3.83-.042 5.713.611.801.275 1.623.696 2.424 1.181.476.296.888.591 1.299.95-1.407 1.35-2.835 2.762-4.285 4.175Z"
      fill="#fff"
      stroke="url(#f)"
      strokeWidth={0.5}
    />
    <Path
      d="M42.218 35.608c-1.948 3.058-4.761 5.504-8.094 7.15-6.774 3.331-15.367 2.446-21.297-2.11a21.029 21.029 0 0 1-3.83-3.86c-1.104-1.476-2.035-3.142-2.64-4.766a19.354 19.354 0 0 1-.802-11.114c1.58-7.234 7.38-13.013 14.674-14.869 3.744-.949 7.705-.78 11.384.422a19.826 19.826 0 0 1 3.874 1.75c-.086.275-.086.591-.108.865-.13 1.56-.022 3.164.065 4.745-.325.317-.65.633-.952.95l-.044-.043c-3.16-2.678-7.336-3.775-11.47-3.205-3.96.57-7.51 2.952-9.674 6.2-2.23 3.354-2.77 7.677-1.58 11.494 1.168 3.712 4.003 6.855 7.596 8.458 3.831 1.708 8.203 1.623 12.012-.127 4.848-2.236 7.943-7.234 7.964-12.443-.021-3.27-1.233-6.433-3.354-8.9l1.039-1.013c.822.043 1.645.085 2.467.106.692.02 1.363.02 2.056 0 .346-.021.714-.021 1.06-.127a19.772 19.772 0 0 1 2.77 9.934 19.628 19.628 0 0 1-3.116 10.503Z"
      fill="#fff"
      stroke="url(#g)"
      strokeWidth={0.5}
    />
    <Defs>
      <LinearGradient
        id="a"
        x1={0.001}
        y1={25}
        x2={50.001}
        y2={25}
        gradientUnits="userSpaceOnUse"
      >
        <Stop stopColor="#8DC63F" />
        <Stop offset={1} stopColor="#009444" />
      </LinearGradient>
      <LinearGradient
        id="b"
        x1={3.001}
        y1={23.897}
        x2={50.001}
        y2={23.897}
        gradientUnits="userSpaceOnUse"
      >
        <Stop stopColor="#8DC63F" />
        <Stop offset={1} stopColor="#009444" />
      </LinearGradient>
      <LinearGradient
        id="c"
        x1={3.001}
        y1={23.897}
        x2={50.001}
        y2={23.897}
        gradientUnits="userSpaceOnUse"
      >
        <Stop stopColor="#8DC63F" />
        <Stop offset={1} stopColor="#009444" />
      </LinearGradient>
      <LinearGradient
        id="d"
        x1={37.399}
        y1={8.3}
        x2={47.541}
        y2={8.3}
        gradientUnits="userSpaceOnUse"
      >
        <Stop stopColor="#8DC63F" />
        <Stop offset={1} stopColor="#009444" />
      </LinearGradient>
      <LinearGradient
        id="e"
        x1={21.317}
        y1={25.121}
        x2={29.081}
        y2={25.121}
        gradientUnits="userSpaceOnUse"
      >
        <Stop stopColor="#8DC63F" />
        <Stop offset={1} stopColor="#009444" />
      </LinearGradient>
      <LinearGradient
        id="f"
        x1={13.116}
        y1={25.157}
        x2={37.196}
        y2={25.157}
        gradientUnits="userSpaceOnUse"
      >
        <Stop stopColor="#8DC63F" />
        <Stop offset={1} stopColor="#009444" />
      </LinearGradient>
      <LinearGradient
        id="g"
        x1={5.089}
        y1={25.097}
        x2={45.335}
        y2={25.097}
        gradientUnits="userSpaceOnUse"
      >
        <Stop stopColor="#8DC63F" />
        <Stop offset={1} stopColor="#009444" />
      </LinearGradient>
    </Defs>
  </Svg>
);

export default GoalsIcon;
