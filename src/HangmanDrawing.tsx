const HEAD = (
  <div
    style={{
      width: "30px",
      height: "30px",
      borderRadius: "100%",
      border: "5px solid black",
      position: "absolute",
      top: "30px",
      right: "-17px",
    }}
  />
);

const BODY = (
  <div
    style={{
      width: "5px",
      height: "70px",
      background: "black",
      position: "absolute",
      top: "65px",
      right: "0",
    }}
  />
);

const RIGHT_ARM = (
  <div
    style={{
      width: "80px",
      height: "5px",
      background: "black",
      position: "absolute",
      top: "100px",
      right: "-80px",
      rotate: "-30deg",
      transformOrigin: "left bottom",
    }}
  />
);

const LEFT_ARM = (
  <div
    style={{
      width: "80px",
      height: "5px",
      background: "black",
      position: "absolute",
      top: "100px",
      right: "6px",
      rotate: "30deg",
      transformOrigin: "right bottom",
    }}
  />
);

const LEFT_LEG = (
  <div
    style={{
      width: "80px",
      height: "5px",
      background: "black",
      position: "absolute",
      top: "130px",
      right: "0",
      rotate: "-60deg",
      transformOrigin: "right bottom",
    }}
  />
);

const RIGHT_LEG = (
  <div
    style={{
      width: "80px",
      height: "5px",
      background: "black",
      position: "absolute",
      top: "130px",
      right: "-75px",
      rotate: "60deg",
      transformOrigin: "left bottom",
    }}
  />
);

const BODY_PARTS = [HEAD, BODY, LEFT_ARM, RIGHT_ARM, LEFT_LEG, RIGHT_LEG];

type HangmanDrawingProps = {
  numberOfGuesses: number;
};

export function HangmanDrawing({ numberOfGuesses }: HangmanDrawingProps) {
  return (
    <div style={{ position: "relative" }}>
      {BODY_PARTS.slice(0, numberOfGuesses)}
      <div
        style={{
          height: "30px",
          width: "7px",
          background: "black",
          position: "absolute",
          top: 0,
          right: 0,
        }}
      />
      <div
        style={{
          height: "7px",
          width: "180px",
          background: "black",
          marginLeft: "120px",
        }}
      />
      <div
        style={{
          height: "250px",
          width: "7px",
          background: "black",
          marginLeft: "120px",
        }}
      />
      <div
        style={{
          height: "7px",
          width: "200px",
          background: "black",
          position: "relative",
          left: "25px",
        }}
      />
    </div>
  );
}
