// function getServe(status: number) {
//     if (status === 0) {
//       return "massage";
//     } else if (status === 1) {
//       return "SPA";
//     } else if (status === 2) {
//       return "dabaojian";
//     }
//   }
//   const result = getServe(0);
//   console.log(`我要去${result}`);

//   const Status = {
//     MASSAGE: 0,
//     SPA: 1,
//     DABAOJIAN: 2,
//   };

//   function getServe(status: any) {
//     if (status === Status.MASSAGE) {
//       return "massage";
//     } else if (status === Status.SPA) {
//       return "spa";
//     } else if (status === Status.DABAOJIAN) {
//       return "dabaojian";
//     }
//   }

//   const result = getServe(Status.SPA);

//   console.log(`我要去${result}`);

enum Status {
  MASSAGE,
  SPA,
  DABAOJIAN,
}

function getServe(status: any) {
  if (status === Status.MASSAGE) {
    return "massage";
  } else if (status === Status.SPA) {
    return "spa";
  } else if (status === Status.DABAOJIAN) {
    return "dabaojian";
  }
}

const result = getServe(Status.SPA);

console.log(`我要去${result}`);
